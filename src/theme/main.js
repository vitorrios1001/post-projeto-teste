import React, { Component } from 'react';
import { connect } from 'react-redux'

import Messages from './messages'

class Main extends Component {
  
  render() {

    return (
      <div style={divGeral}>

        <h2>Header</h2>
        <Messages />
        <div id="wrapper">
          <div id="page-wrapper" className="gray-bg">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const divGeral = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '20px',
  marginFooter: '20px'
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
