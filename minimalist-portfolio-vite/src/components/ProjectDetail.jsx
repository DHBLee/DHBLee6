import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../projects.js';
import Button from './Button.jsx';
import Picture from './Picture';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find(p => p.id === projectId);
  
  const previousProject = project === 0 ? PROJECTS.length - 1 : project - 1; 
  const nextProject =  project === PROJECTS.length - 1 ? 0 : project + 1;
  if (!project) return <div>Project not found</div>

  return (
    <>
        <Picture mobileImg={project.heroImgMobile} tabletImg={project.heroImgTablet} desktopImg={project.heroImgDesktop}/>
        <div>
            <h1 className='heading2'>{project.title}</h1>
            <p className='body2'>{project.description}</p>
            <p>Interaction Design/Front End Development HTML/CSS/JS</p>
            <Button route="">
                visit website
            </Button>
        </div>
        <div>
            <h3 className='heading3'>Project Background</h3>
            <p className='body2'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        </div>
        <div>
            <h3 className="heading3">Static Previews</h3>
            <div>
                <Picture mobileImg={project.previewImgMobile} tabletImg={project.previewImgTablet} desktopImg={project.previewImgDesktop}/>
                <Picture mobileImg={project.preview2ImgMobile} tabletImg={project.preview2ImgTablet} desktopImg={project.preview2ImgDesktop}/>
            </div>
        </div>
        <div>
            <Link>
                
            </Link>
        </div>
    </>

  )
}

export default ProjectDetail