//React Shit
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Chat Api
import { ChatEngine, IsTyping } from "react-chat-engine";

//Context
import { useAuth } from "../../Signin/context/AuthContext";

//Components/Functionality
import { auth } from "../../Signin/firebase";
import SideNavBar from "../../Sidebar&Header/SideNavbar";
import OfficialNav from "../../OfficialNavbar/OfficialNav";
import ResizePage from "../../PageResize/PageResize";

//Styles
import "../index.css";
import ResizeHeight from "../../ResizeHeight/PageResize";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }
  useEffect(() => {
    if (!currentUser || currentUser === null) {
      history.push("/");
      return;
    }

    var axiosnew = require("axios");
    var data = {
      username: currentUser.email,
      secret: currentUser.uid,
    };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "3d772f6e-87ca-4301-b1ae-2083340fc296",
      },
      data: data,
    };

    axiosnew(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // Get-or-Create should be in a Firebase Function
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "dd16ef6f-3567-4699-ab02-b0e7370f7d3e",
          "user-name": currentUser.email,
          "user-secret": currentUser.uid,
        },
      })

      .then(() => setLoading(false))

      .catch((e) => {
        let formdata = new FormData();
        formdata.append("username", currentUser.email);
        formdata.append("secret", currentUser.uid);

        getFile(currentUser.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "3d772f6e-87ca-4301-b1ae-2083340fc296",
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
        });
      });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }, [currentUser.email, history]);

  // if (!user || loading) return <div />

  return (
    <>
      <div className="ResizeHeightChat">
        {/* <ResizeHeight /> */}
        <SideNavBar currentUser={currentUser} />
      </div>
      {/* <div className="WholeChatPage">
        <OfficialNav />
      </div> */}
      {/* <div className="pageresizepls">
        <ResizePage />
      </div> */}
      <div className="chats-page">
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID="dd16ef6f-3567-4699-ab02-b0e7370f7d3e"
          userName={currentUser.email}
          userSecret={currentUser.uid}
          renderIsTyping={(typers) => {}}
        />
        {/* <IsTyping /> */}
      </div>
    </>
  );
}
