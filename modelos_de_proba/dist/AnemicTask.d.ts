declare abstract class AnemicTask {
    constructor(description: string, done: boolean, id?: string);
    id?: string;
    description: string;
    done: boolean;
}
export default AnemicTask;
