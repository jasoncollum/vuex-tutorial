import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80},
      ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  }
})