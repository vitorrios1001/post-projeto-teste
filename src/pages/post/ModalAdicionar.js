import React from 'react';
import { Modal, Input } from 'antd';

const { TextArea } = Input;

const ModalAdicionar = ({ visible, closeModal, loading, save, item: { title, body }, onChangeTitle, onChangeBody }) => (
    <Modal
        title='New Post'
        visible={visible}
        onCancel={closeModal}
        onOk={save}
        confirmLoading={loading}
    >
        <div className='row'>
            <div className='col-md-12'>
                <div className="form-group">
                    <label className="control-label">Titulo: </label>
                    <Input
                        onChange={onChangeTitle}
                        value={title}
                    />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className="form-group">
                    <label className="control-label">Descrição: </label>
                    <TextArea
                        autosize={{ minRows: 4, maxRows: 8 }}
                        value={body}
                        onChange={onChangeBody}
                    />
                </div>
            </div>
        </div>
    </Modal>
)

export default ModalAdicionar;