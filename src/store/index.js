import { createStore } from 'vuex'
import { users } from './users.module';

export default createStore({
  modules: {
   users
  },
})
