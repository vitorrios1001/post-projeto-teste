import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import PostIndex from '../pages/post/index'
import Main from '../theme/main'
import PostAdicionar from '../pages/post/adicionarPost'
import PostEditar from '../pages/post/editarPost'

export default(
    <Router path="/" component={Main} >

        <IndexRoute component={PostIndex} />

        <Route path="/post" component={PostIndex} />
        <Route path="/post/adicionar" component={PostAdicionar} />
        <Route path="/post/editar/:id" component={PostEditar} />

    </Router>
)


