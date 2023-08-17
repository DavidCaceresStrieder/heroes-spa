import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const heroImage = `/assets/heroes/${id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>

                    <div className="col-4">
                        <img src={ heroImage } alt={ superhero } className='card-img' />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <div className=' card-title'> { superhero } </div>
                            <hr /> 
                            <div className=' card-text'> { alter_ego } </div>
                            <p>{ characters }</p>
                            <hr />

                            <Link to={`/hero/${id}`} >
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
