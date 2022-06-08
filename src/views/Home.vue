<template>
  <div class="c-wrapper">
    <Search :count="users.count"/>
  </div>
  <div class="c-wrapper">
    <div v-if="users.loading"><Loading /></div>
    <div v-else>
      <div class="card-content" v-if="users.items">
        <Card :items=users.items />
      </div>
      <div v-if="!users.items.length">
        Sonuç yok
      </div>
    </div>

    <div class="c-wrapper">
       <Pagination :count="users.count" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Card from '@/components/Card.vue';
import Loading from '@/components/Loading.vue';
import Pagination from '@/components/Pagination.vue';
import Search from '@/components/Search.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Card,
    Loading,
    Pagination,
    Search,
  },
  computed: {
    ...mapState({
      users: state => state.users,
    })
  },
  created () {
    this.getAllUsers({ page:1 });
  },
  methods: {
    ...mapActions('users', {
      getAllUsers: 'getAll',
    })
  }
}
</script>

<style lang="scss" scoped>

.c-wrapper{
  padding:0;
}
.card-content{
  display: flex;
  flex-wrap: wrap;

}
</style>