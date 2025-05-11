# 📏 Aula – Unidades de Medida em CSS (rem vs px)

## 💡 O que aprendi nesta aula:

Nesta aula, aprofundei meus conhecimentos sobre as diferentes **unidades de medida no CSS**, com destaque para o uso de `rem` como alternativa mais acessível e responsiva aos `px`.

### ✅ Principais aprendizados:

- Existem **unidades absolutas** (px, cm, mm) e **unidades relativas** (rem, em, %, vw, vh etc).
- A unidade `px` é fixa e **não se adapta às configurações do navegador do usuário**.
- A unidade `rem` é relativa ao elemento raiz (`html`) e permite que o site **respeite o tamanho de fonte configurado pelo usuário no navegador**.
- A conversão de `px` para `rem` é feita dividindo o valor em `px` por `16` (que é o valor padrão do `font-size` do `html`):
  - Ex: `24px` → `1.5rem` (24 ÷ 16)

---

## 🛠️ Melhorias aplicadas no projeto:

Com base no que aprendi, realizei as seguintes mudanças no CSS do projeto:

| Elemento                                | Antes (px) | Depois (rem) |
|-----------------------------------------|------------|---------------|
| `.cabecalho__menu__link`                | 24px       | 1.5rem        |
| `.apresentacao__conteudo__titulo`       | 36px       | 2.25rem       |
| `.apresentacao__conteudo__texto`        | 24px       | 1.5rem        |
| `.apresentacao__links__subtitulo`       | 24px       | 1.5rem        |
| `.apresentacao__links__link` (botões)   | 24px       | 1.5rem        |
| `footer` (rodapé)                       | 24px       | 1.5rem        |

---

## 🧪 Resultado:

Ao alterar as unidades de medida para `rem`, o projeto passou a:

- **Se adaptar ao tamanho de fonte definido nas configurações do navegador**
- **Atender melhor usuários com necessidades de acessibilidade visual**
- Manter um padrão de medida mais flexível e profissional

---

## 📌 Próximos passos:

- Aplicar o uso de `rem` para **margens e paddings** também
- Explorar outras unidades relativas como `%`, `em`, `vh` e `vw`
- Ajustar o layout para garantir responsividade completa

---

> 🧠 _Essa aula me ajudou a entender como pequenas decisões no código impactam diretamente na acessibilidade e experiência do usuário._
