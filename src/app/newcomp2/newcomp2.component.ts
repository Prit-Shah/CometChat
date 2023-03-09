import { Component, OnInit } from "@angular/core";
import { CometChat } from "@cometchat-pro/chat";

@Component({
  selector: "app-newcomp2",
  templateUrl: "./newcomp2.component.html",
  styleUrls: ["./newcomp2.component.css"],
})
export class Newcomp2Component implements OnInit {
  ngOnInit(): void {
    let authKey = "9d5db4f2194f16dafcc65307d09a1e4dc4e8811f";
    var uid = "user2";
    var name = "Prit2";

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
    CometChat.login(uid, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }
}
