import React, { Component } from 'react';

class Lists extends Component {
  render() {
    return (
    <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-5 border-bottom">
			<h1 class="h2">Recent jobs</h1>
			<button class="btn btn-primary">Create new job</button>
		</div>
        <div className="create-job mb-4">
            <div class="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label" for="customFile">Choose file</label>
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
                        <div className="btn-group">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            more
                            </button>
                            <div classNAme="dropdown-menu">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Delete</a>
                                <a className="dropdown-item" href="#"  data-toggle="modal" data-target="#trancripted-text">Trancripted text</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Job 2</td>
                    <td><button type="button" className="btn btn-outline-success">Completed</button></td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            more
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Delete</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#trancripted-text">Trancripted text</a>
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
