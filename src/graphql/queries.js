/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
      id
      orderId
      order_number
      HotelID
      razorpay_payment_id
      razorpay_order_id
      razorpay_signature
      payment_status
      orderActive
      dishes {
        dishId
        name
        amount
        quantity
        image
      }
      status {
        cStatus
        timestamp
      }
      tableId
      tableNumber
      stage
      timestamp
      visitorId
      visitor
      phone
      customerLeave
      order_mode
      payment_mode
      createdAt
      updatedAt
    }
  }
`;
export const listOrderss = /* GraphQL */ `
  query ListOrderss(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        order_number
        HotelID
        razorpay_payment_id
        razorpay_order_id
        razorpay_signature
        payment_status
        orderActive
        dishes {
          dishId
          name
          amount
          quantity
          image
        }
        status {
          cStatus
          timestamp
        }
        tableId
        tableNumber
        stage
        timestamp
        visitorId
        visitor
        phone
        customerLeave
        order_mode
        payment_mode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHotelRatings = /* GraphQL */ `
  query GetHotelRatings($id: ID!) {
    getHotelRatings(id: $id) {
      id
      HotelID
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listHotelRatingss = /* GraphQL */ `
  query ListHotelRatingss(
    $filter: ModelHotelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotelRatingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        HotelID
        rating
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDishRatings = /* GraphQL */ `
  query GetDishRatings($id: ID!) {
    getDishRatings(id: $id) {
      id
      dishId
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listDishRatingss = /* GraphQL */ `
  query ListDishRatingss(
    $filter: ModelDishRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishRatingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dishId
        rating
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
