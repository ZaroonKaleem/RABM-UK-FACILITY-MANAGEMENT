import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ServiceOneComponent } from './Pages/services/service-one/service-one.component';
import { ServiceTwoComponent } from './Pages/services/service-two/service-two.component';
import { ServiceThreeComponent } from './Pages/services/service-three/service-three.component';
import { ServiceFourComponent } from './Pages/services/service-four/service-four.component';


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
  { path: 'service-one', redirectTo: 'buying-and-selling-of-own-real-estate', pathMatch: 'full' },
  { path: 'service-two', redirectTo: 'management-of-real-estate-on-fee-or-contract-basis', pathMatch: 'full' },
  { path: 'service-three', redirectTo: 'media-representation-for-brands-and-property', pathMatch: 'full' },
  { path: 'service-four', redirectTo: 'residents-property-management', pathMatch: 'full' },

  {
    path: 'buying-and-selling-of-own-real-estate',
    component: ServiceOneComponent
  },
  {
    path: 'management-of-real-estate-on-fee-or-contract-basis',
    component: ServiceTwoComponent
  },
  {
    path: 'media-representation-for-brands-and-property',
    component: ServiceThreeComponent
  },
  {
    path: 'residents-property-management',
    component: ServiceFourComponent
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

