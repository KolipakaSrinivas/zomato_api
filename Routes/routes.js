const express = require('express')
const router = express.Router()



// <-------------------controller---------------->
// location controller
const location = require("../controller/LocationController");

// restaurant
const restaurant = require("../controller/RestaurantController");

// mealtype
const mealtype = require("../controller/MealTypeController");

// order
const order = require("../controller/OrdersController");

// payment
const payment = require("../controller/PaymentController");




// <----------------APIS-------------------->

// api location.welcome
router.get('/api',location.welcome)
router.get("/api/get-location-list", location.getLocationList);


// restaurant api
router.get(
    "/api/get-restaurant-list-loc-id/:loc_id",
    restaurant.getRestaurantListByLocID
  );

  router.get(
    "/api/get-restaurant-details-by-id/:id",
    restaurant.getRestaurantDetailsByID
  );
  
  router.get("/api/get-menu-items/:rest_id", restaurant.getMenuItems);
  
  router.post("/api/filter", restaurant.filter);


  //mealtype
router.get("/api/get-meal-types-list", mealtype.getMealTypeList);

// orders
router.post("/api/save-orders", order.saveNewOrder);

// Payments
router.post("/api/gen-order-id", payment.genOrderId);
router.post("/api/verify-payment", payment.verifyPayment);




module.exports= router