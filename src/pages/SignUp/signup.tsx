import { useState } from 'react';
import { Form, Image, Button } from 'antd';

import PersonalDataForm from './components/personalForm';
import AddressesDataForm from './components/addressesForm';

import PersonalDataImg from '../../assets/images/pexels-anna-shvets-4588455.jpg';
import AddressesDataImg from '../../assets/images/pexels-pixabay-256450.jpg';

import styles from './signup.module.css';

function SignUp() {
  const [PersonalData] = Form.useForm();
  const [AddresssesData] = Form.useForm();

  const [currentForm, setCurrentForm] = useState('Pesonal');
  const [pesonalDataValues, setPesonalDataValues] = useState({});

  const handlePersonalDataSubmit = async () => {
    try {
      const personValues = await PersonalData.validateFields();
      setPesonalDataValues(personValues);
      setCurrentForm('Addresses');
    } catch {
      // The catch block is omitted, so the error will be muted
    }
  };

  const handleAddresssesDataSubmit = async () => {
    try {
      const adressValues = await AddresssesData.validateFields();
      console.log(pesonalDataValues);
      console.log(adressValues);
    } catch {
      // The catch block is omitted, so the error will be muted
    }
  };

  function changeForm(currForm: string) {
    if (currForm === 'Pesonal') {
      return (
        <>
          <div className={styles.signupForm}>
            <PersonalDataForm formInstance={PersonalData} />
            <Button
              className={styles.submitButton}
              onClick={handlePersonalDataSubmit}
            >
              Submit Personal Data
            </Button>
          </div>
          <div className={styles.imageContainerPersonal}>
            <Image
              width={250}
              height={556}
              src={PersonalDataImg}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </>
      );
    }
    if (currForm === 'Addresses') {
      return (
        <>
          <div className={styles.imageContainerAddress}>
            <Image
              preview={false}
              width={250}
              height={885}
              src={AddressesDataImg}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.signupForm}>
            <AddressesDataForm formInstance={AddresssesData} />
            <Button
              className={styles.submitButton}
              onClick={handleAddresssesDataSubmit}
            >
              Submit Addresses Data
            </Button>
          </div>
        </>
      );
    }
    return null;
  }

  return (
    <div className={styles.signupPageContainter}>
      <div className={styles.signupContentContainer}>
        <p className={styles.signupTitle}>SIGN IN</p>
        <div className={styles.signupFormAndLogo}>
          {changeForm(currentForm)}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
