class LocalStorage {


  /**
   * Loads Items from localStorage
   */
   static fetchAll() {
    let tasks = [];
    let tasksIdArray = this.fetchTasksIdArray();
    //console.log(tasksIdArray);
    tasksIdArray.forEach(id => tasks.push(this.fetchTask(id)));
    return tasks;
  }


  /**
   * gets single task object
   * @param id
   * @returns {object}
   */
  static fetchTask(id){
    return JSON.parse(localStorage.getItem('task_'+id));
  }



  /**
   * gets array of all tasks ids
   * @returns {array}
   */
  static fetchTasksIdArray(){
    let fetchedData = JSON.parse(localStorage.getItem('tasks'));

    if(!fetchedData){
      localStorage.setItem('tasks', "[]");
      return [];
    }

    return fetchedData;
  }



  /**
   * Saves Items in localStorage
   */
  static save(task) {
    let task_id = 'task_' + task.id;

    localStorage.setItem(task_id, JSON.stringify(task));
    this.updateTasksIndex(task.id);
  }


  /**
   * Remove Task
   */
  static removeTask(id){
    let task_id = 'task_'+ id;
    localStorage.removeItem(task_id);
    this.removeTaskIndex(id);
  }


  /**
   * Update tasks index list
   */
  static updateTasksIndex(id) {
    let tasks = this.fetchTasksIdArray();
    if (tasks.indexOf(id) < 0) {
      tasks.push(id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }


  /**
   * removes task id from index list
   * @param id
   */
  static removeTaskIndex(id){
    let tasks = this.fetchTasksIdArray();
    let index = tasks.indexOf(id);

    if (index >= 0) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
}

export default LocalStorage;
