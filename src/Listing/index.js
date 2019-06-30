import React, { Component } from 'react';
import axios from 'axios';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: "",
            createjob: false,
            listing_data: {
                "status": true,
                "message": "Request successful.",
                "data": {
                    "files": [
                        {
                            "filename": "sadhguru.wav",
                            "length": 10,
                            "srtfile": "./Result/sadhguru.srt",
                            "edit_file": ""
                        },
                        {
                            "filename": "sample_file3.wav",
                            "length": 10,
                            "srtfile": "",
                            "edit_file": ""
                        },
                        {
                            "filename": "Ms.ShubhangiRohatgi-lec1.wav",
                            "length": 10,
                            "srtfile": "",
                            "edit_file": ""
                        },
                        {
                            "filename": "konar_math.wav",
                            "length": 10,
                            "srtfile": "./Result/konar_math.srt",
                            "edit_file": ""
                        },
                        {
                            "filename": "Dr.VishalTrivedi-lec1.wav",
                            "length": 10,
                            "srtfile": "",
                            "edit_file": ""
                        },
                        {
                            "filename": "intro.wav",
                            "length": 10,
                            "srtfile": "./Result/intro.srt",
                            "edit_file": ""
                        },
                        {
                            "filename": "Lec32.wav",
                            "length": 10,
                            "srtfile": "",
                            "edit_file": ""
                        },
                        {
                            "filename": "konar_phys1.wav",
                            "length": 10,
                            "srtfile": "./Result/konar_phys1.srt",
                            "edit_file": ""
                        },
                        {
                            "filename": "Dr.SachinKumar-lec1.wav",
                            "length": 10,
                            "srtfile": "",
                            "edit_file": ""
                        },
                        {
                            "filename": "PROF._AMIT_JAIN_INTRODUCTION_.wav",
                            "length": 10,
                            "srtfile": "./Result/PROF._AMIT_JAIN_INTRODUCTION_.srt",
                            "edit_file": ""
                        }
                    ]
                }
            }
        };
    }

    createnewjob = () => {
		this.setState((prevState) => {
            return {createjob: !prevState.createjob};
        });
	};

    handleUploadFile = (event) => {
        const data = new FormData();
        // "file":"sadhguru.wav"
        // data.append('file', "sadhguru.wav");
        data.append('file', event.target.files[0]);
        data.append('name', 'some value user types');
        axios.post('http://103.21.187.134:5010/api/transcription', data).then((response) => {
          console.log(response); // do something with the response
        })
    }

    componentDidMount() {
        const body = {body:JSON.stringify({"type":"upload"})}    
        const header = { 'Content-Type': 'application/json' }

        axios.get('http://103.21.187.134:5010/api/list_data', {header}, {body} )
          .then(response => response)
          .then(response => {
                this.setState({
                    users: response.json
                })
             }
            )
            .catch(function (error) {
            console.log(error);
        })
    }
    render() {
        let transrow = this.state.listing_data.data.files.map((data, index) => {
            return (  
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{data.filename}</td>
                        <td>{
                            data.srtfile ? (<button type="button" className="btn btn-outline-danger">In Progress ...</button>) 
                            : (<button type="button" className="btn btn-outline-success">Completed</button>)
                            }
                            </td>
                        <td>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-primary">Auto-trancripted</button>
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item" href="#">Delete</a>
                                    {data.srtfile? (<a className="dropdown-item" href="#"  data-toggle="modal" data-target="#trancripted-text">Trancripted Preview</a>) : (<a className="dropdown-item text-muted">Trancripted Preview</a>) }
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>)
            });
        return (
        <div>
            ABC:{this.state.users}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-5 border-bottom">
                <h1 className="h2">Recent jobs</h1>
                <button className="btn btn-primary" onClick={this.createnewjob}>Create new job</button>
            </div>
            { this.state.createjob ? (<div className="create-job mb-4">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={this.handleUploadFile} />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
                <button type="button" className="btn btn-primary mt-4">Submit</button>
            </div>): ''}
            
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
                    {transrow}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Lists;
