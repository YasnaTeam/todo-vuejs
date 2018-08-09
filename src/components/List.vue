<template>
	<div>
    <!--New Task-->
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">

        <div class="field is-horizontal has-addons">
          <div class="control is-expanded">
            <input class="input is-medium" type="text" placeholder="Normal loading input">
          </div>
          <div class="control">
            <button class="button is-medium is-primary">Create task</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tasks List -->

    <div class="columns">

      <div class="column is-three-fifths is-offset-one-fifth">
        <ul>
          <li>
            <n-task-card></n-task-card>
            <n-task-card></n-task-card>
            <n-task-card></n-task-card>
            <n-task-card></n-task-card>
          </li>
        </ul>
      </div>


    </div>


  </div>
</template>

<script>
  import TaskCard from './TaskCard.vue';
	export default {
		name: "List",
    components: {
		  "n-task-card": TaskCard
    }

	}
</script>

<style scoped>

</style>
