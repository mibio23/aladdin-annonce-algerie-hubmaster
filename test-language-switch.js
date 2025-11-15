// Script de test pour vérifier le changement de langue
const { chromium } = require('playwright');

async function testLanguageSwitch() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Accéder à la page d'accueil
    await page.goto('http://localhost:8082');
    
    // Attendre que la page se charge
    await page.waitForTimeout(2000);
    
    // Vérifier que nous sommes sur la page d'accueil
    console.log('URL actuelle:', page.url());
    
    // Trouver les boutons de langue dans le pied de page
    const languageButtons = await page.$$('.footer-language-selector button');
    
    if (languageButtons.length === 0) {
      console.log('Aucun bouton de langue trouvé dans le pied de page');
      return;
    }
    
    console.log(`Trouvé ${languageButtons.length} boutons de langue`);
    
    // Tester chaque bouton de langue
    for (let i = 0; i < languageButtons.length; i++) {
      const button = languageButtons[i];
      const buttonText = await button.textContent();
      
      console.log(`Test du bouton: ${buttonText}`);
      
      // Cliquer sur le bouton de langue
      await button.click();
      
      // Attendre que la page se mette à jour
      await page.waitForTimeout(1000);
      
      // Vérifier la nouvelle URL
      const newUrl = page.url();
      console.log('Nouvelle URL après changement de langue:', newUrl);
      
      // Vérifier si l'URL contient un préfixe de langue
      const hasLanguagePrefix = /\/(fr|ar|en|de|es)\//.test(newUrl) || newUrl.match(/\/(fr|ar|en|de|es)$/);
      
      if (hasLanguagePrefix) {
        console.log('✅ Succès: L\'URL contient un préfixe de langue');
      } else {
        console.log('❌ Erreur: L\'URL ne contient pas de préfixe de langue');
      }
    }
    
    console.log('Test terminé');
    
  } catch (error) {
    console.error('Erreur lors du test:', error);
  } finally {
    await browser.close();
  }
}

testLanguageSwitch();