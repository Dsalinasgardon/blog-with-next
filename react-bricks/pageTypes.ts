import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    excludedBlockTypes: ['pokemon'],
  },
  {
    name: 'blog',
    pluralName: 'Blog',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    allowedBlockTypes: [
      'title',
      'paragraph',
      'big-image',
      'video',
      'code',
      'tweet',
      'tweet-light',
      'blog-title',
      'newsletter-subscribe',
    ],
    excludedBlockTypes: ['pokemon'],
  },
  {
    name: 'pokemon',
    pluralName: 'pokemon',
    getExternalData: (page) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${page.slug}`)
        .then((response) => response.json())
        .then((data) => ({
          ...data,
          imageUrl: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`,
        }))
        .catch((error) => {
          console.log(error)
          return {}
        }),
  },
  //cat page type
  {
    name: 'cat',
    pluralName: 'cats',
    getExternalData: (page) =>
      fetch(`https://api.thecatapi.com/v1/breeds/search?q=${page.slug}`)
        .then((response) => response.json())
        .then((data) => {
          if (data[0] && data[0].reference_image_id) {
            return {
              ...data[0],
              imageUrl: `https://cdn2.thecatapi.com/images/${data[0].reference_image_id}.jpg`,
            };
          } else {
            throw new Error('Cat not found');
          }
        })
        .catch((error) => {
          console.log(error);
          return {};
        }),
  },
  {
    name: 'layout',
    pluralName: 'layout',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
    excludedBlockTypes: ['pokemon'],
  },
]

export default pageTypes
