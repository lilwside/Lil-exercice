# BlaBlaCar « Plan B » — MVP mobile

Application mobile de covoiturage (passager + conducteur) avec la fonctionnalité **Plan B** :
quand un conducteur annule un trajet réservé, l'appli propose automatiquement des alternatives au passager.

Les règles du projet sont dans [CLAUDE.md](./CLAUDE.md).

## Technologies

- React Native + Expo (SDK 57)
- TypeScript en mode strict
- Expo Router (navigation par fichiers)
- Supabase (à connecter à l'étape 4)

## Démarrer (sur un ordinateur)

```bash
npm install
npx expo start
```

Puis scannez le QR code avec **Expo Go** sur votre téléphone (le téléphone et l'ordinateur
doivent être sur le même réseau Wi‑Fi ; sinon lancez `npm run tunnel`).

## Démarrer (depuis un iPad, sans ordinateur)

iOS ne permet pas d'installer Node.js. On utilise donc **GitHub Codespaces**, un ordinateur
Linux dans le cloud que l'on pilote depuis Safari. Le dépôt contient déjà la configuration
nécessaire (`.devcontainer/`).

1. Sur l'iPad, installez **Expo Go** depuis l'App Store.
2. Dans Safari, ouvrez le dépôt sur github.com.
3. Bouton **Code** → onglet **Codespaces** → **Create codespace on…**.
4. Attendez que l'éditeur s'ouvre et que `npm install` se termine tout seul.
5. Dans le terminal (menu ☰ → Terminal → New Terminal), lancez :

   ```bash
   npm run tunnel
   ```

   Si Expo propose d'installer `@expo/ngrok`, répondez oui.
6. Copiez l'adresse affichée, qui commence par `exp://`.
7. Ouvrez **Expo Go** → **Enter URL manually** → collez l'adresse.

Pensez à arrêter le Codespace quand vous avez fini (github.com/codespaces → **Stop codespace**),
sinon il consomme votre quota gratuit.

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
