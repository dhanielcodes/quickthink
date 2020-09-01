<template>
<div>
  <form @submit.prevent>
    <h1>News Letter</h1>
    <p>
       Subscribe to our newsletter and never miss out on our regular updates,<br>
       feature notification and leaderboard standings
    </p>
    <div class="email">
      <input type="email" placeholder="Email Address" v-model="newsletter" required><button @click='submitNewsletter' >Subscribe</button>
    </div>
  </form>
</div>

</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      newsletter: ''
    }
  },
  methods: {
    submitNewsletter() {

      let NewsLetter = {
        email: this.newsletter
      }
      this.checkForm()
      // console.log(NewsLetter);

      axios.post('https://brainteaserdev.pythonanywhere.com/newsletter/subscribe/', NewsLetter)
        .then((response) => {
          console.log(response);
          alert('You have successfully subscribed to our newsletter service');
        })
        .catch((error) => {
          console.log(error);
          alert('Subscription has failed!');
        });
    },

    checkForm(e) {
      if(!this.newsletter) {
        alert("Please enter your email")
      } else if(!this.validEMail(this.newsletter)) {
        alert("A valid email is required")
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  }
}
</script>

<style scoped>
form{
  font-family: 'DM sans';
  text-align: center;
  width: 90%;
  padding: 100px 0;
  background-color: #1C1046;
  color: white;
  border-radius: 10px;
  margin: 100px auto;
}
form h1{
  font-size: 60px;
  margin-bottom: 30px;
}
form p{
  font-size: 20px;
  margin-bottom: 30px;
}
form .email {
  position: relative;
  width: 600px;
  background: white;
  padding: 5px;
  margin: auto;
  border-radius: 5px;
}
form .email input{
  width: 70%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
  font-family: 'DM sans';
  background: white;
}
form .email button{
  border-radius: 5px;
  background: #18C5D9;
  font-family: 'DM sans';
  border: none;
  outline: none;
  padding: 15px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 30%;
}
::placeholder{
  font-family: 'DM sans';
  font-size: 18px;
}
@media screen and (max-width: 961px){
     form{
    width: 95%;
    padding: 100px 0;
    background-color: #1C1046;
    color: white;
    height: auto;
    margin: 100px auto;
  }
}
@media screen and (max-width: 731px){
  form{
    width: 100%;
    border-radius: 0px;
    margin: 100px 0px;
    overflow: hidden;
  }
  form .email {
    width: 95%;
  }
}
@media screen and (max-width: 511px){
      form h1{
    font-size: 40px;
  }
  form p{
    font-size: 17px;
    padding: 0 10px;
  }
   form .email {
    width: 95%;
  }
  form .email input{
    width: 60%;
  }
  form .email button{
    width: 40%;
  }
}
</style>
