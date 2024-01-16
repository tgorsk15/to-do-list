import { createProject, createTask } from "./objectCreator";
import { modifyTaskForm, assignedTask, correctBreakoutInstance} from "./projectModification.js";
import { Task  } from "./object.js";
import { MainBreakoutContainer, projectsContainer } from "./index.js";


// console.log(addButtonArray);

export function linkForm(tasks) {
    const taskForm = document.getElementById('task-form');

    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');


    const submitTask = document.querySelector('.submit-task');
    const exitTask = document.querySelector('.exit-button');
    console.log(submitTask);
    

    submitTask.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('add task clicked');

        console.log(assignedTask);

        

        const task = new Task(taskTitle.value, taskDescription.value, dueDate.value,
        importance.value, assignedTask);
        console.log(task);
        console.log(Task);

        // save to localStorage
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // frees up background
        MainBreakoutContainer.style.pointerEvents = "auto"
        projectsContainer.style.pointerEvents = "auto"

        modifyTaskForm.toggleTaskForm();
        resetForm(taskForm);

        createTask(task);

        

    });

    exitTask.addEventListener('click', () => {
        modifyTaskForm.toggleTaskForm();

        MainBreakoutContainer.style.pointerEvents = "auto"
        projectsContainer.style.pointerEvents = "auto"
    })

}


function resetForm(taskForm) {
    taskForm.reset()

}