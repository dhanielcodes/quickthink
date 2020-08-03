<template>
<div>


    
    <div class="shine"><h1>Leader Board</h1></div>

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
          <h2 v-if="loading">Loading...</h2>
          <li v-for="(results, index) in board" class="li-anim">
            <p class="id"> {{index+1}} .</p><img src="../assets/images/leaderimage.svg" alt=""><p class="name">{{results.user_name}}</p><p class="geo">{{results.game_code}}</p><p class="score">{{results.score}}</p>
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
      li: false,
      //counter: -499
    }
  },
  methods: {
    fetchBoardData() {
      this.loading = true;
      axios.get('https://brainteaser.pythonanywhere.com/game/leaderboard?page=2&page_size=5')
      .then((response) => {
        //console.log(response.data.results);
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




.shine {
  padding: 100px  0;
  width:100%;
  background:#1C1046;
  z-index:0;
  position: relative;
   overflow: hidden;
   margin-bottom: 50px;
}

/* text */
.shine h1 {
  color:#fff;
  left:50%;
  transform:translate(-50%,-50%);
  position: absolute;
  display: inline-block;
  font-family:'open sans',sans-serif;
  letter-spacing:-1px;
  font-weight:bold;
  top:50%;
  width: 100%;
  font-size: 50px;
  text-align: center;
}

/* Shine */
.shine::after {
  content:'';
  top:0;
  transform:translateX(100%);
  width:100%;
  height:220px;
  position: absolute;
  z-index:1;
  animation: slide 1s infinite;
   
  /* 
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
  */
  background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
  background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
}

/* animation */

@keyframes slide {
  0% {transform:translateX(-100%);}
  100% {transform:translateX(100%);}
}









.board-data {
  display: grid;
  place-items: center;
  color: black;
}
.board-data h2{
  font-size: 40px;
  color: #fff;
}

ul {
  text-align: center;
}

ColorZilla
Ultimate CSS Gradient Generator from ColorZilla
A powerful Photoshop-like CSS gradient editor
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
  text-align: center;
  color: white;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  position: absolute;
  display: inline-block;
}

.h1-div {
  background-color: #1c1046;
  color: #fff;
  padding: 100px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  font-family: 'DM sans';
  margin-bottom: 50px;
  position: relative;
  z-index: 0;
}

.h1-div:after {
  content:'';
  top:0;
  transform:translateX(100%);
  width:100%;
  height:220px;
  position: absolute;
  z-index:1;
  animation: slide 1s infinite;
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
  height:auto;
  overflow: hidden;
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
    font-size: 30px;
  }   
  li{
    flex-direction: column;
    align-items: center;
  } 
  li p{
    margin-bottom: 20px;
  }
  .shine{
    padding: 60px;
  }
   .shine h1 {
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