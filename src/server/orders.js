import { OrdersAPI } from "./links";
import Amplify, { Auth } from "aws-amplify";

//get-active-orders-by-hotel
const ActiveOrders = () => {
	const func = new Promise((resolve, reject) => {
		Auth.currentSession().then((session) => {
			fetch(
				OrdersAPI +
					"/api/get-active-orders-by-hotel" +
					`?hotel=${session.accessToken.payload.username}&active=true`,
				{
					headers: {
						Authorization: session.idToken.jwtToken,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					resolve(data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	});
	return func;
};

//accept-orders
const AcceptOrders = (options) => {
	const func = new Promise((resolve, reject) => {
		Auth.currentSession().then((session) => {
			fetch(
				OrdersAPI + "/api/order-accept", //URL.OrdersAPI
				{
					method: "PATCH",
					body: JSON.stringify({ orders: options }),
					//mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Authorization: session.idToken.jwtToken,
					},
				}
			)
				.then((response) => response.json())
				.then(function (response) {
					resolve(response);
				})
				.catch(function (err) {
					reject(err);
				});
		});
	});
	return func;
};

//reject-orders
const RejectOrders = (options, pay_id) => {
	const func = new Promise((resolve, reject) => {
		Auth.currentSession().then((session) => {
			fetch(
				OrdersAPI + "/api/order-reject", //URL.OrdersAPI
				{
					method: "PATCH",
					body: JSON.stringify({ orders: options }),
					//mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Authorization: session.idToken.jwtToken,
					},
				}
			)
				.then((response) => response.json())
				.then(function (response) {
					fetch(`http://localhost:5000?payment_id=${pay_id}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					})
						.then((res) => {
							console.log("RZP Refund", res);
							resolve(response);
						})
						.catch((err) => {
							console.log("RZP Refund", err);
							reject(err);
						});
				})
				.catch(function (err) {
					reject(err);
				});
		});
	});
	return func;
};

//deactivate-orders
const DeactivateOrders = (options) => {
	const func = new Promise((resolve, reject) => {
		Auth.currentSession().then((session) => {
			fetch(
				OrdersAPI + "/api/order-deactivate", //URL.OrdersAPI
				{
					method: "POST",
					body: JSON.stringify({ orders: options }),
					// mode: 'no-cors',
					headers: {
						"Content-Type": "application/json",
						Authorization: session.idToken.jwtToken,
					},
				}
			)
				.then((response) => response.json())
				.then(function (response) {
					resolve(response);
				})
				.catch(function (err) {
					reject(err);
				});
		});
	});
	return func;
};

const StatusInKitchen = (id) => {
	const func = new Promise((resolve, reject) => {
		Auth.currentSession().then((session) => {
			fetch(
				OrdersAPI + "/api/order-ready?id=" + id, //URL.OrdersAPI
				{
					method: "PATCH",
					//mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Authorization: session.idToken.jwtToken,
					},
				}
			)
				.then((response) => response.json())
				.then(function (response) {
					resolve(response);
				})
				.catch(function (err) {
					reject(err);
				});
		});
	});
	return func;
};
export {
	ActiveOrders,
	AcceptOrders,
	RejectOrders,
	DeactivateOrders,
	StatusInKitchen,
};
