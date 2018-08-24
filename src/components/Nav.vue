<template>

  <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" alt="Vue Todo App">
      </router-link>
    </div>
  </nav>

</template>

<script>
	export default {
		name: "Nav"
	}
</script>

<style scoped>
  .navbar{
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
  }
</style>
