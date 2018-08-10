<template>
  <div>
    {{ pageId }}
  </div>
</template>

<script>
	export default {
		name: "SingleView",
    data(){
		  return{
		    pageId: this.$route.params.id
      }
    }
	}
</script>

<style scoped>

</style>
