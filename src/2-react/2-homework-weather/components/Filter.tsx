export const Filter: React.FC = () => {
    return (
        <div className='filter'>
            <span className='checkbox'>Облачно</span>
            <span className='checkbox'>Солнечно</span>
            <p className='custom-input'>
                <label className='label'>Минимальная температура</label>
                <input className='input' type='number'></input>
            </p>
            <p className='custom-input'>
                <label className='label'>Максимальная температура</label>
                <input className='input' type='number'></input>
            </p>
            <button>Применить</button>
        </div>
    );
}