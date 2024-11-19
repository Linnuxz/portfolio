import { useOutletContext } from 'react-router-dom';
import InfoAboutMe from '../components/InfoAboutMe';
import Marquee from '../components/Marquee';
import { OutletContext } from '../constants';

const HomePage = () => {
    const { language } = useOutletContext<OutletContext>();

    return (
        <div className="flex flex-col items-center justify-center gap-[40px]">
            <InfoAboutMe />
            <div className="flex max-w-[90%] flex-col gap-4">
                <h2 className="text-[40px] font-bold">
                    {language === 'english' ? 'What I work with' : 'რა ტექნოლოგიებს ვიყენებ'}
                </h2>
                <Marquee />
            </div>
        </div>
    );
};

export default HomePage;
