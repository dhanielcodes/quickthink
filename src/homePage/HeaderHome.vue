<template>
  <header>
    <img  class="b-g" src="../assets/images/Vector14.svg" alt="">
    <main>
      <aside>
        <h1 class="push">How good are you ?<br>Let's find out..</h1>
        <p class="push">Challenge your brain into thinking, think fast, beat the best of<br>the best in this trilling game</p>
        <div class="a">
        <a href="#">Play game</a>
        </div>
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
        <p>Share with <br> your friends</p>
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
main a{
  padding: 15px 30px;
  background: #18C5D9;
  color: white;
  font-size: 20px;
  width: 100%;
  text-decoration: none;
  font-family: 'poppins';
  border-radius: 6px;
  transition: all .6s;
}
main .a{
  transition: all .5s;
  width: 170px;
}
main .a:hover{
  transform: rotate(-4deg);
}
.cards {
  display: flex;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-bottom: 50px;
}
.cards .card{
    width: 350px;
    height: 450px;
    display: grid;
    place-items: center;
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
  main .a{
  transition: all .5s;
  width: 167px;
  margin: 0 auto;
  }

}


</style>
