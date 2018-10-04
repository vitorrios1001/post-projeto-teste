import React from 'react'

const Posts = ({ posts }) => (
    <div>
        <tbody style={tableStyle}>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>

            {posts.map(post =>

                <tr style={trStyle} key={post.id} >
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )}

        </tbody>
    </div>
)

const tableStyle = {
    padding: "20px",
    margin: "20px"
}

const trStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
}


/*
Posts.propTypes = {
    posts: PropTypes.array.isRequired
}
*/
export default Posts