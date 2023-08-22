import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Image, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import store, { RootState } from '../../redux/store';
import { loginAsync } from '../../redux/slice/authSlice';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import passwordValidationRules from '../../utils/passValid';
import LoginFormValues from '../../types/types';

import styles from './login.module.css';
import AddressesDataImg from '../../assets/images/abstract-digital-grid-black-background.jpg';

const errorStateChecker = (logErrMsg: string): string => {
  if (logErrMsg === 'Пользователя не существует') {
    return 'Please check your account name and try again.';
  }
  if (logErrMsg === 'Неверный пароль') {
    return 'Please check your password and try again.';
  }
  return 'An unknown error occurred';
};

function LoginPage() {
  const dispatch = useDispatch();
  dispatch(setCurrentPage('login'));
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const isLoadingtState = useSelector(
    (state: RootState) => state.auth.isLoading,
  );

  const loginErrorState = useSelector(
    (state: RootState) => state.auth.loginError,
  );

  const [loginForm] = Form.useForm();
  const onFinish = async (values: LoginFormValues) => {
    await store.dispatch(loginAsync(values));
    loginForm.resetFields(['password']);
  };

  const isAuthRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthState && !isAuthRef.current) {
      isAuthRef.current = true;

      message.success('Login successful! Redirecting to the main page...');
      setTimeout(() => {
        navigate('/main');
      }, 1000);
    }
  }, [isAuthState, navigate]);

  return (
    <div className={styles.loginPageContainter}>
      <div className={styles.backgroundImage}>{}</div>
      <div className={styles.loginContentContainer}>
        <p className={styles.loginTitle}>SIGN IN</p>
        <div className={styles.loginFormAndLogo}>
          <div className={styles.loginForm}>
            <Form form={loginForm} name="loginForm" onFinish={onFinish}>
              <div className={styles.loginFormNameCont}>
                <p className={styles.loginFormNameContText}>
                  Sign in with email
                </p>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address!',
                    },
                  ]}
                >
                  <Input className={styles.loginFormNameContInput} />
                </Form.Item>
              </div>

              <div className={styles.loginFormPasswordCont}>
                <p className={styles.loginFormPasswordContText}>Password</p>
                <Form.Item<LoginFormValues>
                  name="password"
                  rules={[...passwordValidationRules]}
                >
                  <Input.Password
                    className={styles.loginFormPasswordContInput}
                  />
                </Form.Item>
              </div>

              <div className={styles.loginFormSubmitCont}>
                <Form.Item<LoginFormValues>>
                  <Button
                    className={styles.loginFormSubmitButton}
                    type="primary"
                    htmlType="submit"
                    disabled={isLoadingtState}
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <div className={styles.loginAnswerCont}>
              {loginErrorState && `${errorStateChecker(loginErrorState)}`}
            </div>
            <div className={styles.helpCont}>
              <Link to="/support" className={styles.helpLink}>
                Help, I can&apos;t sign in
              </Link>
            </div>
          </div>
          <div className={styles.loginLogo}>
            <Image
              preview={false}
              width={250}
              height="100%"
              src={AddressesDataImg}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
