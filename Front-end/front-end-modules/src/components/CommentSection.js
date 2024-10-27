import React, { useState } from "react";

    function CommentSection({id}) {
    const initialComments = [
        {
            id: 1,
            content: "This is a great blog post!",
            timestamp: new Date().toISOString(),
        },
        {
            id: 2,
            content: "Thanks for sharing this information.",
            timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
        },
    ];

    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (!newComment.trim()) return; // Prevent empty comments

        const commentData = {
            id: comments.length + 1, // Mock ID
            content: newComment,
            timestamp: new Date().toISOString(),
        };

        setComments([...comments, commentData]); // Update comments state
        setNewComment(""); // Clear the input field
    };

    return (
        <div className="my-4 p-4 border rounded shadow-md bg-white">
            <h3 className="font-semibold text-lg">Comments</h3>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b py-2">
                        <p className="text-gray-800">{comment.content}</p>
                        <p className="text-gray-500 text-sm">
                            {new Date(comment.timestamp).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
            <textarea
                className="border rounded w-full p-2 mt-2"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <button
                onClick={handleAddComment}
                className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
}

export default CommentSection;
