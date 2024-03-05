import { useEffect, useState } from 'react';
import './message.css';

// assets from: https://icons8.com/illustrations/style--3d-casual-life
import userProfilePic from '../assets/icons/casual-life-3d-profile-pic.png';
import robotProfilePic from '../assets/icons/3d-casual-life-chatgpt.png';

function Message(props) {

  const [className, setClassName] = useState();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    setClassName(props.message.type == 'sent'? 'message-wrapper sent' : 'message-wrapper received');
    if (props.message.type === 'received'){
      setProfilePic(robotProfilePic)
    } else {
      setProfilePic(userProfilePic)
    }

  },[className])

  return (
    <div className={className}>
      <img src={profilePic} alt='Avatar picture'className='profile-pic'/>
      <div className="message-bubble">
        <p>{props.message.text}</p>
      </div>
    </div>
      
  )
}

export default Message