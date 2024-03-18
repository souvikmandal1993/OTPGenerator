import { useState } from 'react';
import './App.css';
import PhoneNum from './components/PhoneNum';
import OtpCreate from './components/OtpCreate';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [switchCom, setSwitchCom] = useState(true);

  return (
    <>
      <h1>hello to OTP project</h1>
      {switchCom ? (
        <PhoneNum
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setSwitchCom={setSwitchCom}
        />
      ) : (
          <OtpCreate 
            otplength = {4}
        />
      )}
    </>
  );
}

export default App;
