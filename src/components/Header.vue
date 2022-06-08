<template>
  <header>
    <div class="c-wrapper">
      <router-link :to="{ name: 'Home'}" class="logo">
        <img src="@/assets/logo.png">
        </router-link>
    </div>
  </header>
</template>


<script>

export default {
  name: 'Header',
}
</script>


<style lang="scss">

header{
  height: 120px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  display: flex !important;
  align-items: center;

  .logo{
    height: 50px;
    display: flex;
    img{
      height: 100%;
    }
  }
}

</style>
