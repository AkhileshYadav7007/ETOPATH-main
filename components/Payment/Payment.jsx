import React from 'react';

const Payment = ({ orderDetails, onSuccess, onFailure }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      // Get order data from your backend
      const response = await fetch('http://localhost:8080/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();

      const options = {
        key: 'rzp_test_zL2doCmQkEPhtc', // from application.properties
        amount: data.amount, // from your backend
        currency: data.currency,
        name: 'Path2Ecom',
        description: `${orderDetails.courseName || 'eCommerce Training Course'}`,
        image: '/logo.png',
        order_id: data.razorpayOrderId, // from your backend
        handler: function (response) {
          // Handle successful payment
          verifyPayment(response);
        },
        prefill: {
          name: orderDetails.customerName,
          email: orderDetails.customerEmail,
          contact: orderDetails.customerPhone,
        },
        notes: {
          address: orderDetails.customerAddress,
        },
        theme: {
          color: '#2563eb',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        onFailure({ 
          error: 'Payment failed', 
          errorDetails: response.error 
        });
      });
      
      rzp1.open();
    } catch (error) {
      console.error('Error creating order:', error);
      onFailure({ error: 'Failed to create order' });
    }
  };

  const verifyPayment = async (paymentResponse) => {
    try {
      const response = await fetch('http://localhost:8080/api/payments/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
        },
        body: JSON.stringify({
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_signature: paymentResponse.razorpay_signature
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        onSuccess(data);
      } else {
        onFailure(data);
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      onFailure({ error: 'Payment verification failed' });
    }
  };

  return (
    <button onClick={displayRazorpay} className="pay-button">
      Pay Now
    </button>
  );
};

export default Payment;