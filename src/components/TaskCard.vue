<template>
  <div class="card" :data-task-id="id" :key="id">
    <header class="card-header">
      <div class="card-header-icon">
        <span>
          Status:
        </span>
      <span class="icon">
        <font-awesome-icon icon="coffee" />
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="title">
          {{ title }}
        </p>
        <b>Task Deadline:</b>
        <time datetime="2016-1-1">{{ deadline }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a :href=" '#'+ id " class="card-footer-item">View</a>
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
        default: "No Deadline specified."
      },
      id: {
		    type: String,
        required: true
      }
    },
    data(){
		  return{


      }
    }
	}
</script>

<style scoped>
  .card{
    margin-bottom: 20px;
  }
</style>
