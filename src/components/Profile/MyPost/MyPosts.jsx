import myPostStyle from "./MyPost.module.css"
import dialogsStyle from "../../Dialog/Dialogs.module.css";

let MyPosts = (props) => {
    let PostsData = [
        {id: 1, post: '"Hi! I\'m here."', likesCount: 5},
        {id: 2, post: 'Today is good day!', likesCount: 7},
    ]
    let MyPostsElements = PostsData.map(post => <Post key = {post.id}  message = {post.post} likesCount={post.likesCount}/>)
    return(
         <div className={myPostStyle.classInput}>
            <div className={myPostStyle.postH}>My posts</div>
            <form className={myPostStyle.formBlock}>
                <input className={myPostStyle.inputPost} type="text"/> <br/>
                <input className={myPostStyle.submitPost} type="submit" value="send"/>
            </form>
             <div className={myPostStyle.posts}>
                 {MyPostsElements}
             </div>
        </div>
    )
}

let Post =(props) =>{
    return(
        <div className={myPostStyle.postBlock}>
            <div className={dialogsStyle.dialogAvatar}>img</div>
            <div className={myPostStyle.post}>{props.message}</div>
        </div>

    )
}

export default MyPosts