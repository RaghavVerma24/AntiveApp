import React, {useEffect, useState} from 'react'
import {Checkbox} from '../components/Checkbox'
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import {getTitle, getCollatedTitle, collatedTasksExist} from '../helpers'
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {
    const {selectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue(selectedProject);
    const {tasks} = useTasks(selectedProject);

    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name
    }

    if (
        collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
    }

    if (projectName.length > 0 &&
        selectedProject &&
        !collatedTasksExist(selectedProject)
        ) {
            projectName = getTitle(projects, selectedProject).name
        }

    useEffect(() => {
        document.title = `${projectName}: Antive.`;
    })

    return (
        <div className='tasks' data-testid='tasks'>
            <h2 data-testid='project-name'>{projectName}</h2>

            <ul className='tasks__list'>
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    )
}