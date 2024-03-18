import React from 'react';

const PhoneNum = ({ phoneNumber, setPhoneNumber, setSwitchCom }) => {
  const validphoneNum = (e) => {
    setPhoneNumber(e.target.value);
  };

  const phoneNumberSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber !== '') setSwitchCom(false);
  };

  return (
    <form onSubmit={(e) => phoneNumberSubmit(e)}>
      <h4>Type Phone Number</h4>
      <input
        type='text'
        value={phoneNumber}
        placeholder='type phone number'
        onChange={validphoneNum}
      />
      <button>Submit</button>
    </form>
  );
};

export default PhoneNum;
