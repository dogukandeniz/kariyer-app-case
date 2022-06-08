<template>
  <div  v-for="user in items" :key="user._id" class="card-container">
    <router-link :to="{ name: 'Detail', params: { id: user._id }}" class="route-link">
    <div class="visual-area">
      <img :src="getImgUrl(user.image)"  alt="">
    </div>
    <div class="content-area">
      <div class="c-item-01">
        <span>Name</span> {{user.name}}
      </div>
      <div class="c-item-01">
        <span>Phone</span> {{user.email}}
      </div>
      <div class="c-item-01">
        <span>Location</span> {{user.location}}
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['items'],
  name: 'Card',
  methods: {
    getImgUrl(pic) {
        return require('@/'+pic)

    }
  }

}
</script>


<style lang="scss">

.card-container{
  width: calc(25% - 15px);
  margin: 0 20px 20px 0;
  box-shadow: 0px 0px 19px rgba(165, 165, 165, 0.21);

  .route-link{
    text-decoration: none;
  }

  &:nth-child(4n){
    margin-right: 0;
  }
  .visual-area{
    img{
      width: 100%;
    }
  }
  .content-area{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    .c-item-01{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 203%;
      color: #000000;

      span{
        font-weight: 600;
      }
    }
  }
}

@media all and (max-width: 600px) {
  .card-container{
    width: calc(50% - 20px);
    margin: 0 40px 40px 0;

    &:nth-child(2n){
      margin-right: 0;
    }
  }
}

</style>
