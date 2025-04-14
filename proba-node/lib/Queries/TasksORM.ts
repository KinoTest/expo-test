import Task from "../Models/Task"

class TasksORM {

    static _tasksData = [
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

    static async get_all_tasks () {
      const response = TasksORM._tasksData.map( item => new Task(item.description, item.done, item.id))
      return response
    }

}

export default TasksORM