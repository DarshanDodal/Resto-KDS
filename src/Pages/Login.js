import * as React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { Formik, yupToFormErrors } from "formik";
import { Input, Button, Text } from "react-native-elements";
import * as yup from "yup";

import Amplify, { Auth } from "aws-amplify";

const image = {
	uri: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
};
export default function LogInScreen(props) {
	async function login(username, password) {
		try {
			const user = await Auth.signIn(username, password);
			props.refresh();
		} catch (error) {
			console.log("error signing in", error);
		}
	}
	return (
		<View style={styles.Container}>
			<ImageBackground source={image} style={styles.image}></ImageBackground>
			<View style={styles.overlay}></View>

			<View style={styles.custom}>
				<View style={{ alignItems: "center", marginBottom: 10 }}>
					<Image
						style={{
							width: 150,
							height: 80,
						}}
						source={require("../../assets/BrandIcon.png")}
					/>
				</View>

				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={yup.object().shape({
						email: yup
							.string()
							.email("Not a valid email")
							.required("Email is required"),
						password: yup
							.string()
							.min(8, "It must be 8 latter")
							.matches(/\w*[a-z]\w*/, "Password must have a small letter")
							.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
							.matches(/\d/, "Password must have a number")
							.matches(
								/[!@#$%^&*()\-_"=+{}; :,<.>]/,
								"Password must have a special character"
							)
							.min(
								8,
								({ min }) => `Password must be at least ${min} characters`
							)
							.required("Password is required"),
					})}
					onSubmit={(values) => {
						login(values.email, values.password);
					}}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						isValid,
					}) => (
						<View>
							<Input
								inputContainerStyle={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									borderRadius: 10,
									paddingHorizontal: 6,
									paddingVertical: 3,
									borderBottomWidth: 0,
								}}
								inputStyle={{
									color: "white",
									paddingLeft: 3,
								}}
								textContentType="emailAddress"
								placeholder="Email"
								leftIcon={{
									type: "feather",
									name: "user",
									color: "#e84e4e",
								}}
								onBlur={handleBlur("email")}
								value={values.email}
								onChangeText={handleChange("email")}
								errorMessage={errors.email}
							/>
							<Input
								inputContainerStyle={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									borderRadius: 10,
									paddingVertical: 3,
									paddingHorizontal: 6,
									borderBottomWidth: 0,
								}}
								inputStyle={{ color: "white", paddingLeft: 3 }}
								errorMessage={errors.password}
								secureTextEntry
								textContentType="password"
								placeholder="Password"
								leftIcon={{
									type: "feather",
									name: "lock",
									color: "#e84e4e",
								}}
								onBlur={handleBlur("password")}
								value={values.password}
								onChangeText={handleChange("password")}
							/>

							<View style={{ alignItems: "center" }}>
								<Button
									disabled={!isValid}
									buttonStyle={{
										borderRadius: 50,
										backgroundColor: "#e84e4e",
									}}
									containerStyle={{ width: "75%" }}
									onPress={handleSubmit}
									title="Log In"
								/>
							</View>

							<View
								style={{
									flex: 1,
									alignItems: "flex-end",
									justifyContent: "center",
									marginVertical: 5,
								}}
							>
								{/* <Text style={{ color: "white", textAlignVertical: "center" }}>
									Forget Password ?
								</Text> */}
							</View>
						</View>
					)}
				</Formik>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		flex: 1,
		resizeMode: "center",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	overlay: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: "black",
		opacity: 0.3,
	},
	custom: {
		position: "absolute",
		width: 350,
		backgroundColor: "rgba(0,0,0,0.5)",
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
