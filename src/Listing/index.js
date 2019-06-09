import React, { Component } from 'react';

class Lists extends Component {
  render() {
    return (
    <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-5 border-bottom">
			<h1 className="h2">Recent jobs</h1>
			<button className="btn btn-primary">Create new job</button>
		</div>
        <div className="create-job mb-4">
            <div className="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
		    <button type="button" className="btn btn-primary mt-4">Submit</button>
		</div>
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Job name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Job 1</td>
                    <td><button type="button" className="btn btn-outline-danger">In Progress ..</button></td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">Auto-trancripted</button>

                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                    <a className="dropdown-item" href="#"  data-toggle="modal" data-target="#trancripted-text">Trancripted Preview</a>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Job 2</td>
                    <td><button type="button" className="btn btn-outline-success">Completed</button></td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">Auto-trancripted</button>

                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                    <a className="dropdown-item" href="#"  data-toggle="modal" data-target="#trancripted-text">Trancripted Preview</a>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}

export default Lists;
