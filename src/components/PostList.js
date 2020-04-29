import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserH from './UserH';

class PostList extends React.Component {
    componentDidMount() {
        //this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="Item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserH userId={10} />
                    </div>
                </div>
            );
        });
    }
    render() {
        //console.log(this.props.posts);
        return <div>{this.renderList()}</div>
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts}
}
//export default connect(mapStateToProps, {fetchPosts}) (PostList);
export default connect(mapStateToProps, {fetchPostsAndUsers}) (PostList);