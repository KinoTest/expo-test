class Task {
    constructor(description, state, id = Date.now().toString()) {
        this.description = description;
        this.done = state;
        this.id = id;
    }
    id;
    description;
    done;
}
export default Task;
