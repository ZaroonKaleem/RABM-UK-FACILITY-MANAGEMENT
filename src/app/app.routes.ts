import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
//   {
//     path: 'team',
//     component: TeamComponent
//   },
//   {
//     path: 'services',
//     component: ServicesComponent,
//     children: [
//       {
//         path: 'buying-selling',
//         component: BuyingSellingComponent
//       },
//       {
//         path: 'property-management',
//         component: PropertyManagementComponent
//       },
//       {
//         path: 'media-representation',
//         component: MediaRepresentationComponent
//       },
//       {
//         path: 'residents-management',
//         component: ResidentsManagementComponent
//       },
//       {
//         path: '',
//         redirectTo: 'buying-selling',
//         pathMatch: 'full'
//       }
    // ]
//   },
  {
    path: '**',
    redirectTo: ''
  }
];
