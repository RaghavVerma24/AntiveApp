//React Shit

//Components
import { ContentAgenda } from "../../Agenda/components/layout/Content";
import { Tasks } from "../../Agenda/components/Tasks";

//Functionality
import { ProjectsProvider, SelectedProjectProvider } from "../../Agenda/context"

const TaskDashPage = () => {
    return (
        <SelectedProjectProvider>
          <ProjectsProvider>
            <div>
              <Tasks />
            </div>
          </ProjectsProvider>
        </SelectedProjectProvider>
      );
}

export default TaskDashPage
