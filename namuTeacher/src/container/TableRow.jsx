import TableData from "../components/TableData";
import TableHeader from "../components/TableHeader";

const TableRow = (props) => {
  const { header, tableData } = props;

  return (
    <tr>
      <TableHeader {...header} />
      <TableData {...tableData} />
    </tr>
  );
};

export default TableRow;
