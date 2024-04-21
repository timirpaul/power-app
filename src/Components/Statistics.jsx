import React, { useEffect, useState } from "react";
import { getApiData } from "../apidata/api";
import { Loader } from "react-feather";
import One from "./One";
// import { Pie } from 'react-chartjs-2';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  LabelList,
} from "recharts";

const Statistics = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [newdata, setnewdata] = useState();

  const apidata1 = async () => {
    try {
      setLoading(true);
      const res = await getApiData("/getOpStat");
    //   console.log(res?.data);
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
  useEffect(() => {
    calculation(data);
  }, [data]);

  const COLORS = ["#FF0000", "#0000FF"];
  const calculation = (data) => {
    try {
      const total = data?.reduce((n, { count }) => n + count, 0);
      const newData = data?.map((item, i) => {
        const per = (item.count / total) * 100;
        //   console.log(per.toFixed());
        return { ...item, per: per.toFixed() + "%"};
      });
      setnewdata(newData);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(newdata);

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
                {newdata && (
                  <div className="text-center" style={{ "background-color": "rgb(104 98 98 / 67%)"}}>
                    <h2>Distribution Of MongoDB CDC Operation</h2>
                    <div className="d-flex justify-content-center">

                    <PieChart width={400} height={400}  >
                      <Pie
                    
                        data={newdata}
                        cx="50%"
                        cy="50%"
                        fill="#8884d8"
                        //   paddingAngle={1}
                        dataKey="count"
                        nameKey="OP"
                        label
                      >
                        <LabelList
                          dataKey="per"
                          position="insideTop"
                        //   angle="45"
                        />
                        {data?.map((entry, index) => (
                          <>
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          </>
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        }
      />
    </>
  );
};

export default Statistics;
