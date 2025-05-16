
abstract class AnemicTask {
    constructor(description: string, done: boolean, id?: string) {
        this.description = description
        this.done = done
        this.id = id
    }
    id?: string
    description!: string
    done!: boolean
}

export default AnemicTask
