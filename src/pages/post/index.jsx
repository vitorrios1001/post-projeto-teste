import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { getPosts, addPost, delPostConfirmed, putPost, getCommentsOfPost } from './../../actions/postActions'

import Grid from './gridPost'
import { Button } from 'antd';
import ModalAdicionar from './ModalAdicionar';
import swal from 'sweetalert'
import ModalComments from './ModalComments';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        title: '',
        body: '',
      },
      visibleModal: false,
      showComments: false,
      comments: [],
      loadingComments: false,
    }
  }

  componentDidMount() {
    this.props.getPosts()
  }


  render() {
    const { item, visibleModal, showComments, comments, loadingComments } = this.state;
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

    const openAndCloseModal = () => {
      if (visibleModal)
        this.setState({ item: { title: '', body: '' } })

      this.setState({ visibleModal: !visibleModal })
    }
    const openComments = () => this.setState({ showComments: !showComments });

    const onChangeTitle = (e) => this.setState({ item: { ...item, title: e.target.value } })
    const onChangeBody = (e) => this.setState({ item: { ...item, body: e.target.value } })

    const btnEdit = (post) => {
      this.setState({ item: post });
      openAndCloseModal();
    }

    const getComments = async (idPost) => {
      const comments = await getCommentsOfPost(idPost);

      this.setState({ comments })
      openComments();
    }

    const savePost = async () => {

      if (item.id)
        await this.props.putPost(item);
      else
        await this.props.addPost(item);

      await this.setState({ visibleModal: !visibleModal, item: { title: '', body: '' } });
    }

    return (
      <div className='row'>
        <div className='col-md-12'>
          <Button
            type="primary"
            icon='plus'
            onClick={openAndCloseModal}
          >Add</Button>
          <Grid
            posts={posts}
            loading={processandoPosts}
            edit={btnEdit}
            deletePost={deletePost}
            getComments={getComments}
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

          <ModalComments
            visibleModal={showComments}
            closeModal={openComments}
            comments={comments}
            loading={loadingComments}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
})

const mapDispatchToProps = {
  getPosts,
  addPost,
  delPostConfirmed,
  putPost,
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
