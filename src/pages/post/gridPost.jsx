import React from 'react';
import { Table, Tooltip, Spin, Icon } from 'antd'

const GridPosts = ({ posts, loading, edit, deletePost, getComments }) => (
    <Spin size="large" spinning={loading} tip="Carregando aguarde..." >
        <Table
            rowKey="id"
            pagination={posts.length > 10}
            style={{ width: '100%', marginTop: 15 }}
            dataSource={posts}
            columns={[
                {
                    title: 'Titulo',
                    dataIndex: 'title',
                    key: 'title'
                }, {
                    title: 'Ação',
                    dataIndex: 'acao',
                    width: '20%',
                    render: (text, record) => {
                        return (
                            <div>
                                <Tooltip title="Alterar">
                                    <Icon
                                        type='edit'
                                        style={{ marginRight: 10 }}
                                        onClick={() => edit(record)}
                                    />
                                </Tooltip>
                                <Tooltip title="Excluir">
                                    <Icon
                                        type='delete'
                                        style={{ marginRight: 10 }}
                                        onClick={() => deletePost(record.id)}
                                    />
                                </Tooltip>
                                <Tooltip title="Comentários">
                                    <Icon
                                        type='message'
                                        onClick={() => getComments(record.id)}
                                    />
                                </Tooltip>
                            </div>
                        )
                    }
                }
            ]}
        />
    </Spin>
)

export default GridPosts;