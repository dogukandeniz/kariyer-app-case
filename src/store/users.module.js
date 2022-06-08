import { userService } from '../_services';

const state = {
    items:null,
    loading:false,
    page:1,
    count:0,
    searched:false,
    searchText:'',
}

const actions = {
    getAll({  commit }, { page }) {
        commit('getAllRequest', { page });

        userService.getAll({ page })
            .then(
                response => {
                    commit('getAllSuccess', response);
                },
                error => {
                    commit('getAllFailure', error);
                }
            );
    },
    getUserByTerm({  commit }, { page,term }) {
        commit('getUserByTermRequest', { page,term });

        userService.getUserByTerm({ page,term })
            .then(
                response => {
                    commit('getUserByTermSuccess', response);
                },
                error => {
                    commit('getUserByTermFailure', error);
                }
            );
    },
};

const mutations = {
    getAllRequest(state, {page}) {
        state.loading = true;
        state.page= page;
    },
    getAllSuccess(state, user) {
        state.loading = false;
        state.items = user.data.results;
        state.count = user.data.count;
        state.searched = false;

    },
    getAllFailure(state) {
        state.loading = false;
        state.items = null;
        state.searched = false;
    },
    getUserByTermRequest(state, {term,page}) {
        state.loading = true;
        state.searchText = term;
        state.page = page;
    },
    getUserByTermSuccess(state, user) {
        state.loading = false;
        state.items = user.data.results;
        state.count = user.data.count;
        state.searched = true;
    },
    getUserByTermFailure(state) {
        state.loading = false;
        state.items = null;
        state.searched = false;
    },
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};