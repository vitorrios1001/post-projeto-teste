import React from 'react';
import { Table, Tooltip, Spin, Icon } from 'antd'

const GridPosts = ({ posts, loading, editar, excluir }) => (
    <div>
        <div style={divTable}>
            <Spin size="large" spinning={loading} tip="Carregando aguarde..." >
                <Table
                    rowKey="id"
                    pagination={posts.length > 10}
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
                                                onClick={() => editar(record.id)}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Excluir">
                                            <Icon
                                                type='delete'
                                                onClick={() => excluir(record.id)}
                                            />
                                        </Tooltip>
                                    </div>
                                )
                            }
                        }
                    ]}
                />
            </Spin>
        </div>
    </div>
)

export default GridPosts;

const divTable = {
    marginTop: '50px',
    marginLeft: '0px',
    marginRight: '50px',
    marginFooter: '50px'
}
