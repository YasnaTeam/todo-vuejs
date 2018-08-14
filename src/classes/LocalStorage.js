class LocalStorage {

  constructor() {

    localStorage.setItem('tasks', '[]');

  }




  /**
   * Loads Items from localStorage
   */
   fetchAll() {
    let tasks = [];
    let tasksIdArray = this.fetchTasksIdArray();
    tasksIdArray.forEach(id => tasks.push(this.fetchTask(id)));
    return tasks;
  }


  /**
   * gets single task object
   * @param id
   * @returns {object}
   */
  fetchTask(id){
    return JSON.parse(localStorage.getItem('task_'+id));
  }



  /**
   * gets array of all tasks ids
   * @returns {array}
   */
  fetchTasksIdArray(){
    return JSON.parse(localStorage.getItem('tasks'))
  }



  /**
   * Saves Items in localStorage
   */
  save(task) {
    let task_id = 'task_' + task.id;

    localStorage.setItem(task_id, JSON.stringify(task));
    this.updateTasksIndex(task.id);
  }


  /**
   * Remove Task
   */
  removeTask(){
    let task_id = 'task_'+ id;
    localStorage.removeItem(task_id);
    this.removeTaskIndex();
  }


  /**
   * Update tasks index list
   */
  updateTasksIndex(id) {
    let tasks = this.fetchTasksIdArray();
    if (tasks.indexOf(id) < 0) {
      let newTasks = tasks.push(id);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  }


  removeTaskIndex(id){
    let tasks = this.fetchTasksIdArray();
    let index = tasks.indexOf(id);
    if (index >= 0) {
      let newTasks = tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  }
}

export default LocalStorage;
