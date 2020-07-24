<template>
<div>
    <div>
   <Nav></Nav>
    <transition name="view">    
      <router-view></router-view>
    </transition>
  </div>
  <preLoad></preLoad>
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

<style>
.view-enter-active, .view-leave-active{
  transition: all .4s;
}
.view-enter-active{
  transition-delay: 1s;
}
.view-enter, .view-leave-to{
  opacity: 0;
  transform: rotateY(90deg);
}
.view-enter-to, .view-leave{
  opacity: 1;
  transform:  rotateY(0deg);
}
</style>
