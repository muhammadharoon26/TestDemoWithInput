// // filepath: /c:/Users/shaik/OneDrive/Desktop/testingSimplePage(NoorSir)/my-react-app/frontend/src/components/DataForm.js
// import React, { useState } from 'react';

// const DataForm = ({ onDataSave }) => {
//     const [inputData, setInputData] = useState('');
//     const [savedData, setSavedData] = useState([]);

//     const handleInputChange = (e) => {
//         setInputData(e.target.value);
//     };

//     const handleSave = async () => {
//         if (inputData) {
//             try {
//                 const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ data: inputData }),
//                 });
//                 const result = await response.json();
//                 console.log('Data saved:', result);
//                 setInputData('');
//                 onDataSave(result.data);
//             } catch (error) {
//                 console.error('Error saving data:', error);
//             }
//         }
//     };

//     const fetchData = async () => {
//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_URL}`);
//             const result = await response.json();
//             console.log('Data fetched:', result);
//             setSavedData(result);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={inputData}
//                 onChange={handleInputChange}
//                 placeholder="Enter data"
//             />
//             <button style={{ marginLeft: '10px' }} onClick={handleSave}>Save</button>
            
//             <div>
//                 <h2>Saved Data</h2>
//                 <button onClick={fetchData}>View</button>
//             </div>
//             <ul>
//                 {savedData.map((item, index) => (
//                     <li key={index}>{item.data}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DataForm;




import React, { useState } from 'react';

const DataForm = ({ onDataSave }) => {
  const [inputData, setInputData] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSave = async () => {
    if (!inputData) return;
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });
      if (!response.ok) throw new Error('Failed to save data');
      const result = await response.json();
      setInputData('');
      onDataSave(result.data);
      setError(null);
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Failed to save data');
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setSavedData(result);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button style={{ marginLeft: '10px' }} onClick={handleSave}>Save</button>
      <div>
        <h2>Saved Data</h2>
        <button onClick={fetchData}>View</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {savedData.map((item, index) => (
          <li key={index}>{item.data}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataForm;