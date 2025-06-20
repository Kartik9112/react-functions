import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center mt-8 bg-white ">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">Counter</h1>
                <p className="text-2xl mb-6 font-medium text-gray-700">{count}</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Increase Count
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Decrease Count
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                    >
                        Reset Count
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;