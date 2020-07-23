# quick-think

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Navigation through the website files
The root vue displaying all other components is the App.vue
Located in the (scr/App.vue)

Nb: All pages, components are linked globally through the main.js file.
You can check the main.js file to see all the routes also 
Located in the (src/main.js)

-- Home Page --
> The HomePage.vue is located in the (src/MainComponents/HomePage.vue)
and is comprising of three different sections in it. These sections
are located in the (src/homePage folder)
- Done By DeadKill

-- About Page --
The AboutPage.vue is located in the (src/MainComponents/AboutPage.vue)
and is a single component (no child components like the HomePage does)
- Done By DeadKill

-- Categories Page --
The CategoriesPage.vue is located in the (src/MainComponents/CategoriesPage.vue)
and is a single component
- Done By p_yn3

-- LeaderBoard Page --
Still in construction
Located at (src/MainComponents/LeaderBoardPage.vue)
- Done By p_yn3

# Main Dynamic components displayed on all pages
The components are in the scr folder
>The App.vue(containing the whole website)
>The Nav.vue
>The Footer.vue
>The NewsLetter.vue (except for the leaderBoard page)

-- All images used can be found in the scr/assets folder