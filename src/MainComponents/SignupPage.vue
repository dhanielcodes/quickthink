<template>
<div>
    <form action="">
       <h1>Hey There!</h1>
       <p>Sign up to play cool games</p>
       <input type="name" placeholder="Name">
       <input type="email" placeholder="Email">
       <input type="password" placeholder="Password">
       <button>Create Account</button>
       <p>Already have and account? <router-link to="/login"><a href="">Login</a></router-link> </p>
    </form>
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
  height: 100vh;
  font-family: 'DM sans';
  position: relative;
  background: #1C1046;
  border-bottom: 1px solid rgba(255, 255, 255, 0.253);
}
form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 500px;
  text-align: center;
  padding: 50px;
  border-radius: 8px;
  background: white;
  opacity: 0;
  animation:aa  1s 0s 1 forwards;
}
@keyframes aa {
  from{
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  to{
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
form input{
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0.5px solid #1c104657;
  margin: 20px 0;
  font-size: 17px;
  font-family: 'DM sans';
  outline: none;
}
::placeholder{
  font-size: 17px;
  font-family: 'Dm sans';
}
form button{
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0px;
  color: white;
  margin: 20px 0;
  background: #18C5D9;
  font-size: 17px;
  font-family: 'DM sans';
  outline: none;
  cursor: pointer;
}
a{
  color: #18C5D9;
  font-weight: 600;
}
@media screen and (max-width: 550px){
  form{
    width: 96%;
  }
}
</style>
