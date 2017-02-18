import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import CodeMirrorWrapper from './CodeMirrorWrapper';
import performance from '../../modules/performance';

class CodeEditor extends Component {

  render() {
    performance("CodeEditor");
    return (
      <div className="CodeEditor">
        <CodeMirrorWrapper ref="editor" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.codeEditor.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);
