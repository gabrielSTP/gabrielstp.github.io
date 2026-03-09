# 🎨 Guia de Estilos - Liquid Glass Portfolio

## Visão Geral do Design

Este portfólio utiliza a tendência de design **Glassmorphism** combinada com gradientes fluidos para criar uma experiência visual moderna e sofisticada, inspirada no design do iOS.

## 🌈 Sistema de Cores

### Cores Primárias
- **Azul Ciano**: `#00a8ff` - Cor principal, transmite confiança e inovação
- **Índigo**: `#6366f1` - Cor secundária, para transições suaves
- **Rosa**: `#ec4899` - Accent color, para destaque e chamadas à ação

### Cores de Fundo
- **Dark Navy**: `#0f172a` - Fundo principal
- **Slate Dark**: `#1e293b` e `#1a1f35` - Gradientes de fundo
- **Glass**: `rgba(255, 255, 255, 0.15)` - Efeito vidro translúcido

### Cores de Texto
- **Branco**: `#ffffff` - Texto principal
- **Cinza Claro**: `#e2e8f0` - Texto secundário

## 🎭 Componentes Visuais

### 1. Glass Cards
Elementos principais com efeito de vidro frosted.

**Propriedades:**
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 20px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

**Hover State:**
- Elevação sutil (translateY -5px)
- Aumento de opacity no border
- Sombra com cor primária

### 2. Projetos
Cards de projeto com gradiente de fundo mais evidente.

**Propriedades:**
```css
background: linear-gradient(135deg, rgba(0, 168, 255, 0.1), rgba(236, 72, 153, 0.1));
border-radius: 16px;
```

**Animações:**
- Efeito shimmer ao passar o mouse
- Scale leve (1.02)
- Elevação (translateY -8px)

### 3. Botões
Botões com gradiente e efeito ripple.

**Estados:**
- **Default**: Gradiente azul → índigo
- **Hover**: Gradiente rosa → azul, sombra maior
- **Active**: Sem elevação

**Ripple Effect:**
- Círculo que expande ao clicar
- Cor: `rgba(255, 255, 255, 0.2)`

### 4. Modals
Diálogos com backdrop blur e glass effect.

**Propriedades:**
- Backdrop blur: `5px`
- Animação de entrada: slideUp 0.3s
- Tamanho máximo: 700px
- Altura máxima: 85vh

## ✨ Animações

### Fade In
Transição de opacity suave para elements ao entrar no viewport.

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

### Slide In Left
Elementos entram do lado esquerdo com delay escalonado.

```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

### Slide Up (Modals)
Modals entram de baixo para cima com suavidade.

### Shimmer
Efeito de brilho que passa pelos cards em hover.

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Ajustes por Tamanho
- Fontes reduzem progressivamente
- Padding e margin ajustados
- Layout adapta para coluna única em mobile

## 🎯 Tipografia

### Fonte
Sistema de fontes nativa:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

### Tamanhos
- **H1**: 1.8rem (mobile: 1.2rem)
- **H2**: 2.2rem (mobile: 1.5rem)
- **H3**: 1.4rem (mobile: 1.1rem)
- **Parágrafo**: 1.05rem (mobile: 0.95rem)

### Pesos
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## 🌟 Efeitos Especiais

### Backdrop Blur
Cria efeito de vidro frosted com blur no fundo.

```css
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

### Gradientes
Combinações de cores para transições suaves.

**Exemplo:**
```css
background: linear-gradient(135deg, #00a8ff, #ec4899);
```

### Shadows
Sombras sofisticadas para profundidade.

```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

## ♿ Acessibilidade

- Contraste adequado entre texto e fundo
- Animações respeitam `prefers-reduced-motion`
- Navegação por teclado funcional
- Alt text em imagens
- Semantic HTML

## 🔄 Transições

Todas as transições usam:
- **Duration**: 0.3s - 0.6s
- **Timing**: ease, ease-out, cubic-bezier
- **GPU acceleration**: transform e opacity

## 🎪 Padrões de Interação

### Hover States
- Cards: Elevação + mudança de border color
- Botões: Cor + sombra aumentada
- Links: Underline com gradiente

### Focus States
- Visíveis e acessíveis
- Cores contrastantes
- Outline customizado

### Active States
- Feedback visual claro
- Sem delays longos
- Transições suaves

## 🚀 Performance

### Otimizações CSS
- Variables CSS para evitar repetição
- Hardware acceleration com `will-change`
- Animations em GPU quando possível

### Otimizações JS
- Intersection Observer para animations
- Debounce em scroll
- Delegação de eventos

## 📦 Customização

### Mudar Tema
Edite `:root` em `css/style.css`:
```css
:root {
    --primary-color: #seu-azul;
    --secondary-color: #seu-índigo;
    --accent-color: #sua-cor;
}
```

### Ajustar Blur
```css
backdrop-filter: blur(20px); /* Aumentar/diminuir valor */
```

### Modificar Gradientes
Altere as direções e cores nos `linear-gradient()` ou `radial-gradient()`.

## 🎓 Inspiração e Referências

- **iOS Design**: Glassmorphism, uso de transparências
- **Modern Web Design**: Gradientes fluidos, animações suaves
- **Acessibilidade**: WCAG guidelines
- **Performance**: CSS-in-JS best practices

---

**Desenvolvido com atenção aos detalhes e dedicação ao design moderno.**
