import React from 'react'

function Efforts() {
    return (
        <div className="body-inner">
            <section id="page-content" className="no-sidebar pt-4 pb-4">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h4>Log Your Effort</h4>
                        </div>
                        <div className="col-lg-6 text-end">
                            <button type="button" className="btn btn-light"><i className="icon-plus"></i> Add Record</button>
                            <div className="p-dropdown ml-3 float-right">
                                <a className="title btn btn-light"><i className="icon-sliders"></i> Options</a>
                                <div className="p-dropdown-content">
                                    <ul>
                                        <li><a href="#"><i className="icon-refresh-cw"></i>Update Records</a></li>
                                        <li><a href="#"><i className="icon-edit"></i>Edit</a></li>
                                        <li><a href="#"><i className="icon-x"></i>Delete</a></li>                                        
                                        <li><a href="#"><i className="icon-life-buoy"></i>Documentation</a></li>
                                        <li><a href="#"><i className="icon-mail"></i>Email Support Team</a></li>
                                        <li><a href="#"><i className="icon-alert-triangle"></i>Report an issue</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h4>Logged Efforts for "8 Nisan 2022 Cuma"</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table id="datatable" className="table table-bordered table-hover"
                                style={{
                                    width: '100%'
                                }}>
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
                                        <th colspan="4"
                                            style={{ textAlign: 'right' }}
                                        >Total:</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Efforts;
