import { createProject, createTask } from "./objectCreator";
import { modifyTaskForm,  } from "./projectModification.js";


export function linkForm() {
    const taskForm = document.getElementById('task-form');

    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');
    const checklist = document.getElementById('checklist');

    const submitTask = document.querySelector('.submit-task');
    console.log(submitTask);

    // createProject();
    

    submitTask.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(taskTitle);
        console.log(taskTitle.value);
        
        console.log('add task clicked');

        createTask(taskTitle.value, taskDescription.value, dueDate.value,
        importance.value, checklist.value);

        modifyTaskForm.toggleTaskForm();

        resetForm(taskForm);

        submitTask.removeEventListener;

    });
}


function resetForm(taskForm) {
    taskForm.reset()

}