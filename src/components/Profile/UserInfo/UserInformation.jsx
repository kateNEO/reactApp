import userInformationStyle from "./UserInformation.module.css"

let UserInformation = (props) => {
    return(
        <div>
        <img className={userInformationStyle.flower}
             src='https://flowersholland.ru/upload/resize_cache/webp/upload/blog/vesna2021/001.webp'/> <br/>
    <div className={userInformationStyle.profileContent}>
        <img className={userInformationStyle.avatar}
             src='https://avatars.mds.yandex.net/get-zen_doc/29317/pub_5c9fc820b59e2e00b3fcbad8_5ca3690521a86300b4ca80ba/scale_1200'/>
        <div className={userInformationStyle.personalInformation}>
            <h3> Kate N.</h3>
            Date of Birth: 30 june <br/>
            City: Bryansk <br/>
            Education: BSTU <br/>
        </div>
    </div>
</div>
    )
}

export default UserInformation