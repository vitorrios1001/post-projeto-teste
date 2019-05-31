import React, { Component } from 'react';
import { Modal, List, Avatar, Button } from 'antd';

class ModalComments extends Component {

    render() {

        const { visibleModal, closeModal, comments } = this.props;

        return (
            <Modal
                title="Comentários"
                visible={visibleModal}
                onCancel={closeModal}
                bodyStyle={{
                    maxHeight: 360,
                    overflow: 'auto',
                }}
                footer={[
                    <Button
                        onClick={closeModal}
                    >Ok</Button>
                ]}
            >
                <List
                    itemLayout='horizontal'
                    dataSource={comments}
                    renderItem={item => (
                        <List.Item key={item.key}>
                            <List.Item.Meta
                                avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                                title={item.email}
                                description={item.body}
                            />
                        </List.Item>
                    )}
                />
            </Modal>
        )
    }
}

export default ModalComments;