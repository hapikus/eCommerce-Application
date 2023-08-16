import React from 'react';
import {
  Form, Input, Button, Typography, Select, FormInstance,
} from 'antd';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import styles from './signup.module.css';

function SubmitButton({ form }: { form: FormInstance }) {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
}

function SignUp() {
  const [signupForm] = Form.useForm();
  const { Option } = Select;
  // const [state, setShowForm] = useState(true);

  const countries = [
    'Belarus',
    'Russia',
    'United Kingdom',
    'Ukrain',
    'Germany',
    'France',
    'Poland',
    'China',
  ];

  return (

    <div className={styles.signupPageContainter}>
      <div className={styles.signupContentContainer}>
        <p className={styles.signupTitle}>SIGN IN</p>
        <div className={styles.signupFormAndLogo}>
          <div className={styles.signupForm}>
            <Form
              onFinish={() => {
                // setShowForm = false;
                // message.loading({ content: 'Registration...', duration: 2 })
                //   .then((state) => {
                //     message.success({ content: 'Registration successful!', duration: 2 });
                //     setShowForm = true;
                //   });
              }}
              // onFieldsChange={onFieldsChange}
              form={signupForm}
              name="signupForm"
            >
              {/* ?Full name */}
              <div className={styles.signupFormNameCont}>
                <p className={styles.signupFormNameContText}>
                  Enter your first name
                </p>
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
                  <Input className={styles.signupFormNameContInput} placeholder="Enter your firstname!.." />
                </Form.Item>
              </div>
              <div className={styles.signupFormNameCont}>
                <p className={styles.signupFormNameContText}>
                  Enter your last name
                </p>
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
                  <Input className={styles.signupFormNameContInput} placeholder="Enter your lastname!.." />
                </Form.Item>
              </div>
              <div className={styles.signupFormNameCont}>
                <p className={styles.signupFormNameContText}>
                  Enter your email
                </p>
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
                  <Input className={styles.signupFormNameContInput} placeholder="Enter your email.." />
                </Form.Item>
              </div>
              {/* Adrees */}
              <div className={styles.signupFormNameCont}>
                <p className={styles.signupFormNameContText}>
                  Enter your adress
                </p>
                <Form.Item
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your country!',
                    },
                  ]}
                >
                  <Select size="large" placeholder="Select Country">
                    {countries.map((country) => (
                      <Option key={country}>{country}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your city!',
                    },
                    {
                      pattern: /^[a-zA-Z\s]+$/,
                      message: 'City must contain only alphabets and spaces!',
                    },
                  ]}
                >
                  <Input className={styles.signupFormNameContInput} placeholder="City" />
                </Form.Item>

                <Form.Item
                  name="street"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your street address!',
                    },
                  ]}
                >
                  <Input className={styles.signupFormNameContInput} placeholder="Street" />
                </Form.Item>

                <Form.Item
                  name="postalCode"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your postal code!',
                    },
                    {
                      pattern: /[a-zA-Z]\d[a-zA-Z] \d[a-zA-Z]\d|\d{5}/,
                      message: 'Postal code must contain only 5 characters',
                    },
                  ]}
                >
                  <Input className={styles.signupFormNameContInput} placeholder="Postal Code" />
                </Form.Item>
              </div>
              {/* Data */}
              <div className={styles.signupFormNameCont}>
                <p className={styles.signupFormNameContText}>
                  Enter your date of birth
                </p>
                <Form.Item
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <Form.Item
                    name="year"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        validator(_, value) {
                          return new Promise((resolve) => {
                            if (value >= '2010') {
                              throw new Error('Must be 13 years old or older!');
                            } else {
                              resolve('Good!');
                            }
                          });
                        },
                      },
                    ]}
                    style={{
                      display: 'inline-block',
                      width: 'calc(50% - 8px)',
                    }}
                  >
                    <Input className={styles.signupFormNameContInput} placeholder="Input birth year" />
                  </Form.Item>
                  <Form.Item
                    name="month"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        validator(_, value) {
                          return new Promise((resolve) => {
                            if (value && !/^(0[1-9]|1[0-2])$/.test(value)) {
                              throw new Error('The month should be in format 01');
                            } else {
                              resolve('Good!');
                            }
                          });
                        },
                      },
                    ]}
                    style={{
                      display: 'inline-block',
                      width: 'calc(50% - 8px)',
                      margin: '0 8px',
                    }}
                  >
                    <Input className={styles.signupFormNameContInput} placeholder="Input birth month" />
                  </Form.Item>
                </Form.Item>
              </div>
              <div className={styles.signupFormPasswordCont}>
                <p className={styles.signupFormPasswordContText}>Create password</p>
                <Form.Item
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
                    className={styles.signupFormPasswordContInput}
                  />
                </Form.Item>
              </div>
              <Typography.Paragraph type="secondary">
                Already have an account?
              </Typography.Paragraph>
              <p><Link to="/login">LOG IN</Link></p>
              <SubmitButton form={signupForm} />
            </Form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUp;
