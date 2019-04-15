<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<h1>{{product.productTitle}}</h1>
						<img :src="product.image" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
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
		}
		
	}
</script>
