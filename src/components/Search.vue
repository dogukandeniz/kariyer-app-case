<template>
  <div class="search-wrapper">
    <div class="search-container">
       <input type="text" v-on:input="search" v-model="searchInput" class="search-input" placeholder="anahtar kelime giriniz(en az 3 harf)..." />
    </div>
    <div class="total-result-container">
      Totally  {{ count }} users
    </div>
  </div>
</template>


<script>
import {  mapActions } from 'vuex';

export default {
  name: 'Search',
  props: {
    count:Number
  },
  data: function () {
    return {
      searchInput: '',
      timer: null,
    }
  },
  methods: {
    ...mapActions('users', {
      getUserByTermAction: 'getUserByTerm',
      getAllUsers: 'getAll',
    }),

    search() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        if(this.searchInput.length > 2){
          this.getUserByTermAction({page:1,term:this.searchInput})
        }else{
          this.getAllUsers({page:1})
        }
      }, 800);
    }
  },


}
</script>


<style lang="scss" scoped>
@mixin placeholder {
  ::-webkit-input-placeholder {
    @content
  }

  :-moz-placeholder {
    @content
  }

  ::-moz-placeholder {
    @content
  }

  :-ms-input-placeholder {
    @content
  }
}

@include placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #000;
  opacity: 0.5;
}
.search-wrapper{
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;

  .total-result-container{
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #000000;

  }

  input{

    width: 400px;
    height: 55px;
    padding: 0 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #cacaca;
    color: #000000;
    border-radius: 20px;

  }
}


@media all and (max-width: 600px) {
  .search-wrapper{
    .search-container{
      width: 100%;
      margin-bottom: 10px;
    }
    input{
      width: 100%;
    }
  }
}

</style>
