import { Task  } from "./object.js";
// import { linkForm } from "./userform.js";
import { createPriorityBar, taskDropLogic } from "./taskModification.js";
import { taskBreakContainer, deleteTaskButton } from './structure.js';


export function createTask(title, descript, due, importance, checklist) {
    // this should take the user inputs from the <form> and fill them 
    // into the newly created "task article" on the page. 

    // should create a NEW instance of Task to create a new object
    // maybe outsource this to a new factory function
    
    // The entire article should be appended to the page

    const task = new Task(title, descript, due, importance, checklist);

    console.log(task);

    console.log(title)
    createTaskArticle(task)

    
    console.log(Task);
    console.log(taskBreakContainer);

    return {task}

}


function createTaskArticle(task) {
// each article will have a title and a description on the left hand
// side. The rught side will contain importance, due date, a delete
// button, and an arrow (bottom right) to extend task article to show
// a checklist or more description
    console.log(task.name)

    const taskArticle = document.createElement('div');
    articleFactory.addToArticle(taskArticle, 'task-article', taskBreakContainer);

    // create two inner div containers:
    const taskSpace1 = document.createElement('div');
    articleFactory.addToArticle(taskSpace1, 'task-space1', taskArticle);

    const taskSpace2 = document.createElement('div');
    articleFactory.addToArticle(taskSpace2, 'task-space2', taskArticle);


     // initially invisible content:
     const taskDropContainer = document.createElement('div')
     articleFactory.addToArticle(taskDropContainer, 'taskDrop-container', taskArticle);


    // fill taskSpace1:
    const taskTitle2 = document.createElement('h1');
    articleFactory.addToArticle(taskTitle2, 'task-title2', taskSpace1);
    taskTitle2.textContent = task.name;
    taskTitle2.contentEditable = "true";

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

    // drop down function
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


// function taskDropLogic(dropButton, dropContainer, titleTest) {
//     dropButton.addEventListener('click', () => {
//         console.log('drop down work');
//         console.log(titleTest);

//         if (dropContainer.classList.contains('taskDrop-container')) {
//             dropContainer.classList.remove('taskDrop-container');
//             dropContainer.classList.add('taskDrop-container-active');
//         } else if (dropContainer.classList.contains('taskDrop-container-active')) {
//             dropContainer.classList.remove('taskDrop-container-active');
//             dropContainer.classList.add('taskDrop-container');
//         }
//     })

// }


// function createPriorityBar(priorityLevel, priorityBar, taskDropContainer) {
//     const prioritySelect = document.getElementById('importance');
//     console.log(prioritySelect);

//     const priorityTitle = document.createElement('label')
//     articleFactory.addToArticle(priorityTitle,'priority-title', taskDropContainer);
//     priorityTitle.textContent = 'Priority Level:'


//     for (let i = 0; i < 5; i++) {
//         const priorityOption = prioritySelect.options[i];
//         // console.log(priorityOption);
//         //create button for each option
//         const priorityButton = document.createElement('input');
//         priorityButton.type = 'radio';
//         priorityButton.name = priorityLevel;

//         // create label for each option
//         const priorityButtonLabel = document.createElement('label');
//         priorityButtonLabel.textContent = prioritySelect.options[i].value;
//         articleFactory.addToArticle(priorityButtonLabel,'priority-button-label', priorityBar);

//         if (priorityOption.value === priorityLevel) {
//             priorityButton.checked = true;
//             console.log(priorityButton);
//         }

//         articleFactory.addToArticle(priorityButton,'priority-button', priorityBar);
//     }



// }