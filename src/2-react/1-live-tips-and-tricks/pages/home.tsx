import { Nav, Hero, TipJsVar } from '../components';
import { icons } from '../theme/icons/tag';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
            <div className='tip-list'>
                <TipJsVar />
                <TipJsVar />
                <TipJsVar />
                <TipJsVar />
            </div>
        </section>
    );
}