const sharp = require('sharp');
const fs = require('fs');

async function optimizePNG() {
  try {
    // Usar a imagem JPEG otimizada como base e converter para PNG
    const inputPath = 'src/assets/images/hero/img-acustika_optimized.jpg';
    const outputPath = 'src/assets/images/hero/img-acustika_optimized.png';
    
    console.log('🔄 Convertendo JPEG para PNG mantendo transparência...');
    
    await sharp(inputPath)
      .resize(1200, 800, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .png({ 
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(outputPath);
    
    console.log('✅ PNG otimizado criado com sucesso!');
    
    // Verificar tamanhos
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    
    console.log(`📊 Tamanho original: ${Math.round(originalSize/1024)}KB`);
    console.log(`📊 Tamanho PNG: ${Math.round(optimizedSize/1024)}KB`);
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

optimizePNG();
