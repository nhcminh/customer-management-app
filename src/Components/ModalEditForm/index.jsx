import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { putCustomer } from "../../API/Customers";

function ModalEditForm(props) {
  const { isModalVisible, currentCustomer } = props.data;
  const { onTrigger } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    form.setFieldsValue(currentCustomer);
  }, [form, currentCustomer]);
  const handleOk = () => {
    const customerData = form.getFieldsValue();
    // customerData.states = states.find(
    //   (state) => state.name === customerData.stateName
    // );
    customerData.id = currentCustomer.id;
    putCustomer(dispatch, customerData);
    // console.log(customerData);
    onTrigger(false);
    form.resetFields();
  };
  const handleCancel = () => {
    onTrigger(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Edit Customer Data"
      visible={isModalVisible}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleOk();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={() => {
        handleCancel();
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="firstName"
          label="Firs tName"
          rules={[
            {
              required: true,
              message: "Please input the firstName of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input the lastName of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please input the gender of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input the address of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Input />
          {/* <Select placeholder="Please select a state">
            {states.map((state) => (
              <Select.Option key={state.abbreviation} value={state.name}>
                {state.name}
              </Select.Option>
            ))}
          </Select> */}
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalEditForm;
