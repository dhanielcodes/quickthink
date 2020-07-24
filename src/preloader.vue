<template>
    <head>
        <div class="circle">
            <div class="circ"></div>
        </div>
    </head>
</template>

<script>
export default {
    
}
</script>

<style scoped>
head{
    width: 100%;
    background: #1C1046;
    background: #18C5D9;
    top: 0;
    z-index: 8;
    left: 0;
    position: fixed;
    display: grid;
    place-items: center;
    height: 100vh;
    animation: close .2s 2s 1 forwards;
}
@keyframes close {
    to{
        opacity: 0;
        z-index: -1;
    }
}
.circle{
    width: 200px;
    height: 200px;
    border-radius: 200px;
        display: grid;
    place-items: center;
    background: #1C1046;
}
.circ{
    width: 180px;
    height: 180px;
    border-radius: 200px;
    border-top: 10px solid white;
    background: #18C5D9;
    animation: rotate 1s 0s infinite linear;
}
@keyframes rotate {
    to{
        transform: rotate(360deg);
    }
}
</style>