import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import NextLink from './NextLink'
import bricks from './bricks'
import pageTypes from './pageTypes'

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  bricks,
  pageTypes,
  customFields: [],
  logo: '/logo.svg',
  loginUI: {},
  contentClassName: '',
  //defaultTheme: "",
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  previewPath: '/preview',
  // getAdminMenu: () => [],
  isDarkColorMode: false,
  toggleColorMode: () => {},
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: "Smartphone" },],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  blockIconsPosition: types.BlockIconsPosition.OutsideBlock,
  enableUnsplash: true,
  unsplashApiKey: '',
  enablePreviewImage: true,
  enableDefaultEmbedBrick: true,
  permissions: {
    canAddPage: (user, pageType) => {
      // Only 'blog_editor' can add 'blog' pages
      if (user?.customRole?.id === 'blog_editor' && pageType !== 'blog') {
        return false
      }
      return true
    },
    canEditPage: (user, page) => {
      // 'translator_fr' can only edit pages in 'Draft' or 'Pending Approval' state
      if (
        user?.customRole?.id === 'translator_fr' &&
        page.status === 'Published'
      ) {
        return false
      }
      return true
    },
    canPublishPage: (user, page) => {
      // Only 'blog_editor' can publish pages
      if (user?.customRole?.id !== 'blog_editor') {
        return false
      }
      return true
    },
    canDeletePage: (user, pageType) => {
      // 'translator_fr' cannot delete any page
      if (user?.customRole?.id === 'translator_fr') {
        return false
      }
      return true
    },
  },
}
export default config
