# desafioStoom
Projeto do desafio Stoom Front-End

Desenvolvi uma aplicação Web com a biblioteca ReactJs juntamente com JavaScript e TypeScript, além das linguagens de marcação HTML e CSS. A ideia foi desenvolver um site para realizar a compra de uma pizza por etapas, em que o usuário seleciona as opções disponíveis e no final, preenche um pequeno cadastro. Além disso, também no final é exibido um recibo de confirmação dos dados anexados durante o processo.
  
O projeto foi criado via “npx create-react-app [aplicação] -- template” e as estruturas de pastas foram feitas de acordo com a necessidade. Utilizei um context para fazer a troca de páginas através de uma função “changeRoute”. Além disso, para a comunicação com a API, utilizei o axios. Na parte de estilização, utilizei o HTML integrado com o Styled Components para fazer as interações visuais.
	
Há no total 8 páginas para a navegação do usuário, sendo que uma delas, a /pizza-of-day avança a etapa 2, 3 e 4, pois ela por si própria já é a junção de todas essas.
Foram instalados alguns comandos via npm install que estarei deixando aqui para caso alguém for testar a aplicação:


npm install
npm install –save axios
npm i –save-dev @types/react-router-dom
npm install styled-components
npm install history
npm install react-dom
