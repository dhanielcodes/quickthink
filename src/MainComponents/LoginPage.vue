<template>
<div>
    <form action="">
       <h1>Hey There!</h1>
       <p>Login to access your games</p>
       <input type="name" placeholder="Name">
       <input type="password" placeholder="Password">
       <button>Login</button>
       <p>Don't have an account? <router-link to="/signup"><a href="">Create account</a></router-link> </p>
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
  transform: translate(-50%, -50%);
  width: 500px;
  text-align: center;
  padding: 50px;
  border-radius: 8px;
  background: white;
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
</style>