import Mapping from "../../Combine/Map/Mapping";
import { useSelector } from "react-redux";
import DetailList from "./DetailList";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const Detail = () => {
  const map = useSelector((state) => state.mapList.data);
 
 

  return (
    <div className="maplist">
      <div className="container-fluid">
        <div className="row">
          <div class="col-xl-7 col-lg-12 ">
            <div class="row align-items-center mb-4">
              <div class="col-md-6 col">
                <h4 className="pl-3 dr-found">2245 Doctors found</h4>
              </div>

              <div class="col-md-6 col-auto">
                <div class="sort-by d-flex justify-content-end">
                  <span class="sortby-fliter">
                    <select  onChange={(e) => setSortType(e.target.value)}
                      class="select select2-hidden-accessible"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                      onChange={(e) => setSortType(e.target.value)}
                    >
                      <option data-select2-id="3" className="sort">
                        Sort by
                      </option>
                      <option class="sorting" value="percent">Rating</option>
                      <option class="sorting" value="popular">Popular</option>
                      <option class="sorting" value="latest">Latest</option>
                      <option class="sorting" value="free">Free</option>
                    </select>

                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="2"
                      style={{ width: " 100%" }}
                    >
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </span>
                  <div class="view-icons d-flex">
                    <Link href="/mapGrid">
                      <a href="#" class="grid-view active">
                        <i class="fas fa-th-large"></i>
                      </a>
                    </Link>

                    <Link href="/mapList">
                    <a href="#" class="list-view">
                        <i class="fas fa-bars"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {map.map((item, key) => (
              <DetailList item={item} />
            ))}
          </div>

          <div class="col-xl-5 col-lg-12 ">
            <Mapping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
