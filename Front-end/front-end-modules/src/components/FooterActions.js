import React from 'react';
import ActionButton from './ActionButton';
import { FaArrowUp, FaArrowDown, FaCommentAlt, FaShare } from 'react-icons/fa';

const FooterActions = ({id, upvotes, downvotes, shares, handleUpvote, handleDownvote, handleShare, toggleCommentSection}) => {
  return (
    <div className="flex space-x-2 mt-4 mb-1 text-xs">
      <ActionButton
        icon={<FaArrowUp />}
        value={upvotes}
        onClick={() => handleUpvote(id)}
      />
      <ActionButton
        icon={<FaArrowDown />}
        value={downvotes}
        onClick={() => handleDownvote(id)}
      />
      <ActionButton
        icon={<FaCommentAlt />}
        label="Comment"
        onClick={toggleCommentSection}
      />
      <ActionButton
        icon={<FaShare />}
        value={shares}
        onClick={() => handleShare(id)}
      />
    </div>
  );
};

export default FooterActions;
