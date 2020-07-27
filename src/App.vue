<template>
<div>   
  <Nav></Nav>
  <transition>
    <router-view></router-view>

  </transition>
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


</style>
