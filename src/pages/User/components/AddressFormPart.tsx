import { Form, Input, Select } from 'antd';
import styles from '../user.module.css';

interface Props {
  prefix: string,
  type: string
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

function AddressFormPart({ prefix, type }: Props) {
  return (
    <div className={styles.userPersCont}>
      <div className={styles.userPersFormCont}>
        <div
          style={{
            border: '1px dashed #dfdfdf',
            padding: '5px',
            background: type === 'new' ? '#dfdfdf' : '',
          }}
          className={styles.addressFormCard}
        >
          <Form.Item hidden name={[prefix, '_id']}>
            <Input />
          </Form.Item>
          <Form.Item
            className={styles.personalDataFormNameCont}
            name={[prefix, 'country']}
            label="country"
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
              // filterOption={(input: string, option: { children: string; }) => {
              //   if (
              //     option &&
              //               option.children &&
              //               option.children instanceof String
              //   ) {
              //     return (
              //       option.children
              //         .toLowerCase()
              //         .indexOf(input.toLowerCase()) >= 0
              //     );
              //   }
              //   return false;
              // }}
              // disabled={!isEditMode}
            >
              {countries.map((country) => (
                <Option
                  key={country.value}
                  value={country.value}
                  className={styles.personalDataFormNameContInput}
                >
                  {country.label}
                </Option>
              ))}
            </Select>

          </Form.Item>
          <Form.Item
            name={[prefix, 'city']}
            label="city"
            className={styles.personalDataFormNameCont}
            rules={[
              {
                required: true,
                message: 'Please enter your city!',
              },
              {
                pattern: /^[a-zA-Z\s]+$/,
                message:
                  'City must contain only alphabets and spaces!',
              },
            ]}
          >
            <Input
              className={styles.personalDataFormNameContInput}
              style={{
                width: '60%',
              }}
            />
          </Form.Item>
          <Form.Item
            name={[prefix, 'street']}
            label="street"
            className={styles.personalDataFormNameCont}
            rules={[
              {
                required: true,
                message: 'Please enter your street!',
              },
              {
                pattern: /^[a-zA-Z\s]+$/,
                message:
                  'Street must contain only alphabets and spaces!',
              },
            ]}
          >
            <Input
              className={styles.personalDataFormNameContInput}
              style={{
                width: '60%',
              }}
            />
          </Form.Item>
          <Form.Item
            name={[prefix, 'postalCode']}
            label="postal"
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
            <Input
              className={styles.personalDataFormNameContInput}
              style={{
                width: '60%',
              }}
            />
          </Form.Item>

        </div>
      </div>
    </div>
  );
}

export default AddressFormPart;
