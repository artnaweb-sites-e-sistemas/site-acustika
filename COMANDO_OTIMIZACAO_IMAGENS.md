# 🖼️ Comando para Otimização Automática de Imagens

## 📋 Comando Principal
```bash
npx sharp-cli resize 800 600 --input "CAMINHO_COMPLETO_DA_IMAGEM" --output "CAMINHO_COMPLETO_DESTINO_IMAGEM_optimized.jpg" --format jpeg --quality 85
```

## 🔧 Processo Completo

### 1. Copiar imagem para assets
```bash
copy "origem\imagem.jpg" "src\assets\images\imagem.jpg"
```

### 2. Otimizar a imagem
```bash
npx sharp-cli resize 800 600 --input "C:\Users\biras\Desktop\site-acustika\src\assets\images\imagem.jpg" --output "C:\Users\biras\Desktop\site-acustika\src\assets\images\imagem_optimized.jpg" --format jpeg --quality 85
```

### 3. Atualizar import no código
```jsx
// Antes:
import imagem from '../assets/images/imagem.jpg';

// Depois:
import imagem from '../assets/images/imagem_optimized.jpg';
```

## 📊 Resultados Esperados
- **Redução de tamanho**: 90%+ menor
- **Qualidade**: Mantida (85% de qualidade)
- **Dimensões**: 800x600 pixels (otimizado para web)
- **Formato**: JPEG otimizado

## ⚠️ Importante
- **Sempre usar caminhos absolutos** para o sharp-cli funcionar
- **Verificar se a imagem existe** antes de otimizar
- **Testar o build** após as mudanças
- **Para PNGs com transparência**: usar formato PNG em vez de JPEG

## 🎯 Casos de Uso
- Imagens muito pesadas (>1MB)
- Fotos de alta resolução
- Imagens que causam lentidão no carregamento
- Otimização para produção

---
**Criado em**: 09/10/2025  
**Projeto**: site-acustika  
**Ferramenta**: sharp-cli

