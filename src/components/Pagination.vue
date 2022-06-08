<template>
  <div class="page-container">
    <div v-for="index in getPageCount()" :key="index"
         class="page-item"
         :class="{ active: index === this.users.page}"
         @click="selectItem(index)"
    >{{ index }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Pagination',
  props: {
    count:Number
  },
  data() {
    return {
      activeItem: 1,
    };
  },
  methods: {
    ...mapActions('users', {
      getAllUsersAction: 'getAll',
      getUserByTermAction: 'getUserByTerm',
    }),
    getPageCount() {
      return Math.ceil(this.count / 5);
    },
    selectItem(i) {
      this.activeItem = i;
      if(this.users.searched){
        this.getUserByTermAction({page:i,term:this.users.searchText});
      }else{
        this.getAllUsersAction({page:i});
      }
    },
  },
  computed: {
    ...mapState({
      users: state => state.users,
    })
  },

}
</script>

<style lang="scss">
.page-container{
  width: 100%;
  height: 120px;
  display: flex !important;
  align-items: center;
  justify-content: center;

  .page-item{
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #000000;
    background: #FFFFFF;
    margin-right: 8px;
    cursor: pointer;
    &.active{
      background: #BD9A5F;
      color: #FFFFFF;
    }

    >:last-child{
    margin-right: 0;
  }

  }

}
</style>
