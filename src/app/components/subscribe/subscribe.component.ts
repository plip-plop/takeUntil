import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, takeUntil } from 'rxjs';
import { ShadowComponent } from '../shadow.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent extends ShadowComponent implements OnInit {

  ngOnInit(): void {
    // EXEMPLE 1
    interval(1000)
      .pipe(
        mergeMap(() => interval(1000)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: () => console.log("emit!"),
        complete: () => console.log("complete!"),
      });

    // EXEMPLE 2
    interval(1000)
      .pipe(
        takeUntil(this.destroy$), // takeUntil placé derrière l'opérateur High-order: Danger!
        mergeMap(() => interval(1000))
      )
      .subscribe({
        next: () => console.log("HIGH-ORDER: Risque de flux infini!"),
        complete: () => console.log("I never complete!"),
      });
  }
}
