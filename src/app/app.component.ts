import { Component, OnInit } from "@angular/core";
import { CometChat } from "@cometchat-pro/chat";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Comet-chat";
  ngOnInit() {
    // let authKey = "9d5db4f2194f16dafcc65307d09a1e4dc4e8811f";
    // var uid = "user2";
    // var name = "Prit";

    // var user = new CometChat.User(uid);
    // user.setName(name);
    // CometChat.createUser(user, authKey).then(
    //   (user) => {
    //     console.log("user created", user);
    //   },
    //   (error) => {
    //     console.log("error", error);
    //   }
    // );
    // CometChat.login(uid, authKey).then(
    //   (user) => {
    //     console.log("Login Successful:", { user });
    //   },
    //   (error) => {
    //     console.log("Login failed with exception:", { error });
    //   }
    // );
  }
}
