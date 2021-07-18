import { Button, Col, Popconfirm, Row, Table } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getCustomers } from "../../API/Customers";
import { getStates } from "../../API/States";
import ModalEditForm from "../ModalEditForm";

function CustomerList(props) {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.CustomersReducer.customers
  ).map((customer) => {
    return { key: customer.id, ...customer };
  });
  // const states = useSelector((state) =>
  //   state.StatesReducer.states.map((state) => {
  //     return { name: state.name, abbreviation: state.abbreviation };
  //   })
  // );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({});
  const handleDelete = (customerID) => {
    deleteCustomer(dispatch, customerID);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const getCustomersAndStates = useCallback(() => {
    dispatch(getCustomers);
    dispatch(getStates);
  }, [dispatch]);
  useEffect(() => {
    getCustomersAndStates();
  }, [getCustomersAndStates]);

  return (
    <>
      <ModalEditForm
        onTrigger={setIsModalVisible}
        data={{ isModalVisible, currentCustomer }}
      />
      <Table dataSource={customers}>
        <ColumnGroup>
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Gender" dataIndex="gender" key="gender" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="City"
          dataIndex="city"
          key="city"
          render={(city) => <p>{city}</p>}
        />
        <Column
          title="Actions"
          key="actions"
          render={(customer) => (
            <Row>
              <Col span={12}>
                <Button
                  type="primary"
                  onClick={() => {
                    setCurrentCustomer(customer);
                    showModal();
                  }}
                >
                  Edit
                </Button>
              </Col>
              <Col span={12}>
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => handleDelete(customer.id)}
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </Col>
            </Row>
          )}
        />
      </Table>
    </>
  );
}

export default CustomerList;
