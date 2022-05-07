/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";

const TableAnnotation = ({
  location = "",
  title = "",
}: {
  location: string;
  title: string;
}) => {
  const [data, setData] = useState<any[]>([]);
  const [object, setObject] = useState<any[]>([]);

  const columns = [
    {
      title: "Index",
      dataIndex: "index",
    },
    {
      title: "Object",
      dataIndex: "object",
      filters: object,
      filterSearch: true,
      onFilter: (value: any, record: any) => {
        return record.object === value;
      },
    },
    {
      title: "Annotation",
      dataIndex: "annotation",
    },
    {
      title: "Score",
      dataIndex: "score",
      sorter: (a: { score: number }, b: { score: number }) => a.score - b.score,
      // sortDirections: ["ascend", "descend"],
      // showSorterTooltip: true,
      // sortOrder: false,
    },
  ];

  useEffect(() => {
    const locationTemp = JSON.parse(location)[title];
    let dataTemp: any[] = [];
    let objectTemp: any[] = [];
    if (locationTemp) {
      for (let i = 0; i < locationTemp.length; i++) {
        dataTemp = [
          ...dataTemp,
          {
            index: i,
            object:
              locationTemp[i][0].charAt(0).toUpperCase() +
              locationTemp[i][0].slice(1, locationTemp[i][0].length + 1),
            annotation: "(" + locationTemp[i].slice(1, 5).join(", ") + ")",
            caption:
              locationTemp[i].length > 6 ? locationTemp[i][6].trim() : "",
            score: locationTemp[i][5],
          },
        ];
        objectTemp = [
          ...objectTemp,
          {
            text:
              locationTemp[i][0].charAt(0).toUpperCase() +
              locationTemp[i][0].slice(1, locationTemp[i][0].length + 1),
            value:
              locationTemp[i][0].charAt(0).toUpperCase() +
              locationTemp[i][0].slice(1, locationTemp[i][0].length + 1),
          },
        ];
      }
    }

    // objectTemp = [...new Set(objectTemp.map((item) => item.value))];
    const uniqueObjects: any[] = [];
    objectTemp.map((item) => {
      var findItem = uniqueObjects.find((x) => x.value === item.value);
      if (!findItem) uniqueObjects.push(item);
    });

    setData(dataTemp);
    setObject(uniqueObjects);
  }, []);

  // function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  //   console.log("params", pagination, filters, sorter, extra);
  // }

  return (
    <>
      {data ? (
        <Table
          rowKey={"index"}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      ) : // <Table columns={columns} dataSource={data} onChange={onChange} />
      null}
    </>
  );
};

export default TableAnnotation;
