import "@/styles/global.css"

import { useEffect } from "react"

import * as NavigationBar from "expo-navigation-bar"

import { StatusBar } from "expo-status-bar"

import { SignUp } from "@/app/SignUp"

import { colors } from "@/styles/colors"

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await NavigationBar.setBackgroundColorAsync(colors.primary[900]);
    }
    setup()
  }, [])

  return (
    <>
      <SignUp />
      <StatusBar style="light" />
    </>
  );
}

