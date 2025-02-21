import TableRow from "./TableRow";

const TableBody = () => {
  const css = { backgroundColor: "black", color: "white" };

  const arr = [
    {
      tableData: { data: ["2017년 5월 28일"] },
      header: { headerName: "창단일", ...css },
    },
    {
      tableData: { data: ["머한민국"] },
      header: { headerName: "소재지", ...css },
    },
    {
      tableData: { data: ["㈜에이디이스포츠"] },
      header: { headerName: "법인명", ...css },
    },
    {
      tableData: { data: ["어비스컴퍼니"] },
      header: { headerName: "모기업", ...css },
    },
    {
      tableData: {
        data: [
          "리그 오브 레전드",
          "배틀그라운드",
          "발로란트",
          "레인보우 식스 시즈",
        ],
      },
      header: { headerName: "종목", ...css },
    },
  ];

  return (
    <tbody>
      {arr.map((v) => (
        <TableRow {...v} />
      ))}
    </tbody>
  );
};

export default TableBody;
