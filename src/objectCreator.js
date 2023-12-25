import { Task  } from "./object.js";
import { linkForm } from "./userform.js";
// import { contentContainer, projectContainer, taskBreakContainer, toDoStructure } from "./structure";
import { contentContainer, projectContainer, taskBreakContainer } from './structure.js';


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


    // const testTitle = title;
    // console.log(testTitle);
    
    console.log(Task);
    console.log(taskBreakContainer);

}


function createTaskArticle(task) {
    const taskArticle = document.createElement('div');
    taskArticle.classList.add('task-article');
    taskBreakContainer.appendChild(taskArticle);
}