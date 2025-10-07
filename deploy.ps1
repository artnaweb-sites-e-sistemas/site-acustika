# 🚀 Script de Deploy - Site Acústika
# Este script prepara o build para deploy no cPanel

Write-Host "🚀 Iniciando processo de deploy..." -ForegroundColor Green

# 1. Limpar build anterior
Write-Host "🧹 Limpando build anterior..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
    Write-Host "✅ Build anterior removido" -ForegroundColor Green
}

# 2. Criar novo build
Write-Host "🔨 Criando build de produção..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build criado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro ao criar build!" -ForegroundColor Red
    exit 1
}

# 3. Verificar arquivos
Write-Host "📋 Verificando arquivos..." -ForegroundColor Yellow
$files = Get-ChildItem -Path "dist" -Recurse
$totalSize = ($files | Measure-Object -Property Length -Sum).Sum
$totalSizeMB = [math]::Round($totalSize / 1MB, 2)

Write-Host "📊 Estatísticas do build:" -ForegroundColor Cyan
Write-Host "   • Total de arquivos: $($files.Count)" -ForegroundColor White
Write-Host "   • Tamanho total: $totalSizeMB MB" -ForegroundColor White

# 4. Listar arquivos principais
Write-Host "📁 Arquivos principais:" -ForegroundColor Cyan
Get-ChildItem -Path "dist" | ForEach-Object {
    $size = [math]::Round($_.Length / 1KB, 2)
    Write-Host "   • $($_.Name) ($size KB)" -ForegroundColor White
}

# 5. Verificar .htaccess
if (Test-Path "dist/.htaccess") {
    Write-Host "✅ Arquivo .htaccess encontrado" -ForegroundColor Green
} else {
    Write-Host "⚠️ Arquivo .htaccess não encontrado" -ForegroundColor Yellow
}

# 6. Instruções finais
Write-Host "`n🎯 Próximos passos:" -ForegroundColor Green
Write-Host "1. Abra seu cliente FTP (FileZilla, WinSCP, etc.)" -ForegroundColor White
Write-Host "2. Conecte ao seu servidor cPanel" -ForegroundColor White
Write-Host "3. Navegue para a pasta public_html/" -ForegroundColor White
Write-Host "4. Faça upload de TODOS os arquivos da pasta dist/" -ForegroundColor White
Write-Host "5. Certifique-se que o .htaccess foi enviado" -ForegroundColor White
Write-Host "6. Teste o site no navegador" -ForegroundColor White

Write-Host "`n📖 Para mais detalhes, consulte: DEPLOY_CPANEL_FTP.md" -ForegroundColor Cyan
Write-Host "`n✅ Deploy preparado com sucesso!" -ForegroundColor Green
