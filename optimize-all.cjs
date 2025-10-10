#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 SISTEMA AUTOMATIZADO DE OTIMIZAÇÃO DE IMAGENS');
console.log('=' .repeat(60));
console.log('');

// Função para executar comandos com tratamento de erro
function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} - Concluído!\n`);
    return true;
  } catch (error) {
    console.error(`❌ Erro em: ${description}`);
    console.error(error.message);
    return false;
  }
}

// Função principal
function main() {
  console.log('📋 PROCESSO DE OTIMIZAÇÃO AUTOMÁTICA:');
  console.log('1. Analisar imagens pesadas');
  console.log('2. Otimizar imagens encontradas');
  console.log('3. Atualizar imports automaticamente');
  console.log('4. Testar build final');
  console.log('');
  
  // Passo 1: Otimizar imagens
  if (!runCommand('node optimize-images.cjs', 'Otimizando imagens pesadas')) {
    console.log('❌ Falha na otimização de imagens. Abortando...');
    return;
  }
  
  // Passo 2: Atualizar imports
  if (!runCommand('node update-imports.cjs', 'Atualizando imports')) {
    console.log('❌ Falha na atualização de imports. Abortando...');
    return;
  }
  
  // Passo 3: Testar build
  if (!runCommand('npm run build', 'Testando build final')) {
    console.log('❌ Falha no build. Verifique os imports manualmente.');
    return;
  }
  
  console.log('🎉 OTIMIZAÇÃO AUTOMÁTICA CONCLUÍDA COM SUCESSO!');
  console.log('');
  console.log('📊 RESULTADOS:');
  console.log('✅ Todas as imagens pesadas foram otimizadas');
  console.log('✅ Imports atualizados automaticamente');
  console.log('✅ Build testado e funcionando');
  console.log('');
  console.log('📝 PRÓXIMOS PASSOS:');
  console.log('1. Teste o site localmente: npm run dev');
  console.log('2. Verifique se todas as imagens estão carregando corretamente');
  console.log('3. Se tudo estiver funcionando, remova as imagens originais');
  console.log('4. Faça commit das mudanças');
  console.log('');
  console.log('💡 DICA: Execute "npm run optimize-images" sempre que adicionar novas imagens!');
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { main };
