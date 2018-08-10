<template>
  <div class="card" :data-task-id="id" :key="id">
    <header class="card-header">
      <div class="card-header-icon">
        <span>
          Status:
        </span>
      <span class="icon" style="font-size: 20px"
            @click="$emit('toggleStatus',[!completed, id])">

        <font-awesome-icon v-if="completed" :icon="['far', 'check-square']" />
        <font-awesome-icon v-else :icon="['far','square']" />
      </span>

      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="title">
          {{ title }}
        </p>
        <b>Task Deadline:</b>
        <time :datetime="deadline">{{ normalizeDeadline(deadline) }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <router-link :to="'/task/'+ id">
            <span class="icon">
              <font-awesome-icon icon="eye" />
            </span>
            View
        </router-link>
      </p>

      <a href="#" class="card-footer-item" style="color: #ff3860" @click.prevent="$emit('delete',id)">
        <span class="icon">
          <font-awesome-icon icon="trash" />
        </span>
        Delete
      </a>
    </footer>
  </div>
</template>

<script>
	export default {
		name: "TaskCard",
    props: {
		  title: {
		    type: String,
        required: true
      },
      deadline: {
		    type: String,
        default: "Do Not Specified"
      },
      id: {
		    type: String,
        required: true
      },
      completed: {
		    type: Boolean,
        required: true
      }
    },
    data(){
		  return{


      }
    },
    created(){

    },
    methods:{
      normalizeDeadline: (date)=> (!date.length)? "Deadline in not specified" : date
    }
	}
</script>

<style scoped>
  .card{
    margin-bottom: 20px;
  }
</style>
