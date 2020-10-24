import {Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

    loading = 'Loading...';

    constructor() {

        interval(500)
            .subscribe(val => {

                if (this.loading === 'Loading...') { this.loading = 'Loading'; } else { this.loading += '.'; }

            });

    }

}
