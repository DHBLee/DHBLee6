import { React, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../projects.js';
import Button from './Button.jsx';
import Picture from './Picture';
import leftArrow from '../assets/images/icons/arrow-left.svg';
import rightArrow from '../assets/images/icons/arrow-right.svg';

const buttonStyling = ""

const ProjectDetail = ({padding}) => {
  const { projectId: urlProjectId } = useParams();
  const navigate = useNavigate();
  const [currentProjectId, setCurrentProjectId] = useState(urlProjectId);

  const currentProject = PROJECTS.find(p => p.id === currentProjectId);
  const currentIndex = PROJECTS.findIndex(p => p.id === currentProjectId);

  if (currentIndex === -1) return <div>Project not found</div>;

  const getPreviousProject = () => {
    const prevIndex = currentIndex === 0 ? PROJECTS.length - 1 : currentIndex - 1;
    return PROJECTS[prevIndex];
  };

  const getNextProject = () => {
    const nextIndex = currentIndex === PROJECTS.length - 1 ? 0 : currentIndex + 1;
    return PROJECTS[nextIndex];
  };

  const handleNavigation = (newProjectId) => {
    setCurrentProjectId(newProjectId);
    navigate(`/portfolio/${newProjectId}`, { state: { fromNavigation: true } });
    window.scrollTo({top: 0, behavior: 'smooth'
  })
  };


  return (
    <div className={padding}>
        <div className="my-10 md:mt-[94px] 1440:mb-[115px]">
            <Picture mobileImg={currentProject.heroImgMobile} tabletImg={currentProject.heroImgTablet} desktopImg={currentProject.heroImgDesktop}/>
        </div>
        <div className="flex flex-col 1440:flex-row 1440:items-start gap-12 1440:gap-[125px]">
            <div className="flex flex-row gap-8 border-t-1 border-b-1 border-LightGray py-6">
                <div className="grid gap-6">
                    <h1 className='heading2'>{currentProject.title}</h1>
                    <p className='md:hidden 1440:block body2'>{currentProject.description}</p>
                    <p className="text-Cyan font-semibold text-[13px]">Interaction Design / Front End Development HTML / CSS / JS</p>
                    <Button route="">
                        visit website
                    </Button>
                </div>
                <p className='w-[65%] hidden md:block 1440:hidden body2'>{currentProject.description}</p>
            </div>
            <div className="grid gap-10">
                <div className="grid gap-7">
                    <h3 className='heading3'>Project Background</h3>
                    <p className='body2'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
                </div>
                <div className="grid gap-10">
                    <h3 className="heading3">Static Previews</h3>
                    <div className="grid gap-8">
                        <Picture mobileImg={currentProject.previewImgMobile} tabletImg={currentProject.previewImgTablet} desktopImg={currentProject.previewImgDesktop}/>
                        <Picture mobileImg={currentProject.preview2ImgMobile} tabletImg={currentProject.preview2ImgTablet} desktopImg={currentProject.preview2ImgDesktop}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex border-t-1 border-b-1 border-LightGray my-16 md:my-20 1440:mt-16 1440:mb-[115px]">
            <button className="w-1/2 py-6 flex flex-col md:flex-row gap-4 items-start md:items-center border-r-1 border-LightGray" onClick={() => handleNavigation(getPreviousProject().id)}>
                <img src={leftArrow} alt="" />
                <div className="grid text-start">
                    <h3 className="heading3">
                        {getPreviousProject().title}
                    </h3>
                    <p className="body1 text-gray-400">Previous Project</p>
                </div>
            </button>
            <button className="w-1/2 py-6 flex flex-col md:flex-row-reverse gap-4 items-end md:items-center" onClick={() => handleNavigation(getNextProject().id)}>
                <img src={rightArrow} alt="" />
                <div className="grid text-end">
                    <h3 className="heading3">
                        {getNextProject().title}
                    </h3>    
                    <p className="body1 text-gray-400">Next Project</p>
                </div>
            </button>
        </div>
    </div>

  )
}

export default ProjectDetail