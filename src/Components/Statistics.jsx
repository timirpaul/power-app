import React, { useEffect, useState } from "react";
import { getApiData } from "../apidata/api";
import { Loader } from "react-feather";
import One from "./One";
import { Chart } from "react-google-charts";
import { PieChart, Pie } from 'recharts';

const Statistics = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const apidata1 = async () => {
    try {
      setLoading(true);
      const res = await getApiData("/getOpStat");
      console.log(res?.data);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apidata1();
  }, []);

    const options = {
      title: "My Daily Activities",
    };
  console.log(data);
  return (
    <>
      <One
        name="Statistics"
        Children={
          <>
            {loading ? (
              <div className="text-center">
                <Loader />
              </div>
            ) : (
              <>
              {data?.map((item,i)=>(
                <>
                <h5>op:{item.OP}</h5>
                <h5>Count:{item.count}</h5>
                </>
              ))}
                <PieChart >
            <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart>
              </>
            )}
          </>
        }
      />
    </>
  );
};

export default Statistics;
