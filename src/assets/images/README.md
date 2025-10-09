# Estrutura de Imagens - Acústika

Esta pasta contém todas as imagens utilizadas no site da Acústika, organizadas por seção para facilitar a manutenção e desenvolvimento.

## 📁 Estrutura de Pastas

### `/hero/`
Imagens da seção principal (Hero Section)
- **hero-main.jpg/png** - Imagem principal da hero (fonoaudióloga com paciente)
- **hero-background.jpg/png** - Imagem de fundo opcional
- **hero-icon.svg** - Ícones decorativos

**Recomendações:**
- Formato: JPG (fotos) ou PNG (com transparência)
- Tamanho: 800x1000px (aspect ratio 4:5)
- Otimização: Compressão para web (max 200KB)

### `/team/`
Fotos da equipe de profissionais
- **fonoaudióloga-1.jpg** - Foto da profissional
- **fonoaudióloga-2.jpg** - Foto da profissional
- **fonoaudióloga-3.jpg** - Foto da profissional

**Recomendações:**
- Formato: JPG
- Tamanho: 400x400px (quadrado)
- Otimização: Compressão para web (max 100KB cada)

### `/services/`
Imagens relacionadas aos serviços
- **exame-auditivo.jpg** - Foto de exame auditivo
- **teleatendimento.jpg** - Foto de atendimento remoto
- **manutencao.jpg** - Foto de manutenção de aparelhos
- **teste-domiciliar.jpg** - Foto de teste em casa

**Recomendações:**
- Formato: JPG
- Tamanho: 600x400px (aspect ratio 3:2)
- Otimização: Compressão para web (max 150KB cada)

### `/testimonials/`
Fotos dos clientes que deram depoimentos
- **dona-rita.jpg** - Foto da Dona Rita
- **marlon.jpg** - Foto do Marlon
- **dona-odete.jpg** - Foto da Dona Odete

**Recomendações:**
- Formato: JPG
- Tamanho: 200x200px (quadrado pequeno)
- Otimização: Compressão para web (max 50KB cada)

### `/units/`
Fotos das unidades físicas
- **sao-paulo-ipiranga.jpg** - Exterior da unidade de SP
- **florianopolis-rio-tavares.jpg** - Exterior da unidade de Florianópolis
- **sao-jose-kobrasol.jpg** - Exterior da unidade de São José

**Recomendações:**
- Formato: JPG
- Tamanho: 800x600px (aspect ratio 4:3)
- Otimização: Compressão para web (max 200KB cada)

## 🎯 Diretrizes de Uso

### Nomenclatura
- Use nomes descritivos em português
- Separe palavras com hífen (-)
- Use apenas letras minúsculas
- Evite espaços e caracteres especiais

### Formato e Qualidade
- **JPG**: Para fotografias com muitas cores
- **PNG**: Para imagens com transparência
- **SVG**: Para ícones e logos vetoriais
- **WebP**: Formato moderno (opcional, com fallback)

### Otimização
- Sempre comprima as imagens para web
- Use ferramentas como TinyPNG, ImageOptim ou similar
- Mantenha o tamanho total da página baixo para melhor performance

## 📝 Como Importar no React

```jsx
// Importação de imagem
import heroImage from '../assets/images/hero/hero-main.jpg';
import teamPhoto from '../assets/images/team/fonoaudiologa-1.jpg';

// Uso no componente
<img src={heroImage} alt="Descrição da imagem" />
<img src={teamPhoto} alt="Nome do profissional" />
```

## 🔧 Ferramentas Recomendadas

- **Compressão**: TinyPNG, ImageOptim, Squoosh
- **Redimensionamento**: Photoshop, GIMP, Canva
- **Conversão de formato**: CloudConvert, Online-Convert

