import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { couleurs } from '../constants/theme';

/**
 * Navigation racine de l'application.
 * Les onglets et l'authentification sont des groupes sans en-tête propre ;
 * les écrans de détail s'empilent par-dessus.
 */
export default function LayoutRacine() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: couleurs.fond },
          headerTintColor: couleurs.texteFort,
          headerTitleStyle: { color: couleurs.texteFort },
          contentStyle: { backgroundColor: couleurs.fond },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="trajet/[id]" options={{ title: 'Le trajet' }} />
        <Stack.Screen name="plan-b/[reservationId]" options={{ title: 'Plan B' }} />
      </Stack>
    </>
  );
}
