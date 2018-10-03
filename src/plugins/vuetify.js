import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: "#FF6F00",
    secondary: "#D84315",
    accent: "#FF5722",
    error: "#FF1744",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  },
  customProperties: true,
  iconfont: 'md',
})
