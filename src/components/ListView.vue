<template>
  <div>
    <n-quote />

    <!--List Body-->
    <div class="container">

      <n-list></n-list>

    </div>
  </div>
</template>

<script>
  import List from './List';
  import Quote from './Quote';

  export default {
    components:{
      "n-list": List,
      "n-quote": Quote
    }
  }
</script>

<style scoped>
  .container{
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    padding-top: 80px;
  }
</style>
