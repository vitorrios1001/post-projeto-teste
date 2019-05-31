import * as a from '../ActionTypes/postActionTypes'
import axios from 'axios'

import { hashHistory } from 'react-router'
import { initialize } from 'redux-form'
import swal from 'sweetalert'
import { toastr } from "react-redux-toastr"
import api from '../_services/api';

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

const processandoPost = (bool) => ({
    type: a.PST_PROCESSANDO_POST,
    payload: bool
})

const processandoComentario = (bool) => ({
    type: a.PST_PROCESSANDO_COMENTARIO,
    payload: bool
})

const setPosts = (response) => ({
    type: a.PST_GET_POST,
    payload: response
})

export const getPostComments = (response) => {
    return {
        type: a.PST_GET_COMENTARIO,
        payload: response
    }
}

export const getPosts = () => async dispatch => {
    try {
        dispatch(processandoPost(true))

        const { data } = await axios.get(`${BASE_URL}posts`)

        dispatch([
            setPosts(data),
            processandoPost(false)
        ])
    } catch (error) {
        dispatch(processandoPost(false))
        toastr.error('Post', `Erro ao carregar os Posts`, { timeOut: 4000 })
    }
}

export const getCommentsOfPost = async (idPost) => {
    try {
        const { data } = await api.get(`/comments?postId=${idPost}`);

        return data;
    } catch (error) {
        console.log(error)
        swal({ title: "Comentários", text: "Ocorreu um erro ao tentar buscar os comentários do post.", icon: "error" })
    }
}

export const delPostConfirmed = (id) => async (dispatch, getState) => {
    try {
        const { post: { posts } } = getState();

        dispatch(processandoPost(true));
        await axios.delete(`${BASE_URL}posts/${id}`);

        const newList = posts.filter(item => item.id !== id);

        dispatch([
            setPosts(newList),
            processandoPost(false)
        ])

    } catch (error) {
        dispatch(processandoPost(false))
        swal({ title: "Post", text: "Erro ao excluir o post!", icon: "error" })
    }
}

export const putPost = (item) => async (dispatch, getState) => {
    try {
        const { post: { posts } } = getState();

        dispatch(processandoPost(true))
        const { data } = await axios.put(`${BASE_URL}posts/${item.id}`, item)

        var newList = [...posts];

        newList[posts.findIndex(x => x.id === item.id)] = data;

        dispatch([
            setPosts(newList),
            processandoPost(false)
        ])

        swal({ title: "Post", text: "Post Atualizado com sucesso!", icon: "success" })

    } catch (err) {
        console.log('Erro na Atualização', err)
        dispatch(processandoPost(false))
        swal({ title: "Post", text: "Erro ao atualizar o post!", icon: "error" })
    }
}

export const addPost = post => async (dispatch, getState) => {
    try {
        const { post: { posts } } = getState();

        dispatch(processandoPost(true));
        const { data } = await axios.post(`${BASE_URL}posts`, { ...post, userId: 1 })

        const newPostsList = [data, ...posts];

        dispatch([
            setPosts(newPostsList),
            processandoPost(false),
        ])

        swal({ title: "Post", text: "Post adicionado com sucesso!", icon: "success" })
    } catch (error) {
        console.log(error)
        dispatch(processandoPost(false))
        swal({ title: "Post", text: "Erro ao adicionar o post!", icon: "error" })
    }
}


export const getPostById = (id) => {
    return dispatch => {
        dispatch([processandoPost(true)])

        axios.get(BASE_URL + 'posts/' + id)
            .then(res => {
                //console.log(res)
                dispatch([
                    processandoPost(false),
                    initialize('postForm', res.data, true),
                    processandoComentario(true)
                ])

                axios.get(BASE_URL + 'comments?postId=' + id)
                    .then(resComent => {
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
                hashHistory.push(`/post/editar/` + id)
            }).catch(err => {
                dispatch([
                    processandoPost(false)
                ])
                toastr.error('Post', `Erro ao carregar o Post`, { timeOut: 4000 })
                hashHistory.push(`post/`)
            })
    }
}