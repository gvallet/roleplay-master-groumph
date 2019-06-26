import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoleplayMasterGroumphSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RoleplayMasterGroumphSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RoleplayMasterGroumphSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoleplayMasterGroumphSharedModule {
  static forRoot() {
    return {
      ngModule: RoleplayMasterGroumphSharedModule
    };
  }
}
