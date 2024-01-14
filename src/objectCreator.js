// import { Task  } from "./object.js";
import { linkForm } from "./userform.js";
import { createPriorityBar, taskDropLogic, createTaskContainer} from "./taskModification.js";
import { projectsContainer, tasks, pageLoad} from './index.js';
import { projectController, breakoutController, correctBreakoutInstance, correctBreakoutArray} from "./projectModification.js";



const projectRun = projectController();

let projectIndexArray = [];
let createIsTrue;


export function createTask(task) {
    console.log(pageLoad);

    createIsTrue = false;

    console.log(task.assignedProject)
    console.log(task);

    // projectIndexArray.push(task);
    // console.log(projectIndexArray);

    const breakout2Run = breakoutController();
    
    const breakoutInstance = breakout2Run.createTaskBreakout(createIsTrue);
    console.log(breakoutInstance);

    projectIndexArray.push(correctBreakoutInstance);


    // sets the correct project being added to
    let currentBreakoutInstance = correctBreakoutInstance;
    
    console.log(currentBreakoutInstance);
    

    // in this block, every container in projectIndexArray should be iterated through
    // to check if it matches the assigned container number to the specific task
    if (pageLoad === true) {
        correctBreakoutArray.forEach(container => {
            if (correctBreakoutArray.indexOf(container) === task.assignedProject){
                currentBreakoutInstance = container;
                console.log(currentBreakoutInstance)

                return currentBreakoutInstance
            }
        })

        
    } 


    createTaskArticle(task, currentBreakoutInstance, pageLoad);
   

};




function createTaskArticle(task, currentBreakoutInstance, pageLoad) {


    const taskArticle = document.createElement('div');
    articleFactory.addToArticle(taskArticle, 'task-article', currentBreakoutInstance);

    // create two inner div containers:
    const taskSpace1 = document.createElement('div');
    articleFactory.addToArticle(taskSpace1, 'task-space1', taskArticle);

    const taskSpace2 = document.createElement('div');
    articleFactory.addToArticle(taskSpace2, 'task-space2', taskArticle);



     // initially invisible container:
     const taskDropContainer = document.createElement('div')
     articleFactory.addToArticle(taskDropContainer, 'taskDrop-container', taskArticle);



    // fill taskSpace1:
    const taskTitle2 = document.createElement('h1');
    articleFactory.addToArticle(taskTitle2, 'task-title2', taskSpace1);
    taskTitle2.textContent = task.name;
    taskTitle2.contentEditable = "true";


    // add taskTitle to projectBar
    const taskTitleContainer = document.createElement('div');
    // console.log(projectController);
    projectRun.appendTaskTitle(taskTitle2, taskTitle2.textContent, 
        taskTitleContainer, pageLoad, task.assignedProject);



    const taskDescription2 = document.createElement('div')
    articleFactory.addToArticle(taskDescription2, 'description2', taskSpace1);
    taskDescription2.textContent = task.description;
    taskDescription2.contentEditable = "true";
    


    // fill taskSpace2:
    const taskSpace2First = document.createElement('div');
    articleFactory.addToArticle(taskSpace2First,'task-space2-row1', taskSpace2);

    const dueDate2 = document.createElement('div');
    articleFactory.addToArticle(dueDate2,'due-date2', taskSpace2First);
    dueDate2.textContent = `Due: ${task.dueDate}`;
    // figure out how to edit the date here

    const deleteTaskButton = document.createElement('button');
    articleFactory.addToArticle(deleteTaskButton, 'delete-task', taskSpace2First);
    deleteTaskButton.textContent = 'X';



    // fill hidden dropdown
    const priorityBar = document.createElement('div');
    articleFactory.addToArticle(priorityBar,'priority-bar', taskDropContainer);
    createPriorityBar(task.importance, priorityBar, taskDropContainer);

    const completeTaskButton = document.createElement('button');
    articleFactory.addToArticle(completeTaskButton,'complete-task-button', taskDropContainer);
    completeTaskButton.textContent = 'Complete';

    // drop down button and function
    const dropDownTask = document.createElement('button');
    articleFactory.addToArticle(dropDownTask, 'drop-down-task', taskSpace2)
    dropDownTask.textContent = '^'
    taskDropLogic(dropDownTask, taskDropContainer, task.name)
}



export const articleFactory = (function () {

    function addToArticle(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToArticle};

})();



// function to create new Pojects
export function createProject(project) {
    console.log(project)

    projectRun.createProjectContainer(project);
    console.log('project created');

    createIsTrue = true;

    const firstBreakoutRun = breakoutController();
    const breakoutCreation = firstBreakoutRun.createTaskBreakout(createIsTrue);
    console.log(breakoutCreation);
    // projectIndexArray.push(breakoutCreation);
    // console.log(projectIndexArray);

}



export const localStorageController = (function () {

    let projectMemory = [];

    function saveProject() {



    }

    function saveTasks() {

    }




    function removeProject() {

    }


    function removeTask() {

    }




    // checks page on download for saved projects,
    // then proceeds to create projects, tasks for them
    function checkSavedTasks() {
        

        // if (localStorage.getItem('tasks')) {
        //     tasks = JSON.parse(localStorage.getItem('tasks'));

        //     tasks.forEach(task => {
        //         // need to figure out how to bring the right 'container' in
        //         // createTaskArticle(task, container)

        //         console.log(task);
        //     })
                

        // }

    }

    return {saveProject, saveTasks, removeProject, removeTask, checkSavedTasks}

})();


