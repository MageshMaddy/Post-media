import { useParams, Link } from 'react-router-dom';
import React from 'react';

const PostPage = ({ posts, handleDelete }) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className='editbutton'>Edit Post</button></Link>
            <button className="deletebutton"
            onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {!post &&
          <>
            <h2>Post not found Oops!!</h2>
            <p><Link to='/'>Go to Homepage</Link></p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage