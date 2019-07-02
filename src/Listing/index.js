import React, { Component } from 'react';
import axios from 'axios';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            createjob: false,
        };
    }

    createnewjob = () => {
		this.setState((prevState) => {
            return {createjob: !prevState.createjob};
        });
	};

    handleUploadFile = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        // "file":"sadhguru.wav"
        // data.append('file', "sadhguru.wav");
        reader.onload= (e) => {
            console.log("loadfile", e.target.result)
            const url = "http://103.21.187.134:5010/api/transcription";
            const formData = { file: e.target.result };
            return axios.post(url, formData)
                .then(response => console.warn("result", response))
        }
    }

    componentDidMount() {
        axios.get('http://103.21.187.134:5010/api/list_data?type=upload')
        .then((response) => response.data.data)
        .then(json => {
            this.setState({
                'users': json.files
            })
          })
        }
    render() {
        let transrow = this.state.users.map((data, index) => {
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
            {/* <pre>{JSON.stringify(this.state.users,3,0)}</pre> */}
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
