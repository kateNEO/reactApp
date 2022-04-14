import profileStyle from "./Profile.module.css"

let Profile = () => {
    return (
        <div>
            <img className={profileStyle.flower}
                 src='https://flowersholland.ru/upload/resize_cache/webp/upload/blog/vesna2021/001.webp'/> <br/>
            <div className={profileStyle.profileContent}>
                <img className={profileStyle.avatar}
                     src='https://avatars.mds.yandex.net/get-zen_doc/29317/pub_5c9fc820b59e2e00b3fcbad8_5ca3690521a86300b4ca80ba/scale_1200'/>
                <div className={profileStyle.personalInformation}>
                    <h3> Kate N.</h3>
                    Date of Birth: 30 june <br/>
                    City: Bryansk <br/>
                    Education: BSTU <br/>
                </div>
            </div>
            <div className={profileStyle.classInput}>
                <h3>My posts</h3>
                <form className={profileStyle.formBlock}>
                    <input className={profileStyle.inputPost} type="text"/> <br/>
                    <input className={profileStyle.submitPost} type="submit" value="send"/>
                </form>
            </div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>

        </div>
    )
}
export default Profile;