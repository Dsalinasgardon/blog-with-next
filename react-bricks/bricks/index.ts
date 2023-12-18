// index.ts
import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './Thumbnail'
import File from './File'
import Gallery from './Gallery'
import Pokemon from './custom/Pokemon'
import Cat from './custom/Cat'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail, File, Gallery], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
      },
      {
        categoryName: 'Cats',
        bricks: [Cat], // External data Bricks
      },
    ],
  },
]

export default bricks 
