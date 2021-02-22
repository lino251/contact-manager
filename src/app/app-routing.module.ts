import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from '../app/contacts/contacts.component';
import {AboutComponent} from '../app/about/about.component';


const routes: Routes = [{path: 'contacts', component: ContactsComponent},
{path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
