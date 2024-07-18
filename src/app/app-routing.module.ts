import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerFormComponent } from './result/employer-form/employer-form.component';
import { DetailsComponent } from './result/details/details.component';

const routes: Routes = [
  {path : '', component : EmployerFormComponent},
  {path : 'detail', component : DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
