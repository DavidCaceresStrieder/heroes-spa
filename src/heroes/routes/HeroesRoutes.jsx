import React from 'react'
import { Navbar } from '../../ui'

import { DCPage, Hero, MarvelPage, Search } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>

            <Routes>
                <Route path="/" element={<Navigate to="/marvel" />} />            

                <Route path="dc" element={<DCPage />} />
                <Route path="marvel" element={<MarvelPage />} />

                <Route path="hero/:id" element={<Hero />} />
                <Route path="search" element={<Search />} />
            </Routes>
        </div>
    </>
  )
}
