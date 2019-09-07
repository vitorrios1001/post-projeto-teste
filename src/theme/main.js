import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import Messages from './messages'

import './styles.css'

class Main extends Component {
  
  render() {

    return (
      <div >

        <Header />
        <Messages />
        <div className="my-wrapper">
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
