const _tasksData = [
    {
        id: '0',
        description: 'Un',
        done: false
    },
    {
        id: '1',
        description: 'Outro',
        done: true
    },
    {
        id: '2',
        description: 'Fin',
        done: false
    },
]

interface TasksControllerInterface {
    get( id?: string): string
}

class TasksController implements TasksControllerInterface {
    get (id?: string) {
        let response
        if (typeof id !== "string") response = JSON.stringify(_tasksData)
        else response = JSON.stringify(_tasksData.filter( item => item.id === id ))
        return response
    }
}

export default TasksController