<template>
  <header>
    <img  class="b-g" src="../assets/images/Vector14.svg" alt="">
    <main>
      <aside>
        <h1 class="push">How good are you ?<br>Let's find out..</h1>
        <p class="push">Challenge your brain into thinking, think fast, beat the best of<br>the best in this trilling game</p>
        <a href="#" target="_blank"><button>Play game</button></a>
      </aside>
      <img class="main-img" src="../assets/images/1996.svg" alt="">
    </main>
    <div class="cards">
      <div class="card">
        <img src="../assets/images/Onboardingdesign2.svg" alt="">
        <p>choose any number of<br> questions you want to<br> answer</p>
      </div>
      <div class="card">
        <img src="../assets/images/Onboardingdesign3.svg" alt="">
        <p>Get points based on the<br> difficulty level you<br> choose</p>
      </div>
      <div class="card">
        <img src="../assets/images/Onboardingdesign4.svg" alt="">
        <p>Share your score with <br> friends and family</p>
      </div>
    </div>
  </header>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge'

window.addEventListener('scroll', () => {
  let bh =  document.querySelector('.main-img')

  let val = window.scrollY
  bh.style.left = val * 0.5 + 'px'
})

export default {
  data () {
    return {
      name: 'Header',
      webapp: 'https://www.quickthink.netlify.app'

    }
  },
  methods: {

  }
}
</script>

<style scoped>
/* HEADER FOR HEADER */
header{
  height: auto;
  padding-bottom: 20px;
  width: 100%;
}
.b-g{
  position: absolute;
  right: 0;
  top: 0;
}
/* NAV FOR NAV */
aside{
    position: relative;
  }
/* MAIN */
main{
  color: #1C1046;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
 overflow: hidden;

}
.main-img{
 position: relative;
  z-index: 0;
}
main .push{
  margin-bottom: 50px;
}
main h1{
  font-family: "DM sans";
  font-size: 60px;
}
main p{
  font-family: "DM sans";
  font-size: 20px;
}
main button{
  background: #18C5D9;
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-family: 'poppins';
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all .5s;
}
main button:hover{
  transform: rotate(-4deg);
}
.cards {
  display: flex;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin: 100px 0;
}
.cards .card{
    width: 350px;
    height: 450px;
    display: grid;
    justify-items: center;
    align-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
    border-radius: 10px;
    background: white;
    margin: 10px;
}
.cards .card img{
  padding: 20px;
  height: 200px;
  width: 200px;
  background: #1C1046;
  font-family: 'poppins';
  border-radius: 200px;
  object-fit: contain;
}
.cards .card p{
    font-size: 20px;
    margin-top: 50px;
    font-weight: bold;
    font-family: 'poppins';
}


@media screen and (max-width: 1125px){
  .b-g{
    width: 40%;
  }

  .main-img{
    width: 350px;
  }
  main h1{
  font-family: "DM sans";
  font-size: 55px;
  }

}
@media screen  and (max-width: 964px){
  .main-img{
   display: none;
  }
}
@media screen  and (max-width: 964px){
  main{
    text-align: center;
    padding: 10px;
  }
  main h1{
  font-family: "DM sans";
  font-size: 45px;
  }

}


</style>
