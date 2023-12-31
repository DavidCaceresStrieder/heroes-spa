import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const Hero = () => {

  const navitate = useNavigate();
  const { id } = useParams();

  const hero = useMemo(()=> getHeroById(id), [ id ]);

  if(!hero) Navigate("/marvel")

  const onNavigateBack = () => 
  {
    navitate(-1);
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={`/assets/heroes/${ id }.jpg` }
          alt={ hero.superhero } 
        />
      </div>
      <div className='col-8 animate__animated animate__fadeInRight'>
        <h3> { hero.superhero } </h3>
        <ul className='list-group list-group-flush'>

          <li className='list-group-item'>
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>

          <li className='list-group-item'>
            <b>Publisher: </b>
            {hero.publisher}
          </li>

          <li className='list-group-item'>
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>

        </ul>

        <h5 className='mt-3'> Characters </h5>
        <p> { hero.characters } </p>

        <button 
          className='btm btn-outline-primary'
          onClick={ onNavigateBack }
        >
          Regresar
        </button>


      </div>
    </div>
  )
}
