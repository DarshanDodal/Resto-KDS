import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { name as appName } from "./app.json";
import KDS from "./src/index";

const theme = {
	roundness: 2,
	colors: {
		primary: "#e84e4e",
		accent: "#f1c40f",
	},
};

// Keystore password: 169ab7b765264c67b1d0d17ff5611665
//   Key alias:         QGRhcnNoYW4zMDEwOTkvS0RT
//   Key password:      a9174da6efed4757963ef68736fbd0f0

//   Path to Keystore:  E:\Projects\Hospitality-Management\FrontEnd\kds\KDS.jks

export default function Main() {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<KDS />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
