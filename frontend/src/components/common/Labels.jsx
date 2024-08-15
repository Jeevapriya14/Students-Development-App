import React from "react";

export default function Labels({ data }) {
    // Define colors and default data structure
    const defaultColors = {
        'Mark 1': '#f9c74f',
        'Mark 2': '#00ff00',
        'Mark 3': '#36a2eb',
        'Mark 4': '#ff0006',
        'Mark 5': '#a020f0'
    };

    // Map updated data
    const updatedData = Object.keys(defaultColors).map(mark => {
        const found = data.find(item => item.type === mark);
        return {
            type: mark,
            color: defaultColors[mark],
            percent: found ? found.mark : 0
        };
    });

    return (
        <>
            {updatedData.map((v, i) => (
                <LabelComponent key={i} data={v} />
            ))}
        </>
    );
}

function LabelComponent({ data }) {
    if (!data) return null;

    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? "#f9c74f" }}></div>
                <h3 className="text-md text-white">{data.type ?? ''}</h3>
            </div>
            <h3 className="font-bold text-white">{data.percent ?? 0}</h3>
        </div>
    );
}
