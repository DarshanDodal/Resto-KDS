import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import HomeScreen from "./Pages/Home";
import LoginScreen from "./Pages/Login";
import Amplify, { Auth } from "aws-amplify";

const awsconfig = {
	aws_project_region: "ap-south-1",
	aws_cognito_identity_pool_id:
		"ap-south-1:236fd527-6b95-4c1a-ad26-d243ba25667f",
	aws_cognito_region: "ap-south-1",
	aws_user_pools_id: "ap-south-1_iLiQ0zouT",
	aws_user_pools_web_client_id: "2pvpl8frpion3u3n63tur5v2c6",
	oauth: {},
	aws_appsync_graphqlEndpoint:
		"https://qv4xgwj2yracrgzw3rw43kwfoa.appsync-api.ap-south-1.amazonaws.com/graphql",
	aws_appsync_region: "ap-south-1",
	aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
	aws_appsync_apiKey: "da2-fakeApiId123456",
};

// const awsconfig = {
//   aws_project_region: 'ap-south-1',
//   aws_cognito_identity_pool_id:
//     'ap-south-1:dda69c0e-8016-4002-bcf4-33ae0cd95f8c',
//   aws_cognito_region: 'ap-south-1',
//   aws_user_pools_id: 'ap-south-1_VIApLtun8',
//   aws_user_pools_web_client_id: '6tg4dmkuhes0f2e3a62p92mq9t',
//   oauth: {},
//   aws_appsync_graphqlEndpoint:
//     'https://qv4xgwj2yracrgzw3rw43kwfoa.appsync-api.ap-south-1.amazonaws.com/graphql',
//   aws_appsync_region: 'ap-south-1',
//   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
//   aws_appsync_apiKey: 'da2-fakeApiId123456'
// };

Amplify.configure(awsconfig);

const KDS = () => {
	const [isSigned, setIsSigned] = useState(false);
	const [Refresh, setRefresh] = useState(false);
	useEffect(() => {
		Auth.currentSession()
			.then((session) => {
				setIsSigned(true);
			})
			.catch((error) => {
				setIsSigned(false);
			});
		// console.log(Pool.getCurrentUser().username);
	}, [Refresh]);
	return (
		<View style={{ flex: 1 }}>
			{/* <HomeScreen /> */}
			{isSigned ? (
				<HomeScreen
					refresh={() => {
						setRefresh(!Refresh);
					}}
				/>
			) : (
				<LoginScreen
					refresh={() => {
						setRefresh(!Refresh);
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: wp("100%"),
		flexDirection: "row",
		flexWrap: "wrap",
	},
});
export default KDS;
