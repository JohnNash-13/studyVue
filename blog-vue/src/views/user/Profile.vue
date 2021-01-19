<template>
  <!-- 所有元素，不能直接跟在根节点上-->
  <div>
    <h1>用户信息</h1>
    <h2>第一种方式</h2>
    {{ $route.params.id}}
    <h2>第二种方式</h2>
    {{id}}
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'UserProfile',
    beforeRouteEnter:(to, from, next)=> {
      console.log("进入路由之前");
      next(vm =>{
        vm.getData();
      });
    },
    beforeRouteLeave:(to, from, next)=> {
      console.log("进入路由之后");
      next();
    },
    methods: {
      getData: function() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
</style>
