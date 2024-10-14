const {StatusCodes} = require('http-status-codes');

const { Booking } = require('../models');
const CRUDRespository = require('./crud-repository');

class BookingRepository extends CRUDRespository{
    constructor(){
        super(Booking)
    }
    async createBooking(data, transaction){
        const response = await Booking.create(data, {transaction:transaction});
        return response;
    }
    async get(data, transaction) {
          const response = await this.model.findByPk(data, {transaction:transaction});
          return response;
    }
}

module.exports = BookingRepository