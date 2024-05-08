import { Logo } from "@/components/Logo"
import { ImageBackground, View } from "react-native"

export function SignIn() {
	return (
		<View className="flex-1 bg-primary-900">
			<ImageBackground
				className="flex-1 w-full h-full"
				source={require("@/assets/banner.png")}
			>
				<View
					className="flex-1 justify-between gap-10 pt-32 px-10"
				>
					<Logo />

					{/* <View
						className="bg-yellow-900 h-72"
					/>

					<View
						className="bg-orange-900 h-32"
					/> */}
				</View>
			</ImageBackground>
		</View>
	)
}

