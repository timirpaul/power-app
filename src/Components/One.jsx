import React from 'react'
import "../App.css"

import Sidebar from "./Slidebar";

const One =({Children ,name}) =>{
  return (
    <>
    <div className="container mt-3">
        <div className="row ">
          <div
            className="col-md-2"
            // style={{ backgroundColor: lightTheme.lightBlue }}
          >
            <Sidebar name={name} />
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
                        <h4>{name}</h4>
                      </div>
                    </div>
                  </div>

                  <div 
                //   className="d-flex justify-content-center"
                  >
                    {Children}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default One