<h1>Projeto: Temporizador de Foco e Descanso</h1>

## :clipboard: Descrição

Neste projeto, desenvolvemos um temporizador de foco e descanso que altera dinamicamente a interface da página conforme o tipo de temporizador selecionado.

### As alterações envolvem:

Cor de fundo da página.

Imagem ilustrativa exibida.

Texto descritivo.

Estilização dos botões conforme o contexto.

O objetivo é proporcionar uma experiência visual imersiva para cada fase: Foco, Descanso Curto e Descanso Longo.

🚀 Funcionalidades Implementadas
1. Alteração da cor de fundo
Cada contexto possui uma cor de fundo distinta, definida no CSS através do atributo data-contexto aplicado à tag <html>:

- `Foco`: Gradiente em tons de lilás.

- `Descanso Curto`: Gradiente em tons de verde.

- `Descanso Longo:`: Gradiente em tons de azul.

Essas cores são definidas no CSS:

```
css

[data-contexto="foco"] {
    --main-bg-color: linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%);
}

[data-contexto="descanso-curto"] {
    --main-bg-color: linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%);
}

[data-contexto="descanso-longo"] {
    --main-bg-color: linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%);
}
```
A troca dinâmica acontece alterando o valor do atributo data-contexto da <html> via JavaScript.

2. Estrutura dos Arquivos
- `index.html`: Estrutura básica do site.

- `styles.css`: Estilizações baseadas em contexto.

- `script.js:`: Arquivo JavaScript para manipulação do DOM.

3. Linkando o JavaScript
O arquivo script.js foi inserido no index.html usando a tag <script> com o atributo defer, garantindo melhor performance:
```
html

<link rel="stylesheet" href="./styles.css">
<script src="./script.js" defer></script>
```
O defer garante que o script será carregado apenas após o carregamento completo do HTML.

4. Manipulação de Elementos com JavaScript
Dentro do script.js:

Selecionamos elementos do DOM:
```
javascript

const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
Adicionamos eventos de clique:


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})
```
Quando o botão é clicado, o atributo data-contexto da tag <html> é alterado, modificando automaticamente a cor de fundo e, futuramente, as imagens e textos.

5. Contexto Visual de Cada Temporizador

Temporizador	Cor de Fundo	Imagem	Texto
Foco	Lilás	Imagem relacionada à concentração	Texto motivacional para foco
Descanso Curto	Verde	Imagem de descanso breve	Texto para pausas curtas
Descanso Longo	Azul	Imagem inédita	“Hora de voltar à superfície. Faça uma pausa longa.”
📌 Observações Importantes
Foi necessário alterar manualmente o atributo data-contexto no HTML para realizar testes iniciais de cor.

Com o JavaScript implementado, agora a troca de contexto acontece dinamicamente no clique dos botões.

O botão "Foco" tinha um estilo especial que foi transferido para "Descanso Curto" quando esse modo é ativado.

📈 Tecnologias Utilizadas
HTML5

CSS3

JavaScript

🛠️ Melhorias Futuras

Adicionar o botão para "Descanso Longo" e tratá-lo no script.js.

Alterar dinamicamente também as imagens e o texto conforme o contexto do temporizador.

Implementar a contagem regressiva de tempo para cada tipo de sessão (Foco, Descanso Curto e Descanso Longo).

Melhorar a responsividade para dispositivos móveis.

✅ Status do Projeto
✔️ Troca dinâmica de contexto para "Foco" e "Descanso Curto" implementada.
✔️ Preparação para implementação do "Descanso Longo".
🚧 Em desenvolvimento: troca de imagem e texto dinamicamente.
