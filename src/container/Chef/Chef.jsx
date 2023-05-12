import React from 'react';
import { images }from '../../constants';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Chef.css';

const Chef = () => {
  const navigate = useNavigate();
return (
  <div className='body_app app_landing app__wrapper section__padding' id='home'>
    
   <div className='app_landing_info'>
   <h1 className='app_landing_text2'>At Avril, we believe that creativity knows no bounds. We created a platform
 to facilitate connections between companies of all sizes and creatives around 
the world because of this. We have a network of talented people who are prepared
 to take on your project, whether you're looking for a graphic designer, a writer, 
a photographer, or any other kind of creative professional.
</h1>
<div className="my-btns">
<Button className='my_btn' style={{cursor:'pointer'}}>Hire creatives</Button>
<Button className='my__btn1' style={{cursor:'pointer'}}>Join creatives</Button>

</div>
  </div>

   </div>

);
};
  

export default Chef;
