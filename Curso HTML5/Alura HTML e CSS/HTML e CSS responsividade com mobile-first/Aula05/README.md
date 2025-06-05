
# Projeto de Criação de Layout Responsivo

Fizemos a estrutura de todo o nosso site, começando pelo HTML, seguindo a hierarquia dos elementos conforme o layout no Figma. Em seguida, aplicamos as folhas de estilo CSS, começando pela estilização básica, colocando cor de fundo, fontes, tamanhos e organização dos elementos através do Flexbox.

Após isso, passamos para o layout responsivo, criando media queries específicas para diferentes larguras de tela. Começamos ajustando o layout mobile, depois passamos para o tablet e por fim, fizemos ajustes no desktop.

No layout mobile, aplicamos o menu hamburguer, que ao ser clicado, exibe as opções do menu. Também aplicamos espaçamentos entre os elementos utilizando `padding` e `margin`, cuidando para que ficasse confortável para navegação em dispositivos pequenos.

No layout para tablet, utilizamos o `@media screen and (min-width: 1024px)` para aumentar o espaçamento e reorganizar alguns elementos, como listas e seções, garantindo que fiquem bem distribuídos na tela.

No desktop, utilizamos `@media screen and (min-width: 1728px)`, onde aumentamos ainda mais os espaçamentos laterais, utilizando `padding` de até `30vw` (30% da largura da tela em cada lado), centralizando o conteúdo e deixando as bordas amplas. O conteúdo ocupa cerca de 40% da tela e os lados somam 60%, dando uma aparência bem elegante e limpa.

Ajustamos também a seção "Fique por dentro das novidades", aplicando `padding: 3em 20vw` no CSS para que ela acompanhasse a mesma identidade visual da seção anterior.

No footer, percebemos que ele não precisava de tanto espaçamento, mas adicionamos uma borda lateral esquerda nas listas para melhorar a separação visual. Aplicamos `border-left: 1px solid var(--cinza-claro)` e um `padding-left: 1em` para afastar o texto da borda.

O footer também recebeu `padding: 3em 0` para aumentar a margem superior e inferior, mantendo as laterais ajustadas conforme o layout.

O mais interessante é perceber que podemos aplicar bordas, margens e paddings específicos em cada lado dos elementos. Isso nos dá liberdade para controlar exatamente onde queremos que esses ajustes sejam aplicados, sem afetar os outros lados.

Testamos tudo no navegador, e nosso layout ficou completamente funcional. O menu, os espaçamentos, as quebras para diferentes tamanhos de tela, tudo funcionando perfeitamente.

Analisando o Figma, percebemos que há detalhes interativos, como mudança de cor ao passar o mouse sobre itens do menu. Isso é algo que não podemos deixar de fora.

No layout mobile, quando o menu está aberto, o ícone do menu muda de cor (fica branco) e o fundo vira azul degradê, igual ao banner. Para isso, baixamos o ícone do menu branco em SVG e adicionamos ao projeto.

Criamos uma nova classe no label do menu, chamada `container__rotulo`. No CSS, utilizamos:

```css
.container__botao:checked ~ .container__rotulo > .cabeçalho__menu-hamburguer {
  background-image: url("../img/Menu Aberto.svg");
}

.container__botao:checked ~ .container__rotulo {
  background: var(--azul-degrade);
}
```

O uso do `~` busca elementos irmãos que estão depois do input, e `>` busca elementos filhos diretos. A pseudo-classe `:checked` permite detectar se o checkbox do menu está marcado, alterando a imagem e o fundo de acordo.

No tablet, aplicamos o mesmo conceito. No label que controla a abertura do menu de categorias (`label for="opções-menu"`), adicionamos a classe `opções__rotulo` e aplicamos:

```css
.opções__botão:checked ~ .opções__rotulo > .opções__item {
  background: var(--azul-degrade);
  color: var(--branco);
}

.opções__item {
  padding: 2em 1em;
}
```

Assim, quando a categoria está selecionada, ela fica azul com texto branco. O `padding` foi ajustado para que o clique fique confortável e o espaçamento, visualmente agradável.

Notamos também que, quando passamos o mouse sobre os itens da lista (`.lista-menu__item`), eles devem mudar de cor para azul e o texto para branco. Aplicamos:

```css
.lista-menu__item:hover {
  background: var(--azul-degrade);
}

.lista-menu__item:hover > .lista-menu__link {
  -webkit-text-fill-color: var(--branco);
  text-decoration: none;
}
```

Aqui foi necessário usar `-webkit-text-fill-color` porque, no início do projeto, para aplicar o degradê no texto, o preenchimento do texto foi definido como transparente. Ao adicionar esse estilo no hover, restauramos o preenchimento para branco quando o mouse está sobre o item.

O uso de pseudo-classes como `:hover` permite aplicar interações sem precisar de JavaScript, deixando o site mais dinâmico e interessante.

Finalizamos todo o layout, com o menu funcionando, interatividade implementada, espaçamentos ajustados para cada tamanho de tela, e o site está pronto para ser colocado no ar.

O próximo passo é realizar o deploy para que o projeto fique acessível online. E claro, fica aqui o desafio: adicione ainda mais interatividade. Explore efeitos em imagens, botões, links e o que mais sua criatividade permitir!

Nos vemos na próxima etapa! 🚀
