#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configurações
const IMAGES_DIR = 'src/assets/images';
const MAX_SIZE_KB = 500; // Tamanho máximo em KB antes de otimizar
const QUALITY = 85; // Qualidade JPEG (1-100)

// Função para converter bytes para KB
function bytesToKB(bytes) {
  return Math.round(bytes / 1024);
}

// Função para verificar se o arquivo é uma imagem
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext);
}

// Função para otimizar uma imagem
function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const optimizedPath = path.join(dir, `${name}_optimized${ext}`);
    
    // Converter para caminhos absolutos
    const absoluteInputPath = path.resolve(filePath);
    const absoluteOutputPath = path.resolve(optimizedPath);
    
    console.log(`🔄 Otimizando: ${path.basename(filePath)}`);
    
    if (ext === '.png') {
      // Para PNG, converter para JPEG para melhor compressão
      const jpegOutputPath = absoluteOutputPath.replace('.png', '.jpg');
      execSync(`npx sharp-cli resize 1200 800 --input "${absoluteInputPath}" --output "${jpegOutputPath}" --quality ${QUALITY}`, { stdio: 'inherit' });
      return jpegOutputPath;
    } else {
      // Para JPEG
      execSync(`npx sharp-cli resize 1200 800 --input "${absoluteInputPath}" --output "${absoluteOutputPath}" --quality ${QUALITY}`, { stdio: 'inherit' });
      return absoluteOutputPath;
    }
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${filePath}:`, error.message);
    return null;
  }
}

// Função para encontrar todas as imagens pesadas
function findHeavyImages(dir) {
  const heavyImages = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (stat.isFile() && isImageFile(file)) {
        const sizeKB = bytesToKB(stat.size);
        if (sizeKB > MAX_SIZE_KB) {
          heavyImages.push({
            path: filePath,
            sizeKB: sizeKB,
            name: file
          });
        }
      }
    }
  }
  
  scanDirectory(dir);
  return heavyImages;
}

// Função principal
function main() {
  console.log('🚀 Iniciando otimização automática de imagens...\n');
  
  // Verificar se sharp-cli está instalado
  try {
    execSync('npx sharp-cli --version', { stdio: 'pipe' });
  } catch (error) {
    console.log('📦 Instalando sharp-cli...');
    execSync('npm install --save-dev sharp-cli', { stdio: 'inherit' });
  }
  
  // Encontrar imagens pesadas
  console.log(`🔍 Procurando imagens maiores que ${MAX_SIZE_KB}KB...`);
  const heavyImages = findHeavyImages(IMAGES_DIR);
  
  if (heavyImages.length === 0) {
    console.log('✅ Nenhuma imagem pesada encontrada! Todas as imagens já estão otimizadas.');
    return;
  }
  
  console.log(`\n📊 Encontradas ${heavyImages.length} imagens pesadas:`);
  heavyImages.forEach(img => {
    console.log(`  - ${img.name}: ${img.sizeKB}KB`);
  });
  
  console.log('\n🔄 Iniciando otimização...\n');
  
  const optimizedImages = [];
  
  // Otimizar cada imagem
  for (const img of heavyImages) {
    const optimizedPath = optimizeImage(img.path);
    if (optimizedPath) {
      const optimizedSize = bytesToKB(fs.statSync(optimizedPath).size);
      const reduction = Math.round(((img.sizeKB - optimizedSize) / img.sizeKB) * 100);
      
      optimizedImages.push({
        original: img,
        optimized: {
          path: optimizedPath,
          sizeKB: optimizedSize
        },
        reduction: reduction
      });
      
      console.log(`✅ ${img.name}: ${img.sizeKB}KB → ${optimizedSize}KB (${reduction}% menor)\n`);
    }
  }
  
  // Resumo final
  console.log('📈 RESUMO DA OTIMIZAÇÃO:');
  console.log('=' .repeat(50));
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  optimizedImages.forEach(img => {
    totalOriginalSize += img.original.sizeKB;
    totalOptimizedSize += img.optimized.sizeKB;
    
    console.log(`${img.original.name}:`);
    console.log(`  Antes: ${img.original.sizeKB}KB`);
    console.log(`  Depois: ${img.optimized.sizeKB}KB`);
    console.log(`  Redução: ${img.reduction}%\n`);
  });
  
  const totalReduction = Math.round(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100);
  
  console.log('🎯 TOTAL:');
  console.log(`  Tamanho original: ${totalOriginalSize}KB`);
  console.log(`  Tamanho otimizado: ${totalOptimizedSize}KB`);
  console.log(`  Redução total: ${totalReduction}%`);
  console.log(`  Espaço economizado: ${totalOriginalSize - totalOptimizedSize}KB`);
  
  console.log('\n✨ Otimização concluída!');
  console.log('\n📝 PRÓXIMOS PASSOS:');
  console.log('1. Verifique as imagens otimizadas');
  console.log('2. Atualize os imports nos arquivos para usar as versões otimizadas');
  console.log('3. Remova as imagens originais se estiver satisfeito com o resultado');
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, findHeavyImages };
