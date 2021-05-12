export const CurrentWeather: React.FC = () => {
    return (
        <div className='current-weather'>
            <div className='temperature'>25</div>
            <div className='meta'>
                <span className='rainy'>%50</span>
                <span className='humidity'>%50</span>
            </div>
        </div>
    );
}