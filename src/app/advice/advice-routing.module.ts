import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesSiteComponent } from './advices-site/advices-site.component';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';

  //{path: 'advices', component: AdvicesSiteComponent}, 
  //po dodaniu {path: 'advices', loadChildren: () => import('./advice/advice.module').then(m => m.AdviceModule)} w app-routing.module
const routes: Routes = [
  {path: '', component: AdvicesSiteComponent,
    children: [
      { path: '', component: AdviceDetailComponent},
      { path: 'article/:id', component: AdviceDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
