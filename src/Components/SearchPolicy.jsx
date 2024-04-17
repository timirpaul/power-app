import { useEffect, useState } from "react";
// import "./App.css";
import { getApiData } from "../apidata/api";
import Sidebar from "./Slidebar";
import { Loader ,Eye} from "react-feather";
import One from "./One";
import { useNavigate } from "react-router-dom";


const  SearchPolicy =()=> {
    const navigate = useNavigate()

  const [data, setData] = useState();
  const [search, setSearch] = useState({ });
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      console.log(search);
      const res = await getApiData("/getPolicy", search);
      console.log(res?.data);
    //   toast.success("search complete");
      setData(res?.data);
    } catch (error) {
      // console.log(error);
    //   toast.error(error);
    } finally{
        setLoading(false)
    }
  };

  const handleViewItem =(e,item)=>{
    try {
        navigate("/viewpolicy" ,{state:{...item}})
    } catch (error) {
        console.log(error);
    }
  }
  console.log(search);
  return (
    <>
      {/* <div className="container mt-3">
        <div className="row ">
          <div
            className="col-md-2"
            // style={{ backgroundColor: lightTheme.lightBlue }}
          >
            <Sidebar name="Search Policy" />
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
                        <h4>Search Policy</h4>
                      </div>
                    </div>
                  </div>
                  <div 
                //   className="d-flex justify-content-center"
                  > */}

                  <One name="Search Policy" Children={

                    <>
                 
                  <form
                      className="form-inline mr-auto d-flex"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className="form-control"
                        type="text"
                        name="id"
                        onChange={(e) => {
                          setSearch({
                            ...search,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-primary btn-mdb-color btn-rounded btn-sm my-0 m-2"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>


{loading ? <div className="text-center mt-3">
          <Loader/>
        </div> : data?.length >0 ?
                      <div
                        className="mt-3 row"
                        style={{
                          // "max-height": "400px",
                          // "overflow-y": "scroll",
                          border: "1px solid #a2a9b1",
                          "border-radius": "8px",
                        }}
                      >
                        <table className="table table-responsive table-striped">
                          <thead style={{ position: "sticky", top: "0%" }}>
                            <tr
                              className="table-active table-head text-center"
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
                          </thead>

                          {data?.map((item, i) => (
                            <tr className="text-center">
                              <td>{item.policy_id}</td>
                              <td>{item.policy_holder_name}</td>
                              <td>{(item.policy_end_date)?.substring(0,10)}</td>
                              <td>{item.policy_premium}</td>
                              <td>{item.OP}</td>
                              <td>{item.ROW_VERSION}</td>
                              <td>{item.TS?.substring(0,19)?.replace("T"," ")}</td>
                              <td><div onClick={(e)=>handleViewItem(e,item)}><Eye/></div></td>
                            </tr>
                          ))}
                        </table>
                      </div>
                     : "No Data"     }
                     </>

}/>
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

export default SearchPolicy;
