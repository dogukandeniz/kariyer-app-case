<template>
  <div class="c-wrapper">
    <div class="c-column-01">
      <img :src="getImgUrl(user.image)"  alt="">
    </div>
    <div class="c-column-02">
      <h5 class="c-item-01">{{ user.name }}</h5>
      <span class="c-item-02">{{ user.email }}</span>
      <span class="c-item-02">{{ user.phone }}</span>
      <span class="c-item-02"> {{ user.policy }}</span>
      <span class="c-item-03">{{ user.location }}</span>
    </div>

  </div>
</template>



<script>
// @ is an alias to /src


import { mapState } from 'vuex';
import { useRoute } from 'vue-router'

export default {
  name: 'Detail',
  data() {
    return { user: null }
  },

  created () {
    const route = useRoute();
    const id = route.params.id;
    this.user  = this.users.items.find(user => user._id == id);
  },
  computed: {
    ...mapState({
      users: state => state.users,
    })
  },
  methods: {
    getImgUrl(pic) {
      return require('@/'+pic)

    }
  }

}
</script>

<style lang="scss" scoped>

.c-wrapper{
  padding:120px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .c-column-01{
    width: 500px;
    margin-right: 160px;
    img{
      width: 100%;
    }
  }
  .c-column-02{
    display: flex;
    flex-direction: column;
    flex:1;
    .c-item-01{
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 53px;
      color: #015D4F;
      margin-bottom: 16px;
    }
    .c-item-02{
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
      color: #80837D;
      margin-bottom: 8px;

    }
  }
}


@media all and (max-width: 600px) {
  .c-wrapper{
    .c-column-01{
      width: 100%;
      margin-bottom: 40px;
      margin-right: 0;
    }
    .c-column-01{
      width: 100%;
    }
  }
}

</style>