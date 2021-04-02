import { useSelector } from "react-redux";
import MapGripList from "./MapgridList";
import Mapping from "../../Combine/Map/Mapping";
import Link from "next/link";
import {useState, useEffect} from "react";

const MapGrid = () => {
  const map = useSelector((state) => state.mapGrid.data);


 




  return (
    <div className="mapgrid">
      <div className="container-fluid">
        <div className="row">
          <div class="col-xl-6 col-lg-12  map-left">
            <div class="row align-items-center mb-4">
              <div class="col-md-6 col">
                <h4 className="pl-3 dr-found">2245 Doctors found</h4>
              </div>

              <div class="col-md-6 col-auto">
                <div class="sort-by d-flex justify-content-end">
                  <span class="sortby-fliter">
                    <select 
                      class="select select2-hidden-accessible"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="3" className="sort">
                        Sort by
                      </option>
                      <option class="sorting" value="rating">Rating</option>
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

            <div className="row">
              {map.map((item, key) => (
                <div class="col-sm-6 col-md-4 col-xl-6">
                  <MapGripList item={item} />
                </div>
              ))}

              
            </div>
          </div>
          <div class="col-xl-6 col-lg-12 map-right">
            <Mapping/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGrid;
