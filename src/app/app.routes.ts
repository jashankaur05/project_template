

import { Routes } from '@angular/router';
import { AdminComponent } from './shared/modules/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      },
      {
        path: 'import',
        loadComponent: () => import('./modules/import/import.component').then((m) => m.ImportComponent)
      },
  
      {
        path: 'add-company',
        loadComponent: () => import('./modules/company/add-company/add-company.component').then((m) => m.AddCompanyComponent)
      },   
      {
        path: 'designation',
        loadComponent: () => import('./modules/designation/designation.component').then((m) => m.DesignationComponent)
      },  
      {
        path: 'employee',
        loadComponent: () => import('./modules/employee/employee.component').then((m) => m.EmployeeComponent)
      },  
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/user-login/user-login.component').then((m) => m.UserLoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/register/register.component').then((m) => m.RegisterComponent)
  },
];
