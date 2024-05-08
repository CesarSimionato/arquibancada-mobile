import { Image, Text, View } from "react-native";

export function Logo() {
  return (
    <View
      className="items-center"
    >
      <View
        className="flex-row items-center gap-3"
      >
        <Image
          className="w-10 h-10"
          source={require("@/assets/logo.png")}
        />

        <Text
          className="text-white font-bold text-3xl"
        >
          Arquibancada
        </Text>
      </View>

      <Text
        className="text-gray-200 text-sm"
      >
        Registre suas partida em campo
      </Text>
    </View>
  )
}