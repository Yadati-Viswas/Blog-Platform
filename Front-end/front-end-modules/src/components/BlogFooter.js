import FooterActions from "./FooterActions";
import PostedTime from "./PostedTime";

function BlogFooter({id, upvotes, downvotes, shares, handleUpvote, handleDownvote, handleShare, timeStamp, toggleCommentSection}) {
    return(
        <div className="flex justify-between">
            <FooterActions 
                id ={id}
                upvotes = {upvotes} handleUpvote = {handleUpvote}
                downvotes = {downvotes}  handleDownvote = {handleDownvote}
                shares = {shares} handleShare = {handleShare}
                toggleCommentSection = {toggleCommentSection}
            />
            <div className="mt-4 mb-1 ">
                <PostedTime timeStamp={timeStamp} />
            </div>
        </div>
    );
}

export default BlogFooter;