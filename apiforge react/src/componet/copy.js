    import React, { useState, useEffect } from 'react';

function APIDataDisplay() {
    const [apiData, setApiData] = useState(null);
    const [data, setData] = useState(`fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(data => {
        setApiData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });`)
    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('https://dummyjson.com/products/1')
            .then(response => response.json())
            .then(data => {
                setApiData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const handleCopyData = () => {
        // Copy data to clipboard when the button is clicked
        if (apiData) {
            navigator.clipboard.writeText(JSON.stringify(apiData, null, 2))
                .then(() => {
                    alert('Data copied to clipboard!');
                })
                .catch(error => {
                    console.error('Error copying data:', error);
                });
        }
    };

    return (
        <div>
            <pre>
                {/* Display fetched data */}
                {data ? JSON.stringify(apiData, null, 2) : 'Loading...'}
            </pre>
            <button onClick={handleCopyData}>Copy Data</button>
        </div>
    );
}

export default APIDataDisplay;
