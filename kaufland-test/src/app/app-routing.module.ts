import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
  { path: '**', redirectTo: 'faq' } // Redirect to FAQ module for any other route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
