import { useLocalSearchParams } from 'expo-router';
import EcranVide from '../../components/EcranVide';

/**
 * Plan B : alternatives proposées au passager quand le conducteur annule.
 * Cet écran s'ouvre depuis le parcours d'annulation, pas depuis les onglets.
 */
export default function PlanB() {
  const { reservationId } = useLocalSearchParams<{ reservationId: string }>();

  return (
    <EcranVide
      titre="Votre Plan B"
      description={`Nous vous proposerons ici des trajets de remplacement pour la réservation ${reservationId}.`}
    />
  );
}
