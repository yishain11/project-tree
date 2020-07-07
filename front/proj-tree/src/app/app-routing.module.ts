import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: UserViewComponent},
  {path: 'home', component: UserViewComponent},
  {path: 'home/treeView', component: TreeViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
