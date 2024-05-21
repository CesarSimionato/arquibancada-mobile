import { Platform } from "react-native"

import { Tabs } from "expo-router"

import { Ionicons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

export default function TabLayout() {
  const iconSize = 40

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: colors.gray[200],
        headerStyle: {
          backgroundColor: colors.primary[700],
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          height: 80,
          borderTopWidth: 0,
          backgroundColor: colors.primary[700],
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="football-outline" size={iconSize} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          headerTitle: "Partidas Cadastradas",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="list-circle-outline"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
