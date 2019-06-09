import React from 'react';
import TranscriptEditor  from '@bbc/react-transcript-editor';
// import SttTypeSelect from './select-stt-json-type';
import ExportFormatSelect from './select-export-format';
import demoTranscript from './sample-data/KateDarling-bbcKaldiTranscriptWithSpeakerSegments.json';
import { Link } from 'react-router-dom';
const demoMediaUrl = 'https://download.ted.com/talks/KateDarling_2018S-950k.mp4';
const demoTitle = 'Ted Talk - Kate Darling';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        transcriptData: null,
        mediaUrl: null,
        isTextEditable: true,
        spellCheck: false,
        sttType: 'bbckaldi',
        analyticsEvents: [],
        title: '',
        fileName: ''
        };

        this.transcriptEditorRef = React.createRef();
    }

    loadDemo = () => {
        this.setState({
        transcriptData: demoTranscript,
        mediaUrl: demoMediaUrl,
        title: demoTitle,
        sttType: 'bbckaldi'
        });
    }

    handleIsTextEditable = (e) => {
        this.setState({
        isTextEditable: e.target.checked
        });
    };

    handleSpellCheck = (e) => {
        this.setState({
        spellCheck: e.target.checked
        });
    };

    // https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
    handleSttTypeChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleExportFormatChange = event => {
        console.log(event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    exportTranscript = () => {
        const { data, ext } = this.transcriptEditorRef.current.getEditorContent(
        this.state.exportFormat
        );
        let tmpData = data;
        if (ext === 'json') {
        tmpData = JSON.stringify(data, null, 2);
        }
        this.download(tmpData, `${ this.state.mediaUrl }.${ ext }`);
    };

    // https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
    download = (content, filename, contentType) => {
        const type = contentType || 'application/octet-stream';
        const link = document.createElement('a');
        const blob = new Blob([ content ], { type: type });

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        // Firefox fix - cannot do link.click() if it's not attached to DOM in firefox
        // https://stackoverflow.com/questions/32225904/programmatical-click-on-a-tag-not-working-in-firefox
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    clearLocalStorage = () => {
        localStorage.clear();
    };

    handleAnalyticsEvents = event => {
        this.setState({ analyticsEvents: [ ...this.state.analyticsEvents, event ] });
    };

    handleChangeTranscriptName = value => {
        this.setState({ fileName: value });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">
                        <Link to="/listing">
                            <svg viewBox="0 40 448 512" height="24">
                                <path fill="#212529" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                                    </path>
                            </svg>
                        </Link><span> Editor</span>
                    </h1>
                    <div>
                        <button className="btn btn-success" onClick={ () => this.loadDemo() }>Load Demo</button>
                        <button className="btn btn-danger ml-2" onClick={ () => this.clearLocalStorage() }>Clear Local Storage</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Export Transcript:</label>
                            <div className="col-sm-2">
                                <ExportFormatSelect
                                    className="form-control"
                                    name={ 'exportFormat' }
                                    value={ this.state.exportFormat }
                                    handleChange={ this.handleExportFormatChange }
                                />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary btn-sm" onClick={ () => this.exportTranscript() }>Export File</button>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Options:</label>
                                <div className="col-md-8">
                                    <div className="form-group form-check">
                                        <input className="form-check-input"
                                            id={ 'textIsEditableCheckbox' }
                                            type="checkbox"
                                            checked={ this.state.isTextEditable }
                                            onChange={ this.handleIsTextEditable }
                                        />
                                        <label className="form-check-label" htmlFor={ 'textIsEditableCheckbox' }>Text Is Editable</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input className="form-check-input"
                                            id={ 'spellCheckCheckbox' }
                                            type="checkbox"
                                            checked={ this.state.spellCheck }
                                            onChange={ this.handleSpellCheck }
                                        />
                                        <label className="form-check-label" htmlFor={ 'spellCheckCheckbox' }>Spell Check</label> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>    
                <TranscriptEditor
                    transcriptData={ this.state.transcriptData }
                    fileName={ this.state.fileName }
                    mediaUrl={ this.state.mediaUrl }
                    isEditable={ this.state.isTextEditable }
                    spellCheck={ this.state.spellCheck }
                    sttJsonType={ this.state.sttType }
                    handleAnalyticsEvents={ this.handleAnalyticsEvents }
                    title={ this.state.title }
                    ref={ this.transcriptEditorRef }
                />

                <textarea
                    style={ { height: '200px', width: '100%', display: 'none' } }
                    value={ JSON.stringify(this.state.analyticsEvents, null, 2) }
                    disabled
                />
            </div>   
        );
    }
}

export default Editor;
