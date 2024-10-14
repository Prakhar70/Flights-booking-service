const { StatusCodes } = require('http-status-codes');
const {BookingService} = require('../services');
const { SuccessReponse, ErrorResponse } = require('../utils/common');

async function createBooking(req, res){
    try{
        const response = await BookingService.createBooking({
            flightId:req.body.flightId,
            userId: req.body.userId,
            noofSeats: req.body.noofSeats
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
    createBooking
}