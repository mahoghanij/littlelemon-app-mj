import React from "react";

const ConfirmedBooking = () => {
    return(
        <div className="confirm">
            <div>
            <h1><span>Congratulations!</span></h1>
            <p>You have successfully reserved a table at Little Lemon - Houston!</p>
            <h3>What to know before you go:</h3>
            <h4>Important Dining Information</h4>
            <p>We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.</p>
            <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
            <p>Your table will be reserved for 2 hours for parties of up to 4; and 2 hours 30 minutes for parties of 5+.</p>
            <h4>A note from the restaurant</h4>
            <p>Thank you for booking your next dining experience with Little Lemon! We kindly remind you that tables will only be held only for 15 minutes after your reserved time. Any arrivals later than 15 minutes from the specified reservation time will be added to the waitlist and your table will be given to another party. We appreciate your understanding.</p>
            </div>
            <div className="btnClose">
                <a href="/booking">
                <button aria-label="Close">Close</button>
                </a>
            </div>
        </div>

    )
}

export default ConfirmedBooking;