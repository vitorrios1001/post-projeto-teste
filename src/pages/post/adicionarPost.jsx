import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from './form'
import {addPost} from './../../actions/postActions'

export class AdicionarPost extends Component {

    render() {
        return (
            <div style={divGeral}>
                <a href="#/post" >Voltar</a>
                <h2>Adicionar Post</h2>

                <div style={divCadastro} >
                    <Form onSubmit={this.props.addPost} />
                </div>

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

})

const mapDispatchToProps = {
    addPost
}

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarPost)
