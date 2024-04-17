import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ViewPolicy = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const data = location.state;
    console.log(data);
    // data.forEach(function(item) {
        // console.log("OBJ",Object.keys(item).filter((i)=>i!=="UPD_DESCR"))
      Object.keys(data).filter((i)=>i!=="UPD_DESCR").map(function(key) {
        console.log(key.replaceAll("_"," ") + ':' + data[key]);
      });
    // });
    console.log(data?.UPD_DESCR?.updatedFields);
  return (
    <div className='m-3'>
        <div className='d-flex justify-content-end'><button type="button" class="btn btn-primary" onClick={(e)=>{navigate("/")}}>All policy</button></div>
    <h4>Policy ID :{data?.policy_id}</h4>
    {data?.OP === "update" && 
    <>
    <hr/>
    <h3>updated Data :- </h3>
    <h4>removedFields :{data?.UPD_DESCR?.removedFields.length} </h4>
    <h4>truncatedArrays :{data?.UPD_DESCR?.truncatedArrays.length} </h4>
    <h4>updatedFields :-{
    Object.keys(data?.UPD_DESCR?.updatedFields).filter((i)=>i!=="UPD_DESCR").map((key)=> (
     <h5>{key.replaceAll("_"," ")} : {data?.UPD_DESCR?.updatedFields[key]}</h5>
    ))} </h4>
    <hr/>
    </>
    }
        { Object.keys(data).filter((i)=>i!=="UPD_DESCR").map((key)=> (  
        <div>
         <h5> <span>&#x2022;</span>{key.replaceAll("_"," ")} : {data[key]}</h5>
        </div>
      ))}
    </div>
  )
}

export default ViewPolicy