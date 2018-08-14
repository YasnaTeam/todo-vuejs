<template>
  <div class="container">
    <article class="media">
      <figure class="media-left">
        <p class="icon" style="font-size: 40px" @click="toggleStatus()">
          <font-awesome-icon v-if="task.completed" :icon="['far', 'check-square']" />
          <font-awesome-icon v-else :icon="['far','square']" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <small>Deadline: </small> <small>{{ normalizeDeadline(task.deadline) }}</small>
            <br>
            {{ task.title }}
           </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <button class="button is-info">
                Edit
              </button>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete" @click="deleteTask()"></button>
      </div>
    </article>
  </div>
</template>

<script>
  import LocalStrorage from '../classes/LocalStorage';

  let todoStorage = new LocalStrorage('todo-tasks');

	export default {
		name: "SingleView",
    data(){
		  return{
		    pageId: this.$route.params.id,
        tasks: todoStorage.fetch(),
        task: {}
      }
    },
    created(){
		  this.task = this.findTask(this.pageId);
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
		  findTask(id){
		    return this.tasks.find(task => task.id === id);
      },
      normalizeDeadline: (date)=> (!date.length)? "Deadline in not specified" : date,

      deleteTask(){
        let index = this.tasks.findIndex(task=>(task.id === this.task.id));
        console.log(index);
        this.tasks.splice(index,1);
        // this.$router.push('home');
      },

      toggleStatus(){

        this.task.completed = !this.task.completed;

      },
    }
	}
</script>

<style scoped>
  .media{
    padding: 20px;
    border: 1px solid #ddd;
    margin-top: 20px;
  }
</style>
