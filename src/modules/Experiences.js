import React from 'react'
import { skillLists } from '../components/SkillLists'

const Experiences = () => {

  let skillsLearns = skillLists.map((skill) =>{
    return(
      <div key={skill.id} className='skillcardImg'>
      <img className='skillImgs' src={skill.skillImg}  alt={skill.skill}/>
      <div className='captionName'>
            <p >{skill.skill}</p>
      </div>
    </div>
    )
  })
  return (
    <div>
        <div id='Experience' name="experiences" className='skillCotainer'>
         <div className='skillheading'>
            <h1>Skills/Experiences</h1>
         </div>
         <div className='skilltitle'>
            <p>These are the technologies I'have learnt and worked with.</p>
          </div>
         <div className='skillcard'>
            {skillsLearns}
         </div>
        </div>
    </div>
  )
}

export default Experiences