import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPosts } from './../../actions/postActions'

import Grid from './gridPost'

class Index extends Component {

  render() {
    return (
      <div style={divGeral}>
        
        <a href="#/post/adicionar">Adicionar Post</a>

        <Grid />

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
  post: state.post
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPosts
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Index)
