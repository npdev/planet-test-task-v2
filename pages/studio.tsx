'use client'

import {NextStudio} from 'next-sanity/studio'
import config from '@/studio/sanity.config'

// issue https://github.com/vercel/next.js/issues/48447
const StudioPage = () => {
  return <NextStudio config={config} />
}

export default StudioPage
