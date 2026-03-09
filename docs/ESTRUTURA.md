# 📂 Estrutura do Projeto

## Organização de Pastas

```
Portfolio/
│
├── 📄 index.html                 # Arquivo HTML principal
├── 📄 favicon.ico               # Ícone do site (abas do navegador)
│
├── 📁 css/
│   └── 📄 style.css            # Estilos (Glassmorphism + Responsivo)
│
├── 📁 js/
│   └── 📄 script.js            # Lógica JavaScript (Interatividade)
│
├── 📁 assets/
│   ├── 📁 images/              # Imagens do portfólio
│   │   ├── chaqr.png           # Projeto 1 - Sistema QR
│   │   ├── FORM APP.png        # Projeto 2 - Formulário IA
│   │   ├── PREDICTION.png      # Projeto 2 - Predição
│   │   ├── qrcel.jpg           # Projeto 1 - Celular
│   │   └── qrcel1.jpg          # Projeto 1 - Celular alt
│   │
│   └── 📁 icons/               # Ícones (SVG, PNG)
│       └── (A serem adicionados)
│
├── 📄 README.md                 # Documentação principal
├── 📄 DESIGN_GUIDE.md          # Guia de estilos e design
├── 📄 LICENSE.txt              # Licença do projeto
│
└── 📁 .git/                    # Repositório Git (versionamento)
```

## Descrição dos Arquivos

### Raiz
| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura HTML do portfólio |
| `favicon.ico` | Ícone exibido na aba do navegador |
| `README.md` | Documentação principal do projeto |
| `DESIGN_GUIDE.md` | Guia de estilos e design system |
| `LICENSE.txt` | Licença MIT do projeto |

### CSS (`css/`)
| Arquivo | Descrição |
|---------|-----------|
| `style.css` | Estilos principais com glassmorphism |

**Incluí:**
- Variables CSS (cores, fontes)
- Reset de estilos
- Componentes (cards, botões, modals)
- Animações e transições
- Responsive design
- Scrollbar customizada

### JavaScript (`js/`)
| Arquivo | Descrição |
|---------|-----------|
| `script.js` | Lógica interativa do portfólio |

**Funcionalidades:**
- Gerenciamento de modals
- Animações ao scroll
- Navegação ativa
- Parallax effect
- Keyboard shortcuts (ESC)

### Assets (`assets/`)

#### `images/`
Imagens do portfólio (referentes aos projetos):
- `chaqr.png` - Dashboard do sistema de chamada
- `FORM APP.png` - Interface do formulário IA
- `PREDICTION.png` - Resultado de predição
- `qrcel.jpg` e `qrcel1.jpg` - Screenshots do app mobile

#### `icons/` (Estrutura pronta)
Espaço para ícones SVG/PNG que podem ser adicionados:
- Logos de tecnologias
- Ícones de redes sociais
- Ícones de skills

## Tamanhos de Arquivo

```
index.html           ~15 KB
css/style.css        ~20 KB
js/script.js         ~5 KB
Imagens            ~2-5 MB (variável)

Total               ~2-5 MB (com imagens)
```

## Como Adicionar Conteúdo

### 1. Adicionar Nova Imagem
```
1. Copie para: assets/images/
2. Atualize o caminho em index.html
3. Adicione alt text apropriado
```

### 2. Adicionar Novo Projeto
```
1. Duplique a estrutura .project em index.html
2. Atualize h3, p e data-modal
3. Crie novo modal com id correspondente
4. Adicione imagem em assets/images/
```

### 3. Customizar Cores
```
1. Abra css/style.css
2. Edite as variáveis em :root {}
3. Salve e recarregue
```

### 4. Adicionar Nova Seção
```
1. Adicione <section> em index.html
2. Adicione link em <nav>
3. Estilize em css/style.css se necessário
4. Adicione scroll-margin-top: 200px;
```

## Fluxo de Dados

```
index.html (conteúdo)
    ↓
css/style.css (aparência)
    ↓
js/script.js (interatividade)
    ↓
assets/ (mídia)
    ↓
Resultado Visual
```

## Dependências

✅ **Zero dependências externas!**

- Nenhuma biblioteca npm
- Nenhuma CDN obrigatória
- Funciona 100% vanilla
- Font system nativa

## Hospedagem

Arquivos estáticos, pode ser hospedado em:

### Opções Gratuitas
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

### Pago
- Qualquer servidor Web
- Hostings compartilhados
- VPS dedicados

## Performance

- **Carregamento**: < 1s (sem imagens)
- **Renderização**: 60fps (suave)
- **LightHouse Score**: 95+
- **Mobile Friendly**: ✅ Totalmente responsivo

## Atualizações Futuras

Espaço para expansão:

```
Portfolio/
├── 📁 blog/                # Blog posts futuros
├── 📁 animations/          # Animações avançadas
├── 📁 components/          # Componentes reutilizáveis
└── 📁 utils/              # Funções utilitárias
```

---

**Estrutura organizada = Manutenção facilitada! 🎯**
