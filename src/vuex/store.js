import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        commodity :[
            { id:1 ,name:'iphone5',num:'10',price:'2000'},
            { id:2 ,name:'iphone6',num:'5',price:'5000'},
            { id:3 ,name:'ipad',num:'6',price:'4000'},
            { id:4 ,name:'macbook',num:'3',price:'12000'}
        ]
}
const mutations = {
    increment (state){
        state.count++
    }
}
const getters = {
    doneTodos : state => {
        return state.todos.filter(todo => todo.id==1)
    },
    doneTodos2 :state => {
        return state.todos.filter(doto => doto.id >=2)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})