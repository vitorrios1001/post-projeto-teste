import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from './form'

import { putPost, getPostById } from './../../actions/postActions'
import { Spin } from 'antd'

export class EditarPost extends Component {

    componentWillMount() {
        if (this.props.params.id) {
            this.props.getPostById(this.props.params.id)
        }
        
    }

    render() {
        return (
            <div style={divGeral}>
                <a href="#/post" >Voltar</a>
                <h2>Editar Post</h2>

                {
                    this.props.post.processandoPost
                        ? <Spin size="large" />
                        : 
                        <div style={divCadastro} >
                            <Form onSubmit={this.props.putPost} />
                        </div>
                }
            </div>
        )
    }
}

const divCadastro = {
    marginTop: '50px',
    marginLeft: '0px',
    marginRight: '50px',
    marginFooter: '50px'
}

const divGeral = {
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginFooter: '20px'
}

const mapStateToProps = (state) => ({
    post: state.post
})

const mapDispatchToProps = {
    putPost,
    getPostById
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarPost)
