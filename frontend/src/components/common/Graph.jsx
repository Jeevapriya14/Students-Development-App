import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);

export default function Graph({ data, totalMarks }) {
    return (
        <div className='flex justify-content max-w-xs mx-auto'>
            <div className='item'>
                <div className='chart relative'>
                    <Doughnut data={data} options={{ cutout: 115 }} />
                    <h3 className='mb-4 text-white font-bold title'>
                        RESULT
                        <span className='block text-3xl text-emerald-400'>{totalMarks}</span>
                    </h3>
                </div>
                
            </div>
        </div>
    );
}
