<template>
<div class="started">
  <section>
    <h1 class="h1">Getting Started?</h1>
    <main>
      <img src="../assets/images/366.svg" alt="">
      <div class="instructions">
      <img src="../assets/images/Group81(1).svg" alt="">
      <div class="content">
          <div class="step">
            <h1>Create Game</h1>
            <p>
              Create a username and avatar, create a<br>
              game category, select game category<br>
              created
            </p>
          </div>
          <div class="step">
            <h1>Start Playing</h1>
            <p>
               Start answering/creating the questions in<br>
               the game category selected, set a difficulty<br> 
               level
            </p>
          </div>
          <div class="step">
            <h1>Top the Leaderboard</h1>
            <p>
             Play till you get the highest mark to reach<br>
             the top of the leaderboard and defend<br>
             your position..
            </p>
          </div>
      </div>
      </div>
    </main>
  </section>
  <aside>
    <h1>Customize Your Game</h1>
    <div class="cards">
      <img src="../assets/images/Frame71.svg" alt="" srcset="">
      <div class="mid">
        <img src="../assets/images/Frame41.svg" alt="" srcset="">
        <img src="../assets/images/Frame51.svg" alt="" srcset="">
      </div>
      <img src="../assets/images/Frame61.svg" alt="" srcset="">
    </div>
    <div class="join">
      <h1>Join thousands of players</h1>
      <p>
        Play games with thousands of users across the globe as they challenge their brains, <br>
        boost their knowledge and compete for the top stop on the leaderboard
      </p>
      <div class="a">
        <a href="#">Get started now</a>
        </div>
    </div>
    <Newsletter></Newsletter>
  </aside>
  
</div>

</template>

<script>
export default {
  data () {
    return {
        
    }
  }
}
</script>

<style scoped>
section{
  font-family: 'DM sans';
  height: auto;
  background: #1C1046;
  color: white;
  overflow: hidden;
  padding: 20px 0;
  overflow: hidden;
}
.h1{
  text-align: center;
  font-size: 40px;
  margin-top: 30px;
}
main{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px  0;
}
.instructions{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
section h1{
  font-size: 40px;
  margin-bottom: 10px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90vh;
  margin-left: 50px;
}

/* ASIDE */
aside{
  height: auto;
  background: #ffffff;
  font-family: 'DM sans';
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}
.cards{
  margin-top: 100px;
  overflow: hidden;
  width: 100%;
}
aside h1{
  text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
}
aside p{
  margin-bottom: 50px;
}
aside img{
  width: 400px;
}
aside .mid{
  display: flex;
  justify-content: space-around;
}
a{
  padding: 20px 30px;
  background: #18C5D9;
  color: white;
  font-size: 20px;
  width: 100%;
  text-decoration: none;
  font-family: 'poppins';
  border-radius: 6px;
  transition: all .6s;
}
.a{
  transition: all .5s;
  width: 230px;
  margin: 40px auto;
}
.a:hover{
  transform: rotate(-4deg);
}


/* MEDIA QUERIES */
@media screen and (max-width: 961px){
    main{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 10px  0;
  }
  .instructions{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }

  .mid{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }
}

@media screen and (max-width: 511px){
  .instructions img{
    width: 100px;
  }
  h1{
  font-size: 30px;
  }
  section h1{
    font-size: 25px;
  }
  section p{
    font-size: 14px;
    font-weight: 100;
  }
}
</style>