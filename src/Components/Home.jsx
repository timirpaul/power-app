import { useEffect, useState } from "react";
import "../App.css";
import { getApiData } from "../apidata/api";
import Sidebar from "./Slidebar";
import { Loader, Eye } from "react-feather";
import One from "./One";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);


  const apidata1 = async () => {
    try {
      setLoading(true);
      const res = await getApiData("/getALL");
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

  const handleViewItem = (e, item) => {
    try {
      navigate("viewpolicy", { state: { ...item } });
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      {/* <div className="container mt-3">
        <div className="row ">
          <div
            className="col-md-2"
            // style={{ backgroundColor: lightTheme.lightBlue }}
          >
            <Sidebar name="All Data" />
          </div>
          <div
            className=" col-md-10  "
            // style={{ backgroundColor: lightTheme.lightyellow }}
          >
            <div
              class="container"
              // style={{ backgroundColor: lightTheme.lightyellow }}
            >
              <div className="row">
                <div className="col-12 ">
                  <div className="d-flex justify-content-center">
                    <div className="col-md-12 ">
                      <div className="card m-3  p-1 text-center text-upper head-col">
                        <h4>All Policy</h4>
                      </div>
                    </div>
                  </div>

                  <div 
                //   className="d-flex justify-content-center"
                  >  */}
      <One
        name="All Policy"
        Children={
          <>
            {loading ? (
              <div className="text-center">
                <Loader />
              </div>
            ) : (
              <div
                className="mt-3 row"
                style={{
                  // "max-height": "400px",
                  //   "overflow-y": "scroll",
                  border: "1px solid #a2a9b1",
                  "border-radius": "8px",
                }}
              >
                <table className="table table-responsive table-striped table-hover">
                  {/* <thead style={{ position: "sticky", top: "0%" }}> */}
                  <tr
                      className="table-active table-head text-center "
                    style={{ "background-color": "#6adcf6" }}
                  >
                    <th>Policy Id</th>
                    <th>Policy Holder Name</th>
                    <th>Policy End Date</th>
                    <th>Policy Premium</th>
                    <th>Operation</th>
                    <th>Row Version</th>
                    <th>Date</th>
                    <th>View</th>
                  </tr>
                  {/* </thead> */}
<tbody>
                  {data?.length > 0 &&
                    data?.map((item, i) => (
                      <tr className="text-center" key={i}>
                        <td>{item.policy_id}</td>
                        <td>{item.policy_holder_name}</td>
                        <td>{item.policy_end_date?.substring(0, 10)}</td>
                        <td>{item.policy_premium}</td>
                        <td>{item.OP}</td>
                        <td>{item.ROW_VERSION}</td>
                        <td>{item.TS?.substring(0, 19)?.replace("T", " ")}</td>
                        <td>
                          <div onClick={(e) => handleViewItem(e, item)}>
                            <Eye />
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                </table>
              </div>
            )}
          </>
        }
      />

      {/* </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
