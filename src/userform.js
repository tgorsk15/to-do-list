import { createTask, createProject } from "./objectCreator";
import { modifyTaskForm,  } from "./projectModification.js";


export function linkForm(creationRun) {
    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');
    const checklist = document.getElementById('checklist');

    const submitTask = document.querySelector('.submit-task');
    console.log(submitTask);

    submitTask.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(taskTitle);
        console.log(taskTitle.value);
        console.log('add task clicked');

        creationRun.createTask(taskTitle.value, taskDescription.value, dueDate.value,
        importance.value, checklist.value);

        modifyTaskForm.toggleTaskForm();

        // put in function here to make the task appear
        // in the projectBar

        // submitTask.removeEventListener;

    });
}