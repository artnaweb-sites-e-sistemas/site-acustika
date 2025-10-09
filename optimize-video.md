# Otimização de Vídeo para Web

## Problema Atual
O arquivo `video_1.mp4` tem 92MB, que é muito grande para web.

## Solução Recomendada

### 1. Instalar FFmpeg
```bash
# Windows (usando Chocolatey)
choco install ffmpeg

# Ou baixar de: https://ffmpeg.org/download.html
```

### 2. Comprimir o Vídeo
```bash
ffmpeg -i "src/assets/images/video_1.mp4" \
  -c:v libx264 \
  -crf 28 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -preset fast \
  -vf "scale=1280:720" \
  "src/assets/images/video_1_optimized.mp4"
```

### 3. Configurações de Otimização
- **CRF 28**: Qualidade balanceada (18-28 é recomendado)
- **Bitrate de áudio**: 128k (suficiente para web)
- **Faststart**: Permite streaming progressivo
- **Scale**: Reduz resolução para 720p
- **Preset fast**: Codificação mais rápida

### 4. Resultado Esperado
- Tamanho reduzido para ~5-15MB
- Carregamento mais rápido
- Compatibilidade melhorada
- Streaming progressivo

### 5. Implementação no Código
O vídeo já está configurado com:
- `preload="metadata"`: Carrega apenas metadados inicialmente
- `playsInline`: Reprodução inline em mobile
- Controle de som via JavaScript
- Otimizações de performance via ref

## Alternativa Online
Se não conseguir instalar FFmpeg, use ferramentas online como:
- https://www.freeconvert.com/video-compressor
- https://compress-video-online.com/
- https://www.veed.io/tools/video-compressor

