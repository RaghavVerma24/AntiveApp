import React from "react";
import { ContentAgenda } from "../Agenda/components/layout/Content";
import { HeaderAgenda } from "../Agenda/components/layout/HeaderAgenda";
import { SidebarAgenda } from "../Agenda/components/layout/SidebarAgenda";
import { ProjectsProvider, SelectedProjectProvider } from "../Agenda/context";
import OfficialNav from "../OfficialNavbar/OfficialNav";
import ResizeHeight from "../ResizeHeight/PageResize";
import SideNavBar from "../Sidebar&Header/SideNavbar";

//Style
import "../Dashboard/dashboard.css";

const Agenda = ({ currentUser }) => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div>
          <div className="ResizeHeight">
            {/* <ResizeHeight /> */}
            <SideNavBar currentUser={currentUser} />
          </div>
          <div className="WholeDashboard">
            <OfficialNav />
          </div>
          <HeaderAgenda />
          <ContentAgenda />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default Agenda;
