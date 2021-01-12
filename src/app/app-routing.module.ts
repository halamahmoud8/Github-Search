import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'github/repositories'},
  {path:'github/repositories', children: [
      {path: '', component: GithubSearchComponent},
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
