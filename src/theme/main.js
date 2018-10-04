import React, { Component } from 'react';
//import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hashHistory } from 'react-router'

import Routes from './../router/routes'
import Messages from './messages'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        body: ''
      }
    }
  }

  render() {

    //const { processandoPosts, posts, errosPosts } = this.props.post
    //const isEmpty = this.props.post.posts.length === 0

    return (
      <div style={divGeral}>

        <h2>Cabeçalho</h2>
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

const mapStateToProps = state => ({
  //post: state.post
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //getPosts,
  //addPost
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Main)
