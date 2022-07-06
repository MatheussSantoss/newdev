// quarta limber a partir da 8:30
// terça xpert a partir da 8:30
const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');
let recipes = require('./recipes.json');

const getRecipes = (req, res) => {
  const {name, ingredient1, ingredient2, remove, edit} = URL.parse(req.url, true).query;

  let info = '';

  if (name || ingredient1 || ingredient2) {
    const recipeName = recipes.filter(recipe => recipe.name == name);
    if (recipeName.length && !edit && !remove) {
      res.end('Receita já existente');
    }
    const recipe = {
      name, ingredient1, ingredient2
    }

    if(edit){
      if (recipeName.length) {
        recipeName[0].ingredient1 = ingredient1;
        recipeName[0].ingredient2 = ingredient2;
        info = 'Receita editada com sucesso'
      }else{
        res.end('Receita não encontrada')
      }
    }

      if (remove) {
      info = 'Receita removida com sucesso!';
      recipes = recipes.filter(recipe => recipe.name != name);

      if (!recipeName.length) {
        res.end('Receita não encontrada');
      }
    }else if(!remove && !edit){
      info = 'Receita salva com sucesso!';
      recipes.push(recipe);
    }

    fs.writeFile(
      path.join(__dirname, 'recipes.json'),
      JSON.stringify(recipes, null, 2),
      (error) => {
        if (error) return;

        // console.log('Salvou a receita com sucesso');
        res.end(JSON.stringify({
          status: info,
          data: recipe
        }));
      }
    )
  }else{
    res.end(JSON.stringify(recipes));
  }
}

const server = http.createServer(getRecipes);

server.listen(2727, (req, res) => {
  console.log('API is listening on port: http://localhost:2727')
});



// Ele tá usando "split", q é um método de separar strings dentro de um array,
//  no 1°parâmetro voce passa o que há de referencia para separar, normalmente
// ","

// [gary,gay,ga] - Antes do Split
// array.split(',') <- vai dividir em vários arrays
// {gary, gay, ga} - dps do split, aí ele quebra linha resumindo