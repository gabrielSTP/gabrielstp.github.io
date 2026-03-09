# 🎨 Exemplos de Customizações

## 1. Mudar Paleta de Cores Completa

### Exemplo: Tema Escuro Profundo (Dark Mode Pro)

```css
/* Em css/style.css, substitua :root {} */
:root {
    --primary-color: #64748b;      /* Cinza azulado */
    --secondary-color: #94a3b8;    /* Cinza claro */
    --accent-color: #f97316;       /* Laranja */
    --dark-bg: #020617;            /* Mais escuro */
    --glass-bg: rgba(15, 23, 42, 0.5);
    --glass-border: rgba(148, 163, 184, 0.3);
    --text-light: #f1f5f9;
    --text-secondary: #cbd5e1;
}
```

### Exemplo: Tema Neon

```css
:root {
    --primary-color: #00ff88;      /* Verde neon */
    --secondary-color: #ff006e;    /* Rosa neon */
    --accent-color: #00ffff;       /* Ciano neon */
    --dark-bg: #0a0e27;
    --glass-bg: rgba(10, 14, 39, 0.7);
    --glass-border: rgba(0, 255, 136, 0.3);
    --text-light: #ffffff;
    --text-secondary: #e0e0e0;
}
```

### Exemplo: Tema Warm (Tons Quentes)

```css
:root {
    --primary-color: #f97316;      /* Laranja */
    --secondary-color: #ea580c;    /* Laranja escuro */
    --accent-color: #fbbf24;       /* Âmbar */
    --dark-bg: #1f1410;            /* Marrom muito escuro */
    --glass-bg: rgba(31, 20, 16, 0.7);
    --glass-border: rgba(249, 115, 22, 0.2);
    --text-light: #fef3c7;
    --text-secondary: #fed7aa;
}
```

## 2. Ajustar Blur e Transparência

### Mais Opaco (Melhor Legibilidade)
```css
.glass-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.25); /* De 0.15 para 0.25 */
}
```

### Mais Translúcido (Mais Elegante)
```css
.glass-card {
    backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.08); /* De 0.15 para 0.08 */
}
```

## 3. Modificar Velocidade de Animações

### Mais Rápido
```css
.glass-card {
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1); /* De 0.4s */
}

@keyframes slideInLeft {
    /* ... */
    animation: slideInLeft 0.3s ease-out; /* De 0.6s */
}
```

### Mais Lento
```css
.glass-card {
    transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1); /* De 0.4s */
}

@keyframes slideInLeft {
    animation: slideInLeft 1.2s ease-out; /* De 0.6s */
}
```

## 4. Adicionar Bordas Coloridas

### Cards com Bordas Vivas
```css
.glass-card {
    border: 2px solid var(--primary-color);
    border-radius: 20px;
    background: var(--glass-bg);
    padding: 2rem;
}

.glass-card:hover {
    border-color: var(--accent-color);
}
```

### Gradiente de Borda
```css
.glass-card {
    background: linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box,
                linear-gradient(135deg, var(--primary-color), var(--accent-color)) border-box;
    border: 2px solid transparent;
}
```

## 5. Modificar Tamanhos de Fonte

### Tipografia Menor (Mais Compacta)
```css
h2 {
    font-size: 1.8rem; /* De 2.2rem */
}

h3 {
    font-size: 1.1rem; /* De 1.4rem */
}

p {
    font-size: 0.95rem; /* De 1.05rem */
}
```

### Tipografia Maior (Mais Imersiva)
```css
h2 {
    font-size: 2.8rem; /* De 2.2rem */
}

h3 {
    font-size: 1.8rem; /* De 1.4rem */
}

p {
    font-size: 1.2rem; /* De 1.05rem */
}
```

## 6. Customize Botões

### Botões com Ícones
```html
<button class="modal-button" data-modal="modal1">
    📝 Ver Detalhes
</button>
```

### Botões Maiores
```css
button {
    padding: 1rem 2rem; /* De 0.75rem 1.5rem */
    font-size: 1.1rem; /* De 1rem */
    border-radius: 16px; /* De 12px */
}
```

### Botões com Outline
```css
button {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    transition: all 0.3s ease;
}

button:hover {
    background: var(--primary-color);
    color: white;
}
```

## 7. Adicionar Background Patterns

### Padrão de Pontos
```css
body::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
}
```

### Padrão Geométrico
```css
body::before {
    background-image: 
        linear-gradient(45deg, transparent 48%, rgba(0,168,255,0.05) 49%, rgba(0,168,255,0.05) 51%, transparent 52%);
    background-size: 50px 50px;
}
```

## 8. Modificar Espaçamento

### Layout Mais Apertado
```css
main {
    padding: 1rem; /* De 2rem */
}

.glass-card {
    padding: 1rem; /* De 2rem */
    margin-bottom: 1rem; /* De 2rem */
}

section {
    margin-bottom: 2rem; /* De 4rem */
}
```

### Layout Mais Espaçado
```css
main {
    padding: 4rem; /* De 2rem */
}

.glass-card {
    padding: 3rem; /* De 2rem */
    margin-bottom: 3rem; /* De 2rem */
}

section {
    margin-bottom: 6rem; /* De 4rem */
}
```

## 9. Adicionar Shadow Efeitos Dramáticos

### Sombras Dramáticas
```css
.glass-card {
    box-shadow: 
        0 20px 60px rgba(0, 168, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.glass-card:hover {
    box-shadow: 
        0 30px 80px rgba(0, 168, 255, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

## 10. Personalizações de Forma

### Cards com Cantos Mais Arredondados
```css
.glass-card {
    border-radius: 30px; /* De 20px */
}

.project {
    border-radius: 24px; /* De 16px */
}

button {
    border-radius: 20px; /* De 12px */
}
```

### Cards com Cantos Retos (Minimalista)
```css
.glass-card {
    border-radius: 8px;
}

.project {
    border-radius: 6px;
}

button {
    border-radius: 4px;
}
```

## 11. Adicionar Efeito Glow

### Glow Animado
```css
@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(0, 168, 255, 0.5);
    }
    50% {
        box-shadow: 0 0 40px rgba(0, 168, 255, 0.8);
    }
}

.glass-card:hover {
    animation: glow 2s ease-in-out;
}
```

## 12. Temas Específicos

### Tema Minimalista
```css
:root {
    --primary-color: #000000;
    --secondary-color: #333333;
    --accent-color: #666666;
    --glass-bg: rgba(255, 255, 255, 0.05);
}

.glass-card {
    border: 1px solid #333333;
}

p {
    font-weight: 300; /* Mais leve */
    letter-spacing: 0.5px;
}
```

### Tema Colorido
```css
:root {
    --primary-color: #ff006e;
    --secondary-color: #00d9ff;
    --accent-color: #ffbe0b;
    --dark-bg: #000000;
}
```

### Tema Corporativo
```css
:root {
    --primary-color: #0052cc;      /* Azul corporativo */
    --secondary-color: #003d99;    /* Azul mais escuro */
    --accent-color: #0066ff;       /* Azul claro */
    --dark-bg: #0a1428;
}

p {
    line-height: 1.6; /* Menos altura */
}
```

## 13. Adicionar Google Fonts

```html
<!-- No <head> do index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* Em css/style.css */
body {
    font-family: 'Poppins', sans-serif;
}
```

## 14. Adicionar Ícones Font Awesome

```html
<!-- No <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

```html
<!-- Usar em qualquer lugar -->
<i class="fas fa-github"></i> GitHub
<i class="fas fa-envelope"></i> Email
```

## 15. Adicionar Transição Suave ao Carregar

```css
body {
    animation: fadeInBody 1s ease-out;
}

@keyframes fadeInBody {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```

---

**Combine customizações para criar seu estilo único! 🚀**
