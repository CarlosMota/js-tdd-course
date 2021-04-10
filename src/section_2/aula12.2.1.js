 /**
  *  Variáveis craiadas através da palavra chave 'var' são globais, a não ser que estejam dentro 
  *  de funções.
  *  Elas também são conhecidas como functions scope
  */
  var animal

  function sayAnimal (){
      animal = 'cat';
      console.log(animal);
  }
  
  sayAnimal();
  console.log(animal);
  