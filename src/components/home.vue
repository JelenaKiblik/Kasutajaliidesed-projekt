<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div>
        <img :src="image" class="img-fluid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '',
      image: require('../assets/images/mugs.jpg'),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
