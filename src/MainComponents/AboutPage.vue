<template>
<main>
    <div class="shine"><h1>About</h1></div>

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
    <form @submit.prevent>
      <h1>Contact Us?<br> Send Us a message</h1>
      <div class="input">
          <input type="name" placeholder="Full Name" v-model="Contact.contactName">
          <input type="email" placeholder="Email Address" v-model="Contact.contactEmail">
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message here.." v-model="Contact.contactMessage"></textarea>
          <button @click="submitSurvey" >Send Message</button>
      </div>
    </form>
<Footer></Footer>

</main>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      Contact: {
        contactEmail: '',
        contactName: '',
        contactMessage: ''
      }
    }
  },
  methods: {
    submitSurvey() {

      let theSurvey = {
        email: this.Contact.contactEmail,
        full_name: this.Contact.contactName,
        message: this.Contact.contactMessage
      }

      axios.post('https://brainteaser.pythonanywhere.com/contactus/send_contact_info/', theSurvey) ///contactus/send_contact_info/
        .then((response) => {
          //console.log(response);
          alert('Thanks for reaching out');
        })
        .catch((error) => {
          console.log(error);
          alert('An error occured please try again');
        });
    }
  }
}
</script>

<style scoped>






.shine {
  padding: 100px  0;
  width:100%;
  background:#1C1046;
  z-index:0;
  position: relative;
   overflow: hidden;
   margin-bottom: 50px;
   font-family: 'DM sans';
}

/* text */
.shine h1 {
  color:#fff;
  left:50%;
  transform:translate(-50%,-50%);
  position: absolute;
  display: inline-block;
  font-family:'open sans',sans-serif;
  letter-spacing:-1px;
  font-weight:bold;
  top:50%;
  width: 100%;
  font-size: 50px;
  text-align: center;
}

/* Shine */
.shine::after {
	content:'';
  top:0;
	transform:translateX(100%);
	width:100%;
	height:220px;
	position: absolute;
	z-index:1;
	animation: slide 1s infinite;
	 
  /* 
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
  */
  background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
	background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
}

/* animation */

@keyframes slide {
	0% {transform:translateX(-100%);}
	100% {transform:translateX(100%);}
}








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
 @media only screen and (max-width: 550px){
    .shine{
    padding: 60px;
  }
    .shine h1 {
      font-size: 30px ;
    }
 }
</style>
