import { Nav, Hero, TipList } from '../components';
import { icons } from '../theme/icons/tag';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
            <TipList />
        </section>
    );
}