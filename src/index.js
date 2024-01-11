import './to-do.css';
import './projectBar.css';
import { createProject, createTask } from './objectCreator';
import { linkForm } from './userform';
import { Project } from './object';
import { correctBreakoutInstance, breakoutController } from './projectModification';


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


export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(tasks)

export let projects = JSON.parse(localStorage.getItem('projects')) || [];

export let pageLoad = true;

window.addEventListener('load', () => {
    const initialRun = breakoutController();
    // let pageLoad = true;

    projects.forEach(project => {
        createProject(project);
    })



    console.log(correctBreakoutInstance);
    console.log(tasks);

    tasks.forEach(task => {
        createTask(task);
    })

    pageLoad = false;

});




linkForm(tasks);


const createProjectButton = document.querySelector('.create-project-button');
createProjectButton.addEventListener('click', () => {

    const project = new Project('New Project');
    projects.push(project);
    console.log(projects);
    localStorage.setItem('projects', JSON.stringify(projects));

    createProject(project);
    console.log('creation tirggered');
    

    createProjectButton.removeEventListener;
})






