import { Stack } from 'expo-router';
import { couleurs } from '../../constants/theme';

/** Pile des écrans d'authentification (connexion, inscription). */
export default function LayoutAuth() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: couleurs.fond },
        headerTintColor: couleurs.texteFort,
        contentStyle: { backgroundColor: couleurs.fond },
      }}
    >
      <Stack.Screen name="connexion" options={{ title: 'Connexion' }} />
      <Stack.Screen name="inscription" options={{ title: 'Inscription' }} />
    </Stack>
  );
}
