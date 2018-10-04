import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPosts, getPostById, delPost } from './../../actions/postActions'
import { Table, Tooltip, Spin } from 'antd'

class Grid extends Component {

    constructor(props) {
        super(props)

        this.columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: 'Titulo',
            dataIndex: 'title',
            key: 'title'
        }, {
            title: 'Ação',
            dataIndex: 'acao',
            width: '15%',
            render: (text, record) => {
                return (
                    <div>
                        <Tooltip title="Alterar">
                            <button onClick={() => this.props.getPostById(record.id)} >
                                <span>Alterar</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Excluir">
                            <button onClick= { () => this.props.delPost(record.id)} >
                                <span>Excluir</span>
                            </button>
                        </Tooltip>
                    </div>
                )
            }
        }]
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {

        const { processandoPosts, posts } = this.props.post

        return (
            <div>
                <div style={divTable}>
                    <Spin size="large" spinning={this.props.post.processandoPosts} tip="Carregando aguarde..." >
                        <Table
                            rowKey="id"
                            pagination={true}
                            dataSource={posts}
                            columns={this.columns}
                        />
                    </Spin>
                </div>
            </div>
        );
    }
}

const divCenter = {
    justifyContent: 'center'
}

const divTable = {
    marginTop: '50px',
    marginLeft: '0px',
    marginRight: '50px',
    marginFooter: '50px'
}


const mapStateToProps = state => ({
    post: state.post
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts,
    getPostById,
    delPost
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Grid)
