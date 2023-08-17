import { useState } from 'react';
import { Form, Input, FormInstance, Checkbox } from 'antd';
import styles from './addressesForm.module.css';

interface AddressseslDataFormProps {
  formInstance: FormInstance;
}

function AddressesDataForm({ formInstance }: AddressseslDataFormProps) {
  const [defaultShippingChecked, setDefaultShippingChecked] = useState(true);
  const [defaultBillingChecked, setDefaultBillingChecked] = useState(true);
  return (
    <Form form={formInstance} name="perosnalDataForm">
      <div className={styles.title}>Shipping address</div>
      <Form.Item name="defaultShipping" valuePropName="checked">
        <Checkbox
          className={styles.checkBox}
          checked={defaultShippingChecked}
          onChange={(e) => setDefaultShippingChecked(e.target.checked)}
        >
          Set as default shipping address
        </Checkbox>
      </Form.Item>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Country</p>
        <Form.Item
          name="shipCountry"
          rules={[
            {
              required: true,
              message: 'Please enter your country!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'City must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>City</p>
        <Form.Item
          name="shipCity"
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
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Street</p>
        <Form.Item
          name="shipStreet"
          rules={[
            {
              required: true,
              message: 'Please enter your street!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'Street must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Postal code</p>
        <Form.Item
          name="shipPostalCode"
          rules={[
            {
              required: true,
              message: 'Please enter your postal code!',
            },
            {
              min: 3,
              message: 'Postal code must be at least 3 characters long.',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.title}>Billing address</div>
      <Form.Item name="defaultBilling" valuePropName="checked">
        <Checkbox
          className={styles.checkBox}
          checked={defaultBillingChecked}
          onChange={(e) => setDefaultBillingChecked(e.target.checked)}
        >
          Set as default billing address
        </Checkbox>
      </Form.Item>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Country</p>
        <Form.Item
          name="billCountry"
          rules={[
            {
              required: true,
              message: 'Please enter your country!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'City must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>City</p>
        <Form.Item
          name="billCity"
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
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Street</p>
        <Form.Item
          name="billStreet"
          rules={[
            {
              required: true,
              message: 'Please enter your street!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'Street must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Postal code</p>
        <Form.Item
          name="billPostalCode"
          rules={[
            {
              required: true,
              message: 'Please enter your postal code!',
            },
            {
              min: 3,
              message: 'Postal code must be at least 3 characters long.',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
    </Form>
  );
}

export default AddressesDataForm;
