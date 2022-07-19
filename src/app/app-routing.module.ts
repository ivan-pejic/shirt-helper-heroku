import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtListComponent } from './components/shirt-list/shirt-list.component';

const routes: Routes = [{ path: '', component: ShirtListComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
