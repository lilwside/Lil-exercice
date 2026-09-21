import { useLocalSearchParams } from 'expo-router';
import EcranVide from '../../components/EcranVide';

/** Détail d'un trajet, ouvert depuis la recherche ou depuis « Mes trajets ». */
export default function DetailTrajet() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <EcranVide
      titre="Détail du trajet"
      description={`Les informations du trajet ${id} s'afficheront ici, avec le bouton de réservation.`}
    />
  );
}
