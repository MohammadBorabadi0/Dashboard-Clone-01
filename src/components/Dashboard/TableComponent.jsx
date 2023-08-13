import { Table } from "antd";
import { ordersData } from "../data/data";

const { Column } = Table;

const TableComponent = () => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
    <h2 className="px-4 py-3 text-xl font-semibold">Latest Sales</h2>
    <Table dataSource={ordersData} className="px-3 py-1">
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Status Order" dataIndex="status" key="status" />
      <Column title="Customer Name" dataIndex="name" key="name" />
      <Column title="Amount" dataIndex="amount" key="amount" />
      <Column title="Date" dataIndex="date" key="date" />
    </Table>
  </div>
);

export default TableComponent;
