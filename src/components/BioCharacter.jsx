import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const BioCharacter = () => {



  const {store,actions}=useContext(Context)


  return (
    <>
    <div className="row text-center">
    <h1 className='mt-5 py-5 text-white'>{store.bio.name}</h1>
    <p className='text-white'>{store.bio.height}</p>
    <p className='text-white'>{store.bio.mass}</p>
    <p className='text-white'>{store.bio.hair_color}</p>
    <p className='text-white'>{store.bio.skin_color}</p>
    <p className='text-white'>{store.bio.eye_color}</p>
    <p className='text-white'>{store.bio.birth_year}</p>
    <p className='text-white'>{store.bio.gender}</p>
    </div>
    </>
  )
}

export default BioCharacter