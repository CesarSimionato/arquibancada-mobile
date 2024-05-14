import { Tabs } from "expo-router"

import { Ionicons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary[700],
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="football-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
