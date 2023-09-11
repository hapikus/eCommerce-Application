import { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Card, Form, Spin, message } from 'antd';
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import styles from '../user.module.css';
import UserService from '../../../models/Users/UserService';
import store, { RootState } from '../../../redux/store';
import {
  IAddress,
  INewAddress,
  IUpdateShipAddress,
} from '../../../types/UserResponse';
import AddressFormPart from './AddressFormPart';
import { getFullUserDataAsync } from '../../../redux/slice/userSlice';

interface FormDataType {
  newItems: IAddress[];
}
interface ReturnDataType {
  payload: IUpdateShipAddress;
  new: INewAddress;
}

interface InitValue {
  [key: string]: IAddress;
}

function UserShipping() {
  const userFullData = useSelector((state: RootState) => state.user.userFull);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
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
  const [form] = Form.useForm();

  useEffect(() => {
    async function getUserData() {
      const shippingResponse = await UserService.getShippingAddress(
        userFullData.shippingAddress,
      );
      const shippingData = shippingResponse.data;
      setIsLoading(false);
      setShippingAddress(shippingData);
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function mapInitialValues(addresss: IAddress[] = []): InitValue {
    return addresss.reduce(
      (acc, current) => ({
        ...acc,
        [current._id as string]: current,
      }),
      {} as InitValue,
    );
  }

  function aggregatePayload(formData: FormDataType) {
    const { newItems = [], ...rest } = formData;
    const returnData = {
      payload: { shippingAddresses: Object.values(rest) as IAddress[] },
      new: newItems[0],
    };
    return returnData;
  }

  useLayoutEffect(() => {
    form.resetFields();
  }, [form, shippingAddress]);

  const onSubmitNewAddress = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      const aggregateData: ReturnDataType = aggregatePayload(formData);
      setIsLoading(true);
      await UserService.updateShippingAddress(aggregateData.payload);
      const allAddresses = await UserService.createShippingAddress(
        aggregateData.new,
      );
      setShippingAddress(allAddresses.data);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        message.error(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
      setIsAddingNewAddress(false);
    }
  };
  const handleUpdateData = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      setIsEditMode(false);
      const aggregateData: ReturnDataType = aggregatePayload(formData);
      await UserService.updateShippingAddress(aggregateData.payload);
      message.success('Changes saved successful!');
    } catch {
      message.error('Ooops.Something do wrong!');
    }
  };

  useEffect(() => {
    async function getNewAddress() {
      const shippingResponse = await UserService.getShippingAddress(
        userFullData.shippingAddress,
      );
      const shippingData = shippingResponse.data;
      setShippingAddress(shippingData);
    }
    getNewAddress();
  }, [userFullData]);

  const deleteAddress = (address: IAddress) => async () => {
    try {
      await UserService.deleteAddress(address._id);
      const getUserData = async () => {
        await store.dispatch(getFullUserDataAsync());
      };
      getUserData();
      message.success('Address was deleted!');
    } catch {
      message.error('Ooops.Something do wrong!');
    }
  };

  return (
    <Spin spinning={isLoading}>
      {isEditMode ? (
        <h3>
          SHIPPING ADDRESSES
          {' '}
          <EditOutlined />
          {' '}
        </h3>
      ) : (
        <h3>SHIPPING ADDRESSES</h3>
      )}
      <Form
        form={form}
        name="addresses_form"
        style={{
          maxWidth: 600,
        }}
        initialValues={mapInitialValues(shippingAddress)}
        className={styles.userPersCont}
      >
        {shippingAddress.map((address, index) => (
          <Card
            size="default"
            title={`Address ${index + 1}`}
            key={address._id}
            extra={(
              <CloseOutlined
                onClick={deleteAddress(address)}
              />
           )}
          >
            <AddressFormPart
              key={address._id}
              prefix={address._id}
              type="old"
              isDisabled={!isEditMode}
            />
          </Card>
        ))}
        {isEditMode ? (
          <Button
            onClick={handleUpdateData}
            className={styles.submitBtn}
            style={{ width: 200 }}
          >
            Save changes
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditMode(true)}
            className={styles.submitBtn}
            type="primary"
            style={{ width: 200 }}
          >
            <EditOutlined />
            {' '}
            Edit
          </Button>
        )}
        <Form.List name="newItems" initialValue={[]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Card
                  size="default"
                  title={`New address ${field.key + 1}`}
                  style={{ background: 'grey' }}
                  key={field.key}
                  extra={(
                    <CloseOutlined
                      onClick={() => {
                        remove(field.key);
                        setIsAddingNewAddress(false);
                      }}
                    />
                )}
                >
                  <AddressFormPart
                    key={field.key}
                    prefix={`${field.key}`}
                    type="new"
                    isDisabled
                  />
                </Card>
              ))}
              {isAddingNewAddress ? ('') : (
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                    setIsAddingNewAddress(true);
                  }}
                  style={{
                    width: '60%',
                    margin: '15px',
                    height: '40px',
                  }}
                  icon={<PlusOutlined />}
                >
                  Add address
                </Button>
              )}
            </>
          )}
        </Form.List>
        {isAddingNewAddress ? (
          <Button
            type="primary"
            onClick={onSubmitNewAddress}
            style={{
              margin: '10px',
              height: '40px',
            }}
          >
            Submit
          </Button>
        ) : (
          ''
        )}

      </Form>
    </Spin>

  );
}

export default UserShipping;
