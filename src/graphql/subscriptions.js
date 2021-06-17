/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrdersById = /* GraphQL */ `
  subscription OnCreateOrdersById($HotelID: String!) {
    onCreateOrdersById(HotelID: $HotelID) {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
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
export const onCreateHotelRatings = /* GraphQL */ `
  subscription OnCreateHotelRatings {
    onCreateHotelRatings {
      id
      HotelID
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHotelRatings = /* GraphQL */ `
  subscription OnUpdateHotelRatings {
    onUpdateHotelRatings {
      id
      HotelID
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHotelRatings = /* GraphQL */ `
  subscription OnDeleteHotelRatings {
    onDeleteHotelRatings {
      id
      HotelID
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDishRatings = /* GraphQL */ `
  subscription OnCreateDishRatings {
    onCreateDishRatings {
      id
      dishId
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDishRatings = /* GraphQL */ `
  subscription OnUpdateDishRatings {
    onUpdateDishRatings {
      id
      dishId
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDishRatings = /* GraphQL */ `
  subscription OnDeleteDishRatings {
    onDeleteDishRatings {
      id
      dishId
      rating
      userId
      createdAt
      updatedAt
    }
  }
`;
