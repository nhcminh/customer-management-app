import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../API/Customers";

function CustomerList(props) {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.CustomersReducer.customers
  ).map((customer) => {
    return { key: customer.id, ...customer };
  });

  useEffect(() => {
    dispatch(getCustomer);
    console.log(customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (state) => <p key={state.abbreviation}>{state.name}</p>,
    },
  ];
  return (
    <>
      <Table dataSource={customers} columns={columns} />;
    </>
  );
}

export default CustomerList;
