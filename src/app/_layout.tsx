import "@/styles/global.css"

import { useEffect } from "react"

import * as NavigationBar from "expo-navigation-bar"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { Slot } from "expo-router"

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { colors } from "@/styles/colors"

import { Loading } from "@/components/Loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  useEffect(() => {
    const setup = async () => {
      await NavigationBar.setBackgroundColorAsync(colors.primary[900]);
    }
    setup()
  }, [])

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
} 