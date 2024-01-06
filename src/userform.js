import { createProject, createTask } from "./objectCreator";
import { modifyTaskForm,  } from "./projectModification.js";
import { Task  } from "./object.js";


export function linkForm(tasks) {
    const taskForm = document.getElementById('task-form');

    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');


    const submitTask = document.querySelector('.submit-task');
    console.log(submitTask);


    

    submitTask.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('add task clicked');

        const task = new Task(taskTitle.value, taskDescription.value, dueDate.value,
        importance.value);
        console.log(Task);

        // save to localStorage
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));


        modifyTaskForm.toggleTaskForm();

        resetForm(taskForm);

        createTask(task);

        

    });
}


function resetForm(taskForm) {
    taskForm.reset()

}