import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

class ProjectManager extends Component {

  render() {
    return (
      <div className="ProjectManager"></div>
    );
  }
}

// TODO: 下の形式のjsonを書き換えたり、色々できるやつ。
/**
  project: "Project Name"
  files: [
    {
      filename: "section 1",
      isSaved: true or false,
      content: "hogehoge",
    },
    {
      filename: "section 2",
      isSaved: true or false,
      content: "hagehage",
    },
  ],
  tree: {
    module: "Project",
    isSaved: true,
    children: [{
      module: "test",
      isSaved: true,
    }, {
      module: "section 1",
      isSaved: true,
    }],
  },
 */
function mapStateToProps(state, ownProps) {
  return {
    files: state.projectManager.files,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectManager);