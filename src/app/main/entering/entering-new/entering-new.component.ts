import {
    Component,
    OnInit,
    ChangeDetectorRef,
    OnDestroy,
    AfterViewInit,
    QueryList,
    ViewChildren,
    ViewEncapsulation
} from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";
import { EnteringService } from "app/main/entering/entering.service";
import { FusePerfectScrollbarDirective } from "@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";
import { fuseAnimations } from "@fuse/animations";
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from "@angular/forms";
import * as solver from "javascript-lp-solver/src/solver";

@Component({
    selector: "app-entering-new",
    templateUrl: "./entering-new.component.html",
    styleUrls: ["./entering-new.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EnteringNewComponent implements OnInit, OnDestroy, AfterViewInit {
    animationDirection: "left" | "right" | "none";
    course: any;
    courseStepContent: any;
    currentStep: number;
    materias = 0;
    produtos = 0;

    @ViewChildren(FusePerfectScrollbarDirective)
    fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

    models: any = {};

    // Private
    private _unsubscribeAll: Subject<any>;
    productForm: FormGroup;
    materiaForm: FormGroup;
    constraintForm: FormGroup;
    product_quantity: any;
    result: any;

    /**
     * Constructor
     *
     * @param {AcademyCourseService} _enteringCourseService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _enteringCourseService: EnteringService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseSidebarService: FuseSidebarService,
        private _formBuilder: FormBuilder
    ) {
        this.models.optimize = "profit";
        this.models.opType = "max";
        this.models.constraints = {};
        this.models.variables = {};

        // Set the defaults
        this.animationDirection = "none";
        this.currentStep = 0;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to courses
        this._enteringCourseService.onEnteringChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(course => {
                this.course = course;
            });

        this.materiaForm = this._formBuilder.group({
            materia_quantity: [
                0,
                Validators.compose([Validators.max(10), Validators.required])
            ]
        });

        this.productForm = this._formBuilder.group({
            product_quantity: [
                0,
                Validators.compose([Validators.max(10), Validators.required])
            ]
        });

        this.constraintForm = this._formBuilder.group({});
        this.productForm.controls["product_quantity"].valueChanges.subscribe(
            selectedValue => {
                console.log(selectedValue);
                for (let index = 0; index < selectedValue; index++) {
                    this.productForm.addControl(
                        "product_" + (index + 1),
                        new FormControl(null, Validators.required)
                    );
                    this.productForm.addControl(
                        "product_" + (index + 1) + "_n",
                        new FormControl(null, Validators.required)
                    );
                    this.productForm.addControl(
                        "product_" + (index + 1) + "_min",
                        new FormControl(null)
                    );
                    this.productForm.addControl(
                        "product_" + (index + 1) + "_max",
                        new FormControl(null)
                    );
                }
            }
        );
        this.materiaForm.controls["materia_quantity"].valueChanges.subscribe(
            selectedValue => {
                for (let index = 0; index < selectedValue; index++) {
                    this.materiaForm.addControl(
                        "materia_" + (index + 1),
                        new FormControl(null, Validators.required)
                    );
                    this.materiaForm.addControl(
                        "materia_" + (index + 1) + "_n",
                        new FormControl(null, Validators.required)
                    );
                }
            }
        );
    }

    onChanges(): void {
        this.materiaForm.get("materia_quantity").valueChanges.subscribe(val => {
            console.log(val);
        });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        this.courseStepContent = this.fuseScrollbarDirectives.find(
            fuseScrollbarDirective => {
                return (
                    fuseScrollbarDirective.elementRef.nativeElement.id ===
                    "course-step-content"
                );
            }
        );
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Go to step
     *
     * @param step
     */
    gotoStep(step): void {
        console.log(this.materiaForm.value);
        // Decide the animation direction
        this.animationDirection = this.currentStep < step ? "left" : "right";

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Set the current step
        this.currentStep = step;
    }

    executeSolver(): void {
        console.log(this.constraintForm.value);
        for (
            let indexi = 0;
            indexi < this.productForm.get("product_quantity").value;
            indexi++
        ) {
            for (
                let indexj = 0;
                indexj < this.materiaForm.get("materia_quantity").value;
                indexj++
            ) {
                this.models.variables[
                    this.productForm.get("product_" + (indexi + 1) + "_n").value
                ][
                    this.materiaForm.get("materia_" + (indexj + 1) + "_n").value
                ] = this.constraintForm.get(
                    "value_" + (indexi + 1) + "_" + (indexj + 1)
                ).value;
                console.log(this.models);
                this.result = solver.Solve(this.models);
                console.log(this.result);
            }
        }
    }

    /**
     * Go to next step
     */
    gotoNextStep(): void {
        console.log(this.materiaForm.value);
        console.log(this.productForm.value);
        this.product_quantity = this.productForm.get("product_quantity").value;
        if (this.materiaForm.valid) {
            for (
                let index = 0;
                index < this.materiaForm.get("materia_quantity").value;
                index++
            ) {
                this.models["constraints"][
                    this.materiaForm.get(`materia_${index + 1}_n`).value
                ] = { max: this.materiaForm.get(`materia_${index + 1}`).value };
            }
            console.log(this.models);
        }
        if (this.productForm.valid) {
            for (
                let index = 0;
                index < this.productForm.get("product_quantity").value;
                index++
            ) {
                this.models["variables"][
                    this.productForm.get(`product_${index + 1}_n`).value
                ] = {
                    profit: this.productForm.get(`product_${index + 1}`).value
                };
                if (this.productForm.get(`product_${index + 1}_min`).value) {
                    this.models["constraints"][
                        this.productForm.get(`product_${index + 1}_n`).value
                    ] = {
                        min: this.productForm.get(`product_${index + 1}_min`)
                            .value
                    };
                }
                if (this.productForm.get(`product_${index + 1}_max`).value) {
                    this.models["constraints"][
                        this.productForm.get(`product_${index + 1}_n`).value
                    ] = {
                        max: this.productForm.get(`product_${index + 1}_max`)
                            .value
                    };
                }
            }
            console.log(this.models);
        }
        if (
            this.materiaForm.get("materia_quantity").value > 0 &&
            this.productForm.get("product_quantity").value > 0
        ) {
            for (
                let indexi = 0;
                indexi < this.productForm.get("product_quantity").value;
                indexi++
            ) {
                for (
                    let indexj = 0;
                    indexj < this.materiaForm.get("materia_quantity").value;
                    indexj++
                ) {
                    this.constraintForm.addControl(
                        "value_" + (indexi + 1) + "_" + (indexj + 1),
                        new FormControl(null)
                    );
                }
            }
        }
        if (this.currentStep === this.course.totalSteps - 1) {
            return;
        }

        // Set the animation direction
        this.animationDirection = "left";

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Increase the current step
        this.currentStep++;
    }

    /**
     * Go to previous step
     */
    gotoPreviousStep(): void {
        if (this.currentStep === 0) {
            return;
        }

        // Set the animation direction
        this.animationDirection = "right";

        // Run change detection so the change
        // in the animation direction registered
        this._changeDetectorRef.detectChanges();

        // Decrease the current step
        this.currentStep--;
    }

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
