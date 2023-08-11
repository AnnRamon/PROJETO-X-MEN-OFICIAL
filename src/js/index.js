
//paso 1- pegar os personagens no js pra poder veificar quando o usuario passra o mauser em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//passo 2- adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
      //passo 3- verificar se ja existe um personagem selecionado,se sim devemos remover a seleção dele
      
       const personagemSelecionado = document.querySelector('.selecionado');
       personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');


        //obijetivo 2_quando passa o mause em cima do personagem na lista,trocar o imagem,o nome e o elemento do personagem grande pra adiconar informaçoes nele

        // passo 1-pegar o elemento do personagem grande pra adicionar as informaçoes nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

      

        // passo 2- alterar a imagem do personagem graande

        const idPersonagem = personagem.attributes.id.value;
        

       imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

       //PASSO 3- Altera o nome do personagem grande
       const nomePersonagem = document.getElementById('nome-personagem');
       nomePersonagem.innerText = personagem.getAttribute('data-name')

         //passo 4- altera a descricao do personagem grande
       const descricaoPersonagem = document.getElementById('descricao-personagem');
       
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

       

        



    })
})


