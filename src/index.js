import './to-do.css';
import './projectBar.css';
// import { contentContainer, projectContainer, taskBreakContainer } from './structure.js';
// import { toDoStructure } from './structure';
import { createTask, createProject } from './objectCreator';
import { Task } from './object.js';
import { linkForm } from './userform';


// objectCreator.js: fiile that contains the logic that creates
// new task article cards under each project

// object.js contains the Task class is used to generate new instances
// when a new task is generated

// structure.js: file that lays out the foundational references
// and links of the to-do structure

// userform.js: handles the logic of what happens when the user
// fills out a form to create a new project or task

// taskModification.js: handles the logic to display changes
// on broswer when tasks are being built or are deleted
export const contentContainer = document.querySelector('.content-container');
export const projectsContainer = document.querySelector('.projects-container');
export const MainBreakoutContainer = document.querySelector('.main-breakout-container');

linkForm()


const createProjectButton = document.querySelector('.create-project-button');
createProjectButton.addEventListener('click', () => {

    // const creationRun = createProject();
    createProject();
    console.log('creation tirggered');
    

    createProjectButton.removeEventListener;
})



console.log('test');


