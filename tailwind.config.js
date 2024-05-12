/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    screens: {
      'xs580': '580px',
      'xs530': '530px',
      'xs480': '480px',
      'xs430': '430px',
      'xs380': '380px',
      'xs330': '330px',
      'xs280': '280px',
      ...defaultTheme.screens,
    },
    extend: {
      'width':{
        '128': '32rem',
        '7/10': '70%',
        'xs500': '500px',
        'xs450': '450px',
        'xs400': '400px',
        'xs350': '350px',
        'xs300': '300px',
        'xs250': '250px',
      },
      'height':{
        '128': '32rem',
        '7/10': '70%',
        'xs500': '500px',
        'xs450': '450px',
        'xs400': '400px',
        'xs350': '350px',
        'xs300': '300px',
        'xs250': '250px',
      },
      'animation': {
        'fold-corner':'fold-corner 5s ease forwards',
        'spin-paper': 'spin-paper 3s ease forwards',
        'unfold-corner': 'unfold-corner 5s ease forwards'
      },
      'keyframes': {
        'fold-corner': {
          '0%': {
              'width':'0px',
              'height': '0px',
          },
          '100%': {
              'width':'50%',
              'height': '50%'
          }
        },
        'spin-paper': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'unfold-corner': {
          '0%': {
              'width':'50%',
              'height': '50%',
          },
          '100%': {
              'width':'0px',
              'height': '0px'
          }
        }
      }
    }
  }
}