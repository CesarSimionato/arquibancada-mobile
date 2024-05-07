import { Image, View } from "react-native";

export function SignIn() {
	return (
		<View
			className="flex-1 bg-primary-900 justify-center items-center"
		>
			<Image
				source={require("@/assets/logo.png")}
			/>
		</View>
	)
}