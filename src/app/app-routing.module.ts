import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent }    from './contacts/contacts.component'
import { HomeComponent }        from './home/home.component'
import { ServicesComponent }    from './services/services.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes
      )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{}