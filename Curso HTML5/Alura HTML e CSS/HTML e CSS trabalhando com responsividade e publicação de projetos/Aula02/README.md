
# 📚 Aula – Unidades Relativas em CSS (% e rem)

## 🎯 Objetivo da aula

Aprender e aplicar **unidades relativas de medida** em CSS para tornar o projeto **mais responsivo e acessível**, substituindo larguras fixas (como `px`) por unidades relativas (`rem` e `%`).

---

## ✅ O que evoluímos no projeto:

### 1. 📐 Uso de porcentagem (%) para responsividade

- Aplicamos `width: 50%` em elementos estratégicos para que ocupem metade do espaço do elemento pai, facilitando a adaptação em diferentes tamanhos de tela.

**Exemplo de aplicação:**

```css
.apresentacao__imagem {
  width: 50%;
}

.apresentacao__conteudo {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
```

---

### 2. 🖼️ Criação e reutilização de classe para imagem

- Criamos a classe `.apresentacao__imagem` para a tag `<img>` tanto no `index.html` quanto no `about.html`, garantindo consistência visual nos dois arquivos.

---

### 3. 🧼 Refatoração de nomes de classe

- Renomeamos `.apresentacao__links__link` para `.apresentacao__links__navegacao`, seguindo uma nomenclatura mais clara e semântica.

```css
.apresentacao__links__navegacao {
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 50%;
  /* demais estilos */
}
```

---

## 🧪 Testes e observações

- Ao testar no navegador, observamos que:
  - Os elementos se adaptam melhor ao redimensionamento da tela.
  - O conteúdo textual quebra corretamente em dispositivos menores.
  - Os botões ainda precisam de ajustes finos para evitar que o texto ultrapasse o contorno em telas muito pequenas.

---

## 🛠️ Próximas melhorias

- Implementar **media queries** para corrigir quebras de layout em telas pequenas.
- Usar `max-width` para limitar a expansão excessiva de elementos em telas grandes.
- Ajustar o padding dos botões de forma proporcional (usando `em` ou `rem`).

---

> 🚀 Essa aula foi fundamental para começarmos a aplicar **CSS responsivo de verdade**, deixando nosso projeto mais moderno e adaptável.
