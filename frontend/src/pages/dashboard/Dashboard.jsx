import React, { useState } from 'react';
import Graph from '../../components/common/Graph';
import Form from '../../components/common/Form';
import Labels from '../../components/common/Labels';

export default function Dashboard() {
    const [data, setData] = useState([]);

    const handleAddData = (newData) => {
        setData(prevData => {
            const existingIndex = prevData.findIndex(item => item.type === newData.type);
            if (existingIndex !== -1) {
                // Update existing item
                const updatedData = [...prevData];
                updatedData[existingIndex] = newData;
                return updatedData;
            } else {
                // Add new item
                return [...prevData, newData];
            }
        });
    };

    const calculateTotalMarks = () => {
        return data.reduce((total, item) => total + (item.mark || 0), 0);
    };

    const prepareChartData = () => {
        const labels = ['Mark 1', 'Mark 2', 'Mark 3', 'Mark 4', 'Mark 5'];
        const markData = labels.map(label => {
            const found = data.find(item => item.type === label);
            return found ? found.mark : 0;
        });

        return {
            labels,
            datasets: [{
                data: markData,
                backgroundColor: [
                    '#f9c74f', '#00ff00', '#36a2eb', '#ff0006', '#a020f0'
                ],
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10
            }]
        };
    };

    return (
        <div className="App">
            <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 mr-24">
                <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Student's Dashboard</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <Graph data={prepareChartData()} totalMarks={calculateTotalMarks()} />
                    <Form onAddData={handleAddData} />
                </div>
                {/* Render the dynamic Labels component */}
                <Labels data={data} />
            </div>
        </div>
    );
}
