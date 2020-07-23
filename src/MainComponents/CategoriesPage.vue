<template>

    <div class="categories">
      <header>
        <span><h1>Game Categories</h1></span>
      </header>
      
      

      <div class="cards-container">
        <div class="row-one">

          <div class="row-one-a">
            <div class="music">
              <span><img src="../assets/images/music.svg" alt=""></span>
              <p>Music</p>
            </div> 

            <div class="game">
              <span><img src="../assets/images/game.svg" alt=""></span>
              <p>Games</p>
              </div>
          </div>

          <div class="row-one-b">

            <div class="art">
              <span><img src="../assets/images/art.svg" alt=""></span>
              <p>Art</p>
              </div>

            <div class="books">
              <span><img src="../assets/images/books.svg" alt=""></span>
              <p>Books</p>
              </div>
          </div>

        </div>

        <div class="row-two">

          <div class="row-two-a">

            <div class="gadgets">
              <span><img src="../assets/images/gadgets.svg" alt=""></span>
              <p>Gadgets</p>
              </div>
              
            <div class="shopping">
              <span><img src="../assets/images/shopping.svg" alt=""></span>
              <p>Shopping</p>
              </div>

          </div>

          <div class="row-two-b">

            <div class="sports">
              <span><img src="../assets/images/sport.svg" alt=""></span>
              <p>Sports</p>
              </div>

            <div class="math">
              <span><img src="../assets/images/math.svg" alt=""></span>
              <p>Math</p>
              </div>

          </div>

        </div>

        <div class="row-three">

          <div class="row-three-a">

            <div class="gifts">
              <span><img src="../assets/images/gifts.svg" alt=""></span>
              <p>Gifts</p>
              </div>

            <div class="videography">
              <span><img src="../assets/images/videography.svg" alt=""></span>
              <p>videography</p>
              </div>
          </div>

          <div class="row-three-b">

            <div class="news">
              <span><img src="../assets/images/news.svg" alt=""></span>
              <p>News</p>
              </div>

            <div class="cars">
              <span><img src="../assets/images/cars.svg" alt=""></span>
              <p>Cars</p>
              </div>

          </div>

        </div>

        <form action="POST">
            <input type="button" value="Create New Category">
        </form>
          
      </div>


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

  header {
    background-color: #1c1046;
    max-height: 250px;
  }

  header h1 {
    color: #fff;
    padding: 60px 0px;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    font-family: 'DM sans';
  }

  .cards-container {
    display: grid;
    place-items: center;
    padding-top: 100px;
  }
  
  .cards-container img {
    padding: 40px;
  }
  .row-one, .row-one-a, .row-one-b, .row-two, .row-two-a, .row-two-b, .row-three, .row-three-a, .row-three-b {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    text-align: center;
    font-family: 'DM sans';
    font-weight: bold;
    font-size: 21px;
    align-items: baseline;
    justify-content: center;
  }

  .row-one, .row-two, .row-three {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: 1s all;
  }

  .row-two, .row-three {
    margin-top: 70px;
  }

  span img {
    width: 200px;
    height: 170px;
  }

  .cards-container p {
    padding: 15px 0px 16px 0px;
  }

  .music img {
    background-color: #ff4d55;
    border-radius: 8px 8px 0px 0px;
  }

  .game img {
    background-color: #ABAE03;
    border-radius: 8px 8px 0px 0px;
  }

  .art img {
    background-color: #00B704;
    border-radius: 8px 8px 0px 0px;
  }

  .books img {
    background-color: #574E76;
    border-radius: 8px 8px 0px 0px;
  }

  .gadgets img {
    background-color: #ff4da2;
    border-radius: 8px 8px 0px 0px;
  }

  .shopping img {
    background-color: #ab40ff;
    border-radius: 8px 8px 0px 0px;
  }

  .sports img {
    background-color: #ff9800;
    border-radius: 8px 8px 0px 0px;
  }

  .math img {
    background-color: #006484;
    border-radius: 8px 8px 0px 0px;
  }

  .gifts img {
    background-color: #4c4c4c;
    border-radius: 8px 8px 0px 0px;
  }

  .videography img {
    background-color: #04172a;
    border-radius: 8px 8px 0px 0px;
  }

  .news img {
    background-color: #18c5d9;
    border-radius: 8px 8px 0px 0px;
  }

  .cars img {
    background-color: #351a0a;
    border-radius: 8px 8px 0px 0px;
  }

  .music, .game, .art, .books, .gadgets, .shopping, .sports, .math, .gifts, .videography, .news, .cars {
    box-shadow: 0px 8px 20px rgba(28, 16, 70, 0.12);
    border-radius: 8px;
    margin-top: 20px;
    margin-right: 20px;
  }

  form {
    padding-top: 70px;
  }

  form input {
    cursor: pointer;
    padding: 13px 30px;
    background-color: #18c5d9;
    color: #fff;
    box-shadow: 0px 8px 20px rgba(28, 16, 70, 0.12);
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 15px;
    font-family: 'Poppins';
    font-weight: bold;
    transition: all .5s;
  }

  form input:hover{
  transform: rotate(-4deg);
  }

  @media only screen and (max-width: 970px){
    header h1 {
      margin-top: 60px;
    }
  }

  @media only screen and (max-width: 550px){
    header h1 {
      font-size: 30px;
    }
  }

  </style>
