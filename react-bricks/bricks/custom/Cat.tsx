import React from 'react'
import { types } from 'react-bricks/frontend'

interface CatProps {
  id: string
  name: string
  description: string
  temperament: string
  imageUrl: string
}

const Cat: types.Brick<CatProps> = ({
  id,
  name,
  description,
  temperament,
  imageUrl,
}) => {
  if (!id || !name || !description || !temperament || !imageUrl) {
    return (
      <div className="text-center text-red-500 underline text-xl">
        Cat not found!
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4">
      <img src={imageUrl} className="mx-auto w-1/2 mb-4" />
  
      <h1 className="text-5xl font-extrabold text-center mb-6 mt-4">{name}</h1>
      <h2 className="text-xl  text-center mb-4 mt-4"> {description}</h2> 
      <h2 className="text-xl italic text-center mb-4 mt-4"> {temperament} </h2> 
    </div>
  )
}

Cat.schema = {
  name: 'cat',
  label: 'Cat',
  mapExternalDataToProps: (externalData, brickProps) => ({
    id: externalData.id,
    name: externalData.name,
    description: externalData.description,
    temperament: externalData.temperament,
    imageUrl: externalData.imageUrl, 
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Cat