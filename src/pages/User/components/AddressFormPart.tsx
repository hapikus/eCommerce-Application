import { Form, Input, Select } from 'antd';
import styles from '../user.module.css';

interface Props {
  prefix: string;
  type: string;
  isDisabled: boolean;
}

const { Option } = Select;

const countries = [
  { value: 'Belarus', label: 'Belarus' },
  { value: 'Kazakhstan', label: 'Kazakhstan' },
  { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Tajikistan', label: 'Tajikistan' },
  { value: 'Turkmenistan', label: 'Turkmenistan' },
  { value: 'Uzbekistan', label: 'Uzbekistan' },
];

function AddressFormPart({ prefix, type, isDisabled }: Props) {
  return (
    <div className={styles.userPersCont}>
      <div className={styles.userPersFormCont}>
        <div
          style={{
            padding: '5px',
          }}
          className={styles.addressFormCard}
        >
          <Form.Item hidden name={[prefix, '_id']}>
            <Input />
          </Form.Item>
          <Form.Item
            className={styles.personalDataFormNameCont}
            name={[prefix, 'country']}
            label="Country"
            rules={[
              {
                required: true,
                message: 'Please select your country!',
              },
            ]}
          >
            {type !== 'new' ? (
              <Select
                size="large"
                placeholder="Select your country"
                optionFilterProp="children"
                disabled={isDisabled}
              >
                {countries.map((country) => (
                  <Option
                    key={country.value}
                    value={country.value}
                    className={styles.NameContInput}
                  >
                    {country.label}
                  </Option>
                ))}
              </Select>
            ) : (
              <Select
                size="large"
                placeholder="Select your country"
                optionFilterProp="children"
              >
                {countries.map((country) => (
                  <Option
                    key={country.value}
                    value={country.value}
                    className={styles.NameContInput}
                  >
                    {country.label}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item
            name={[prefix, 'city']}
            label="City"
            className={styles.personalDataFormNameCont}
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
            {type !== 'new' ? (
              <Input
                style={{
                  width: '94%',
                  height: '40px',
                  marginLeft: '20px',
                }}
                disabled={isDisabled}
              />
            ) : (
              <Input
                style={{
                  width: '94%',
                  height: '40px',
                  marginLeft: '20px',
                }}
              />
            )}
          </Form.Item>
          <Form.Item
            name={[prefix, 'street']}
            label="Street"
            className={styles.personalDataFormNameCont}
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
            {type !== 'new' ? (
              <Input
                disabled={isDisabled}
                style={{
                  width: '97%',
                  height: '40px',
                  marginLeft: '5px',
                }}
              />
            ) : (
              <Input
                style={{
                  width: '97%',
                  height: '40px',
                  marginLeft: '5px',
                }}
              />
            )}
          </Form.Item>
          <Form.Item
            name={[prefix, 'postalCode']}
            label="Postal Code"
            className={styles.personalDataFormNameCont}
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
            {type !== 'new' ? (
              <Input
                disabled={isDisabled}
                style={{
                  width: '97%',
                  height: '40px',
                }}
              />
            ) : (
              <Input
                style={{
                  width: '97%',
                  height: '40px',
                }}
              />
            )}
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default AddressFormPart;
