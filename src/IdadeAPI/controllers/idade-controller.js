const axios = require('axios');

function testenome(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

class IdadeController {
    async buscaIdade (req, res) {

    const { nome } = req.body;

    if(testenome(nome)) {

    const info = await buscaIdadeNaAPI(nome);

    return res.render('ShowIdade', {info});

    }else{
        res.send("Digite um nome com apenas letras")
    }
}
}

const buscaIdadeNaAPI = async (nome) => {

   const URL = `https://api.agify.io/?name=${nome}`;
    try {
        const resposta = await axios.get(URL);
       return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { IdadeController, buscaIdadeNaAPI };