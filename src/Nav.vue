<template>
    <div>
      <div class="space"></div>
         <div v-on:click="open = !open" class="burger">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      </div>
    <nav v-on:click="remove">
      <div v-bind:href="web" class="logo">Quick<span>Think</span></div>
      <ul v-bind:class="{open: open}">
        <div  id="nav-links">
           <router-link to="/" ><li>Home</li></router-link> 
            <router-link class="router-link-active router-link-exact-active" to="/categories"><li>Categories</li></router-link> 
            <router-link class="router-link-active router-link-exact-active" to="/leaderboard"><li>LeaderBoard</li></router-link> 
           <router-link class="router-link-active router-link-exact-active" to="/about"><li>About</li></router-link> 
        </div>
        <div class="entries">
          <router-link to="/login"><a href="#" class="login">Login</a></router-link>
         <router-link to="/signup"> <a href="#" class="sign-up">Sign-up</a></router-link>
        </div>
      </ul>
      
    </nav>
    </div>
</template>

<script>


export default {
  data () {
    return {
       open: false,
       web: '/'
    }
  },
  methods: {
    remove: function(){
      this.open = false
    }
  }
}

</script>

<style scoped>


.space{
  height: 74px;
}
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all .6s;
  z-index: 4;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.288);
}
/* NAV LOGO FOR NAV LOGO */
.logo{
  color: #1C1046;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}
.logo span{
  color: #18C5D9;
}
/* NAV UL FOR NAV UL */
nav ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}
nav #nav-links{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  
}
ul li{
  list-style: none;
}
/* .router-link-exact-active{
  color: #ffffff;
} */
.router-link-active{
  text-decoration: none;
  color: black;
  padding: 10px 0;
  position: relative;
}
/* NAV A HOVER FOR NAV A HOVER */
.router-link-active::after{
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
.router-link-active:hover::after{
  width: 100%;
  opacity: 1;
  left: 0%;
}
/* NAV ENTRIES FOR NAV ENTRIES */
.entries{
  width: auto;
}
.entries .router-link-active::after{
  display: none;
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
@media screen and (max-width: 964px){
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
.router-link-active{
  font-size: 25px;
}
.entries .router-link-active{
  font-size: 17px;
}
}
</style>
