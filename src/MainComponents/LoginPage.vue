<template>
  <div>
    <form @submit.prevent>
      <h1>Hey There!</h1>
      <p>Login to access your games</p>
      <input type="name" placeholder="Name" v-model="User.userName" required />
      <input type="password" placeholder="Password" v-model="User.userPassword" required />
      <button @click="login">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">
          <a href>Create account</a>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      User: {
        userName: "",
        userPassword: "",
      },
    };
  },
  methods: {
    login() {
      let existingUser = {
        user_name: this.User.userName,
        password: this.User.userPassword,
      };


      axios
        .post("https://brainteaserdev.pythonanywhere.com/user/login/", existingUser)
        .then((response) => {
          // const token = response.data.token;
          // console.log(response);
          // console.log(token);
          localStorage.setItem("user-token", token);
          alert("Successful");
          
        })
        .catch((error) => {
          localStorage.removeItem("user-token");
          console.log(error);
          alert("Login has failed!");
        });

      // if (success == true) {
      //   window.location.href = "https://quickthink-game.netlify.app/";
      // }
    },
  },
};
</script>

<style scoped>
div {
  height: 100vh;
  font-family: "DM sans";
  position: relative;
  background: #1c1046;
  border-bottom: 1px solid rgba(255, 255, 255, 0.253);
}
form {
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
  animation: aa 1s 1.1s 1 forwards;
}
@keyframes aa {
  from {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
form input {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0.5px solid #1c104657;
  margin: 20px 0;
  font-size: 17px;
  font-family: "DM sans";
  outline: none;
}
::placeholder {
  font-size: 17px;
  font-family: "Dm sans";
}
form button {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0px;
  color: white;
  margin: 20px 0;
  background: #18c5d9;
  font-size: 17px;
  font-family: "DM sans";
  outline: none;
  cursor: pointer;
}
a {
  color: #18c5d9;
  font-weight: 600;
}
@media screen and (max-width: 550px) {
  form {
    width: 96%;
  }
}
</style>
