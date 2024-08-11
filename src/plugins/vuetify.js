/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#035732', // Dark Green
          secondary: '#7FBF7F', // Light Green
          accent: '#FFD700', // Gold
          background: '#FFFFFF', // White
          text: '#333333', // Dark Gray
          text2: '#757575', // Dark Gray
          error: '#FF5252', // Your error color
          info: '#2196F3', // Your info color
          success: '#97BF26', // Your success color
          warning: '#FFC107', // Your warning color
          light: '#F2FADC',
        }
      },
    },
  },
})
