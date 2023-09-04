import { Tooltip, Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import store, { RootState } from '../../../redux/store';
import { IUpdateData } from '../../../types/UserResponse';
import { clearUserData, getFullUserDataAsync } from '../../../redux/slice/userSlice';

import UserService from '../../../models/Users/UserService';
import { logoutAsync } from '../../../redux/slice/authSlice';

import passwordValidationRules from '../../../utils/passValid';

import styles from '../user.module.css';

function UserPersonal() {
  const dispatch = useDispatch();
  const [PersonalDataChangeForm] = Form.useForm();
  const [PasswordChangFOrm] = Form.useForm();

  const userFullData = useSelector((state: RootState) => state.user.userFull);

  const handlePersonalDataChangeForm = async () => {
    try {
      const personValues: IUpdateData = await PersonalDataChangeForm.validateFields();
      // eslint-disable-next-line no-underscore-dangle
      personValues.id = userFullData._id;
      const updateData = await UserService.updateUser(personValues);
      if (updateData.data.user.email !== userFullData.email) {
        await store.dispatch(logoutAsync());
        dispatch(clearUserData());
        return;
      }
      await store.dispatch(getFullUserDataAsync());
    } catch {
      // The catch block is omitted, so the error will be muted
    }
  };

  return (
    <div className={styles.userPersCont}>
      <div className={styles.userPersFormCont}>
        <div className={styles.userPersDatFormCont}>
          <h3>Change Perosnal Data</h3>
          <Form form={PersonalDataChangeForm} name="PersonalDataChangeForm">
            <div className={styles.personalDataFormEmailCont}>
              <Tooltip
                title="Email changes will cause a logout"
                className={styles.emailTitleCont}
              >
                <p className={styles.personalDataFormNameContText}>Email</p>
                <InfoCircleOutlined />
              </Tooltip>
              <Form.Item
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
                name="email"
                initialValue={userFullData.email}
              >
                <Input className={styles.personalDataFormNameContInput} />
              </Form.Item>
            </div>
            <div className={styles.personalDataFormNameCont}>
              <p className={styles.personalDataFormNameContText}>First name</p>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter your first name!',
                  },
                  {
                    pattern: /^[a-zA-Z\s]+$/,
                    message: 'Name must contain only alphabets and spaces!',
                  },
                ]}
                name="firstName"
                initialValue={userFullData.firstName}
              >
                <Input className={styles.personalDataFormNameContInput} />
              </Form.Item>
            </div>
            <div className={styles.personalDataFormNameCont}>
              <p className={styles.personalDataFormNameContText}>Last name</p>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter your last name!',
                  },
                  {
                    pattern: /^[a-zA-Z\s]+$/,
                    message: 'Name must contain only alphabets and spaces!',
                  },
                ]}
                name="lastName"
                initialValue={userFullData.lastName}
              >
                <Input className={styles.personalDataFormNameContInput} />
              </Form.Item>
            </div>
            <div className={styles.UserPersButtonCont}>
              <Button
                type="primary"
                className={styles.submitButton}
                onClick={handlePersonalDataChangeForm}
              >
                Change Personal Data
              </Button>
            </div>
          </Form>
        </div>
        <div className={styles.userPersPassFormCont}>
          <h3>Change Password</h3>
          <Form form={PasswordChangFOrm} name="PasswordChangFOrm">
            <div className={styles.personalDataFormPasswordCont}>
              <p className={styles.personalDataFormPasswordContText}>
                Old password
              </p>
              <Form.Item
                name="oldPassword"
                rules={[...passwordValidationRules]}
              >
                <Input.Password
                  className={styles.personalDataFormPasswordContInput}
                />
              </Form.Item>
            </div>
            <div className={styles.personalDataFormPasswordCont}>
              <p className={styles.personalDataFormPasswordContText}>
                New password
              </p>
              <Form.Item
                name="newPassword"
                rules={[...passwordValidationRules]}
              >
                <Input.Password
                  className={styles.personalDataFormPasswordContInput}
                />
              </Form.Item>
            </div>
            <div className={styles.personalDataFormPasswordCont}>
              <p className={styles.personalDataFormPasswordContText}>
                Confirm password
              </p>
              <Form.Item
                name="confirmNewPassword"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!',
                        ),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  className={styles.personalDataFormPasswordContInput}
                />
              </Form.Item>
            </div>
            <div className={styles.UserPersButtonCont}>
              <Button
                type="primary"
                className={styles.submitButton}
              >
                Change Personal Data
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserPersonal;
