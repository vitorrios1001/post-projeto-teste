import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPosts, getPostById, delPost } from './../../actions/postActions'
import { List, Avatar, Tooltip, Spin } from 'antd'

class GridComentarios extends Component {

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
                            <button onClick={() => this.props.delPost(record.id)} >
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
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.post.comentarios}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.email}</a>}
                                description={item.body}
                            />
                        </List.Item>
                    )}
                />
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


export default connect(mapStateToProps, mapDispatchToProps)(GridComentarios)
