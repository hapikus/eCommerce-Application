import { useEffect, useRef, useState } from 'react';
import { Form, Image, Button, message } from 'antd';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registAsync } from '../../redux/slice/authSlice';
import store, { RootState } from '../../redux/store';

import PersonalDataForm from './components/personalForm';
import AddressesDataForm from './components/addressesForm';

import PersonalDataImg from '../../assets/images/pexels-anna-shvets-4588455.jpg';
import AddressesDataImg from '../../assets/images/pexels-pixabay-256450.jpg';

import styles from './signup.module.css';

const errorStateChecker = (logErrMsg: string): string => {
  if (logErrMsg.includes('Пользователь с почтовым ящиком')) {
    return 'Email already in use. Please use another.';
  }
  return 'An unknown error occurred';
};

function SignUp() {
  const [PersonalData] = Form.useForm();
  const [AddresssesData] = Form.useForm();

  const [currentForm, setCurrentForm] = useState('Pesonal');
  const [pesonalDataValues, setPesonalDataValues] = useState({});

  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const isLoadingtState = useSelector(
    (state: RootState) => state.auth.isLoading,
  );

  const signupErrorState = useSelector(
    (state: RootState) => state.auth.registError,
  );

  const isAuthRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthState && !isAuthRef.current) {
      isAuthRef.current = true;

      message.success('Login successful! Redirecting to the main page...');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [isAuthState, navigate]);

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
    const adressValues = await AddresssesData.validateFields();
    await store.dispatch(
      registAsync({ ...pesonalDataValues, ...adressValues }),
    );
    PersonalData.resetFields();
    AddresssesData.resetFields();
    if (signupErrorState) {
      message.error(errorStateChecker(signupErrorState));
      setTimeout(() => {
        setCurrentForm('Pesonal');
      }, 1000);
    }
  };

  function changeForm(currForm: string) {
    if (currForm === 'Pesonal') {
      return (
        <>
          <div className={styles.signupForm}>
            <PersonalDataForm formInstance={PersonalData} />
            <Button
              type="primary"
              className={styles.submitButton}
              onClick={handlePersonalDataSubmit}
            >
              Submit Personal Data
            </Button>
          </div>
          <div className={styles.imageContainerPersonal}>
            <Image
              preview={false}
              width={250}
              height="100%"
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
              height="100%"
              src={AddressesDataImg}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.signupForm}>
            <AddressesDataForm formInstance={AddresssesData} />
            <Button
              type="primary"
              className={styles.submitButton}
              onClick={handleAddresssesDataSubmit}
              disabled={isLoadingtState}
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
        <p className={styles.signupTitle}>SIGN UP</p>
        <div className={styles.signupFormAndLogo}>
          {changeForm(currentForm)}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
