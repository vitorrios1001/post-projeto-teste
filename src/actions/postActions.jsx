import * as a from '../ActionTypes/postActionTypes'
import axios from 'axios'
import _ from 'lodash'

import { hashHistory } from 'react-router'
import { initialize } from 'redux-form'
import swal from 'sweetalert'
import { toastr } from "react-redux-toastr"

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const processandoPost = (bool) =>{
    return {
        type: a.PST_PROCESSANDO_POST,
        payload: bool
    }
}

export const processandoComentario = (bool) => {
    return {
        type: a.PST_PROCESSANDO_COMENTARIO,
        payload: bool
    }
}

export const getPostsSuccess = (response) =>{
    return {
        type: a.PST_GET_POST,
        payload: response
    }
}

export const getPostComments = (response) => {
    return{
        type: a.PST_GET_COMENTARIO,
        payload: response
    }
}

export const getPosts = () => {
    return dispatch =>{
        dispatch(processandoPost(true))
        
        axios.get(BASE_URL +'posts/')
            .then(res =>{
                //console.log(res.data)
                dispatch([
                    getPostsSuccess(res),
                    processandoPost(false)
                ])
                toastr.success('Post', `Posts carregados`, { timeOut: 4000 })
            }).catch(err =>{
                //console.log(err)
                toastr.error('Post', `Erro ao carregar os Posts`, { timeOut: 4000 })
                dispatch(processandoPost(false))
            })
    }
}

export const delPost = (id) =>{
    return (dispatch) => {
        swal({
            title: "Post",
            text: "Você tem certeza que deseja deletar o post?",
            icon: "warning",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              dispatch(delPostConfirmed(id))                
            } else {
              swal("Operação cancelada pelo usuário!");
            }
          });
    }    
}

export const delPostConfirmed = (id) =>{
    return (dispatch) => {
        
        dispatch(processandoPost(true))
        
        axios.delete(BASE_URL+'posts/'+id)
        .then(res =>{
            console.log('Deletado', res)
            dispatch(processandoPost(false))
            swal({
                title: "Post",
                text: "Post Excluído com sucesso!",
                icon: "success"
            })
            hashHistory.push(`/post`)
            
        }).catch(err =>{                
            console.log('Erro na deleção', err)
            dispatch(processandoPost(false))
            swal({
                title: "Post",
                text: "Erro ao excluir o post!",
                icon: "error"
            })
        })
    }
}

export const putPost = () =>{
    return (dispatch, getState) =>{
        dispatch(processandoPost(true))

        const { form } = getState()
        let values = form.postForm.values 
        let post = values

        axios.put(BASE_URL+'posts/'+post.id, post)
            .then(res =>{
                console.log('Atualizado', res)
                dispatch(processandoPost(false))
                swal({
                    title: "Post",
                    text: "Post Atualizado com sucesso!",
                    icon: "success"
                })
                hashHistory.push(`/post`)
                
            }).catch(err =>{                
                console.log('Erro a Atualização', err)
                dispatch(processandoPost(false))
                swal({
                    title: "Post",
                    text: "Erro ao atualizar o post!",
                    icon: "error"
                })
            })
    }
}

export const getPostById = (id) =>{
    return dispatch => {
        dispatch([processandoPost(true)])
        
        axios.get(BASE_URL+'posts/'+id)
            .then(res => {
                //console.log(res)
                dispatch([
                    processandoPost(false),                    
                    initialize('postForm', res.data, true),
                    processandoComentario(true)                    
                ])

                axios.get(BASE_URL+'comments?postId='+id)
                    .then(resComent =>{
                        dispatch([
                            processandoComentario(false),
                            getPostComments(resComent)
                        ])
                        toastr.success('Comentarios', `Comentários carregados`, { timeOut: 4000 })
                    }).catch(errComent => {
                        dispatch(processandoComentario(false))
                        toastr.error('Comentarios', `Erro ao carregar os comentários`, { timeOut: 4000 })
                    })

                toastr.success('Post', `Post carregado`, { timeOut: 4000 })
                hashHistory.push(`/post/editar/`+id)
            }).catch(err =>{
                dispatch([
                    processandoPost(false)                    
                ])
                toastr.error('Post', `Erro ao carregar o Post`, { timeOut: 4000 })
                hashHistory.push(`post/`)
            })
    }
}

export const addPost = (post) =>{
    console.log(post)
    return dispatch => {

        dispatch(processandoPost(true));

        axios.post(BASE_URL+'posts', post)
            .then(res =>{
                console.log('AddPostSuccess', res)
                dispatch([                    
                    getPosts(),
                    processandoPost(false)
                ])    
                swal({
                    title: "Post",
                    text: "Post adicionado com sucesso!",
                    icon: "success"
                })            
                hashHistory.push(`/post`)
            }).catch(err =>{
                console.log('AddPostFail', err)
                dispatch([
                    processandoPost(false)
                ])
                swal({
                    title: "Post",
                    text: "Erro ao adicionar o post!",
                    icon: "error"
                })
                hashHistory.push(`/post`)
            })
    }
}