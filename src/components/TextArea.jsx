import React from "react";

const TextArea = () => {
  return (
    <div>
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 input-wrapper">
        <label htmlFor="comment" className="sr-only form-label-textArea">
          Your message
        </label>
        <textarea
          id="comment"
          rows="4"
          className="text-area w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
