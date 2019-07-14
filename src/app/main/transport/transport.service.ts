import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class TransportService {
    onStepsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onStepsChanged = new BehaviorSubject({});
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getCourse(route.params.courseId, route.params.courseSlug)
            ]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get course
     *
     * @param courseId
     * @param courseSlug
     * @returns {Promise<any>}
     */
    getCourse(courseId, courseSlug): Promise<any> {
        courseId = "15459251a6d6b397566";
        courseSlug = "transport-data";
        console.log(courseId);
        console.log(courseSlug);
        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/transport-steps/" + courseId + "/" + courseSlug)
                .subscribe((response: any) => {
                    this.onStepsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
}
