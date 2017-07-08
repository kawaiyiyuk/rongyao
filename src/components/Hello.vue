<template>
  <div>
   <table id="shopcar" class="table table-bordered ">
    <thead>
      <tr>
        <th>商品序号</th>
        <th>商品名称</th>
        <th>商品数量</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for = "(item,index) in commodity" >
        <th class="text-center">{{item.id}}</th>
        <td class= 'text-center'>{{item.name}}</td>
        <td>{{item.num}}</td>
        <td>{{item.price}}</td>
        <td><button @click = "remove(index)" class= "btn btn-warning">删除</button></td>
      </tr>
      <tr>
        <td colspan = "2"><h4>商品总数：{{commodityNum}}</h4></td>
        <td colspan = "2"><h4>商品总价：{{commodityPrice}}</h4></td>
        <td><button class = 'btn btn-danger' @click = "removeAll()" >清空购物车</button></td>
      </tr>

    </tbody>
   </table>
   <div>
    <h4 v-show = "this.commodity.length == 0">选点什么吧</h4>
   </div>
  </div>

</template>

<script>

export default {
  name: 'vx',
  data () {
    return {
      message: 'vx',

     
    }
  },
  computed: {
     commodity(){
       return this.$store.state.commodity
     },
     commodityNum(){
       var num = 0;
       for(var i = 0; i<this.commodity.length;i++){
         num += parseInt(this.commodity[i].num)
       }
       return num
     },
     commodityPrice(){
       var price = 0;
       for(var i =0;i<this.commodity.length;i++){
         price +=parseInt(this.commodity[i].num*this.commodity[i].price)
       }
       return price
     }
  },
  methods: {
    increment () {
       this.$store.commit('increment');
    },
    remove :function(index){
      for(var i= 0;i<this.commodity.length;i++){
        if(i==index){
          this.commodity.splice(i,1)
        }
      }
    },
    removeAll :function(){
      this.commodity.splice(0,this.commodity.length)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#shopcar th,#shopcar td{
  text-align:center
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
