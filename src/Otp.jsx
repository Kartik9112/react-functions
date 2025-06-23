import React, { useRef, useState } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ''); // Allow digits only
    if (!value) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next box if exists
    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const updatedOtp = [...otp];

      if (otp[index] === '') {
        // Move to previous input if current is empty
        if (index > 0) {
          inputRefs.current[index - 1].focus();
          updatedOtp[index - 1] = '';
        }
      } else {
        updatedOtp[index] = '';
      }

      setOtp(updatedOtp);
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-10">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-xl border-2 border-gray-400 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
