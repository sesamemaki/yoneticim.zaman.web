import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import DatePickerComponent from "../Datepicker";

function Efforts() {
  return (
    <div className="body-inner">
      <section id="page-content" className="no-sidebar pt-4 pb-4">
        <div className="container">
          <div className="widget ">
            <ul className="list list-legend list-group-item list-group-item-info">
              <li>
                <a href="#">
                  <h4>Efforts</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Projects</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Users</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Companies</h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="row mb-5">
            <div className="col-lg-6">
              <h4>Log Your Effort</h4>
              <div className="col-lg-10">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Choose a project:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <span className="text-muted">Start recording your effort:</span>
              <form>
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      style={{ width: "370px" }}
                      placeholder="Log an effort (Example: Writing a blog)"
                      id=""
                    />
                    <button type="button" className="btn btn-light">
                      <i className="icon-plus"></i> Add
                    </button>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Off work (Be honest to yourself!)
                  </label>
                </div>
              </form>
              <button type="button" className="btn btn-light">
                End of the day "date"
              </button>
            </div>
          </div>

          <div className="widget ">
            <ul className="list list-legend list-group-item list-group-item-info">
              <li>
                <a href="#">
                  <h4>
                    <i className="fas fa-caret-left"></i>Prev Day
                  </h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>
                    Next Day<i className="fas fa-caret-right"></i>
                  </h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Today</h4>
                </a>
              </li>
            </ul>
            <div className="col-lg-4">
              <div className="form-group">
                {/* <DatePicker className="input-group date" id="datetimepicker2">

</DatePicker> */}

                {/* <div className="input-group date" id="datetimepicker2" data-target-input="nearest">
                                    <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker2" placeholder="Select date" />
                                    <div className="input-group-text btn btn-light" data-target="#datetimepicker2" data-toggle="datetimepicker"><i className="icon-calendar"></i></div>
                                    

                                </div> */}
              </div>
            </div>
          </div>

       




          {/* <DatePickerComponent
          selected={this.state.date}
          onChange={this.handleChangeDate}
          /> */}
          
        </div>

        <div className="row mt-1">
          <h5>Logged Efforts for "date"</h5>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table
              id="datatable"
              className="table table-bordered table-hover"
              style={{
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Project Name</th>
                  <th>Time (h)</th>
                  <th>Time (min)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="4" style={{ textAlign: "right" }}>
                    Total:
                  </th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Efforts;
