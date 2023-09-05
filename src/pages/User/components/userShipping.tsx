import { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Form, Input, Select, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import styles from '../user.module.css';
import UserService from '../../../models/Users/UserService';
import { RootState } from '../../../redux/store';
import { IAddress, IUpdateShipAddress } from '../../../types/UserResponse';

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

function UserShipping() {
  const userFullData = useSelector((state: RootState) => state.user.userFull);
  const [isEditMode, setIsEditMode] = useState(false);
  const [shippingDataForm] = Form.useForm();
  // const [newAddressForm] = Form.useForm();
  const [isLoading, setLoading] = useState(true);
  // const [defaultShippingChecked, setDefaultShippingChecked] = useState(false);
  // const [shouldRemoveCard, setShouldRemoveCard] = useState(false);
  const [shippingAddress, setShippingAddress] = useState([
    {
      _id: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      isDefault: false,
    },
  ] as IAddress[]);

  useEffect(() => {
    async function getUserData() {
      const shippingResponse = await UserService.getShippingAddress(
        userFullData.shippingAddress,
      );
      const shippingData = shippingResponse.data;
      setShippingAddress(shippingData);
      setLoading(false);
    }
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateSave = (address: IAddress) => async () => {
    try {
      const shipUpdateAddress: IAddress = await shippingDataForm.validateFields();
      const updateAddressBody = {
        ...shipUpdateAddress,
        isDefault: false,
        _id: address._id,
      };
      const data:IUpdateShipAddress = { shippingAddresses: [updateAddressBody] };
      setIsEditMode(false);
      await UserService.updateShippingAddress(data);
      message.success('Changes saved successful!');
    } catch {
      message.error('Ooops.Something do wrong!');
    }
  };

  if (isLoading) {
    return null;
  }
  return (
    <div className={styles.userPersCont}>
      <div className={styles.userPersFormCont}>
        <div className={styles.addressFormCard}>
          {shippingAddress.map((address) => (
            <Card
              size="default"
              title="Shipping address"
              key={address._id}
              extra={
                <CloseOutlined />
          }
              className={styles.personalDataFormEmailCont}
            >
              <Form
                form={shippingDataForm}
                key={address._id}
                className={styles.personalDataForm}
              >
                <div className={styles.personalDataFormNameCont}>
                  <Form.Item
                    name="isDefault"
                    valuePropName="checked"
                    style={{ marginBottom: '5px' }}
                  >
                    <Checkbox />
                  </Form.Item>
                  <div className={styles.personalDataFormNameCont}>
                    <p className={styles.personalDataFormNameContText}>Country</p>
                    <Form.Item
                      name="country"
                      initialValue={address.country}
                      className={styles.personalDataFormNameCont}
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
                          if (
                            option &&
                            option.children &&
                            option.children instanceof String
                          ) {
                            return (
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            );
                          }
                          return false;
                        }}
                        disabled={!isEditMode}
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
                  </div>
                  <div className={styles.personalDataFormNameCont}>
                    <p className={styles.personalDataFormNameContText}>City</p>
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
                      initialValue={address.city}
                    >
                      <Input
                        className={styles.personalDataFormNameContInput}
                        disabled={!isEditMode}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.personalDataFormNameCont}>
                  <p className={styles.personalDataFormNameContText}>Street</p>
                  <Form.Item
                    name="street"
                    initialValue={address.street}
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
                    <Input
                      disabled={!isEditMode}
                      className={styles.personalDataFormNameContInput}
                    />
                  </Form.Item>
                </div>
                <div className={styles.personalDataFormNameCont}>
                  <p className={styles.personalDataFormNameContText}>Postal code</p>
                  <Form.Item
                    name="postalcode"
                    initialValue={address.postalCode}
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
                      disabled={!isEditMode}
                      className={styles.personalDataFormNameContInput}
                    />
                  </Form.Item>
                </div>
                {isEditMode ? (
                  <Button type="primary" onClick={handleUpdateSave(address)} className={styles.submitButton}>
                    Save changes
                  </Button>
                ) : (
                  <Button
                    onClick={() => setIsEditMode(true)}
                    className={styles.submitButton}
                    type="primary"
                  >
                    Edit
                  </Button>
                )}
              </Form>
            </Card>
          ))}
          {/* <Button
            className={styles.addBtn}
            type="dashed"
            block
            icon={<PlusOutlined />}
          >
            Add field
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default UserShipping;
