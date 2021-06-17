import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Text } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { format, parseISO } from "date-fns";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Amplify, { Auth } from "aws-amplify";
import { StatusInKitchen } from "../src/server/orders";
const CardComponent = (props) => {
	const [language, setlanguage] = useState("Change the Status");
	const [touched, setTouched] = useState(true);
	// console.log(props);

	const orderReady = (id) => {
		// console.log(id);
		StatusInKitchen(id)
			.then((s) => {
				console.log(s);
				props.refresh();
			})
			.catch((err) => {
				console.log(err);
				props.refresh();
			});
	};
	return (
		<View style={styles.card}>
			<TouchableOpacity
				onPress={() => {
					setTouched(!touched);
				}}
			>
				<View>
					<View style={styles.cardHeader}>
						<View>
							<Text style={{ fontWeight: "bold" }}>
								{format(new Date(parseISO(props.order.createdAt)), "HH:mm b")}
							</Text>
							<Text>
								Table :{" "}
								<Text style={{ fontWeight: "bold" }}>
									{props.order.tableNumber}
								</Text>
							</Text>
						</View>
						<View style={{ flexDirection: "column", alignItems: "flex-end" }}>
							<Text>
								{
									// props.order.visitor.split(/ (.*)/)
									props.order.visitor.substr(
										0,
										props.order.visitor.indexOf(" ")
									)
								}
							</Text>
							<Text style={styles.oderId}>#{props.order.order_number}</Text>
						</View>
					</View>
					<Divider style={{ height: 1 }} />
					{props.order.dishes.map((dish) => (
						<View style={styles.cardContent}>
							<Text style={{ fontWeight: "bold" }}>{dish.name}</Text>
							<Text style={{ fontWeight: "bold" }}>{dish.quantity}</Text>
						</View>
					))}

					<Divider style={{ height: 1, marginVertical: 10 }} />
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					orderReady(props.order.id);
				}}
			>
				<View style={styles.picker}>
					<FontAwesomeIcon icon={faCheck} size={wp("3%")} color={"#f55252"} />
					<Text style={styles.pickerText}>Ready</Text>
					{/* <Picker
					selectedValue={language}
					dropdownIconColor="#e84e4e"
					style={{ color: "black" }}
					onValueChange={(itemValue) => setlanguage(itemValue)}
				>
					<Picker.Item label="In Kitchen" value="Wainting" />
					<Picker.Item label="Working On" value="Working On" />
					<Picker.Item label="In Process" value="In Process" />
					<Picker.Item label="Ready to Serve" value="Ready to Serve" />
					<Picker.Item label="Out for Delevery" value="Out for Delevery" />
				</Picker> */}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#ffffff",
		width: wp("22.9%"),
		// borderColor: "#DCDCDC",
		// borderWidth: 1,
		borderRadius: wp("1%"),
		padding: wp("1%"),
		margin: wp("1%"),
	},
	cardTouched: {
		backgroundColor: "rgba(245, 82, 82, 0.2)",
		width: wp("22.9%"),
		// borderColor: "#DCDCDC",
		// borderWidth: 1,
		borderRadius: wp("1%"),
		padding: wp("1%"),
		margin: wp("1%"),
	},
	cardHeader: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: wp("0.7%"),
	},
	cardContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: hp("2%"),
		marginVertical: hp("0.5%"),
		marginHorizontal: wp("0.5%"),
	},
	oderId: {
		color: "blue",
		textDecorationLine: "underline",
		textDecorationColor: "blue",
		fontWeight: "bold",
	},
	picker: {
		borderColor: "#e84e4e",
		borderWidth: 1,
		borderRadius: 30,
		paddingHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	pickerText: {
		color: "#f55252",
		fontSize: wp("3%"),
		paddingHorizontal: 7,
	},
	Note: {
		marginVertical: hp("1.5%"),
		// marginHorizontal: wp("0.5%"),
	},
});
export default CardComponent;
