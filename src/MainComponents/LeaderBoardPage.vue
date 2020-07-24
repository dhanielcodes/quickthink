<template>
<div>
  <header>
    <h1>LeaderBoard</h1>
  </header>

     <Newsletter></Newsletter>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    greet: () => {
    }
  }
}
</script>

<style scoped>
div{
  height: auto;
  font-family: "DM sans";
}
header{
  background: #1C1046;
}
h1{
  width: 100%;
  font-size: 50px;
  padding: 60px 0;
  text-align: center;
  color: white;
}




  @media only screen and (max-width: 550px){
    header h1 {
      font-size: 30px ;
    }

    
  }
</style>
