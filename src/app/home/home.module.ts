import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import { routes } from './home.routes';
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [

  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule
{
  private static routes: Routes = routes;
}
