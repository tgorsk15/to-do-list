

export class Task {
    constructor (name, description, dueDate, importance) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.importance = importance;

    }
};



export class Project {
    constructor (name) {
        this.name = name;
    }
};