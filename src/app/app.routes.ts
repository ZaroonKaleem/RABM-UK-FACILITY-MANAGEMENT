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
  {
    path: 'service-one',
    component: ServiceOneComponent
  },
  {
    path: 'service-two',
    component: ServiceTwoComponent
  },
  {
    path: 'service-three',
    component: ServiceThreeComponent
  },
  {
    path: 'service-four',
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

