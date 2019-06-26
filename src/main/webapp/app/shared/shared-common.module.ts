import { NgModule } from '@angular/core';

import { RoleplayMasterGroumphSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [RoleplayMasterGroumphSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [RoleplayMasterGroumphSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RoleplayMasterGroumphSharedCommonModule {}
