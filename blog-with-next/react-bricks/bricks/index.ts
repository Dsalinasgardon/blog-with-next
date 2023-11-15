<<<<<<< HEAD
// index.ts
import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './Thumbnail'
import File from './File'
import Gallery from './Gallery'
=======
import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import reactBricksUITheme from './react-bricks-ui'
>>>>>>> 6a6e59f9f9a6c7f8c0cc23a7e6c4e5c572b25111

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
<<<<<<< HEAD
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail, File, Gallery], // Custom Bricks
=======
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
>>>>>>> 6a6e59f9f9a6c7f8c0cc23a7e6c4e5c572b25111
      },
    ],
  },
]

<<<<<<< HEAD
export default bricks 
=======
export default bricks
>>>>>>> 6a6e59f9f9a6c7f8c0cc23a7e6c4e5c572b25111
