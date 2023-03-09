import { Newcomp2Component } from "./newcomp2/newcomp2.component";
import { NewcompComponent } from "./newcomp/newcomp.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "user2",
    component: Newcomp2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
