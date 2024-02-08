import React from "react";
import dishes from "../dishes";
import Swal from "sweetalert2";

const Menu = () => {
//   console.log(recipes[0]);
const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Do you want to confirm this order?',
        text: "You won't be able to change this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Yes, place my order!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Orderd!',
            'Your order has been confirmed.',
            'success'
          )
        } 
      })

}
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Weekly Chefs Menu</h2>
        <button>Order Online</button>
      </div>
      <div className="cards">
        {dishes.map((dish) => (
          <div key={dish.id} className="menu-items">
            <img src={dish.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{dish.title}</h5>
                <p>${dish.price}</p>
              </div>
              <p>{dish.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(dish.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;