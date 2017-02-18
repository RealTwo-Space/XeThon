import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import { SortableHandle } from 'react-sortable-hoc';

import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class OrdredFile extends Component {

  static get propTypes() {
    return {
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      fileId: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
      isSaved: PropTypes.bool,
      onSelect: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      isSaved: false,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleClick(e, isRight?) {
    e.preventDefault();
    if(isRight){
      this.setState({
        open: true,
        anchorEl: e.currentTarget,
      });
    } else {
      this.props.onSelect(e, this.props.fileId);
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const bg = (this.props.isSelected)
      ? {backgroundColor: "rgba(200,200,200,0.4)"} : {};
    const style = Object.assign({
      height: "35px",
      display: "flex",
      flexDirection: "row",
      boxSizing: "border-box",
      alignItems: "center",
      position: "relative",
      paddingLeft: "7px",
      fontSize: "11px",
      color: "rgb(100,100,100)",
    }, bg);


    const titleStyle = {
      marginLeft: "5px",
      borderLeft: "solid 1px #999999",
      paddingLeft: "5px",
      fontSize: "11px",
      color: "rgb(60,60,60)",
      flexGrow: 1,
    };

    const saveDisplay = (this.props.isSaved) ? "none" : "block";
    const saveStyle = {
      height: "35px",
      //width: "35px",
      alignItems: "center",
      position: "absolute",
      right: "5px",
      top: "12px",
      display: saveDisplay,
    };

    // Renderer return
    return (
      <div
        className="OrderedFile"
        style={style}
        onClick={(e) => this.handleClick(e)}
        onContextMenu={(e) => this.handleClick(e, true)}>
        {this.props.order}
        <div style={titleStyle}>
          {this.props.title}
        </div>
        <div style={saveStyle}>
          ●
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          >
          <Menu desktop={true}>
            <MenuItem primaryText="Save" />
            <MenuItem primaryText="Save All" />
            <MenuItem primaryText="Rename" />
            <MenuItem primaryText="Duplicate" />
            <MenuItem primaryText="Delete" />
            <MenuItem primaryText="Copy" />
            <MenuItem primaryText="Cut" />
            <MenuItem primaryText="Paste" />
            <Divider />
            <MenuItem primaryText="Add"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
