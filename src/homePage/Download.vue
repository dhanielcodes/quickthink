<template>
<div>
  <main>
      <img class="main-img" src="../assets/images/2 5.svg" alt="" srcset="">
      <div class="content">
          <h1 class="items">Now on<br>Google Playstore</h1>
          <p class="items">
              Never miss the game anywhere even if you are away from<br>
              your computer, catch the game even on your andriod<br> 
              mobile devices.. Everywhere you go, stay untop of the<br> 
              leaderboard
          </p>
          <div class="get items">
            <h1>Get App Now!</h1>
            <img src="../assets/images/1280px-Google_Play_Store_badge_EN 1.svg" alt="">
          </div>
      </div>
  </main>
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
main{
    font-family: 'DM sans';
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 50px 0;
    background: rgb(255, 255, 255);
}
.items{
    margin-bottom: 50px;
}
h1{
    font-size: 50px;
}
p{
    font-size: 20px;
}
.get img{
        margin-top: 20px;
}
@media screen and (max-width: 1062px) {
    main{
        flex-direction: column;
        text-align: center;
    }
    .main-img{
        width: 300px;
    }
    h1{
    font-size: 30px;
    }
    p{
    font-size: 17px;
    }   
    .content{
        overflow: hidden;
        padding: 10px;
    }
}
</style>
