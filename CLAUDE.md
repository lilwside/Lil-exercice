# CLAUDE.md — BlaBlaCar « Plan B » (MVP mobile)

## 1. Le projet
MVP mobile BlaBlaCar (passager + conducteur) avec une nouvelle fonctionnalité : **Plan B**.
Quand un conducteur annule un trajet réservé, l'appli propose automatiquement des alternatives au passager.

Parcours de démo à garantir : recherche → réservation → annulation conducteur → Plan B → nouvelle réservation.

Priorités : Plan B > parcours passager > parcours conducteur > design system > accessibilité.

Personas :
- Thomas, 24 ans, étudiant à Lyon, passager, budget limité.
- Sarah, 34 ans, chargée de communication à Nantes, conductrice Nantes–Paris.

## 2. Technologies
- React Native + Expo (test sur téléphone via Expo Go)
- TypeScript (mode strict)
- Expo Router (navigation par fichiers)
- Supabase : authentification, base de données, RLS

Ne pas ajouter d'autre librairie sans me demander.

## 3. Structure des dossiers
```
app/
  _layout.tsx
  (auth)/          connexion.tsx, inscription.tsx
  (tabs)/          index.tsx (Rechercher), publier.tsx, trajets.tsx,
                   messages.tsx, profil.tsx
  trajet/[id].tsx
  plan-b/[reservationId].tsx
components/        composants réutilisables (Button, Avatar, TrajetCard…)
lib/               supabase.ts, helpers
hooks/             useAuth, useTrajets…
constants/         theme.ts (couleurs, rayons, typo)
types/             types TypeScript
supabase/          migrations SQL + policies RLS
```

Navigation basse : Rechercher, Publier, Mes trajets, Messages, Profil.
Plan B est accessible depuis le parcours d'annulation, pas depuis la barre d'onglets.

## 4. Règles de sécurité (obligatoires)
- Aucune clé, mot de passe ou secret dans le code. Tout passe par `.env` (variables `EXPO_PUBLIC_SUPABASE_URL` et `EXPO_PUBLIC_SUPABASE_ANON_KEY`).
- `.env` est dans `.gitignore`. Fournir un `.env.example` sans valeurs.
- Ne jamais utiliser la clé `service_role` dans l'appli.
- RLS activé sur **toutes** les tables, avec des policies basées sur `auth.uid()` : un utilisateur ne lit et ne modifie que ses propres données (profil, réservations, messages). Les trajets publiés sont lisibles par tous les utilisateurs connectés.
- Session stockée avec `expo-secure-store`.
- Valider toutes les saisies utilisateur (email, mot de passe, prix, dates).
- Messages d'erreur clairs pour l'utilisateur, sans détail technique.
- Test de validation : deux comptes différents, chacun ne voit que ses propres données.

## 5. Design system BlaBlaCar
- Couleurs : action `#0071EB`, texte fort `#001536`, danger `#C11417`, succès `#107046`
- Police : GT Eesti Pro Display, fallback Questrial
- Rayons : 8 / 12 / 16 / 24 / 9999
- Boutons en forme de pilule, hauteur 60dp
- Avatars circulaires
- Toutes ces valeurs vivent dans `constants/theme.ts`. Jamais de couleur écrite en dur dans un écran.

Ton des textes : vouvoiement, direct, rassurant, chaleureux.

## 6. Façon de travailler
- Avancer **une étape à la fois**, sur mon instruction. Ne pas anticiper la suite.
- Avant de coder : annoncer en 3 lignes ce qui va être fait et quels fichiers seront touchés.
- Après : expliquer simplement ce qui a été fait et comment le tester sur Expo Go.
- Code simple et lisible, commentaires en français.
- Si quelque chose est ambigu, poser la question au lieu de deviner.

## 7. Plan du Jour 1
1. Ce fichier CLAUDE.md ✅
2. Créer le projet Expo et la navigation : tous les écrans vides mais accessibles.
3. Afficher l'appli sur téléphone avec Expo Go.
4. Connecter Supabase, créer les écrans d'inscription et de connexion.
5. Créer deux comptes et vérifier que chacun ne voit que ses données.

Aucune fonctionnalité métier à ce stade (pas de recherche, pas de Plan B) : c'est attendu.
