const axios = require('axios');


class IdadeController {
    async buscaIdade (req, res) {
    const { nome }  = req.body;
    const { nome2 } = req.body;
    const { nome3 } = req.body;
    
   let nomes = [nome.toLowerCase(), nome2.toLowerCase(), nome3.toLowerCase()]
   let contador = 0
nomes.forEach(nome => { 
   let Primeironome = nome.split(' ')[0] // pega só a primeira palavra
   let  nomenew = Primeironome.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // tira acento
    nomes[contador] = nomenew  
    contador++
});
    
    let final = []
    let contador2 = 0
while (contador2 < 3){ 
    final[contador2] = await buscaIdadeNaAPI(nomes[contador2]);
    contador2++
 };


 let peoples = sortByKey(final, "age");

 function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    }

    return res.render('ShowIdade', {peoples});
}
}

const buscaIdadeNaAPI = async (nome) => {

   const URL = "https://api.agify.io/?name="+nome;
    try {
        const resposta = await axios.get(URL);
       return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { IdadeController, buscaIdadeNaAPI };