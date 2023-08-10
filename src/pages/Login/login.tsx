/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Button, Image,
} from 'antd';
import { RootState } from '../../redux/store';
import { setLoginAnswer, setIsAuthorizedUserAction, setAccountEmailAction } from '../../redux/slice/authSlice';
import loginUser from '../../models/Users/loginUser';
import { LoginFormValues } from '../../types/types';
import styles from './login.module.css';

function LoginPage() {
  const mainLocation = '/main';
  // const supportLocation = '/support';

  const dispatch = useDispatch();
  const loginAnswer = useSelector((state: RootState) => state.auth.loginAnswer);
  const isAuthorizedUser = useSelector((state: RootState) => state.auth.isAuthorizedUser);
  const [loginForm] = Form.useForm();

  const onFinish = async (values: LoginFormValues) => {
    const loginUserResponce = await loginUser(values.username, values.password);
    dispatch(setIsAuthorizedUserAction(loginUserResponce === 'Login was success'));
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
            <div className={styles.loginAnswerCont}>
              {loginAnswer}
            </div>
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
    </div>
  );
}

export default LoginPage;
