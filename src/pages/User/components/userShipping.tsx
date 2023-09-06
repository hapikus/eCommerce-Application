import { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Form, Spin, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import styles from '../user.module.css';
import UserService from '../../../models/Users/UserService';
import { RootState } from '../../../redux/store';
import {
  IAddress,
  INewAddress,
  IUpdateShipAddress,
} from '../../../types/UserResponse';
import AddressFormPart from './AddressFormPart';

function UserShipping() {
  const userFullData = useSelector((state: RootState) => state.user.userFull);
  // const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  interface InitValue {
    [key: string]: IAddress;
  }

  function mapInitialValues(addresss: IAddress[] = []): InitValue {
    return addresss.reduce(
      (acc, current) => ({
        ...acc,
        // eslint-disable-next-line no-underscore-dangle
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
  interface FormDataType {
    newItems: IAddress[];
  }
  interface ReturnDataType {
    payload: IUpdateShipAddress;
    new: INewAddress;
  }

  const onSubmit = async () => {
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
    }
  };

  return (
    <Spin spinning={isLoading}>
      <h1>Billing addresses</h1>
      <Form
        form={form}
        name="addresses_form"
        style={{
          maxWidth: 600,
        }}
        initialValues={mapInitialValues(shippingAddress)}
        className={styles.userPersCont}
      >
        {shippingAddress.map((address) => (
          <AddressFormPart
            // eslint-disable-next-line no-underscore-dangle
            key={address._id}
            // eslint-disable-next-line no-underscore-dangle
            prefix={address._id}
            type="old"
          />
        ))}
        <Form.List name="newItems" initialValue={[]}>
          {(fields, { add }, { errors }) => (
            <>
              {fields.map((field) => (
                <AddressFormPart
                  key={field.key}
                  prefix={`${field.key}`}
                  type="new"
                />
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Add address
              </Button>
              <Form.ErrorList errors={errors} />
            </>
          )}
        </Form.List>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </Spin>
  );
}

export default UserShipping;
