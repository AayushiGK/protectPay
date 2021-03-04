import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeedNameComponent } from './feed-name/feed-name.component';

export const routes: Routes = [
  { path: '', redirectTo: 'feed-name', pathMatch: 'full' },
  { path: 'feed-name', component: FeedNameComponent },
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});
