export class Task {
    #title;
    constructor(title, count = 0) {
        this.#title = title;
        this.count = count;
        this.id = Math.random().toString(16).slice(2)
    }
    changeCount() {
        return this.count + 1;
    }
    changeTitle(title) {
        this.#title = title;
        return this;
    }
    get title() {
        return this.#title;
    }
}
const task = new Task('task1');
console.log(task.changeTitle('task7'));
console.log(task.title);
