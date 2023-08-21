import { useState } from 'react';
import { Form, Input, FormInstance, Checkbox, Select } from 'antd';
import styles from './addressesForm.module.css';

const { Option } = Select;

interface AddressseslDataFormProps {
  formInstance: FormInstance;
}

const countries = [
  { value: 'belarus', label: 'Belarus' },
  { value: 'kazakhstan', label: 'Kazakhstan' },
  { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
  { value: 'russia', label: 'Russia' },
  { value: 'tajikistan', label: 'Tajikistan' },
  { value: 'turkmenistan', label: 'Turkmenistan' },
  { value: 'uzbekistan', label: 'Uzbekistan' },
];

function AddressesDataForm({ formInstance }: AddressseslDataFormProps) {
  const [defaultShippingChecked, setDefaultShippingChecked] = useState(true);
  const [theSameAddress, setTheSameAddress] = useState(false);
  const [defaultBillingChecked, setDefaultBillingChecked] = useState(true);

  const renderBillingForm = () => (
    <>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Country</p>
        <Form.Item
          name="billCountry"
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select your country"
            optionFilterProp="children"
            filterOption={(input, option) => {
              if (option && option.children && (option.children instanceof String)) {
                return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
              }
              return false;
            }}
          >
            {countries.map((country) => (
              <Option
                key={country.value}
                value={country.value}
              >
                {country.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>City</p>
        <Form.Item
          name="billCity"
          rules={[
            {
              required: !theSameAddress,
              message: 'Please enter your city!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'City must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} disabled={theSameAddress} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Street</p>
        <Form.Item
          name="billStreet"
          rules={[
            {
              required: !theSameAddress,
              message: 'Please enter your street!',
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: 'Street must contain only alphabets and spaces!',
            },
          ]}
        >
          <Input className={styles.NameContInput} disabled={theSameAddress} />
        </Form.Item>
      </div>
      <div className={styles.NameCont}>
        <p className={styles.NameContText}>Postal code</p>
        <Form.Item
          name="billPostalCode"
          rules={[
            {
              required: !theSameAddress,
              message: 'Please enter your postal code!',
            },
            {
              pattern: /^[0-9]{6}$/,
              message: 'Postal code should be 6 digits.',
            },
          ]}
        >
          <Input className={styles.NameContInput} disabled={theSameAddress} />
        </Form.Item>
      </div>
    </>
  );

  return (
    <Form form={formInstance} name="perosnalDataForm">
      <div className={styles.title}>Shipping address</div>
      <Form.Item
        name="defaultShipping"
        valuePropName="checked"
        style={{ marginBottom: '5px' }}
      >
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
              message: 'Please select your country!',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select your country"
            optionFilterProp="children"
            filterOption={(input, option) => {
              if (option && option.children && (option.children instanceof String)) {
                return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
              }
              return false;
            }}
          >
            {countries.map((country) => (
              <Option
                key={country.value}
                value={country.value}
              >
                {country.label}
              </Option>
            ))}
          </Select>
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
              pattern: /^[0-9]{6}$/,
              message: 'Postal code should be 6 digits.',
            },
          ]}
        >
          <Input className={styles.NameContInput} />
        </Form.Item>
      </div>
      <div className={styles.title}>Billing address</div>
      <div className={styles.checkBoxCont}>
        <Form.Item
          name="theSameAddress"
          valuePropName="checked"
          style={{ marginBottom: '5px' }}
        >
          <Checkbox
            className={styles.checkBox}
            checked={theSameAddress}
            onChange={(e) => setTheSameAddress(e.target.checked)}
          >
            Have the same billign address
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="defaultBilling"
          valuePropName="checked"
          style={{ marginBottom: '5px' }}
        >
          <Checkbox
            className={styles.checkBox}
            checked={defaultBillingChecked}
            onChange={(e) => setDefaultBillingChecked(e.target.checked)}
          >
            Set as default billing address
          </Checkbox>
        </Form.Item>
        {theSameAddress ? null : renderBillingForm()}
      </div>
    </Form>
  );
}

export default AddressesDataForm;
