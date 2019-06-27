import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#RoleplayMasterGroumphRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#RoleplayMasterGroumphCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#RoleplayMasterGroumphLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#RoleplayMasterGroumphDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#RoleplayMasterGroumphTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#RoleplayMasterGroumphEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#RoleplayMasterGroumphJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#RoleplayMasterGroumphJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoleplayMasterGroumphEntityModule {}
