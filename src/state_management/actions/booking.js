import {HOTELS_ERROR,POST_BOOKING} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';

export const postBooking = (booking) => async dispatch => {
    
    var bookingData = {
        "bookingRef" : booking.bookingReference,
        "bookingName" : booking.bookingName,
        "bookingMobile" : booking.bookingPhone,
        "bookingEmail" : booking.bookingEmail,
        "bookedRooms" : booking.room,
        "bookedSuit" : booking.suite,
        "bookedHotelId" : booking.hotelId,
        "bookingAmount" : booking.totalAmount,
        "bookingStatus" : booking.bookingStatus,
        "bookingStartDate" : booking.bookingStartDate,
        "bookingEndDate" : booking.bookingEndDate,
        "createdAt" : booking.createdAt
    }
    
    try {
       
        await Axios(
            {
                method: 'post',
                url: API_BASE + 'booking/',
                data:bookingData,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        dispatch(
            {
            type: POST_BOOKING,
            payload: bookingData
        });
        localStorage.setItem('amount',bookingData.bookingAmount);
        localStorage.setItem('email', bookingData.bookingEmail);
        localStorage.setItem('phone', bookingData.bookingMobile);
        localStorage.setItem('reference', bookingData.bookingRef);
        localStorage.setItem('hotelID', bookingData.bookedHotelId);
        localStorage.setItem('BookingDetail', bookingData.bookedSuit + 
        " | " + bookingData.bookingStartDate + " | " + bookingData.bookingEndDate);
        window.location.href = "/sandbox/payment";
    } catch{
        dispatch({
            type: HOTELS_ERROR,
            payload: "can't create booking"
        });
    }
};





