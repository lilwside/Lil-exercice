# BlaBlaCar « Plan B » — MVP mobile

Application mobile de covoiturage (passager + conducteur) avec la fonctionnalité **Plan B** :
quand un conducteur annule un trajet réservé, l'appli propose automatiquement des alternatives au passager.

Les règles du projet sont dans [CLAUDE.md](./CLAUDE.md).

## Technologies

- React Native + Expo (SDK 57)
- TypeScript en mode strict
- Expo Router (navigation par fichiers)
- Supabase (à connecter à l'étape 4)

## Démarrer

```bash
npm install
npx expo start
```

Puis scannez le QR code avec **Expo Go** sur votre téléphone (le téléphone et l'ordinateur
doivent être sur le même réseau Wi‑Fi ; sinon lancez `npx expo start --tunnel`).

## Variables d'environnement

Copiez `.env.example` en `.env` et renseignez vos valeurs Supabase.
Le fichier `.env` n'est jamais commité.

## Structure

```
app/                écrans (navigation par fichiers)
  _layout.tsx       pile racine
  (auth)/           connexion, inscription
  (tabs)/           Rechercher, Publier, Mes trajets, Messages, Profil
  trajet/[id].tsx   détail d'un trajet
  plan-b/[reservationId].tsx
components/         composants réutilisables
constants/theme.ts  design system (couleurs, rayons, typo)
lib/                Supabase et helpers
hooks/              hooks React
types/              types TypeScript
supabase/           migrations SQL et policies RLS
```

## Avancement (Jour 1)

- [x] 1. CLAUDE.md
- [x] 2. Projet Expo + navigation : tous les écrans vides mais accessibles
- [ ] 3. Affichage sur téléphone avec Expo Go
- [ ] 4. Supabase + inscription et connexion
- [ ] 5. Deux comptes, vérification de l'isolation des données
