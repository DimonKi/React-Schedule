<template>
	
</template>



<script>
	
export default {
  mounted: function () {
      this.$nextTick(function () {
          Vue.axios.post("/test").then((res)=>{
          	console.log(res.data);
          })
      })
  },
}
</script>

