export const Forecast: React.FC = () => {
    return (
        <div className='forecast'>
            <div className='day sunny selected'>
                <p>Четверг</p>
                <span>25</span>
            </div>
            <div className='day cloudy'>
                <p>Пятница</p>
                <span>21</span>
            </div>
            <div className='day sunny'>
                <p>Суббота</p>
                <span>22</span>
            </div>
            <div className='day sunny'>
                <p>Воскресенье</p>
                <span>24</span>
            </div>
            <div className='day rainy'>
                <p>Понедельник</p>
                <span>23</span>
            </div>
            <div className='day cloudy'>
                <p>Вторник</p>
                <span>19</span>
            </div>
            <div className='day sunny'>
                <p>Среда</p>
                <span>22</span>
            </div>
        </div>
    );
}