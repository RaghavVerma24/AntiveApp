//React stuff
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

//Styles
import "./App.css";

//Auth Provider
import { AuthProvider } from "./Signin/context/AuthContext";

//Firebase
import db, { auth } from "./Signin/firebase";

//Privater Router
import PrivateRoute from "./PrivateRoute";

//Pages Or Component
import OfficialNav from "./OfficialNavbar/OfficialNav";
import ChakraNavPage from "./OfficialNavbar/ChakraNav/pages/OfficialSidebar";
import ForgotPass from "./pages/forgotpass";
import Settings from "./pages/settings";
import Agenda from "./pages/agenda";
import Drive from "./pages/drive";
import dashboardPage from "./pages/dashboard";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import Login from "./pages/login";
import PageNotFound from "./PageNotFound/PageNotFound";
import Budget from "./pages/budget";
import Chat from "./Chat/components/Chats";
import Chatdisplaypage from "./Chat2/page/Chatdisplaypage";
import ComingSoon from "./ComingSoon/ComingSoon";
import OfficialLandingpage from "./pages/officialLandingpage";
import BudgetPages from "./Budget/BudgetPages";
import TOS from "./TOS/TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import OfficialLogin from "./OfficialLogin/OfficialLogin";
import OfficialSignup from "./OfficialSignup/OfficialSignup";
import OfficialForgotPass from "./OfficialForgotPass/OfficialForgotPass";

//Discarded Shit && Styles:
//import SaaSProductLandingPage from "./OfficialLandingPage/demos/SaaSProductLandingPage"
// import GlobalStyle, {ParentContainer} from "./CommunityTab/styles/globalStyle";
// import Profile from "./CommunityTab/pages/Profile";
// import HomeTab from "./CommunityTab/pages/Home";
// import Explore from "./CommunityTab/pages/Explore";
// import EditAccount from "./CommunityTab/pages/EditAccount";
// import NotesNewPages from "./pages/note";
// import db from "./Signin/firebase";
// import { auth, firebase } from "./Signin/firebase";
// import { setUser } from "./Messaging/actions/userAction";
// import SidebarHome from "./Messaging/SidebarChat/SidebarHome";
// import Chat from "./Messaging/Chat/Chat";
// import { ToastContainer } from "react-toastify";
// import { toastInfo } from "./Messaging/shared/toastInfo";
// import Hidden from "@material-ui/core/Hidden";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import CommunityTab from "./pages/CommunityTab";
// import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" component={OfficialLandingpage} exact />
          <Route path="/Landing" component={ChakraNavPage} exact />
          <Route path="/signup" component={OfficialSignup} exact />
          <Route path="/login" component={OfficialLogin} exact />
          {/* <Route path="/login" component={Login} exact /> */}
          <Route path="/forgot-password" component={OfficialForgotPass} exact />
          <Route path="/termsofservice" component={TOS} exact />
          <Route path="/privacypolicy" component={PrivacyPolicy} exact />
          <PrivateRoute path="/dashboard" component={dashboardPage} />
          <PrivateRoute path="/update-profile" component={Settings} />
          <PrivateRoute path="/agenda" component={Agenda} />
          <PrivateRoute path="/drive" component={Drive} />
          <PrivateRoute path="/folder/:folderId" component={Drive} />
          <PrivateRoute path="/budget" component={Budget} />
          <PrivateRoute path="/budget1" component={BudgetPages} />
          <PrivateRoute path="/chat" component={Chat} />
          <Route component={PageNotFound} />

          {/* <Route path="/" component={Home} exact /> */}
          {/* <Route path="/signup" component={SigninPage} exact /> */}
          {/* <Route path="/login" component={Login} exact /> */}
          {/* <PrivateRoute path="/budget" component={ComingSoon} /> */}
          {/* <PrivateRoute path="/chat" component={Chatdisplaypage} /> */}
          {/* <Route path="/forgot-password" component={ForgotPass} exact /> */}
          {/* <ParentContainer>
            <GlobalStyle />
            <PrivateRoute path="/CommunityTab" component={HomeTab} />
            <PrivateRoute path="/explore/" component={Explore} />
            <PrivateRoute path="/:uid/" component={Profile} />
            <PrivateRoute path="/accounts/edit/" component={EditAccount} />
          </ParentContainer> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}
