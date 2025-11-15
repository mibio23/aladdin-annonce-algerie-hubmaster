
#!/bin/bash
echo "🚀 Build optimisé pour le déploiement..."

# Nettoyer le cache
rm -rf node_modules/.vite
rm -rf dist

# Build avec warnings mais sans échec sur les erreurs non critiques
npm run build 2>&1 | tee build.log

# Vérifier si le build a réussi
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
  echo "✅ Build réussi !"
  echo "📊 Fichiers générés:"
  ls -la dist/
else
  echo "❌ Build échoué - Vérifier build.log"
  exit 1
fi
