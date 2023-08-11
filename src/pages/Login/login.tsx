/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Button, Image,
} from 'antd';
import { RootState } from '../../redux/store';
import {
  setLoginAnswer,
  setIsAuthorizedUserAction,
  setAccountEmailAction,
} from '../../redux/slice/authSlice';
import loginUser from '../../models/Users/loginUser';
import { LoginFormValues } from '../../types/types';
import styles from './login.module.css';

import logoutUser from '../../models/Users/logoutUser';
import checkAuth from '../../models/Users/checkAuth';
import getUsers from '../../models/Users/getUsers';

async function logout() {
  const checkAuthReturn = await logoutUser();
  console.log(
    '🚀 ~ file: login.tsx:19 ~ checkAuthLogin ~ checkAuthReturn:',
    checkAuthReturn,
  );
}

function LoginPage() {
  const dispatch = useDispatch();

  async function checkAuthLogin() {
    const checkAuthReturn = await checkAuth();
    if (checkAuthReturn.email) {
      dispatch(setIsAuthorizedUserAction(true));
      dispatch(setAccountEmailAction(checkAuthReturn.email));
      dispatch(setLoginAnswer('Login was success'));
    } else {
      dispatch(setIsAuthorizedUserAction(false));
      dispatch(setAccountEmailAction(''));
      dispatch(setLoginAnswer(''));
    }
    console.log(
      '🚀 ~ file: login.tsx:19 ~ checkAuthLogin ~ checkAuthReturn:',
      checkAuthReturn,
    );
  }

  async function getAndRefresh() {
    const answer = await getUsers();
    console.log('🚀 ~ file: login.tsx:50 ~ getAndRefresh ~ answer:', answer);
    console.log('🚀 ~ file: login.tsx:50 ~ getAndRefresh ~ answer.length:', answer.length);
    if (!answer.length) {
      checkAuthLogin();
    }
  }

  const mainLocation = '/main';
  // const supportLocation = '/support';
  const loginAnswer = useSelector((state: RootState) => state.auth.loginAnswer);
  const isAuthorizedUser = useSelector(
    (state: RootState) => state.auth.isAuthorizedUser,
  );
  const [loginForm] = Form.useForm();

  const onFinish = async (values: LoginFormValues) => {
    const loginUserResponce = await loginUser(values.username, values.password);
    dispatch(
      setIsAuthorizedUserAction(loginUserResponce === 'Login was success'),
    );
    if (isAuthorizedUser) {
      dispatch(setAccountEmailAction(values.username));
      window.location.hash = mainLocation;
    }
    dispatch(setLoginAnswer(loginUserResponce));
    loginForm.resetFields(['password']);
  };

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
                  name="username"
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
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    {
                      min: 3,
                      max: 32,
                      message: 'Password must be between 3 and 32 characters!',
                    },
                  ]}
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
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <div className={styles.loginAnswerCont}>{loginAnswer}</div>
            <div className={styles.helpCont}>
              <p className={styles.helpLink}>
                Help, I can&apos;t sign in
                {/* <Link to="/support"> Help, I can&apos;t sign in</Link> */}
              </p>
            </div>
          </div>
          <div className={styles.loginLogo}>
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={() => checkAuthLogin()}
      >
        Check auth
      </Button>
      <Button
        onClick={logout}
      >
        Logout
      </Button>
      <Button
        onClick={() => getAndRefresh()}
      >
        getAndRefresh
      </Button>
    </div>
  );
}

export default LoginPage;
