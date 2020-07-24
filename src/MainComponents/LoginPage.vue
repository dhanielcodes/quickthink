<template>
<div>
    <form @submit.prevent>
       <h1>Hey There!</h1>
       <p>Login to access your games</p>
       <input type="name" placeholder="Name" v-model="User.existingUserName">
       <input type="password" placeholder="Password" v-model="User.existingUserPassword">
       <button @click="login">Login</button>
       <p>Don't have an account? <router-link to="/signup"><a href="">Create account</a></router-link> </p>
    </form>
</div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      User: {
        existingUserName: '',
        existingUserPassword: ''
      }
    }
  },
  methods: {
      login() {

        let existingUser = {
          user_name: this.User.existingUserName,
          password: this.User.existingUserPassword
        }

        console.log(existingUser)

        axios.post('https://brainteaser.pythonanywhere.com/user/login', existingUser)
        .then((response) => {
          console.log(response);
          alert('Successful');
        })
        .catch((error) => {
          console.log(error);
          alert('Login has failed!');
        });
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
  transform: translate(-50%, -50%);
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