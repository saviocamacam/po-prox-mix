import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class FuseConfigService
{
    settings: any;
    defaultSettings: any;
    onSettingsChanged: BehaviorSubject<any>;

    /**
     * @param router
     */
    constructor(private router: Router)
    {
        // Set the default settings
        this.defaultSettings = {
            layout      : {
                navigation: 'left', // 'right', 'left', 'top', none
                toolbar   : 'below', // 'above', 'below', none
                footer    : 'none' // 'above', 'below', none
            },
            colorClasses: {
                toolbar: 'md-white-500-bg',
                navbar : 'md-fuse-dark-500-bg',
                footer : 'md-fuse-dark-800-bg'
            }
        };

        this.settings = Object.assign({}, this.defaultSettings);

        // Reload the default settings on every navigation start
        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    this.setSettings({layout: this.defaultSettings.layout});
                }
            }
        );

        // Create the behavior subject
        this.onSettingsChanged = new BehaviorSubject(this.settings);

    }

    /**
     * Sets settings
     * @param settings
     */
    setSettings(settings)
    {
        this.settings = Object.assign({}, this.settings, settings);
        this.onSettingsChanged.next(this.settings);
    }
}
