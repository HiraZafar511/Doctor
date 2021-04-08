import { useSelector } from "react-redux";
import DetailList from "../MapList/Deatil/DetailList";
import { DatePicker, Space } from "antd";

import React, { useState, useEffect } from "react";

const Search = () => {
  const map = useSelector((state) => state.mapList.data);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className="search-doctor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-3">
            <div
              style={{
                paddingTop: 0,
                paddingBottom: 1,
                position: "static",
                transform: "none",
                top: 0,
                left: 0,
              }}
            >
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0">Search Filter</h4>
                </div>
                <div class="card-body">
                  <div class="filter-widget">
                    <div class="cal-icon">
                      <Space direction="vertical" style={{width:"100%"}}>
                        <DatePicker onChange={onChange} />
                      
                      </Space>
                     
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span class="checkmark"></span> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span class="checkmark"></span> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Select Specialist</h4>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                        
                        />
                        <span class="checkmark"></span> Clinical cardiologists
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                        
                        />
                        <span class="checkmark"></span> Electrophysiologists
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Preventive cardiologists
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Cardiac surgeons
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Heart failure
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Cardiologist
                      </label>
                    </div>
                  </div>
                  <div class="btn-search">
                    <button type="button" class="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8 col-xl-9">
            <div className="maplist">
              {map.map((item, key) => (
                <DetailList item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
