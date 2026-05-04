# Design Spec — Violet Accent (Mode Clair)

**Date :** 2026-05-03  
**Statut :** Approuvé  

## Objectif

Ajouter une nuance de violet douce au thème clair du portfolio, sans toucher au mode sombre ni à la structure des composants.

## Décisions de design

| Question | Choix retenu |
|---|---|
| Intensité | Doux — violet remplace le noir des accents primaires |
| Modes concernés | Mode clair uniquement |
| Mode sombre | Inchangé |
| Couleur principale | `#7c3aed` (violet-600 Tailwind) |

## Palette violet

```
--primary (light)   : 262 83% 58%   → #7c3aed  (boutons, active states, text-primary)
--primary-foreground: 0 0% 98%       → #fafafa  (texte blanc sur bouton violet — contraste 5.3:1 ✓)
--accent (light)    : 262 30% 97%   → teinte violet très pâle (fonds de sections)
--ring (light)      : 262 83% 58%   → #7c3aed  (focus outline)
```

## Périmètre des changements

### Fichier modifié : `src/styles/globals.css`
Uniquement le bloc `:root` (mode clair). Trois variables CSS à mettre à jour :

- `--primary` : passe de `240 5.9% 10%` (quasi-noir) à `262 83% 58%` (violet #7c3aed)
- `--primary-foreground` : reste `0 0% 98%` (blanc — déjà correct)
- `--accent` : passe de `240 4.8% 95.9%` (gris clair) à `262 30% 97%` (blanc légèrement violacé)
- `--ring` : passe de `240 10% 3.9%` (quasi-noir) à `262 83% 58%` (violet #7c3aed)

### Composants impactés automatiquement (via CSS variables — aucune modification de code)

- `<Button>` variant `default` → fond violet, texte blanc
- `<Badge>` variant `outline` → bordure et texte violet (badge "Disponible")
- `<Badge>` variant `secondary` → fond violet teinté (badges stack Hero + Skills)
- Anneau photo Hero → `ring-primary/20` → teinte violette
- Stats Hero → `text-primary` → violet
- Onglets actifs Skills → `bg-primary text-primary-foreground` → violet
- Icônes About → `text-primary`, `bg-primary/10` → violet
- Cercle décoratif Hero → `bg-primary/5` → violet

### Fichiers non modifiés
- Tous les composants `.tsx`
- `tailwind.config.ts`
- Mode sombre (`.dark { ... }` dans `globals.css`) — inchangé

## Ce qui ne change pas

- Structure, layout, typographie, animations
- Mode sombre (fond dark, accents blancs)
- Texte principal (noir `--foreground`)
- `--secondary`, `--muted`, `--border`, `--input`
