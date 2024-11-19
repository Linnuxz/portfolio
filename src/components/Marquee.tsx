import { DataList } from '../constants';

const Marquee = () => {
    return (
        <div className="mask-fade group flex max-w-[800px] space-x-16 overflow-hidden">
            <div className="animate-loop-scroll group-hover:paused flex space-x-16">
                {DataList.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="flex max-w-none text-white items-center gap-3 font-bold"
                    >
                        {skill.icon}
                        {skill.name}
                    </span>
                ))}
            </div>
            <div
                className="animate-loop-scroll group-hover:paused flex space-x-16"
                aria-hidden="false"
            >
                {DataList.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="flex max-w-none text-white items-center gap-3 font-bold"
                    >
                        {skill.icon}
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
