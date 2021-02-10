import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { SpinnerService } from './spinner.service';

import { Subscription } from 'rxjs';

declare var Spinner: any;

@Component({

   selector: 'sjs-spinner', 
   templateUrl: "spinner.component.html",
    styleUrls: ["spinner.component.scss"]
})
export class SpinnerComponent implements OnInit, OnDestroy {

    private spinner: any;
    public show: boolean = false;
    private element: any = null;
    private subscription: Subscription = null;



    @Input() lines: number = 15; // The number of lines to draw
    @Input() length: number = 8; // The length of each line
    @Input() width: number = 3; // The line thickness
    @Input() radius: number = 5; // The radius of the inner circle
    @Input() scale: number = 0.45; // Scales overall size of the spinner
    @Input() corners: number = 1; // Corner roundness (0..1)
    @Input() color: string = '#000'; // #rgb or #rrggbb or array of colors
    @Input() opacity: number = 1/75; // Opacity of the lines
    @Input() rotate: number = 0; // The rotation offset
    @Input() direction: number = 1; // 1: clockwise, -1: counterclockwise
    @Input() speed: number = 0.8; // Rounds per second
    @Input() trail: number = 100; // Afterglow percentage
    @Input() fps: number = 20; // Frames per second when using setTimeout() as a fallback for CSS
    @Input() className: string = 'spinner'; // The CSS class to assign to the spinner
    @Input() top: string = '50%'; // Top position relative to parent
    @Input() left: string = '50%'; // Left position relative to parent
    @Input() shadow: boolean = false; // Whether to render a shadow
    @Input() hwaccel: boolean = true; // Whether to use hardware acceleration
    @Input() position: string = 'relative'; // Element positioning

    constructor(private spinnerElement: ElementRef<any> ,

                private spinnerService: SpinnerService) {

        this.element = spinnerElement.nativeElement;
    }

    ngOnInit() {

       this.initSpinner();
       this.createServiceSubscription();

    }

    private initSpinner() {
        let options = {
            lines: this.lines,
            length: this.length,
            width: this.width,
            radius: this.radius,
            scale: this.scale,
            corners: this.corners,
            color: this.color,
            opacity: this.opacity,
            rotate: this.rotate,
            direction: this.direction,
            speed: this.speed,
            trail: this.trail,
            fps: this.fps,
            zIndex: 2e9, // Artificially high z-index to keep on top
            className: this.className,
            top: this.top,
            left: this.left,
            shadow: this.shadow,
            hwaccel: this.hwaccel,
            position: this.position
        };
        this.spinner = new Spinner(options);
    }

    private createServiceSubscription() {
        this.subscription = this.spinnerService.spinnerObservable.subscribe(show => {
            if (show) {
                this.startSpinner();
            } else {
                this.stopSpinner();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    startSpinner() {
        this.show = true;
        this.spinner.spin(this.element.firstChild);
    }

    stopSpinner() {
        this.show = false;
        this.spinner.stop();
    }
}
