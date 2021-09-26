import React, { useState } from "react";
//Icons
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
//Agenda Context
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";
//Context
import { useAuth } from "../../../Signin/context/AuthContext";
//Styles/Elements
import {
  ProfileEmailAgendaSidebar,
  EmailShownAgendaSidebar,
} from "./AgendaElements";
//Redux
import { useSelector } from "react-redux";

export const SidebarAgenda = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const { currentUser } = useAuth();
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        {/* <ProfileEmailAgendaSidebar>
        Hi,<EmailShownAgendaSidebar> {currentUser.email}.</EmailShownAgendaSidebar> Welcome To the Agenda!
        </ProfileEmailAgendaSidebar> */}

        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('inbox');
                setSelectedProject('INBOX');
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            data-testid="today-action"
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('today');
                setSelectedProject('TODAY');
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
        >
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('next_7');
                setSelectedProject('NEXT_7');
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};