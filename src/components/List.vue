<template>
	<div>
    <!--New Task-->
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p style="margin-bottom: 20px;">
          <button class="button is-danger" @click="flushTasks()">
            <font-awesome-icon icon="trash-alt"/>
          </button>
        </p>
        <form @submit.prevent="createNewTask()">

          <div class="field">
            <div class="control">

              <input class="input is-medium"
                     type="text"
                     placeholder="Type your task title..."
                     v-model="newTaskTitle"
              >
            </div>
          </div>

          <div class="field">
            <div class="control">
              <date-picker v-model="newTaskDeadline"
                           class="input is-medium datepicker"
                           :color="'#00d1b2'"
                           type="datetime"
              ></date-picker>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-medium is-primary" type="submit">Create Task</button>
            </div>
          </div>

        </form>

      </div>
    </div>

    <!-- Tasks List -->

    <div class="columns">

      <div class="column is-three-fifths is-offset-one-fifth">
        <ul>
          <li v-for="task in tasks">

            <n-task-card
              :id="task.id"
              :title="task.title"
              :deadline="task.deadline"
              :completed="task.completed"
              @delete = "deleteTask($event)"
              @toggleStatus="toggleStatus($event)"
            ></n-task-card>

          </li>
        </ul>
      </div>


    </div>


  </div>
</template>

<script>
  import LocalStorage from '../classes/LocalStorage';
  import TaskCard from './TaskCard.vue';
  import { randomId } from '../functions/randomId';
  import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

  let todoStorage = new LocalStorage('todo-tasks');

	export default {
		name: "List",
    components: {
		  "n-task-card": TaskCard,
      "date-picker": VuePersianDatetimePicker
    },
    data(){
		  return{
		    tasks: todoStorage.fetch(),
        newTaskTitle: "",
        newTaskDeadline: ""
      }
    },
    created(){


    },
    watch: {
      tasks: {
        handler (tasks) {
          todoStorage.save(tasks)
        },
        deep: true
      }

    },
    methods:{
		  /**
       * Creates new task card
       * */
      createNewTask(){
        if(!this.newTaskTitle.length){
          return;
        }

        // Add new task card
        this.tasks.unshift({
          title: this.newTaskTitle,
          deadline: this.newTaskDeadline,
          id: randomId(),
          completed: false,
        });

        // Save New Tasks Array
        todoStorage.save(this.tasks);

        // Reset Fields
        this.newTaskTitle = "";
        this.newTaskDeadline ="";
      },

      deleteTask(id){
        let index = this.tasks.findIndex(task=>(task.id === id));
        this.tasks.splice(index,1);
      },

      toggleStatus([isComplete, id]){

        let task = this.tasks.find(task=>(task.id === id));

        task.completed = isComplete;

      },

      /**
       * flush all tasks from storage
       */
      flushTasks(){
        this.tasks = [];
      }
    }

	}
</script>

<style lang="scss" scoped>

  .datepicker{
    padding: 0;

    & > span{

      height: 100%;
      border: 0;

      input{
        border: 0;

      }
    }
  }



</style>
