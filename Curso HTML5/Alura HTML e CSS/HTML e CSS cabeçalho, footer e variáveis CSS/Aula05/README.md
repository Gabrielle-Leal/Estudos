# Projeto Portfólio com Variáveis CSS

Este projeto é um exemplo prático de como aplicar variáveis CSS para facilitar a manutenção de um site. Durante o desenvolvimento, seguimos uma sequência lógica para estruturar, aplicar e testar variáveis de cor e fonte, garantindo um visual coeso e facilmente personalizável.

---

## 🎨 Uso de Variáveis CSS

### Declaração de Variáveis

No início do projeto, declaramos nossas variáveis no seletor `:root`. Isso nos permite acessar e reutilizar essas variáveis em qualquer parte do código CSS.

```
:root {
    --cor-primaria: #000000;
    --cor-secundaria: #F6F6F6;
    --cor-terciaria: #22D4FD;
    --cor-hover: #272727;

    --fonte-primaria: 'Krona One', sans-serif;
    --font-secundaria: 'Montserrat', sans-serif;
}
```

Aplicação das Variáveis
Substituímos os valores fixos (hexadecimais e nomes de fonte) pelo uso da função var(), conforme exemplo abaixo:
```
body {
    background-color: var(--cor-primaria);
    color: var(--cor-secundaria);
}

.cabecalho__menu__link {
    color: var(--cor-terciaria);
    font-family: var(--font-secundaria);
}
```
Pseudoclasse :hover
Criamos a variável --cor-hover para o efeito de hover nos botões e aplicamos:
```
.apresentacao__links__link:hover {
    background-color: var(--cor-hover);
}
```
## 🧪 Teste de Paleta Alternativa
Para validar a eficiência do uso de variáveis, testamos uma nova paleta do site Color Hunt, utilizando o tema "Coffee". As variáveis foram atualizadas conforme abaixo:
```
:root {
    --cor-primaria: #2C3639;
    --cor-secundaria: #DCD7C9;
    --cor-terciaria: #A27B5C;
    --cor-hover: #3F4E4F;

    --fonte-primaria: 'Krona One', sans-serif;
    --font-secundaria: 'Montserrat', sans-serif;
}
```
## 🧹 Finalização e Limpeza
Após os testes, retornamos às cores originais do projeto e removemos os comentários desnecessários no CSS:

Removidos:
```
/* height: 100vh */
/* background-color: #22D4FD */
```
O projeto está finalizado e pronto para futuras modificações com total flexibilidade, graças ao uso inteligente de variáveis.

## ✅ Considerações Finais
Mudanças de cores e fontes podem ser feitas centralmente via :root.

É possível criar novas variáveis para margens, espaçamentos, ou tamanhos, conforme a necessidade.

O uso de variáveis CSS torna o projeto mais organizado, limpo e profissional.
