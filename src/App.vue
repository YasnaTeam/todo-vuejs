<template>
    <div id="app">
      <n-nav></n-nav>
      <div class="list-body">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Todo App
              </h1>
              <h2 class="subtitle">
                Vue.js
              </h2>
            </div>
          </div>
        </section>

        <router-view></router-view>

      </div>
    </div>
</template>

<script>
  import Nav from './components/Nav.vue';
  import ListView from './components/ListView.vue';

export default {
  components : {
    "n-nav": Nav,
    "n-list-view": ListView
  }

}
</script>

<style lang="scss">

</style>
