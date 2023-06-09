// import { useEffect } from 'react';
import './Hero.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Hero(/* { handleIsntHome, isntHome, setIsntHome } */) {
  const [bounce, setBounce] = useState({ github: '', linkedin: '' });
  /*   useEffect(() => {
    setIsntHome(true);
  }, []); */

  return (
    <section id='section__hero'>
      <div className='hero'>
        <div className='hero__header__conteiner'>
          <h1 className='hero__title'>Eugenio Giménez</h1>
          <p className='hero__header'>Web Developer</p>
          <div className='hero__links__container'>
            <Link
              className='link__my__github'
              to='https://github.com/eoGimenez'
              onMouseEnter={() => {
                setBounce({ ...bounce, github: ' fa-bounce' });
              }}
              onMouseLeave={() => setBounce({ ...bounce, github: ' ' })}
              target='_blank'
            >
              <i className={'fa-brands fa-github fa-xl' + bounce.github}></i>
            </Link>
            <Link
              className='link__linkedin'
              to='https://www.linkedin.com/in/eogimenez/'
              onMouseEnter={() => {
                setBounce({ ...bounce, linkedin: ' fa-bounce' });
              }}
              onMouseLeave={() => setBounce({ ...bounce, linkedin: ' ' })}
              target='_blank'
            >
              <i
                className={'fa-brands fa-linkedin fa-lg' + bounce.linkedin}
              ></i>{' '}
            </Link>
          </div>
        </div>
        <div className='img__conteiner'>
          <img
            className='img__me'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680779992/projects/eugenioPortfolio_k13tul.jpg'
            alt='Profile image of Eugenio Giménez'
          />
          <Link
            className='btn link__cv'
            to='https://drive.google.com/file/d/1tTCVzxgUsEMN4EIkMvtSrAdNZ2vAXoCJ/view?usp=share_link'
            target='_blank'
          >
            Mi CV
          </Link>
        </div>

        <div className='my__techs'>
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680621812/projects/javascript_swgid3.png'
            alt='JavaScript Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680622244/projects/nodeJS_kyl4vt.png'
            alt='NodeJS Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680622371/projects/expressJS_rv4kpr.png'
            alt='ExpressJS Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680622660/projects/ReactJS_e2qdv9.png'
            alt='ReactJS Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680622960/projects/css_pvrila.png'
            alt='CSS Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680623478/projects/html2_r2mwed.png'
            alt='HTML Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1680623722/projects/mongo_l30dil.png'
            alt='MongoDB Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1681410721/projects/python_da51lc.png'
            alt='Python Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1681580489/projects/django_ffi2sm.png'
            alt='Django Logo'
          />
          <img
            className='tech__logo'
            src='https://res.cloudinary.com/dbld4vcec/image/upload/v1684695770/fastAPI_kmh5ed.png'
            alt='FastAPI Logo'
          />
        </div>
      </div>
    </section>
  );
}
