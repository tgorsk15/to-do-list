import './to-do.css';
import { toDoStructure } from './structure';
import { createTask } from './objectCreator';
import { Task } from './object.js';
import { linkForm } from './userform';


// reference for objectCreator.js
// goal is to keep the DOM manipulation links in this file
const createTaskButton = document.querySelector('.create-task-button');


toDoStructure();

// objectCreator.js: fiile that contains the logic that creates
// a new task or project

// object.js contains the Task class is used to generate new instances
// when a new task is generated

// structure.js: file that lays out the foundational references
// and links of the to-do structure

// userform.js: handles the logic of what happens when the user
// fills out a form to create a new project or task

// listModification.js: handles the logic to display changes
// on broswer when projects/tasks are added/deleted

createTask(createTaskButton);

// const newT = new Task('joe', 'test', '45', 'important', 'yes');

// console.log(newT);

console.log('test');

linkForm();