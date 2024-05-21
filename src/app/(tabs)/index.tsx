import { Text, View } from "react-native"

import { router } from "expo-router"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <View className="flex-1 bg-primary-900">
      <View className="bg-primary-700 px-5 pt-14 pb-5 flex-row justify-between items-center">
        <View className="flex-row justify-center items-center gap-3">
          <Avatar>
            <AvatarImage source={require("@/assets/teams/corinthians.png")} />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>

          <View>
            <Text className="text-lg">Olá,</Text>
            <Text className="font-bold text-xl">Cesar Simionato</Text>
          </View>
        </View>

        <Button
          label="Sair"
          className="w-min"
          onPress={() => router.push("/signIn")}
        />
      </View>
    </View>
  )
}
