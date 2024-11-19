import React from 'react';
import { IoIosMail } from 'react-icons/io';
import {
    FaGithub,
    FaGitAlt,
    FaLinkedin,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaPython,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
    SiTypescript,
    SiVite,
    SiMysql,
    SiMongodb,
    SiNextdotjs,
    SiExpress,
} from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

export const DataList = {
    name: {
        english: 'Nikoloz Parkosadze',
        georgian: 'ნიკოლოზ ფარქოსაძე',
    },
    whereabouts: {
        english: 'Tbilisi, Georgia',
        georgian: 'თბილისი, საქართველო',
    },
    navElements: [
        {
            path: '/about',
            labels: { english: 'About', georgian: 'ჩემს შესახებ' },
        },
        {
            path: '/projects',
            labels: { english: 'Projects', georgian: 'პროექტები' },
        },
        {
            path: '/contact',
            labels: { english: 'Contact Me', georgian: 'დამიკავშირდით' },
        },
    ],
    contactElements: [
        {
            name: 'e-mail',
            to: 'mailto:nikaparkosadze4@gmail.com',
            icon: React.createElement(IoIosMail, { size: 30 }),
        },
        {
            name: 'github',
            to: 'https://github.com/Linnuxz',
            icon: React.createElement(FaGithub, { size: 30 }),
        },
        {
            name: 'linkedin',
            to: 'https://www.linkedin.com/in/nikoloz-parkosadze-35323b311/',
            icon: React.createElement(FaLinkedin, { size: 30 }),
        },
    ],
    infoText: {
        english: `I am a Front-End Developer and undergraduate computer science
        student at Caucasus University in Tbilisi, Georgia.`,
        georgian: `მე ვარ Front-End დეველოპერი და კავკასიის უნივერსიტეტის კომპიუტერული მეცნიერების ბაკალავრიატის სტუდენტი თბილისიდან.`,
    },
    skills: [
        {
            name: 'HTML',
            icon: React.createElement(FaHtml5, { size: 30 }),
        },
        {
            name: 'CSS',
            icon: React.createElement(FaCss3Alt, { size: 30 }),
        },
        {
            name: 'Javascript',
            icon: React.createElement(IoLogoJavascript, { size: 30 }),
        },
        {
            name: 'Typescript',
            icon: React.createElement(SiTypescript, { size: 30 }),
        },
        {
            name: 'Vite',
            icon: React.createElement(SiVite, { size: 30 }),
        },
        {
            name: 'React',
            icon: React.createElement(FaReact, { size: 30 }),
        },
        {
            name: 'TailwindCSS',
            icon: React.createElement(RiTailwindCssFill, { size: 30 }),
        },
        {
            name: 'MySQL',
            icon: React.createElement(SiMysql, { size: 30 }),
        },
        {
            name: 'MongoDB',
            icon: React.createElement(SiMongodb, { size: 30 }),
        },
        {
            name: 'Next.js',
            icon: React.createElement(SiNextdotjs, { size: 30 }),
        },
        {
            name: 'Git',
            icon: React.createElement(FaGitAlt, { size: 30 }),
        },
        {
            name: 'Express',
            icon: React.createElement(SiExpress, { size: 30 }),
        },
        {
            name: 'Python',
            icon: React.createElement(FaPython, { size: 30 }),
        },
    ],
};

export type Language = 'english' | 'georgian';

export interface OutletContext {
    language: Language;
}
