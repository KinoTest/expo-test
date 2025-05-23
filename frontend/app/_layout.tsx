import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen
          /**
           * name="index" matchs ./index.tsx name
           */
          name="index"
          options={{
              title: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => <MaterialIcons size={28} name='home' color={color} />,
          }}
        />
        <Tabs.Screen
          /**
           * name="patients" matchs ./patients name
           */
          name="patients"
          options={{
              title: 'Patients',
              tabBarLabel: 'Patients',
              tabBarIcon: ({ color }) => <MaterialIcons size={28} name='people' color={color} />,
          }}
        />
        <Tabs.Screen
          name="therapies"
          options={{
            title: 'Therapies',
            tabBarLabel: 'Therapies',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name='medication-liquid' color={color} />,
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: 'Tasks',
            tabBarLabel: 'Tasks',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name='note' color={color} />,
          }}
        />
    </Tabs>
  );
}
