<template>
  <section class="hero is-dark" v-if="showQuote">
    <div class="level">
      <div class="level-left">
        <h1 class="title">
          Quote:
        </h1>
      </div>
      <div class="level-right">
        {{ author }}
      </div>
    </div>

    <h2 class="subtitle">
      {{ quote }}
    </h2>

  </section>
</template>

<script>
  let quoteEndpoint = "https://quotes.rest/qod.json?category=inspire";

	export default {
		name: "Quote",
    data(){
		  return{
        quote: "",
        author: "",
        showQuote: false
      }
    },
    mounted(){
      // GET /someUrl
      this.$http.get(quoteEndpoint).then(response => {
        // success callback

        if(response.body.failure === 1){
          return false;
        }

        let content = response.body.contents.quotes[0].quote;
        let person = response.body.contents.quotes[0].author;
        this.quote = content;
        this.author = person;
        this.showQuote = true;

      }, response => {
        // error callback
        this.showQuote = false;
      });
    },

	}
</script>

<style scoped>
  .hero{
    padding: 20px;
  }
</style>
