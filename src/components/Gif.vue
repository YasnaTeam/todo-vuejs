<template>
  <div class="tile is-parent" v-if="showGif">
    <article class="tile is-child notification is-danger">
      <div class="content has-text-centered">
        <img :src="gifUrl" alt="">
      </div>
    </article>
  </div>
</template>

<script>
	export default {
		name: "Gif",
    props: ["title"],
    data(){
		  return {
        giphyEndPoint: "https://api.giphy.com/v1/gifs/search",
        api_key: "a3lmjLH8vU23dN2pKTsM2RG6LXOvbtQF",
        q: this.title,
        limit: 1,
        gifUrl: "",
        showGif: false

      }
    },
    created(){
      this.getGif()
    },

    watch:{
		  title(newTile, oldTitle){
        this.getGif(newTile);
      },
    },
    methods: {
		  getGif(title = this.q){
        this.$http.get(this.giphyEndPoint, {
          params: {
            api_key: this.api_key,
            q: title.replace(/ /g,"+"),
            limit: this.limit
          }
        }).then(response => {

          let gif = response.body.data[0].images['downsized_medium'].url;

          this.gifUrl = gif;
          this.showGif = true;

        }, response => {
          this.showGif = false;
        })
      }
    }
	}
</script>

<style scoped>

</style>
