import { Link, useOutletContext } from 'react-router-dom';
import { GrLocationPin } from 'react-icons/gr';

import { DataList, OutletContext } from '../constants';

const InfoAboutMe = () => {
    const { language } = useOutletContext<OutletContext>();
    return (
        <div className="max-w-[90%] rounded-[10px] border-[1px] border-[rgb(39,39,42)] p-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[30px] font-bold">
                        {DataList.name[language]}
                    </h2>
                    <div className="flex items-center gap-2 text-[#9CA3AF]">
                        <GrLocationPin size={18} color="#9CA3AF" />
                        <p className="text-[17px] text-[#9CA3AF]">
                            {DataList.whereabouts[language]}
                        </p>
                    </div>
                </div>
                <ul className="flex gap-2">
                    {DataList.contactElements.map((elem) => (
                        <li
                            key={elem.name}
                            className="rounded-[10px] border-[1px] border-[rgb(39,39,42)] p-2"
                        >
                            <Link to={elem.to}>{elem.icon}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="mt-4 max-w-[800px] text-[17px]">
                {DataList.infoText[language]}
            </p>
        </div>
    );
};

export default InfoAboutMe;
