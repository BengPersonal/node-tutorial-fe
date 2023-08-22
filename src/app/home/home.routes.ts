import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";

export const routes: Routes =[
  {
    path: '',
    component: HomeComponent
    // component: HomeComponent,
    // children: [
    //   { path: '', component: HomeComponent },
    // ]
  }
]
