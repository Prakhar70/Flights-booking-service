const { StatusCodes } = require('http-status-codes');
const {BookingService} = require('../services');
const { SuccessReponse, ErrorResponse } = require('../utils/common');

async function createBooking(req, res){
    try{
        const response = await BookingService.createBooking({
            flightId:req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        });
        SuccessReponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function makePayment(req, res){
    try{
        const response = await BookingService.makePayment({
            totalCost :req.body.totalCost,
            userId: req.body.userId,
            bookingId: req.body.bookingId
        });
        SuccessReponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports={
    createBooking,
    makePayment
}