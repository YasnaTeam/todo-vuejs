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
          <div>
            <small>Deadline: </small>
            <!-- Deadline date -->
            <small v-if="!editable">{{ normalizeDeadline(task.deadline) }}</small>

            <div class="field" v-if="editable">
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input is-medium"
                  v-model="newTaskDeadline"
                  id="my-custom-editable-input"
                  placeholder="Pick a time..."
                >

                <span class="icon is-left">
                <font-awesome-icon icon="calendar-alt" />
              </span>

                <date-picker v-model="newTaskDeadline"
                             element="my-custom-editable-input"
                             :color="'#00d1b2'"
                             type="datetime"
                />
              </div>
            </div>

            <!-- END! Deadline date -->
            <br>

            <!-- Task Title -->
            <strong v-if="!editable">
              {{ task.title }}
            </strong>
            <input class="input is-medium"
                   type="text"
                   placeholder="Type your task title..."
                   v-model="newTaskTitle"
                   v-if="editable"
            >
            <!-- END! Task Title -->
           </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <button class="button is-info" v-if="!editable" @click="editable = true">
                Edit
              </button>
              <button class="button is-success" v-if="editable" @click="saveNewTaskDetail()">
                save
              </button>
              <button class="button" v-if="editable" @click="resetInputs()">
                cancel
              </button>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete" @click="deleteTask()"></button>
      </div>
    </article>

    <v-gif :title="task.title" />
  </div>
</template>

<script>
  import LocalStorage from '../classes/LocalStorage';
  import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
  import Gif from './Gif.vue';


	export default {
		name: "SingleView",
    components: {
      "date-picker": VuePersianDatetimePicker,
      "v-gif": Gif
    },
    data(){
		  return{
		    pageId: this.$route.params.id,
        task: {},
        newTaskDeadline: "",
        newTaskTitle: "",
        editable: false
      }
    },
    created(){
      this.task = LocalStorage.fetchTask(this.pageId);
      this.resetInputs();
    },
    watch: {
      task: {
        handler (task) {
          LocalStorage.save(task)
        },
        deep: true
      }

    },
    methods:{
      normalizeDeadline: (date)=> (!date.length)? "Deadline in not specified" : date,

      deleteTask(){
        LocalStorage.removeTask(this.pageId);
        // Redirect to Home
        this.$router.push({name: "home"})
      },

      toggleStatus(){
        this.task.completed = !this.task.completed;
      },

      saveNewTaskDetail(){
        this.task.title = this.newTaskTitle;
        this.task.deadline = this.newTaskDeadline;
        this.editable = false;
      },

      resetInputs(){
        this.newTaskDeadline = this.task.deadline;
        this.newTaskTitle = this.task.title;
        this.editable = false;
      }
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
