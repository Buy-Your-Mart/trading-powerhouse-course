"use client";

import React, { useState } from 'react';

interface PaymentButtonProps {
  amount: number;
  className?: string;
  buttonText?: string;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({ 
  amount, 
  className = "btn-primary", 
  buttonText 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", 
      amount: amount * 100,
      currency: "INR",
      name: "Trading Powerhouse",
      description: "Stock Trading Masterclass",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain",
      handler: function (response: any) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#c5a059" // Gold color to match theme
      }
    };

    try {
      if ((window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        alert("Razorpay SDK not loaded. Please check your internet connection.");
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          PROCESSING...
        </span>
      ) : (buttonText || `BOOK YOUR SPOT @ ₹${amount}`)}
    </button>
  );
};
