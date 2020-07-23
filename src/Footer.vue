<template>
<footer>
  <main>
        <div class="cpop">
            <div class="cpo">
                <ul>
                    <li><h1>Official Address</h1></li>
                    <li>Plot 5&6, Oroki Estate Extension,</li>
                    <li>Opposite Govt. House, Osun State,</li>
                    <li>Nigeria</li>
                </ul>
            </div>
            <div class="cpo">
                <ul>
                    <li><h1>Branch Office</h1></li>
                    <li>No 2, Aba Eleshin Street, Kuwola Road,</li>
                    <li>Apata Ibadan, Oyo State Nigeria.</li>
                </ul>
            </div>

        </div>
        <div class="cpop">
            <div class="cpo">
                    <ul>
                        <li><h1>Services</h1></li>
                        <li><a href="">Room Reservation</a></li>
                        <li><a href="">Housing</a></li>
                        <li><a href="">Conference Room</a></li>
                        <li><a href="">Relaxation Center</a></li>
                    </ul>
            </div>
            <div class="cpo">
                    <ul>
                        <li><h1>Customer Care Unit</h1></li>
                        <li>01 0489474872 </li>
                        <li>234 4843746678</li>
                        <li>234 4001394000</li>
                    </ul>
            </div>
        </div>
  </main>
  <div class="copy-right">
      <p>Copyright @ QuickThink team 2020</p>
  </div>
</footer>


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
footer{
    font-family: 'DM sans';
    height: auto;
    background: #1C1046;
    color: white;
}
main{
    height: auto;
    font-family: 'DM sans';
    color: white;
    background: #1C1046;
    padding: 50px;
    display: flex;
    justify-content: space-around;
}
main .cpop{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
main .cpop:nth-child(2){
    display: flex;
    width: 50%;
    justify-content: space-between;
    flex-direction: row;
}
main .cpo{
    margin: 10px;
}
main .cpo ul{
    list-style: none;
}
main ul li{
    margin-bottom: 10px;
    font-weight: 100;
}
main ul li h1{
    font-weight: 100;
}
main ul li a{
    text-decoration: none;
    color: white;
    position: relative;
}
a::after{
    position: absolute;
    content: '';
    width: 0%;
    height: 1px;
    background: rgb(255, 255, 255);
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all .4s;
}
a:hover::after{
    width: 100%;
    opacity: 1;
}
.copy-right{
    width: 100%;
    border-top: 1px solid rgba(229, 229, 229, 0.2);;
    padding: 40px 0;
    text-align: center;
}
@media screen and (max-width: 1117px){
    main .cpop:nth-child(2){
    display: flex;
    width: auto;
    justify-content: space-between;
    flex-direction: column;
}
@media screen and (max-width: 767px){
main{
    flex-direction: column;
    align-items: center;
    text-align: center;
}
}
}
</style>
