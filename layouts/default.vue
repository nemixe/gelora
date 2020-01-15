<template>
  <div class="container-app z-0 m-auto">
    <nuxt />
  </div>
</template>

<style scoped>

.container-app {
  max-width: 480px;
}

.page-enter-active {
  animation: bounce-out .2s
}

.page-leave-active {
  animation: bounce-in .07s
}

.page-enter, .page-leave-active {
  opacity: 0
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(1);
    opacity: .5;
  }
  100% {
    transform: scale(.98);
    opacity: 0;
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(.98);
    opacity: 0;
  }
  30% {
    transform: scale(1);
    opacity: .5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    margin-top: 7px;
    opacity: .3;
  }
  60% {
    margin-top: 1px;
    opacity: .7;
  }
  100% {
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    margin-top: 0px;
    opacity: 1;
    }
  60% {
    margin-top: 1px;
    opacity: .5;
  }
  100% {
    margin-top: 7px;
    opacity: .3;
  }
}

</style>
