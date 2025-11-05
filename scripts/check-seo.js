#!/usr/bin/env node
/**
 * Script de vérification SEO
 * Vérifie que tous les fichiers de métadonnées sont correctement générés
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Vérification SEO...\n");

let hasErrors = false;

// 1. Vérifier que les fichiers dynamiques existent
const dynamicFiles = [
  "app/manifest.ts",
  "app/robots.ts",
  "app/sitemap.ts",
  "lib/navigation.ts",
  "lib/getSiteUrl.ts",
  "lib/assetPath.ts",
];

console.log("📁 Vérification des fichiers dynamiques:");
dynamicFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  if (exists) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MANQUANT`);
    hasErrors = true;
  }
});

// 2. Vérifier que les fichiers statiques N'existent PAS
const staticFiles = ["public/manifest.json", "public/robots.txt", "public/sitemap.xml"];

console.log("\n🚫 Vérification des fichiers statiques (ne doivent PAS exister):");
staticFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  if (!exists) {
    console.log(`  ✅ ${file} - Absent (correct)`);
  } else {
    console.log(`  ⚠️  ${file} - EXISTE (devrait être supprimé)`);
    console.log(`     → Supprimez ce fichier pour utiliser la version dynamique`);
  }
});

// 3. Vérifier la configuration des variables d'environnement
console.log("\n🌍 Variables d'environnement:");

const envFiles = [".env.local", ".env"];
let envFound = false;

for (const envFile of envFiles) {
  const envPath = path.join(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    envFound = true;
    console.log(`  📄 Lecture de ${envFile}...`);

    const envContent = fs.readFileSync(envPath, "utf8");
    const hasSiteUrl = envContent.includes("NEXT_PUBLIC_SITE_URL");
    const hasBasePath = envContent.includes("NEXT_PUBLIC_BASE_PATH");

    if (hasSiteUrl) {
      const match = envContent.match(/NEXT_PUBLIC_SITE_URL=(.+)/);
      if (match) {
        console.log(`  ✅ NEXT_PUBLIC_SITE_URL=${match[1].trim()}`);
      }
    } else {
      console.log(`  ⚠️  NEXT_PUBLIC_SITE_URL non définie`);
    }

    if (hasBasePath) {
      const match = envContent.match(/NEXT_PUBLIC_BASE_PATH=(.+)/);
      if (match && match[1].trim() && !match[1].includes("#")) {
        console.log(`  ✅ NEXT_PUBLIC_BASE_PATH=${match[1].trim()}`);
      } else {
        console.log(`  ℹ️  NEXT_PUBLIC_BASE_PATH non définie (normal en dev)`);
      }
    }
    break;
  }
}

if (!envFound) {
  console.log(`  ⚠️  Aucun fichier .env trouvé`);
  console.log(`     → Créez .env.local pour configurer NEXT_PUBLIC_SITE_URL`);
}

// 4. Vérifier les assets
console.log("\n🖼️  Vérification des assets:");
const assets = ["public/images/logo.png", "public/images/hero-screenshot.png", "public/favicon.ico"];

assets.forEach((asset) => {
  const exists = fs.existsSync(path.join(process.cwd(), asset));
  if (exists) {
    console.log(`  ✅ ${asset}`);
  } else {
    console.log(`  ⚠️  ${asset} - MANQUANT`);
  }
});

// 5. Résumé
console.log("\n" + "=".repeat(60));
if (hasErrors) {
  console.log("❌ Des erreurs ont été détectées");
  process.exit(1);
} else {
  console.log("✅ Tout est en ordre!");
  console.log("\n💡 Pour tester les fichiers générés:");
  console.log("   npm run dev");
  console.log("   curl http://localhost:3000/manifest.json");
  console.log("   curl http://localhost:3000/robots.txt");
  console.log("   curl http://localhost:3000/sitemap.xml");
}
console.log("=".repeat(60));
