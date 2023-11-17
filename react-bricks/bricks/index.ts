// index.ts
import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './Thumbnail'
import File from './File'
import Gallery from './Gallery'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail, File, Gallery], // Custom Bricks
      },
    ],
  },
]

export default bricks 
