<template>
	<div>
    <!--New Task-->
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">

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
            <n-task-card :id="task.id" :title="task.title" :deadline="task.deadline"></n-task-card>
          </li>
        </ul>
      </div>


    </div>


  </div>
</template>

<script>
  import TaskCard from './TaskCard.vue';
  import { randomId } from '../functions/randomId';
  import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

	export default {
		name: "List",
    components: {
		  "n-task-card": TaskCard,
      "date-picker": VuePersianDatetimePicker
    },
    data(){
		  return{
		    tasks: [],
        newTaskTitle: "",
        newTaskDeadline: ""
      }
    },
    created(){
      this.loadTasks();
    },
    methods:{
      createNewTask(){
        if(!this.newTaskTitle.length){
          return;
        }
        // Add new task card
        this.tasks.unshift({
          title: this.newTaskTitle,
          deadline: this.newTaskDeadline,
          id: randomId()
        });

        // Save New Tasks Array
        this.saveTasks();

        // Reset Fields
        this.newTaskTitle = "";
        this.newTaskDeadline ="";
      },
      saveTasks(){
        let str = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', str);
      },
      loadTasks(){
        let tasks = localStorage.getItem('tasks');
        this.tasks = (JSON.parse(tasks))? JSON.parse(tasks): [];

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
