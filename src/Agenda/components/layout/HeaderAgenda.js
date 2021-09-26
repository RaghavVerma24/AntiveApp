//React Shit
import React, {useState} from "react";
import PropTypes from 'prop-types';

//Components
import { AddTask } from "../AddTask";

//Firebase
// import { firebase } from "../../../Signin/firebase";

//Styles
import './HeaderAgenda.css'
import {
  Searchbar
} from "./AgendaElements.js";

//Icons
import * as IoIcons from "react-icons/io";


export const HeaderAgenda = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
        <IoIcons.IoIosPaper /> Agenda
        </div>
        <div className="settings">
          <ul>
            {/* <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li> */}
          
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
