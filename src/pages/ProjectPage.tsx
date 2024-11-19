import { useParams } from 'react-router-dom';
const ProjectPage = () => {
    const params = useParams<{profileId: string}>();
    console.log(params);
    
    return <div>ProjectPage {params.profileId}</div>;
};

export default ProjectPage;
