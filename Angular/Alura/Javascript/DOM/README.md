<h1 align="center"> Projeto: Temporizador de Foco e Descanso </h1>
Este projeto é um temporizador de foco e descanso que altera dinamicamente a aparência da tela conforme o modo selecionado: Foco, Descanso Curto e Descanso Longo.
A aplicação foi construída utilizando HTML, CSS e JavaScript, focando em manipulação do DOM e boas práticas de desenvolvimento.

<p align="center">
<img loading="lazy" src="https://github.com/user-attachments/assets/c7ce268c-dfc8-436d-94e3-61dc853cbb5e"/>
</p>


# :hammer: Funcionalidades do projeto
- `Funcionalidade 1`: Alteração dinâmica da cor de fundo conforme o modo selecionado.
- `Funcionalidade 2`: Mudança de imagens e textos para cada contexto.
- `Funcionalidade 3`: Organização de código limpo e modularizado.
- `Funcionalidade 4`: Utilização de eventos para capturar interações do usuário.

# :file_folder: Estrutura do Projeto
- `index.html`: Estrutura base da página, com utilização de data-attributes para controlar o contexto.

- `styles.css`: Estilizações para cada contexto (foco, descanso-curto, descanso-longo), utilizando variáveis CSS.

- `script.js`: Código JavaScript que:

Captura os botões através do querySelector().

Adiciona eventos de clique usando addEventListener().

Altera dinamicamente o atributo data-contexto usando setAttribute().

# :white_check_mark: Boas Práticas Adotadas
Utilização do atributo defer para carregar o JavaScript somente após a renderização do HTML.

Manipulação eficiente do DOM com querySelector(), addEventListener() e setAttribute().

Separação clara de responsabilidades entre HTML, CSS e JavaScript.
