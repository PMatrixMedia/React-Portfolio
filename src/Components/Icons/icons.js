import react from 'react';
import image from './avatar.jpg';

class Icons extends React.Component{
    render(){
      return(
        <img className='profile-image' alt='icon' src={image}/>
    );
    }
}
export default Icons;