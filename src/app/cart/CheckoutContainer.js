import React, { Component } from 'react';
import { connect } from 'react-redux';


class CheckoutContainer extends Component{
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.openRazorpay= this.openRazorpay.bind(this);
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }

  openRazorpay(e) {
    e.preventDefault();

    console.log("hello")
    var options = {
      "key": "rzp_test_uXYsuVsRNCtysU", // Enter the Key ID generated from the Dashboard
      "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_EzhVOn3EIHthbC", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999",
      },
      "notes": {
        "Shipping address": "Bommanahalli, Bangalore",
      },
      "theme": {
          "color": "#F37254"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    return
  }

  render() {
    return (
      <>
        <button id="rzp-button1" onClick={this.openRazorpay}>Pay</button>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);