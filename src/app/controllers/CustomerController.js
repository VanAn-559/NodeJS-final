const { mongooseToObject } = require('../../util/mongoose');
const Customer = require("../models/Customer");

class CustomerController {

    // GET /new
    inpost(req, res, next) {
        
        res.render("/reate/checkOut");
    }
    paymen(req, res, next) {
            const customer = new Customer(req.body);
            customer.save()
            .then(() => res.redirect('/cart/order'))
            .catch(error => {});
    }
    edit(req, res, next) {
        Customer.findById(req.params.id)
            .then(customer => res.render('customer/edit', {
                customer: mongooseToObject(customer)
            }))
            .catch(next);
    }
    updateCustomer(req, res, next) {
        Customer.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/customer/create'))
            .catch(next);
    }
    deleteCustomer(req, res, next) {
        Customer.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
   
}

module.exports = new CustomerController;