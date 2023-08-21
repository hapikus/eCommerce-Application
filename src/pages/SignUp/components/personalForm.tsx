import { Form, Input, DatePicker, FormInstance } from 'antd';

import passwordValidationRules from '../../../utils/passValid';
import dobValidation from '../../../utils/dobValid';

import styles from './personalForm.module.css';

interface PersonalDataFormProps {
  formInstance: FormInstance;
}

function PersonalDataForm({ formInstance }: PersonalDataFormProps) {
  return (
    <Form form={formInstance} name="perosnalDataForm">
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
        >
          <Input className={styles.personalDataFormNameContInput} />
        </Form.Item>
      </div>
      <div className={styles.personalDataFormNameCont}>
        <p className={styles.personalDataFormNameContText}>Enter your email</p>
        <Form.Item
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
          name="email"
        >
          <Input className={styles.personalDataFormNameContInput} />
        </Form.Item>
      </div>
      <div className={styles.personalDataFormDatePickerCont}>
        <p className={styles.personalDataFormNameContText}>Date of Birth</p>
        <Form.Item
          name="dob"
          rules={[...dobValidation]}
        >
          <DatePicker
            className={styles.personalDataFormDatePicker}
            placeholder=""
          />
        </Form.Item>
      </div>
      <div className={styles.personalDataFormPasswordCont}>
        <p className={styles.personalDataFormPasswordContText}>
          Create password
        </p>
        <Form.Item name="password" rules={[...passwordValidationRules]}>
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
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!'),
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
    </Form>
  );
}

export default PersonalDataForm;
