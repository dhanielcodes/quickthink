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
    <div class="board-data" >
      <button class="l-dbtn" @click='fetchBoardData' v-on:click="btn = !btn, li = !li" v-bind:class="{fade: btn}">Show leader Board</button>
        <ul id="v-for-board" v-bind:class="{fades: li}">
          <h1 v-if="loading">Loading...</h1>
          <li v-for="results in board">
            <p class="id">{{results.id}} .</p><img src="../assets/images/leaderimage.svg" alt=""><p class="name">{{results.user_name}}</p><p class="geo">{{results.game_code}}</p><p class="score">{{results.score}}</p>
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
      btn: false,
      li: false
    }
  },
  methods: {
    fetchBoardData() {
      this.loading = true;
      axios.get('https://brainteaser.pythonanywhere.com/game/leaderboard?page=2&page_size=5')

      .then((response) => {
        console.log(response.data.results);
        const data = response.data.results;
        this.board = data;
        this.loading = false;
      })
      .catch((error) => {
          console.log(error);
          alert('Cannot get leaderboard data!');
      });
    },
    }
  }
</script>

<style scoped>

.board-data {
  display: grid;
  place-items: center;
  color: black;
}
.board-data ul {
  height: 200px;
}

ul {
  text-align: center;
}

p {
  margin-right: 5px;
}
li {
  display: flex;
  color: black;
  text-align: center;
  align-items: center;
  font-size: 20px;
  overflow: hidden;
  overflow-y: auto;
  padding: 15px;
  border: 1px solid;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}


.btn{
  padding: 20px 30px;
  display: flex;
  cursor: pointer;
  background: #18C5D9;
  border: none;
  margin: 30px 0;
  border-radius: 8px;
  font-size: 20px;
  outline: none;
  color: white;
  transition: all .5s;
  text-align: center;
}

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

.board-data{
  display: grid;
  place-items: center;
  margin: 30px 0;
}
.l-dbtn{
  padding: 20px 30px;
  display: flex;
  cursor: pointer;
  background: #18C5D9;
  border: none;
  margin: 30px 0;
  border-radius: 8px;
  font-size: 20px;
  outline: none;
  color: white;
  transition: all .5s;
  text-align: center;
}
.fade{
  opacity: 0;
  pointer-events: none;
}
ul{
  list-style: none;
  width: 90%;
  height: auto;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  background: #18c6d9;
  overflow: hidden;
 /*  height: 500px; */
}
ul.fades{
  height: 500px;
}
ul li{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff ;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9px;
  margin: 20px 0;
 /*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); */
}
ul li p{
  font-weight: 800;
  font-size: 20px;
  color: rgb(0, 0, 0);
}
li img{
  border-radius: 100px;
  width: 50px;
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
  li{
    flex-direction: column;
    align-items: center;
  } 
  li p{
    margin-bottom: 20px;
  }
  ul.fades{
  height: 1420px;
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
