<template>
  <div class="products">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
        <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'products',
    data () {
      return {
        title: '',
        products:[
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:1
          },
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:2
          },
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:3
          },
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:4
          },
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:5
          },
          {
            productTitle:"Kruus",
            image       : require('../assets/images/mug.png'),
            productId:6
          }
        ]
      }
    },
    methods:{
      goTodetail(prodId) {
        let proId=prodId
        this.$router.push({name:'details',params:{Pid:proId}})
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
