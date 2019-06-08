import React from 'react';
import TranscriptEditor  from '@bbc/react-transcript-editor';
// import SttTypeSelect from './select-stt-json-type';
import ExportFormatSelect from './select-export-format';
import demoTranscript from './sample-data/KateDarling-bbcKaldiTranscriptWithSpeakerSegments.json';
import style from './index.module.css';
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
        console.info('Cleared local storage.');
    };

    handleAnalyticsEvents = event => {
        this.setState({ analyticsEvents: [ ...this.state.analyticsEvents, event ] });
    };

    handleChangeTranscriptName = value => {
        this.setState({ fileName: value });
    };

    render() {
        return (
            <div className={ style.container }>
                <div className={ style.demoNav }>
                    <section className={ style.demoNavItem }>
                        <button className="btn btn-success btn-sm" onClick={ () => this.loadDemo() }>Load Demo</button>
                    </section>

                    <section className="row">
                        <div className="col-md-4"><label>Export Transcript</label></div>
                        <div className="col-md-4">
                            <ExportFormatSelect
                            className="form-control"
                            name={ 'exportFormat' }
                            value={ this.state.exportFormat }
                            handleChange={ this.handleExportFormatChange }
                            />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-sm" onClick={ () => this.exportTranscript() }>Export File</button>
                        </div>
                    </section>

                    <section className="row">
                        <div className="col-md-4">
                            <label>Options</label>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label className={ style.editableLabel } htmlFor={ 'textIsEditableCheckbox' }>Text Is Editable</label>
                                <input
                                    id={ 'textIsEditableCheckbox' }
                                    type="checkbox"
                                    checked={ this.state.isTextEditable }
                                    onChange={ this.handleIsTextEditable }
                                />
                            </div>
                            <div>
                                <label className={ style.editableLabel } htmlFor={ 'spellCheckCheckbox' }>Spell Check</label>
                                <input
                                    id={ 'spellCheckCheckbox' }
                                    type="checkbox"
                                    checked={ this.state.spellCheck }
                                    onChange={ this.handleSpellCheck }
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-danger btn-sm" onClick={ () => this.clearLocalStorage() }>Clear Local Storage</button>
                        </div>
                    </section>
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
