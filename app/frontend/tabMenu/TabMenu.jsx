import React, {PropTypes, Component} from 'react';

import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import SwipeableViews from 'react-swipeable-views';

import uuid from '../../modules/uuidGen';
import performance from '../../modules/performance';
import Theme from '../theme/xethonTheme';

export default class TabMenu extends Component {
  static get propTypes() {
    return {
      style: PropTypes.object,
      tabStyle: PropTypes.object,
      tabIcons: PropTypes.array,
      iconStyle: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      style: {},
      tabStyle: {
        height: "35px",
        background: Theme.tabMenu.bg,
        color: Theme.tabMenu.col,
      },
      tabIcons: ["home"],
      iconStyle: {
        selected: Theme.tabMenu.col,
        unselected: Theme.tabMenu.colHidden,
      },
    };
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value) {
    this.setState({slideIndex: value});
  };

  render() {
    performance("TabMenu");

    const style = {
      height: "inherit",
      display: "flex",
      flexDirection: "column",
    };
    const tabStyle = this.props.tabStyle;
    const tabElements = this.props.tabIcons.map(function(icon, index) {
      return (
        <Tab
          icon={<FontIcon className="material-icons">{icon}</FontIcon>}
          buttonStyle={tabStyle}
          value={index}
          key={uuid()}
          />
      );
    });
    const swipeableViewsStyle = {
      flexGrow: "1",
      display: "flex",
    };
    const containerStyle = {
      height: "inherit",
      flexGrow: 1,
    }

    return (
      <div className="TabMenu" style={style}>
        <Divider />
        <Tabs
          onChange={this.handleChange}
          >
          {tabElements}
        </Tabs>
        <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={swipeableViewsStyle}
            containerStyle={containerStyle}
          >
          {this.props.children}
        </SwipeableViews>
      </div>
    );
  }
}
