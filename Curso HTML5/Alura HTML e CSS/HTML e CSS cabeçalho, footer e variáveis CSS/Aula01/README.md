# Projeto de Layout com Flexbox e Estilização

Este projeto tem como objetivo criar uma página com botões de redes sociais estilizados e posicionados corretamente utilizando **Flexbox**. Também é feita a personalização do subtítulo e a inserção de ícones nos botões, para que a página se alinhe com o design esperado.

## Etapas do Desenvolvimento

### 1. Posicionamento dos Botões

Inicialmente, a página tinha dois botões ("Instagram" e "Github"), que estavam posicionados de forma horizontal. Para corrigir esse problema e exibir os botões na vertical, utilizamos a propriedade `flex-direction: column` no container dos botões. Isso garantiu que o subtítulo e os botões ficassem alinhados verticalmente.

#### Código alterado:

```css
.apresentacao__links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
}
```

### 2. Estilização do Subtítulo
O subtítulo "Acesse minhas redes:" foi estilizado com a fonte Krona One, peso 400 e tamanho 24px. Para isso, foi criada uma nova classe apresentacao__links__subtitulo e aplicada ao elemento h2.

Código alterado:
```css
.apresentacao__links__subtitulo {
    font-family: 'Krona One', sans-serif;
    font-weight: 400;
    font-size: 24px;
}
```
### 3. Estilização dos Botões
Os botões tiveram sua estilização alterada. A cor de fundo foi removida, e foi adicionada uma borda ciano de 2px (border: 2px solid #22D4FD). Também foi alterado o tamanho dos botões, passando de 280px para 378px de largura, e a borda foi suavizada de 16px para 8px.

Código alterado:

```css
.apresentacao__links__link {
    border: 2px solid #22D4FD;
    width: 378px;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 600;
    padding: 21.5px 0;
    text-decoration: none;
    color: #F6F6F6;
    font-family: 'Montserrat', sans-serif;
}
```
Essas alterações garantiram que os botões estivessem com as bordas corretas e o texto nas cores esperadas (branco com bordas ciano).

### 4. Inserção de Ícones nos Botões
Por fim, os ícones de Instagram e GitHub foram adicionados aos botões, utilizando a biblioteca Font Awesome.

Código alterado:
```html
<a class="apresentacao__links__link" href="https://instagram.com/rafaballerini">
    <i class="fab fa-instagram"></i> Instagram
</a>
<a class="apresentacao__links__link" href="https://github.com/guilhermeonrails">
    <i class="fab fa-github"></i> Github
</a>
```
Foram aplicados ícones ao lado do texto, e a estilização foi ajustada para adicionar uma margem entre o ícone e o texto.

Tecnologias Utilizadas
HTML

CSS (Flexbox)

Font Awesome (para ícones)
