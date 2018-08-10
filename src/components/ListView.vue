<template>
  <div class="container list-body">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Todo App
          </h1>
          <h2 class="subtitle">
            List View
          </h2>
        </div>
      </div>
    </section>

    <br>
    <br>
    <br>
    <!--List Body-->
    <n-list></n-list>

  </div>
</template>

<script>
  import List from './List';

  export default {
    components:{
      "n-list": List
    }
  }
</script>

<style scoped>
  .list-body{
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
  }
</style>
