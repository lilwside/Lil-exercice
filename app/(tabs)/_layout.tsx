import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { couleurs } from '../../constants/theme';

/** Barre d'onglets basse : Rechercher, Publier, Mes trajets, Messages, Profil. */
export default function LayoutOnglets() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: couleurs.action,
        tabBarInactiveTintColor: couleurs.texteDoux,
        headerStyle: { backgroundColor: couleurs.fond },
        headerTintColor: couleurs.texteFort,
        tabBarStyle: { backgroundColor: couleurs.fond, borderTopColor: couleurs.bordure },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Rechercher',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="publier"
        options={{
          title: 'Publier',
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="trajets"
        options={{
          title: 'Mes trajets',
          tabBarIcon: ({ color, size }) => <Ionicons name="car-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
