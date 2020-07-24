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

    <div class="board-data" v-bind:is='fetchBoardData'>
        <ul>
          <li v-repeat="boards in board">
            {{ boards.user_name }} - {{ boards.game_code }} - {{ boards.score }}
          </li>
        </ul>
    </div>

     <Newsletter></Newsletter>
<Footer></Footer>

</div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      board: [],
      loading: false,
    }
  },
  methods: {
    fetchBoardData() {
      this.loading = true;
      axios.get('https://brainteaser.pythonanywhere.com/game/leaderboard')
      .then((response) => {
        console.log(response);
        alert('working');
        //this.data = response.data;
        this.board = response.data;
        this.loading = false;
      })
      .catch((error) => {
          console.log(error);
          alert('Cannot get leaderboard data!');
      });
    },

    beforeMount() {
      this.fetchBoardData()
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

.gold img {
  padding: 50px;
}
.silver img, .bronze img {
  padding: 40px;
}

.silver, .gold, .bronze {
  border-radius: 50%;
}
.trophies {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  
}

@media only screen and (max-width: 900px) {

  .gold img {
    width: 250px;
    height: auto;
    padding: 35px;
  }

  .silver img, .bronze img {
    width: 180px;
    height: auto;
    padding: 30px;
  }
}

@media only screen and (max-width: 830px){
  .trophies img{
    width: 150px;
  }
  .gold img{
    width: 180px;
  }
}

@media only screen and (max-width: 700px) {

  .gold img {
    width: 180px;
    height: auto;
    padding: 30px;
  }

  .silver img, .bronze img {
    width: 120px;
    height: auto;
    padding: 25px;
    
  }
}

@media only screen and (max-width: 550px){
  .head {
    font-size: 30px ;
  }    
}

@media only screen and (max-width: 500px) {

  .gold img {
    width: 120px;
    height: auto;
    padding: 20px;
  }

  .silver img, .bronze img {
    width: 80px;
    height: auto;
    padding: 15px;
  }
}

@media only screen and (max-width: 350px) {

  .gold img {
    width: 80px;
    height: auto;
    padding: 15px;
  }

  .silver img, .bronze img {
    width: 60px;
    height: auto;
    padding: 10px;
  }
}
</style>
