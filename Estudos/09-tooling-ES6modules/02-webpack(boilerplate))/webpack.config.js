// precisamos importar do node um modulo que se chama path
const path = require(`path`)

// agora voce tem que fazer este arquivo exportar alguma coisa:
module.exports = {
    mode: `development`,
    entry: `./src/index.js`,
    outpu: { 
        path: path.resolve(__dirname, `public`, `assets`, `js`),
        filename: `bundle.js`
    },
}

