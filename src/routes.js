const Router = require('express').Router();

const OrderController = require('./controller/OrderController');

let orderController = new OrderController();
Router.get('/order', orderController.getOrderById);
Router.get('/order/restaurant', orderController.getOrderByRestaurantId);
Router.put('/order/status', orderController.updateOrderStatus);
Router.post('/order', orderController.postOrder);

Router.get('/orderkeywords', orderController.getKeywords);

module.exports = Router;
