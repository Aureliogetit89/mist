import React, { Component } from 'react';
import { connect } from 'react-redux';

class NodeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubmenu: false
    };
  }

  // showSubmenu = e => {
  // const $this = $(e.currentTarget);
  // const tabTopOffset = $this.offset().top;
  // const $submenuContainer = $this.find('.submenu-container');
  // const $submenu = $this.find('.sub-menu');
  // const submenuHeaderHeight = $this.find('header').outerHeight();
  // const windowHeight = $(window).outerHeight();

  // $submenuContainer.css('top', tabTopOffset + 'px');
  // $submenu.css(
  // 'max-height',
  // windowHeight - tabTopOffset - submenuHeaderHeight - 30 + 'px'
  // );
  // };

  render() {
    // TODO: determine status
    const status = 'red';

    return (
      <div id="node-info">
        <div
          id="node-info__light"
          className={`light-color__${status}`}
          onMouseEnter={() =>
            this.setState({ showSubmenu: !this.state.showSubmenu })
          }
        />

        {this.state.showSubmenu && <div className="node-info__submenu">hi</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(NodeInfo);
