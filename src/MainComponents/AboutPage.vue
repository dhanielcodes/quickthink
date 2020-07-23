<template>
<main>
  <header>
    <h1 class="h1">About</h1>
  </header>
    <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros mauris cum risus semper est 
       facilisi in. Dolor feugiat adipiscing phasellus viverra bibendum tincidunt urna eu ac.
        Quam eu nulla egestas habitasse aliquam, amet, id neque, suscipit. Aliquet nisi, eu sed viverra leo. 
        Pharetra quisque in ultrices magna hac amet, amet ullamcorper quis. Quis pretium, sit tempus, imperdiet. 
        Eget euismod sed urna purus pellentesque mauris varius vel adipiscing. Eget sit viverra vel donec 
        curabitur fusce vitae eu vestibulum. Rutrum metus, at in sed lectus commodo dictum semper id. Neque 
        suspendisse porttitor id nunc euismod. Tempus vitae aliquam blandit purus velit tortor, sem justo. Morbi 
        fames ultricies gravida velit, congue odio integer id gravida. Tellus viverra amet, at eleifend posuere 
        feugiat at iaculis sed. Venenatis volutpat a vel neque. Sit nisl feugiat imperdiet sollicitudin egestas. 
        Egestas scelerisque arcu eu, id sed hendrerit. Nibh natoque id vitae leo leo nunc, egestas nulla viverra. 
        Fusce euismod sit mattis mi at. Dui, eget turpis scelerisque viverra tincidunt proin est est mi. Ullamcorper 
        tristique rhoncus nisi, sagittis vel aliquam dui ut elementum. Tellus donec vel vel pulvinar mauris 
        scelerisque tincidunt ultricies semper. Facilisis tellus sed eu viverra lorem nec venenatis ipsum in. 
        Laoreet porttitor netus leo, vestibulum lorem nunc, morbi pharetra ut. Laoreet hendrerit pretium tempus 
        porttitor iaculis. Nulla at eu, cursus odio morbi mattis ornare neque gravida. Fermentum, nec gravida 
        convallis augue facilisi vel at. A ullamcorper rutrum luctus enim enim vel quis. Pellentesque varius 
        pellentesque eu at erat ac neque. Non convallis nisl in amet. In dui est ipsum nibh eget blandit euismod 
        commodo. Quis fermentum, est, a nibh fermentum scelerisque a quam a. Condimentum ut morbi tristique lectus 
        tempus ac. Lorem eu, nec mus nunc amet. Turpis malesuada rutrum sagittis tempor enim ut. Tincidunt ac tortor 
        nam enim aenean donec massa urna arcu. Elit adipiscing penatibus pharetra orci, sit fermentum ullamcorper. 
        Eu augue fermentum faucibus faucibus sed duis pellentesque eros, bibendum. Pulvinar nunc, nam aliquet quisque. 
        Egestas aliquam lectus consequat varius tellus, imperdiet urna curabitur faucibus. Dictum nibh ullamcorper purus 
        quam proin sapien magna. Etiam nullam adipiscing morbi lobortis diam elit viverra. Sit volutpat porttitor duis 
        odio laoreet aliquet fringilla vitae. Lectus cras sed cursus nunc eget augue mattis donec non. Pellentesque vitae 
        sagittis auctor ipsum et, lorem pharetra pretium.
    </p>
    <form action="">
      <h1>Contact Us?<br> Send Us a message</h1>
      <div class="input">
          <input type="name" placeholder="Full Name">
          <input type="email" placeholder="Email Address">
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message here.."></textarea>
          <button>Send Message</button>
      </div>
    </form>
</main>
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
main{
  height: auto;
  font-family: 'DM sans';
  text-align: center;
}
  .h1{
  animation:aa  2s 0s 1 forwards;
}
@keyframes aa {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
header{
  background: #1C1046;
}
.h1{
  width: 100%;
  font-size: 50px;
  padding: 60px 0;
  text-align: center;

  color: white;
}
p{
  font-size: 20px;
  padding: 50px;
}
form{
  width: auto;
  border-radius: 10px;
  height: auto;
  padding: 15px;
  margin: 50px auto;
}
form h1{
  font-size: 46px;
}
form .input{
  width: 600px;
  margin: 50px auto;
}
form input{
  width: 100%;
  padding: 20px;
  margin: 10px auto;
  outline: none;
  border-radius: 8px;
  border: 1px solid #0f0a2457;
  font-size: 20px;
}
form textarea{
  width: 100%;
  padding: 20px;
  height: 400px;
  margin: 10px auto;
  outline: none;
  border-radius: 8px;
  border: 1px solid #0f0a2457;
  font-size: 20px;
  font-family: 'DM sans';
}
form button{
  width: 100%;
  padding: 20px;
  background: #18C5D9;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
}
::placeholder{
  font-family: 'poppins';
  font-size: 20px;
}
@media screen and (max-width: 674px){
  form h1{
  font-size: 36px;
  }
  form .input{
  width: 100%;
  padding: 0 10px;
  margin: 50px auto;
}
}
</style>
