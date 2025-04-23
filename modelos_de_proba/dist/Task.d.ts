declare class Task {
    constructor(description: string, state: boolean, id?: string);
    id: string;
    description: string;
    done: boolean;
}
export default Task;
