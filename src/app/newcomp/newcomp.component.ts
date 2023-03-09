import { CONVERSATION_LIST } from "./../../cometchat-pro-angular-ui-kit-3/CometChatWorkspace/src/utils/enums";
import { Component, OnInit } from "@angular/core";
import { CometChat } from "@cometchat-pro/chat";

@Component({
  selector: "app-newcomp",
  templateUrl: "./newcomp.component.html",
  styleUrls: ["./newcomp.component.css"],
})
export class NewcompComponent implements OnInit {
  Message_Text = "ok";
  send() {
    // const recieverID = "user1";
    // const RecieverType = CometChat.RECEIVER_TYPE.USER;
    // const textMessage = new CometChat.TextMessage(
    //   recieverID,
    //   this.Message_Text,
    //   RecieverType
    // );
    // CometChat.sendMessage(textMessage);
    let conversationWith: string = "user1",
      conversationType: string = "user";
    CometChat.getConversation(conversationWith, conversationType).then(
      (conversation: CometChat.Conversation) => {
        console.log("conversation", conversation);
      },
      (error: CometChat.CometChatException) => {
        console.log("error while fetching a conversation", error);
      }
    );
  }
  ngOnInit(): void {
    // let authKey = "9d5db4f2194f16dafcc65307d09a1e4dc4e8811f";
    // var uid = "user1";
    // var name = "Prit2";
    // var user = new CometChat.User(uid);
    // user.setName(name);
    // // CometChat.createUser(user, authKey).then(
    // //   (user) => {
    // //     console.log("user created", user);
    // //   },
    // //   (error) => {
    // //     console.log("error", error);
    // //   }
    // // );
    // CometChat.login(uid, authKey).then(
    //   (user) => {
    //     console.log("Login Successful:", { user });
    //   },
    //   (error) => {
    //     console.log("Login failed with exception:", { error });
    //   }
    // );
    // CometChat.sendMessage(textMessage);
  }
}
