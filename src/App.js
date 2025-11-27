import { useState } from 'react';
import './App.css';

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase();
}

function App() {
    const [color, setColor] = useState('#F4F4F4');
    const [count, setCount] = useState(0)

    const handleClick = () => {
        const newColor = getRandomHexColor();
        setColor(newColor);
        setCount(count + 1)
    };

    return (
        <div
            className="app"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            <div className="card" onClick={e => e.stopPropagation()}>
                <h1 className="title">Генератор цветового фона</h1>
                <p className="subtitle">
                    случайный цвет на каждый клик
                </p>

                <div className="preview" style={{ backgroundColor: color }}>
                    <span className="preview-label">Текущий цвет:</span>
                    <span className="preview-value">{color}</span>
                </div>

                <button className="btn" onClick={handleClick}>
                    Кликни меня
                </button>

                <p className="hint">
                    Было генераций: {count}
                </p>
            </div>
        </div>
    );
}

export default App;