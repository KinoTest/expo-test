
/**  */
class Task {
    constructor (description: string, state: boolean, id: string = Date.now().toString() ) {
        this.description = description
        this.done = state
        this.id = id
    }
    id: string
    description
    done
}

export default Task