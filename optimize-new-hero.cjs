const sharp = require('sharp');
const fs = require('fs');

async function optimizeNewHeroImage() {
  try {
    const inputPath = 'src/assets/images/hero/img2-acustika.png';
    const outputPath = 'src/assets/images/hero/img2-acustika_optimized.png';
    
    console.log('🔄 Otimizando nova imagem da hero...');
    
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
    
    console.log('✅ Nova imagem da hero otimizada com sucesso!');
    
    // Verificar tamanhos
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
    
    console.log(`📊 Tamanho original: ${Math.round(originalSize/1024)}KB`);
    console.log(`📊 Tamanho otimizado: ${Math.round(optimizedSize/1024)}KB`);
    console.log(`📊 Redução: ${reduction}%`);
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

optimizeNewHeroImage();
