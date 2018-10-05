import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { FormInput } from './../../component/formInput'
import { Spin } from 'antd'

export class PostForm extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>                
                <form onSubmit={handleSubmit} >
                    <Spin spinning={this.props.post.processandoPosts} tip="Carregando aguarde...">
                        <label className="control-label">Titulo: <span className="text-danger">*</span></label>
                        <Field name="title" maxLength={100} component={FormInput} />

                        <label className="control-label">Corpo: <span className="text-danger">*</span></label>
                        <Field name="body" maxLength={500} component={FormInput} />
                    </Spin>
                    <p className="pull-right" style={{ marginLeft: 8, paddingTop: 8 }}><Link to="/post" >Cancelar</Link></p>
                    <button type="submit" className="btn btn-primary pull-right" >Salvar Dados</button>

                </form>
            </div>
        )
    }
}

PostForm = reduxForm({ form: 'postForm', destroyOnUnmount: true })(PostForm);

const mapStateToProps = (state) => ({
    post: state.post
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
