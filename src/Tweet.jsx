import React, { useState } from 'react';

const Tweet = () => {
  const [tweetText, setTweetText] = useState('');
  const [tweets, setTweets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handlePost = () => {
    if (tweetText.trim() === '') return;

    if (isEditing) {
      const updatedTweets = [...tweets];
      updatedTweets[editIndex] = tweetText;
      setTweets(updatedTweets);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTweets([...tweets, tweetText]);
    }
    setTweetText('');
  };

  const handleEdit = (index) => {
    setTweetText(tweets[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredTweets = tweets.filter((_, i) => i !== index);
    setTweets(filteredTweets);
    if (isEditing && index === editIndex) {
      setIsEditing(false);
      setTweetText('');
    }
  };

  return (
    <div className=" bg-gray-200 max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-center mb-4">Tweet</h2>
      <textarea
        placeholder="What is in your mind ..."
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        className="w-full border border-blue-300 p-2 rounded mb-4"
      />
      <button
        onClick={handlePost}
        className="bg-gray-500 text-white px-4 py-2 rounded block mx-auto mb-6"
      >
        {isEditing ? 'Update' : 'Post'}
      </button>

      {tweets.map((tweet, index) => (
        <div key={index}>
          <p className="mb-2">{tweet}</p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => handleEdit(index)} >Edit </button>
            <button
              onClick={() => handleDelete(index)}> Delete </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweet;