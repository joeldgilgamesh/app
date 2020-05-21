import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'app/shared/shared.module';
import { ActualiteComponent } from './actualite.component';
import { ActualiteDetailComponent } from './actualite-detail.component';
import { ActualiteUpdateComponent } from './actualite-update.component';
import { ActualiteDeleteDialogComponent } from './actualite-delete-dialog.component';
import { actualiteRoute } from './actualite.route';

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild(actualiteRoute)],
  declarations: [ActualiteComponent, ActualiteDetailComponent, ActualiteUpdateComponent, ActualiteDeleteDialogComponent],
  entryComponents: [ActualiteDeleteDialogComponent],
})
export class AppActualiteModule {}
