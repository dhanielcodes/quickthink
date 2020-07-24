<template>
<div>


    <h1 class="head">LeaderBoard</h1>

    <div class="leaderboard">

      <div class="trophies">
         
        <div class="silver trophy">
           <img src="../assets/images/silver.svg" alt="">
        </div>

        <div class="gold trophy">
          <img src="../assets/images/gold.svg" alt="">
        </div>

        <div class="bronze trophy">
          <img src="../assets/images/bronze.svg" alt="">
        </div>

      </div>
      
    </div>

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







.head {
  background-color: #1c1046;
}

.head {
  color: #fff;
  padding: 60px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  font-family: 'DM sans';
  margin-bottom: 50px;
}

.trophies div {
  background-color: #574E76;
}

.trophies img {
  padding: 50px;
}

.silver, .gold,.bronze {
  border-radius: 50%;
}
.trophies {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
@media only screen and (max-width: 830px){
.trophies img{
  width: 150px;
}
.gold img{
  width: 180px;
}
}

  @media only screen and (max-width: 550px){
    header h1 {
      font-size: 30px ;
    }
.trophies img{
  width: 135px;
}
.gold img{
  width: 160px;
}
    
  }
</style>
