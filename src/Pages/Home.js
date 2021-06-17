import React, { useEffect, useState } from "react";
import {
	ScrollView,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import CardComponent from "./../../component/Card";
// import Header from "./../../component/Header";
import { Header, Image } from "react-native-elements";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";

import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { ActiveOrders } from "../server/orders";
import {
	onCreateOrders,
	onUpdateOrders,
	onCreateOrdersById,
} from "../graphql/subscriptions";
const CustomHeaderLeft = () => {
	return (
		<View style={styles.brandIcon}>
			<Image
				source={require("./../../assets/BrandIcon.png")}
				style={{ width: wp("10%"), height: hp("6.6%") }}
			/>
		</View>
	);
};

const HomeScreen = (props) => {
	const [orders, setOrders] = useState([]);
	const [Refresh, setRefresh] = useState(false);

	useEffect(() => {
		ActiveOrders().then((data) => {
			const InKitchen = data.data.filter((o) => {
				return o.status[o.status.length - 1].cStatus === "In Kitchen";
			});
			const orderNumberWiseSorted = InKitchen.slice().sort(
				(a, b) =>
					b.status[b.status.length - 1].timestamp -
					a.status[a.status.length - 1].timestamp
			);
			// console.log(InKitchen);
			setOrders(orderNumberWiseSorted);
		});
	}, [Refresh]);

	useEffect(() => {
		Auth.currentSession().then((session) => {
			const opts = {
				HotelID: session.accessToken.payload.username,
			};
			// console.log(session.accessToken.payload.username);
			API.graphql(graphqlOperation(onCreateOrdersById, opts)).subscribe({
				next: ({ provider, value }) => {
					ActiveOrders().then((data) => {
						const InKitchen = data.data.filter((o) => {
							return o.status[o.status.length - 1].cStatus === "In Kitchen";
						});
						const orderNumberWiseSorted = InKitchen.slice().sort(
							(a, b) =>
								b.status[b.status.length - 1].timestamp -
								a.status[a.status.length - 1].timestamp
						);
						// console.log(InKitchen);
						setOrders(orderNumberWiseSorted);
					});
				},
			});
			API.graphql(graphqlOperation(onUpdateOrders)).subscribe({
				next: ({ provider, value }) => {
					if (
						value.data.onCreateOrders.HotelId === Pool.getCurrentUser.username
					) {
						setRefresh(!Refresh);
					}
				},
			});
		});
	}, []);

	async function signOut() {
		try {
			await Auth.signOut();
			props.refresh();
		} catch (error) {
			console.log("error signing out: ", error);
			props.refresh();
		}
	}
	return (
		<View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
			<Header
				leftComponent={<CustomHeaderLeft />}
				centerComponent={{
					text: "KDS",
					style: { color: "#fff", fontSize: hp("4%"), fontWeight: "bold" },
				}}
				rightComponent={
					<TouchableOpacity onPress={signOut}>
						<Icon name="log-out" size={hp("6%")} color="#FFF" />
					</TouchableOpacity>
				}
			/>
			<ScrollView>
				<View style={styles.container}>
					{orders.map((order) => {
						return (
							<CardComponent
								order={order}
								refresh={() => {
									setRefresh(!Refresh);
								}}
							/>
						);
					})}

					{/* <CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent /> */}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: wp("100%"),
		flexDirection: "row",
		flexWrap: "wrap",
	},
	brandIcon: {
		justifyContent: "center",
		alignItems: "center",
	},
});
export default HomeScreen;
