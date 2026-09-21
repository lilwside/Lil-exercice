import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espacements, typographie } from '../constants/theme';

type Props = {
  /** Titre de l'écran, affiché en grand. */
  titre: string;
  /** Une phrase qui explique à quoi servira cet écran. */
  description: string;
};

/**
 * Écran de remplissage utilisé pendant l'étape 2 : la navigation est en place,
 * les fonctionnalités arriveront plus tard.
 */
export default function EcranVide({ titre, description }: Props) {
  return (
    <View style={styles.conteneur}>
      <Text style={styles.titre}>{titre}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.note}>Écran en construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: espacements.lg,
    gap: espacements.sm,
    backgroundColor: couleurs.fond,
  },
  titre: {
    ...typographie.titre,
    color: couleurs.texteFort,
    textAlign: 'center',
  },
  description: {
    ...typographie.corps,
    color: couleurs.texteDoux,
    textAlign: 'center',
  },
  note: {
    ...typographie.legende,
    color: couleurs.action,
    marginTop: espacements.md,
  },
});
