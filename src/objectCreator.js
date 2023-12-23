import { Task  } from "./object";
import { linkForm } from "./userform";

export function createTask(title, descript, due, importance, checklist) {
    // this should take the user inputs from the <form> and fill them 
    // into the newly created "task article" on the page. 

    // should create a NEW instance of Task to create a new object
    // maybe outsource this to a new factory function
    
    // The entire article should be appended to the page

    const task = new Task(title, descript, due, importance, checklist);


    console.log(title)
    // console.log(task[title]);


    // const testTitle = title;
    // console.log(testTitle);
    
    console.log(Task);

}