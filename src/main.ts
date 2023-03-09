import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { CometChat } from "@cometchat-pro/chat";
import { AppModule } from "./app/app.module";

const appID = "234583218a9b7d8f";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
