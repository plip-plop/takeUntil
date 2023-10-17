import { Routes } from '@angular/router';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';

export const routes: Routes = [
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'unsubscribe', component: UnsubscribeComponent },
];
