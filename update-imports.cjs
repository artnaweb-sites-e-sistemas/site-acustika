#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapeamento de imagens originais para otimizadas
const imageMappings = {
  'benefits-hero-image.png': 'benefits-hero-image_optimized.jpg',
  'clinic-map-image.png': 'clinic-map-image_optimized.jpg',
  'dentistry-done-right-bg.png': 'dentistry-done-right-bg_optimized.jpg',
  'dentistry-done-right-main.png': 'dentistry-done-right-main_optimized.jpg',
  'hero-main-image-361aac.png': 'hero/hero-main-image-361aac_optimized.jpg',
  'paciente-aparelho-auditivo.png': 'hero/paciente-aparelho-auditivo_optimized.jpg',
  'hero-tablet-screen-56586a.png': 'hero-tablet-screen-56586a_optimized.jpg',
  'kids-friendly-bg.png': 'kids-friendly-bg_optimized.jpg',
  'logo-acustika.png': 'logo-acustika_optimized.jpg',
  'service-cosmetic.png': 'service-cosmetic_optimized.jpg',
  'service-general.png': 'service-general_optimized.jpg',
  'service-restorative.png': 'service-restorative_optimized.jpg',
  'testimonial-photo.png': 'testimonial-photo_optimized.jpg',
  'visit-us-gallery-1.png': 'visit-us-gallery-1_optimized.jpg',
  'visit-us-gallery-2.png': 'visit-us-gallery-2_optimized.jpg',
  'visit-us-gallery-3.png': 'visit-us-gallery-3_optimized.jpg',
  'visit-us-gallery-4.png': 'visit-us-gallery-4_optimized.jpg',
  'visit-us-gallery-5.png': 'visit-us-gallery-5_optimized.jpg',
  'visit-us-location-bg.png': 'visit-us-location-bg_optimized.jpg'
};

// Função para encontrar todos os arquivos JavaScript/JSX
function findJSFiles(dir) {
  const jsFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('dist')) {
        scanDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx'))) {
        jsFiles.push(filePath);
      }
    }
  }
  
  scanDirectory(dir);
  return jsFiles;
}

// Função para atualizar imports em um arquivo
function updateImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Procurar por imports de imagens
    for (const [originalImage, optimizedImage] of Object.entries(imageMappings)) {
      // Padrão para encontrar imports
      const importPatterns = [
        // Import direto
        new RegExp(`import\\s+\\w+\\s+from\\s+['"]\\.\\.?/.*?${originalImage.replace('.', '\\.')}['"]`, 'g'),
        // Import com caminho relativo
        new RegExp(`from\\s+['"]\\.\\.?/.*?${originalImage.replace('.', '\\.')}['"]`, 'g'),
        // Import com caminho absoluto
        new RegExp(`from\\s+['"]\\.\\.?/.*?assets/images/.*?${originalImage.replace('.', '\\.')}['"]`, 'g')
      ];
      
      for (const pattern of importPatterns) {
        const matches = content.match(pattern);
        if (matches) {
          for (const match of matches) {
            const newImport = match.replace(originalImage, optimizedImage);
            content = content.replace(match, newImport);
            hasChanges = true;
            console.log(`  ✅ ${path.basename(filePath)}: ${originalImage} → ${optimizedImage}`);
          }
        }
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

// Função principal
function main() {
  console.log('🚀 Iniciando atualização automática de imports...\n');
  
  // Encontrar todos os arquivos JS/JSX
  console.log('🔍 Procurando arquivos JavaScript/JSX...');
  const jsFiles = findJSFiles('src');
  
  console.log(`📁 Encontrados ${jsFiles.length} arquivos para verificar\n`);
  
  let updatedFiles = 0;
  
  // Atualizar cada arquivo
  for (const filePath of jsFiles) {
    console.log(`🔄 Processando: ${path.relative('src', filePath)}`);
    
    if (updateImportsInFile(filePath)) {
      updatedFiles++;
    }
  }
  
  console.log('\n📈 RESUMO DA ATUALIZAÇÃO:');
  console.log('=' .repeat(50));
  console.log(`📁 Arquivos processados: ${jsFiles.length}`);
  console.log(`✅ Arquivos atualizados: ${updatedFiles}`);
  console.log(`📊 Imagens otimizadas: ${Object.keys(imageMappings).length}`);
  
  console.log('\n✨ Atualização de imports concluída!');
  console.log('\n📝 PRÓXIMOS PASSOS:');
  console.log('1. Execute "npm run build" para testar o build');
  console.log('2. Verifique se todas as imagens estão carregando corretamente');
  console.log('3. Se tudo estiver funcionando, remova as imagens originais');
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { updateImportsInFile, imageMappings };
