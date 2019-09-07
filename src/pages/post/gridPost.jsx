import React from 'react';
import { Table, Tooltip, Spin, Icon, Button } from 'antd'

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
                                    <Button
                                        onClick={() => edit(record)}
                                        style={styles.button}
                                    >
                                        <Icon style={{ marginLeft: -5 }} type='edit' />
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Comentários">
                                    <Button
                                        onClick={() => getComments(record.id)}
                                        style={styles.button}
                                        type='dashed'
                                    >
                                        <Icon
                                            type='message'
                                            style={styles.icon}
                                        />
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Excluir">
                                    <Button
                                        style={styles.button}
                                        type='danger'
                                        onClick={() => deletePost(record.id)}
                                    >
                                        <Icon
                                            type='delete'
                                            style={styles.icon}
                                        />
                                    </Button>
                                </Tooltip>
                            </div>
                        )
                    }
                }
            ]}
        />
    </Spin>
)

const styles = {
    button: {
        width: 10,
        marginLeft: 5,
    },
    icon: {
        marginLeft: -6
    },
}

export default GridPosts;