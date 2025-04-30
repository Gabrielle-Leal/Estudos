# Projeto de Layout com Flexbox, Estilização, Ícones de Redes Sociais e Efeito Hover

Este projeto tem como objetivo criar uma página com botões de redes sociais (GitHub, LinkedIn e Twitch), utilizando **Flexbox** para o posicionamento, adicionando ícones personalizados ao lado do texto de cada botão, e aplicando o efeito **Hover** para destacar os botões quando o usuário passar o cursor por cima deles.

## Etapas do Desenvolvimento

### 1. Inserção de Ícones

Os ícones das redes sociais foram inseridos nos botões para melhorar a experiência do usuário. As imagens dos ícones foram armazenadas em uma pasta chamada `assets` para manter o projeto organizado.

#### Passos:

- **Criação da estrutura de links**: A estrutura do código foi alterada para incluir os ícones ao lado dos textos dos botões. O caminho das imagens foi especificado dentro da tag `<img>`.
  
- **Organização das imagens**: As imagens dos ícones foram movidas para uma pasta chamada `assets` para manter o código mais limpo e organizado.

- **Atualização das tags `<a>`**: Os links de redes sociais foram atualizados, e a tag `<img>` foi inserida antes do texto do link, para exibir o ícone ao lado do texto.

#### Exemplo de código:

```html
<main class="apresentacao">
    <section class="apresentacao__conteudo">
        <div class="apresentacao__links">
            <h2 class="apresentacao__links__subtitulo">Acesse minhas redes:</h2>
            <a class="apresentacao__links__link" href="https://github.com/rafaballerini">
                <img src="./assets/github.png" alt="Ícone do GitHub">
                Github
            </a>
            <a class="apresentacao__links__link" href="https://linkedin.com/in/rafaellaballerini">
                <img src="./assets/linkedin.png" alt="Ícone do LinkedIn">
                LinkedIn
            </a>
            <a class="apresentacao__links__link" href="https://twitch.tv/guilimadev">
                <img src="./assets/twitch.png" alt="Ícone do Twitch">
                Twitch
            </a>
        </div>
    </section>
    <img src="./assets/imagem.png" alt="Foto da Joana Santos programando">
</main>
```

### 2. Organização das Imagens
Criando a pasta assets: A pasta assets foi criada para armazenar todas as imagens, incluindo os ícones das redes sociais e a imagem principal da página.

Atualização dos caminhos das imagens: O caminho das imagens foi alterado para refletir a nova estrutura de pastas, utilizando ./assets/nome-da-imagem.png.

### 3. Alinhamento dos Ícones e Texto com Flexbox
Após inserir os ícones, foi necessário ajustar o alinhamento para garantir que tanto os ícones quanto os textos ficassem centralizados dentro de cada botão.

Passos:
Utilização de Flexbox: Para alinhar os elementos (ícones e textos) dentro da tag <a>, foi aplicada a propriedade display: flex no CSS. Isso cria um contêiner flexível que permite alinhar os itens dentro dele.

Centralização Horizontal: A propriedade justify-content: center foi utilizada para garantir que os ícones e textos ficassem centralizados no eixo horizontal.

Espaçamento entre Ícones e Texto: Para adicionar o espaçamento entre o ícone e o texto, a propriedade gap: 16px foi utilizada, conforme indicado pelo design no Figma.

Código CSS Atualizado:
```
.apresentacao__links__link {
    display: flex;
    justify-content: center;
    gap: 16px; /* Espaço entre o ícone e o texto */
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
Resultado:
Os ícones e textos agora estão centralizados dentro dos botões, com o espaço adequado entre eles, proporcionando uma aparência limpa e organizada na página.

### 4. Adicionando o Efeito Hover
Para criar o efeito de destaque quando o usuário passa o cursor sobre o botão, foi utilizado o efeito Hover. Esse efeito altera a cor de fundo do botão, criando uma resposta visual ao movimento do mouse.

Passos:
Utilização do :hover: Adicionamos a pseudo-classe :hover ao CSS, que altera a cor de fundo do botão quando o cursor passa sobre ele.

Alteração de Cor de Fundo: No Figma, a cor do botão no estado de hover foi identificada como #272727. Esta cor foi aplicada ao fundo do botão quando o cursor está sobre ele.

Código CSS Atualizado com Hover:
```
.apresentacao__links__link:hover {
    background-color: #272727; /* Cor de fundo no estado hover */
}
```
Resultado:
Quando o usuário passa o mouse sobre um dos botões, a cor de fundo é alterada para um tom mais escuro, dando um feedback visual ao usuário.

### 5. Resultados
Após os ajustes, a página exibe os três botões, "Github", "LinkedIn" e "Twitch", com seus respectivos ícones à esquerda do texto, todos alinhados corretamente. Além disso, ao passar o mouse sobre os botões, a cor de fundo deles é alterada, proporcionando uma interação visual agradável.

## Tecnologias Utilizadas

- CSS (Flexbox e Hover)
- Font Awesome (para ícones, caso deseje adicionar mais)
- Imagens de ícones das redes sociais (armazenadas na pasta assets)
