import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Shop from '../pages/Shop'

export default new Vuex.Store({
    modules: {
        Shop,
    }
})