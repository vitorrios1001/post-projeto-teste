import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPosts, addPost, delPostConfirmed } from './../../actions/postActions'

import Grid from './gridPost'
import { Button } from 'antd';
import ModalAdicionar from './ModalAdicionar';
import swal from 'sweetalert'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        title: '',
        body: '',
      },
      visibleModal: false,

    }
  }

  componentDidMount() {
    this.props.getPosts()
  }


  render() {
    const { item, visibleModal } = this.state;
    const { post: { posts, processandoPosts } } = this.props;

    const deletePost = async (idPost) => {

      const result = await swal({
        title: "Post",
        text: "Você tem certeza que deseja deletar o post?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      })

      if (result)
        this.props.delPostConfirmed(idPost)

    }

    const openAndCloseModal = () => this.setState({ visibleModal: !visibleModal })

    const onChangeTitle = (e) => this.setState({ item: { ...item, title: e.target.value } })
    const onChangeBody = (e) => this.setState({ item: { ...item, body: e.target.value } })

    const savePost = async () => {
      await this.props.addPost(item);

      await this.setState({ visibleModal: !visibleModal, item: { title: '', body: '' } });
    }

    return (
      <div style={divGeral}>
        <Button
          type="primary"
          icon='plus'
          onClick={openAndCloseModal}
        >Add</Button>
        <Grid
          posts={posts}
          loading={processandoPosts}
          editar={alert}
          excluir={deletePost}
        />
        <ModalAdicionar
          visible={this.state.visibleModal}
          closeModal={openAndCloseModal}
          loading={processandoPosts}
          save={savePost}
          item={item}
          onChangeTitle={onChangeTitle}
          onChangeBody={onChangeBody}
        />
      </div>
    );
  }
}

const divGeral = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '20px',
  marginFooter: '20px'
}

const mapStateToProps = state => ({
  post: state.post,
})

const mapDispatchToProps = {
  getPosts,
  addPost,
  delPostConfirmed,
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
