import React, { useRef, useState, useEffect } from 'react';

const OtpCreate = ({ otplength }) => {
  const [otpNum, setOtpNum] = useState(new Array(otplength).fill(''));

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  //   console.log(inputRef);

  const otpChnage = (index, e) => {
    let value = e.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otpNum];
    newOtp[index] = value.substring(value.length - 1);
    setOtpNum(newOtp);

    if (value && index < otplength - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
    if (newOtp.join('').length === otplength) {
      console.log('API trigger');
    }
  };

  const otpClick = (i) => {
    inputRef.current[i].setSelectionRange(1, 1);

    if (i > 0 && !otpNum[i - 1]) {
      inputRef.current[otpNum.indexOf('')].focus();
    }

    if (i > 0 && otpNum[i]) {
      inputRef.current[otpNum.indexOf('')].focus();
    }
  };

  const otpKeyDown = (e, i) => {
    if (
      e.key === 'Backspace' &&
      !otpNum[i] &&
      i > 0 &&
      inputRef.current[i - 1]
    ) {
      inputRef.current[i - 1].focus();
    }
  };

  return (
    <>
      <h3>OTP section</h3>
      <div>
        {otpNum.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputRef.current[index] = input)}
            className='otpField'
            type='text'
            value={value}
            onChange={(e) => otpChnage(index, e)}
            onClick={() => otpClick(index)}
            onKeyDown={(e) => otpKeyDown(e, index)}
            onDoubleClick={(e) => inputRef.current[index].focus()}
          />
        ))}
      </div>
    </>
  );
};

export default OtpCreate;
