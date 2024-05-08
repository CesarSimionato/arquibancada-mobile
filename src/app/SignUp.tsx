import { ImageBackground, Text, View, ScrollView } from "react-native"

import { Input } from "@/components/Input"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/Button"

export function SignUp() {
  return (
    <ScrollView className=" bg-primary-900"
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >
      <ImageBackground
        className="flex-1 w-full h-full"
        source={require("@/assets/banner.png")}
      >
        <View
          className="flex-1 justify-center gap-10 p-10"
        >
          <Logo />

          <View
            className="items-center gap-5"
          >
            <Text
              className="text-gray-200 font-bold text-2xl"
            >
              Crie sua conta
            </Text>

            <View className="w-full gap-4">
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                inputClasses="bg-primary-800"
              />

              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                inputClasses="bg-primary-800"
              />

              <Input
                label="Senha"
                placeholder="Digite uma senha"
                secureTextEntry={true}
                inputClasses="bg-primary-800"
              />

              <Input
                label="Confirmar Senha"
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                inputClasses="bg-primary-800"
              />
            </View>
          </View>

          <View className="gap-5">
            <Button label="Crie sua conta" />

            <Button label="Voltar para o login" variant="outline" />
          </View>

        </View>
      </ImageBackground>
    </ScrollView>
  )
}

