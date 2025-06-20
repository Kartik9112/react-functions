import React, { useState } from 'react';

function MultipleInputConvert() {
    const [name, setName] = useState('');
    const [fathername, setFname] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [formDataArray, setFormDataArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            name,
            fathername,
            age,
            country
        };

        setFormDataArray([...formDataArray, newEntry]);

        setName('');
        setFname('');
        setAge(0);
        setCountry('');
    };

    return (
        <div className="bg-gray-200 max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">User Information Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Enter Your Father's Name"
                    value={fathername}
                    onChange={(e) => setFname(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Enter Your Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit Your Form
                </button>
            </form>

            {/* Display data */}
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Submitted Data:</h3>
                <pre className="text-sm text-gray-800 overflow-x-auto">{JSON.stringify(formDataArray, null, 2)}</pre>
            </div>
        </div>
    );
}

export default MultipleInputConvert;