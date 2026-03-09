# 🚀 Guia de Uso e Dicas

## Como Visualizar o Portfólio

### Opção 1: Abrir Diretamente no Navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes em `index.html`
3. O navegador abrirá automaticamente

### Opção 2: Servidor Local (Recomendado)

#### Windows (PowerShell)
```powershell
cd "d:\CodeCreations\Portfolio"
python -m http.server 8000
# Acesse http://localhost:8000 no navegador
```

#### macOS/Linux
```bash
cd ~/CodeCreations/Portfolio
python3 -m http.server 8000
# Acesse http://localhost:8000
```

#### Com Node.js
```bash
npm install -g http-server
http-server
```

## 🎮 Funcionalidades Principais

### Navegação
- **Links do Menu**: Scroll automático para seções
- **Indicador Ativo**: A seção que está vendo fica destacada
- **Smooth Scroll**: Transição suave entre seções

### Modais (Detalhes dos Projetos)
- **Abrir**: Clique em "Ver Detalhes"
- **Fechar**: 
  - ✖️ Clique no botão X
  - 🖱️ Clique fora do modal
  - ⌨️ Pressione ESC

### Animações
- Cards entram com efeito ao rolar
- Hovering nos elementos cria efeitos visuais
- Botões têm ripple effect
- Parallax effect sutil ao rolar

## 🎨 Personalização Rápida

### 1. Mudar Seu Nome
```html
<!-- Em index.html, linha ~19 -->
<h1>Seu Nome Aqui</h1>
```

### 2. Mudar Cores Principais
```css
/* Em css/style.css, linhas 6-13 */
:root {
    --primary-color: #seu-azul;
    --secondary-color: #seu-índigo;
    --accent-color: #sua-cor;
    /* ... */
}
```

### 3. Adicionar Novo Projeto
```html
<!-- Copie este bloco em #projects section -->
<div class="project">
    <h3>🔥 Seu Novo Projeto</h3>
    <p>Descrição do projeto...</p>
    <p><strong>Tecnologias:</strong> ...lista...</p>
    <p><a href="link" target="_blank">🔗 Link</a></p>
    <button class="modal-button" data-modal="modal3">Ver Detalhes</button>
</div>

<!-- Copie este bloco antes de </body> -->
<div id="modal3" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h3>🔥 Seu Novo Projeto</h3>
        <p>Detalhes completos...</p>
    </div>
</div>
```

### 4. Mudar Email de Contato
```html
<!-- Em index.html, busque por mailto: -->
<a href="mailto:seu-email@gmail.com">seu-email@gmail.com</a>
```

## 🔧 Troubleshooting

### Problema: Página em branco
**Solução:**
- Verifique se `index.html` está na raiz
- Verifique se `css/` e `js/` existem com os arquivos
- Abra console (F12) e procure por erros

### Problema: Estilos não carregam
**Solução:**
```html
<!-- Verifique se os caminhos estão corretos -->
<link rel="stylesheet" href="css/style.css" />
<script src="js/script.js"></script>
```

### Problema: Modals não abrem
**Solução:**
- Verifique se `data-modal="modalX"` é igual ao `id="modalX"`
- Verifique o console para erros JavaScript
- Certifique-se que `js/script.js` está carregando

### Problema: Animações lentas
**Solução:**
- Desabilitar extensões de navegador
- Fechar abas desnecessárias
- Limpar cache (Ctrl+Shift+Delete)
- Tentar em navegador diferente

### Problema: Responsivo não funciona
**Solução:**
- Verifique o viewport meta tag em `<head>`
- Teste em modo mobile (F12 → Toggle Device Toolbar)
- Ajuste o zoom do navegador para 100%

## 📊 Monitorar Performance

### Lighthouse (Chrome)
1. Abra o portfólio
2. Pressione F12
3. Clique em "Lighthouse"
4. Clique em "Analyze page load"

### WebPageTest
1. Acesse [webpagetest.org](https://www.webpagetest.org/)
2. Cole a URL do seu portfólio
3. Execute o teste

### DevTools (F12)
- **Network**: Veja o tempo de carregamento
- **Performance**: Veja animações e FPS
- **Accessibility**: Verifique acessibilidade

## 🔐 Segurança

### Para Publicar Online
1. **Remova informações sensíveis**
   - Não inclua senhas ou tokens
   - Use email público

2. **Configure HTTPS**
   - GitHub Pages: Automático ✅
   - Netlify: Automático ✅
   - Servidor próprio: Use Let's Encrypt

3. **Otimize imagens**
   - Comprima antes de upload
   - Use formatos modernos (WebP)

## 🚀 Deploy

### GitHub Pages (Recomendado)

1. Crie um repositório em [github.com](https://github.com)
2. Nome: `seu-usuario.github.io`
3. Clone para seu computador
4. Copie os arquivos do portfólio
5. Faça commit e push:
```bash
git add .
git commit -m "Adicionar portfólio"
git push origin main
```
6. Acesse `https://seu-usuario.github.io`

### Netlify

1. Acesse [netlify.com](https://www.netlify.com/)
2. Clique em "Connect from Git"
3. Selecione seu repositório GitHub
4. Deploy automático ✅

### Vercel

1. Acesse [vercel.com](https://vercel.com/)
2. Importe seu repositório
3. Deploy com um clique ✅

## 📱 Testar em Diferentes Dispositivos

### Navegador (Emulação)
1. Abra DevTools (F12)
2. Clique em "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Selecione diferentes dispositivos

### Dispositivos Reais
- Usar servidor local com ngrok:
```bash
npm install -g ngrok
ngrok http 8000
# Copie a URL e abra em seu celular
```

## 🎯 Checklist Final

Antes de publicar:

- [ ] Seu nome está correto
- [ ] Email de contato está correto
- [ ] Links do GitHub funcionam
- [ ] Todos os projetos têm descrição
- [ ] Imagens carregam corretamente
- [ ] Teste em mobile (responsivo)
- [ ] Teste em diferentes navegadores
- [ ] Modals abrem e fecham
- [ ] Scroll funciona suavemente
- [ ] Sem erros no console

## 💡 Dicas Extras

### 1. Adicione Google Analytics
```html
<!-- Em </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 2. Adicione Meta Tags
```html
<meta name="description" content="Portfolio de Gabriel Cardoso">
<meta name="keywords" content="developer, portfolio, projetos">
<meta name="author" content="Gabriel Cardoso">
<meta property="og:title" content="Gabriel Cardoso - Portfolio">
<meta property="og:description" content="Portfólio com projetos de IA e desenvolvimento">
```

### 3. Customize Open Graph
```html
<meta property="og:image" content="preview-image.jpg">
<meta property="og:url" content="https://seu-site.com">
```

### 4. Adicione Favicon Customizado
1. Crie uma imagem 32x32px
2. Salve como `favicon.ico`
3. Já está linkeado no HTML ✅

## 🎓 Recursos de Aprendizado

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [Glassmorphism Guide](https://glassmorphism.com/)

## 🤝 Suporte

Encontrou um bug? Tem uma ideia?

1. Abra o console (F12)
2. Verifique as mensagens de erro
3. Procure em Stack Overflow
4. Peça ajuda nos comentários

---

**Divirta-se customizando seu portfólio! 🎨**
