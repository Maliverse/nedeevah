import './header.css';
//import headerImage from '../../assets/x-9015bw.jpg'

const Header = () => {
    return(
        <div className='header__container'>
            <div className='header__background-image kenburns-bottom '>
            </div>
            <div className='header__container-text'>
            <h1 className='header__title'>Nedeevah Foundation</h1>
            <p>A future, full of hope.</p>
            <div>

               <div className='buttons'>
               </div>
            <button>Volunteer</button>
            <button className='donate__button'>Donate</button>
            </div>
               </div> 
              
           
        </div>
    )
}
export default Header