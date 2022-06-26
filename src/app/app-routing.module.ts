import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
      path: 'home',
      component: HomePageComponent
  },
  {
      path: 'user',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
      path: 'themes',
      loadChildren: () => import('./feature/themes/themes.module').then(m => m.ThemesModule)
  },
  {
      path: '**',
      component: PageNotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled'
});