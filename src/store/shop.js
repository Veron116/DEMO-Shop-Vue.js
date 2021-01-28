export default {
    state: {
       shopList: [
           {
               id: 1,
               title: 'Nike Red',
               descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                img: require('../assets/img/1.png'),
           },
       ] 
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state) {
            return state.shopList
        }
    },
}