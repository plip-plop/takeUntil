import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    template: ''
})
export abstract class ShadowComponent implements OnDestroy {
    destroy$ = new Subject<void>();

    ngOnDestroy() {
        this.destroy$.next();
    }
}