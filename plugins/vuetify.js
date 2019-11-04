import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#121212',
        // primary: '#000000',
        accent: colors.red.darken3,
        secondary: colors.red.darken3,
        info: colors.red.lighten1,
        warning: colors.red.base,
        error: colors.red.accent4,
        success: colors.red.accent3
      }
    }
  }
}

Vue.use(Vuetify, opts)
