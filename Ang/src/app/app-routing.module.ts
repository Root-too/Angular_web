import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './components/property/property.component';
import { AddPropComponent } from './components/add-prop/add-prop.component';


const routes: Routes = [
  { path: '', component: PropertyComponent },
  { path: 'add', component: AddPropComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
