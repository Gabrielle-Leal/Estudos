# Responsividade com Flexbox e Media Queries

Este projeto ensina como tornar uma página responsiva utilizando **Flexbox** e **Media Queries** no CSS, com base em um layout criado no Figma.

## 🌐 Estrutura HTML

No arquivo `index.html`, temos a seguinte estrutura principal:

```html
<main class="apresentacao">
  <section class="apresentacao__conteudo">
    <h1>...</h1>
    <p>...</p>
    <div class="apresentacao__links">...</div>
  </section>
  <img class="apresentacao__imagem" src="..." alt="..." />
</main>
```

## 🎨 Estilos com Flexbox

A `main.apresentacao` usa Flexbox para exibir os elementos lado a lado:

```css
.apresentacao {
    padding: 5% 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 82px; /* Espaço entre o texto e a imagem */
}
```

A propriedade `gap` foi adicionada para evitar que a imagem fique colada ao texto.

## 📱 Tornando Responsivo com Media Queries

Para adaptar o layout ao mobile, utilizamos a seguinte media query:

```css
@media (max-width: 1200px) {
    .apresentacao {
        flex-direction: column-reverse; /* Coloca a imagem acima do texto */
    }

    .cabecalho {
        padding: 10%; /* Aumenta o espaçamento no topo e laterais */
    }

    .cabecalho__menu {
        justify-content: center; /* Centraliza os links "Home" e "Sobre mim" */
    }
}
```

### 📌 O que está acontecendo:
- **Até 1200px de largura**, a direção do Flexbox muda para `column-reverse`, colocando a imagem em cima do texto como no Figma mobile.
- O `header.cabecalho` recebe um novo `padding` para aumentar o espaço no topo e centralizar melhor o conteúdo.
- Os itens do menu (`cabecalho__menu`) são centralizados com `justify-content: center`.

## 🔧 Considerações técnicas

- **Flex-direction padrão:** é `row`, por isso, para mobile usamos `column-reverse` e inverter a ordem visual dos elementos.
- **Herança de propriedades no Flexbox:** como `display: flex` já foi declarado anteriormente em `.cabecalho__menu`, só precisamos reconfigurar o alinhamento horizontal.

## 📚 Fontes de consulta

- [Documentação Mozilla - CSS @media](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media)
- [Documentação Flexbox (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex)

## ✅ Resultado

Com essas alterações, a página mantém boa aparência em telas grandes e reorganiza o layout de forma agradável em dispositivos móveis, garantindo melhor **usabilidade** e **experiência do usuário**.