<template>
  <header>
    <img  class="b-g" src="../assets/images/vector 14.svg" alt="">
    <div v-on:click="open = !open" class="burger">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      </div>
    <nav>
      <div class="logo">Quick<span>Think</span></div>
      <ul v-bind:class="{open: open}">
        <div  id="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">About</a></li>
        </div>
        <div class="entries">
          <a href="#" class="login">Login</a>
          <a href="#" class="sign-up">Sign-up</a>
        </div>
      </ul>
      
    </nav>
    <main>
      <aside>
        <h1 class="push">How good are you ?<br>Let's find out..</h1>
        <p class="push">Challenge your brain into thinking, think fast, beat the best of<br>the best in this trilling game</p>
        <div class="a">
        <a href="#">Play game</a> 
        </div>
      </aside>
      <img class="main-img" src="../assets/images/1 996.svg" alt="">
    </main>
    <div class="cards">
      <div class="card">
        <img src="../assets/images/Onboarding design 2.svg" alt="">
        <p>choose any number of<br> questions you want to<br> answer</p>
      </div>
      <div class="card">
        <img src="../assets/images/Onboarding design 3.svg" alt="">
        <p>Get points based on the<br> difficulty level you<br> choose</p>
      </div>
      <div class="card">
        <img src="../assets/images/Onboarding design 4.svg" alt="">
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
      open: false
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
.burger{
  display: none;
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
  font-family: "DM sans";
  background: white;
 position: relative;
  transition: all .6s;
  z-index: 4;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.288);
}
/* NAV LOGO FOR NAV LOGO */
.logo{
  color: #1C1046;
  font-size: 18px;
  font-weight: 400;
}
.logo span{
  color: #18C5D9;
}
/* NAV UL FOR NAV UL */
nav ul{
  display: flex;
  justify-content: space-between;
  width: 70%;
}
nav #nav-links{
  display: flex;
  justify-content: space-around;
  width: 50%;
  
}
ul li{
  list-style: none;
}
ul li a{
  text-decoration: none;
  color: black;
  padding-top: 16px;
  position: relative;
}
/* NAV A HOVER FOR NAV A HOVER */
ul li a::after{
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background: #1C1046;
  top: 0;
  transition: all .5s;
  left: 50%;
  opacity: 0;
  transform: translateX();
}
ul li a:hover::after{
  width: 100%;
  opacity: 1;
  left: 0%;
}
/* NAV ENTRIES FOR NAV ENTRIES */
.entries{
  width: auto;
}
.entries a{
  text-decoration: none;
  margin: 0 10px;
}
.entries .login{
  color: #1C1046;
  padding: 10px 12px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}
.entries .login:hover{
  color: white;
}
.entries .login::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 0%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  background: #1c10468e;
  transition: all .4s;
}
.entries .login:hover::after{
  height: 100%;
  opacity: 1;
}
.entries .sign-up{
  padding: 10px 12px;
  border-radius: 6px;
  color: white;
  position: relative;
  background: #18C5D9;
  transition: all .5s;
}
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
  widows: 100%;
  text-decoration: none;
  font-family: 'poppins';
  border-radius: 6px;
  transition: all .6s;
}
main .a{
  transition: all .5s;
  background: chartreuse;
  width: 167px;
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
  height: 250px;
  width: 250px;
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
  background: chartreuse;
  width: 167px;
  margin: 0 auto;
  }
  .burger{
    display: block;
    position: fixed;
    top: 30px;
    right: 20px;
    width: 40px;
    height: auto;
    z-index: 8;
    cursor: pointer;
  }
  .burger span{
    width: 100%;
    height: 2px;
    border-radius: 40px;
    background: #1C1046;
    display: block;
    margin-bottom: 5px;
  }
  nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
  nav ul{
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  z-index: 9;
  flex-direction: column;
  background: #18C5D9;
  transform: translateY(-100%);
  transition: all .5s
}
ul.open{
  transform: translateY(0%);
}
#nav-links{
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
}
nav ul li a{
  font-size: 25px;
}
}


</style>
