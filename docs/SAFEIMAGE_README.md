# SafeImage Component

Un composant d'image robuste pour Next.js qui garantit un chargement fiable des assets avec gestion automatique des erreurs.

## Caractéristiques

✅ **Gestion automatique du basePath** - Utilise `assetPath()` automatiquement pour tous les chemins
✅ **Image placeholder intégrée** - Affiche une image de secours élégante en cas d'erreur
✅ **Pas d'erreurs 404 visibles** - Gestion gracieuse des images manquantes
✅ **Lazy loading par défaut** - Optimisation des performances
✅ **Support des fallbacks personnalisés** - Possibilité de définir votre propre image de secours
✅ **Logs de développement** - Avertissements en console pour le debugging

## Utilisation de base

```tsx
import { SafeImage } from "@/components/SafeImage";

// Utilisation simple
<SafeImage
  src="/images/logo.png"
  alt="Logo"
  className="w-full h-full"
/>
```

## Props

```tsx
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;              // Chemin de l'image (sera traité par assetPath)
  alt: string;              // Texte alternatif (REQUIS pour l'accessibilité)
  fallbackSrc?: string;     // Image de secours personnalisée (optionnel)
  useAssetPath?: boolean;   // Utiliser assetPath (par défaut: true)
}
```

## Exemples

### Image standard

```tsx
<SafeImage
  src="/images/hero-screenshot.png"
  alt="Application Interface"
  className="w-full h-auto object-cover"
/>
```

### Avec fallback personnalisé

```tsx
<SafeImage
  src="/images/user-avatar.png"
  alt="User Avatar"
  fallbackSrc="/images/default-avatar.png"
  className="w-16 h-16 rounded-full"
/>
```

### URL externe (sans assetPath)

```tsx
<SafeImage
  src="https://example.com/external-image.jpg"
  alt="External Image"
  useAssetPath={false}
  className="w-full"
/>
```

## Fonctionnement

1. **Chargement initial** : Le composant applique automatiquement `assetPath()` au `src` fourni
2. **En cas d'erreur** : Si l'image ne charge pas, une image placeholder SVG est générée automatiquement
3. **Fallback personnalisé** : Si vous spécifiez `fallbackSrc`, celui-ci sera utilisé à la place du placeholder
4. **Logs de debug** : En développement, les erreurs sont loggées dans la console

## Placeholder par défaut

Le placeholder généré automatiquement est un SVG avec :
- Fond sombre (`#1a1a2e`)
- Icône d'image stylisée en vert (`#16a34a`)
- Texte "Image not available"
- Design cohérent avec le thème de l'application

## Avantages par rapport à `<img>`

| Fonctionnalité | `<img>` natif | `<SafeImage>` |
|----------------|---------------|---------------|
| Gestion automatique du basePath | ❌ | ✅ |
| Fallback sur erreur | ❌ | ✅ |
| Placeholder élégant | ❌ | ✅ |
| Logs de développement | ❌ | ✅ |
| Lazy loading par défaut | ⚠️ Manuel | ✅ Automatique |

## Migration depuis `<img>`

Avant :
```tsx
<img
  src={assetPath("/images/logo.png")}
  alt="Logo"
  className="w-10 h-10"
/>
```

Après :
```tsx
<SafeImage
  src="/images/logo.png"
  alt="Logo"
  className="w-10 h-10"
/>
```

## Quand utiliser SafeImage

✅ **Utilisez SafeImage pour :**
- Toutes les images de votre site (logos, screenshots, assets)
- Images qui peuvent parfois manquer
- Déploiements avec basePath variable (GitHub Pages, etc.)

❌ **N'utilisez PAS SafeImage pour :**
- Images en arrière-plan CSS (utilisez `assetPath()` directement)
- SVG inline dans le JSX
- Icônes de bibliothèques comme lucide-react

## Notes techniques

- Le composant utilise `useState` et `useEffect` pour gérer l'état de l'image
- L'attribut `loading="lazy"` est appliqué par défaut (peut être overridé)
- Le placeholder SVG est encodé en data URL pour éviter les requêtes HTTP
- Les chemins absolus (http://, https://, data:, blob:) ne sont jamais modifiés

## Troubleshooting

**L'image ne s'affiche pas :**
1. Vérifiez que le fichier existe dans `public/images/`
2. Vérifiez la console pour les warnings de développement
3. Assurez-vous que `NEXT_PUBLIC_BASE_PATH` est correctement configuré

**Le placeholder s'affiche à la place :**
- L'image n'a pas pu être chargée
- Vérifiez le chemin dans la console (mode développement)
- Vérifiez que l'image existe dans le dossier `public/`
---

© 2025 B4E Team & Contributors | MIT Licensed
