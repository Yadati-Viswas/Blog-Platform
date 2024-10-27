import UserProfileHeader from "./UserProfileHeader";
import BlogHeaderOptions from "./BlogHeaderOptions";

function BlogHeader({user}) {
    return(
        <div className="flex justify-between">
            <UserProfileHeader profilePicture={user.profilePicture} fullName={user.fullName} username={user.username}/>
            <BlogHeaderOptions onFollowClick = {() => console.log("followed")} isFollowing={false}/>
        </div>
    );
}

export default BlogHeader;