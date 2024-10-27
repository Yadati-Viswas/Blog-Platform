import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns'; // A library to help with date formatting

const PostedTime = ({ timeStamp }) => {
  // If the timestamp is not valid, handle the error (could show nothing or a default time)
  if (!timeStamp){
    console.log("Invalid timeStamp", timeStamp);
    return null;
  }

  // Format the timestamp to show how long ago the post was made
  const timeAgo = formatDistanceToNow(parseISO(timeStamp), { addSuffix: true });

  return (
    <p className="text-xs/8 text-gray-500">
      {timeAgo}
    </p>
  );
};

export default PostedTime;
