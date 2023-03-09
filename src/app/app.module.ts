import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CometChatUI } from "src/cometchat-pro-angular-ui-kit-3/CometChatWorkspace/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewcompComponent } from "./newcomp/newcomp.component";
import { Newcomp2Component } from "./newcomp2/newcomp2.component";
@NgModule({
  declarations: [AppComponent, NewcompComponent, Newcomp2Component],
  imports: [BrowserModule, AppRoutingModule, CometChatUI, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
