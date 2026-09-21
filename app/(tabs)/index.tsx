import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { couleurs, espacements, rayons, tailles, typographie } from '../../constants/theme';

/**
 * Écran « Rechercher ».
 * Pour l'instant vide côté fonctionnalité : il sert aussi de point d'entrée
 * vers les écrans qui ne sont pas dans la barre d'onglets, pour pouvoir tous
 * les ouvrir pendant le développement.
 */
export default function Rechercher() {
  return (
    <ScrollView contentContainerStyle={styles.conteneur}>
      <Text style={styles.titre}>Où allez-vous&nbsp;?</Text>
      <Text style={styles.description}>
        La recherche de trajets arrivera plus tard. Pour l&apos;instant, la navigation est en place.
      </Text>

      <View style={styles.liens}>
        <Text style={styles.sousTitre}>Écrans hors onglets</Text>

        <Link href="/connexion" style={styles.lien}>
          Connexion
        </Link>
        <Link href="/inscription" style={styles.lien}>
          Inscription
        </Link>
        <Link href="/trajet/demo" style={styles.lien}>
          Détail d&apos;un trajet
        </Link>
        <Link href="/plan-b/demo" style={styles.lien}>
          Plan B
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    flexGrow: 1,
    padding: espacements.lg,
    gap: espacements.sm,
    backgroundColor: couleurs.fond,
  },
  titre: {
    ...typographie.titre,
    color: couleurs.texteFort,
  },
  sousTitre: {
    ...typographie.sousTitre,
    color: couleurs.texteFort,
    marginBottom: espacements.sm,
  },
  description: {
    ...typographie.corps,
    color: couleurs.texteDoux,
  },
  liens: {
    marginTop: espacements.xl,
  },
  lien: {
    ...typographie.corps,
    color: couleurs.surInverse,
    backgroundColor: couleurs.action,
    borderRadius: rayons.pilule,
    height: tailles.hauteurBouton,
    lineHeight: tailles.hauteurBouton,
    textAlign: 'center',
    overflow: 'hidden',
    marginBottom: espacements.sm,
  },
});
