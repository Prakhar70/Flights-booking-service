const {StatusCodes} = require('http-status-codes');

const { Booking } = require('../models');
const CRUDRespository = require('./crud-repository');

class BookingRepository extends CRUDRespository{
    constructor(){
        super(Booking)
    }
}

modules.export = BookingRepository