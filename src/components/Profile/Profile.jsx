import profileStyle from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import UserInformation from "./UserInfo/UserInformation";


let Profile = (props) => {

    let PostsData = [
        {id: 1, post: '"Hi! I\'m here."', likesCount: 5},
        {id: 2, post: 'Today is good day!', likesCount: 7},
    ]
    return (
        <div>
            <UserInformation/>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;