<template>
	<div>
    <!--New Task-->
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">

        <form @submit.prevent="createNewTask()">

          <div class="field is-horizontal has-addons">
            <div class="control is-expanded">

              <input class="input is-medium"
                     type="text"
                     placeholder="Type your task title..."
                     v-model="newTaskTitle"
              >
            </div>
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
  // let randomId = require('../functions/randomId');
  import { randomId } from '../functions/randomId';

	export default {
		name: "List",
    components: {
		  "n-task-card": TaskCard
    },
    data(){
		  return{
		    tasks: [
          {
            id: "bala1",
            title: "Task 1"
          },
          {
            id: "bala2",
            title: "Task 2",
            deadline: "2018-08-10"
          },
          {
            id: "bala3",
            title: "Task 2"
          },
        ],
        newTaskTitle: ""
      }
    },
    // created(){
    //   console.log(typeof randomId);
    // },
    methods:{
      createNewTask(){
        if(!this.newTaskTitle.length){
          return;
        }
        this.tasks.unshift({
          title: this.newTaskTitle,
          id: randomId()
        });
        this.newTaskTitle = "";
      }
    }

	}
</script>

<style scoped>

</style>
