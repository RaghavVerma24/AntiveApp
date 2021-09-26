//React Shit
import React, { useState } from "react";

//Context
import { useAuth } from "../Signin/context/AuthContext";

//Styles
import "./dashboard.css";
import { CSSReset } from "@chakra-ui/css-reset";
import { HorLine, HorLine2 } from "./DriveElements";
import "../Chat2/styles/chatstyles.css";

//Components
import DriveDashPage from "./pages/DriveDashPage";
import TaskDashPage from "./pages/TaskDashPage";
import BudgetDashPage from "./pages/BudgetDashPage";
import TransactionDash from "../Budget/TransactionDash";
import { ChatEngine, ChatList, ChatSettings } from "react-chat-engine";
import ResizeHeight from "../ResizeHeight/PageResize";

//Icon
import { RiDashboardFill } from "react-icons/ri";
import ComingSoon from "../ComingSoon/ComingSoon";
import DashboardCS from "../dashboardCS/DashboardCs";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      {/* <div className="ResizeHeight">
        <ResizeHeight />
      </div> */}
      {/* <div className="WholeDashboard"> */}
        <div className="DashboardTitle">
          <RiDashboardFill className="dashicon" />{" "}
          <h1 className="Dashname">Dashboard</h1>
        </div>
        <div className="DashboardContainer">
          <div className="LeftSection">
            <div className="TopContainer">
              <h1 className="BudgetTitleText">Budget</h1>
              <div className="BudgetContainer">
                <BudgetDashPage />
              </div>
              <div className="TransactionHistoryContainer">
                <TransactionDash />
              </div>
            </div>
            <HorLine />
            <div className="BottomContainer">
              <div className="DriveContainer">
                {/* <h2>This is where the files will be!</h2> */}
                <DriveDashPage />
              </div>
            </div>
            <HorLine2 />
          </div>
          <div className="HorLine2" />
          <div className="RightSection">
            <div className="AgendaText">
              <h1 className="AgendaTitleText">Agenda</h1>
            </div>
            <div className="RightContainer">
              <div className="InboxContainer">
                <TaskDashPage />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ChatListContainer">
        <ChatEngine
          projectID="dd16ef6f-3567-4699-ab02-b0e7370f7d3e"
          userName={currentUser.email}
          userSecret={currentUser.uid}
          height="100vh"
          // renderChatList={(chatAppState) => {}}
          renderIsTyping={(typers) => {}}
          // renderChatCard={(chat, index) => {}}
          // renderNewChatForm={(creds) => {}}
          renderChatFeed={(chatAppState) => {}}
          renderChatHeader={(chat) => {}}
          renderMessageBubble={(
            creds,
            chat,
            lastMessage,
            message,
            nextMessage
          ) => {}}
          renderSendingMessage={(
            creds,
            chat,
            lastMessage,
            message,
            nextMessage
          ) => {}}
          renderIsTyping={(typers) => {}}
          renderNewMessageForm={(creds, chatId) => {}}
          renderChatSettings={(chatAppState) => {}}
          renderChatSettingsTop={(creds, chat) => {}}
          renderPeopleSettings={(creds, chat) => {}}
          renderPhotosSettings={(chat) => {}}
          renderOptionsSettings={(creds, chat) => {}}
        />
      </div> */}
      {/* </div> */}
    </>
    // <>
    //   <div className="DashboardContainer">
    //     <div className="TopSection">
    //       <div className="TopContainer">
    //         <div className="BudgetContainer">
    //           <h1 className="BudgetTitleText">Budget</h1>
    //           <BudgetDashPage />
    //         </div>
    //       </div>
    //       <div className="RightContainer">
    //         <div className="InboxContainer">
    //           {/* <h1 className="AgendaTitleText">Agenda</h1> */}
    //           <TaskDashPage />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="BottomContainer">
    //       <div className="DriveContainer">
    //         {/* <h2>This is where the files will be!</h2> */}
    //         <DriveDashPage />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
