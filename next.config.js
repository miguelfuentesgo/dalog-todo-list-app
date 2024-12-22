// next.config.js
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    additionalData: `@use "_main.scss" as *;`, // Carga el archivo principal con las variables globales
  },
};