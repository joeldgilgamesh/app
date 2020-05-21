import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'app/shared/shared.module';
import { OffreComponent } from './offre.component';
import { OffreDetailComponent } from './offre-detail.component';
import { OffreUpdateComponent } from './offre-update.component';
import { OffreDeleteDialogComponent } from './offre-delete-dialog.component';
import { offreRoute } from './offre.route';

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild(offreRoute)],
  declarations: [OffreComponent, OffreDetailComponent, OffreUpdateComponent, OffreDeleteDialogComponent],
  entryComponents: [OffreDeleteDialogComponent],
})
export class AppOffreModule {}
