import React, { useState } from 'react';

const EmojiWithText = () => {
    const emojis = ['❌', '😊', '❌', '🙌', '⏬', '📒'];
    const [text, setText] = useState("");

    const addEmoji = (emoji) => {
        setText(text + emoji);
    };

    return (
        <div className="bg-gray-200 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Emoji With Text</h2>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg mb-4"
            />

            <div className="flex flex-wrap gap-3 justify-center">
                {emojis.map((emoji, i) => (
                    <button
                        key={i}
                        onClick={() => addEmoji(emoji)}
                        className="text-2xl p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition duration-200"
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmojiWithText;