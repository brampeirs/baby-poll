import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'bp-spinner',
    imports: [],
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {}
