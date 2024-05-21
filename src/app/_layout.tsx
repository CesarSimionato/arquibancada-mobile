import "@/styles/global.css"

import { useEffect } from "react"

import * as SplashScreen from "expo-splash-screen"
import * as NavigationBar from "expo-navigation-bar"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { Slot } from "expo-router"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { colors } from "@/styles/colors"

SplashScreen.preventAutoHideAsync()
NavigationBar.setBackgroundColorAsync(colors.primary[900])

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
}
