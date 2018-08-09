<template>
    <div id="app">
      <n-nav></n-nav>
      <n-list-view></n-list-view>
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
