import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffregistrationComponent } from '../../staffregistration/staffregistration.component';
import { StafflistingComponent } from '../../stafflisting/stafflisting.component';
import { StaffDetailsComponent } from '../../staff-details/staff-details.component';
import { DepartmentListingComponent } from '../../department-management/department-listing/department-listing.component';

import { ChangePasswordGuard } from '../../../authentication/guards/change-password.guard';
import { AuthenticationGuard } from '../../../authentication/guards/authguard.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [

  {
    path: 'staff-registration',
    component: StaffregistrationComponent,
    data: {
      title: 'Staff Registration',
      permissions: {
        only: ['USER_MANAGER','VIEWER'],
        redirectTo: '/500'
      }
    },
    canActivate: [AuthenticationGuard, ChangePasswordGuard, NgxPermissionsGuard],
  },
  {
    path: 'staff-listing',
    component: StafflistingComponent,
    data: {
      title: 'Staff Listing',
      permissions: {
        only: ['USER_MANAGER','VIEWER', 'TEAM_LEADER'],
        redirectTo: '/500'
      }
    },
    canActivate: [AuthenticationGuard, ChangePasswordGuard, NgxPermissionsGuard],
  },
  {
    path: 'staff-details/:id',
    component: StaffDetailsComponent,
    data: {
      title: 'Staff Details',
      permissions: {
        only: ['USER_MANAGER','VIEWER', 'TEAM_LEADER'],
        redirectTo: '/500'
      }
    },
    canActivate: [AuthenticationGuard, ChangePasswordGuard, NgxPermissionsGuard],
  },
  {
    path: 'department-listing',
    component: DepartmentListingComponent,
    data: {
      title: 'Departments',
      permissions: {
        only: ['USER_MANAGER','VIEWER'],
        redirectTo: '/500'
      }
    },
    canActivate: [AuthenticationGuard, ChangePasswordGuard, NgxPermissionsGuard],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
