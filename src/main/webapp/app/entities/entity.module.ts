import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'offre',
        loadChildren: () => import('./offre/offre.module').then(m => m.AppOffreModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.AppContactModule),
      },
      {
        path: 'actualite',
        loadChildren: () => import('./actualite/actualite.module').then(m => m.AppActualiteModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class AppEntityModule {}
