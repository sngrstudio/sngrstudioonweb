const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/radenpioneer/image'
const SCREENSHOT_SERVICE_URL = 'https://snap.sngr.dev/image'

export const getScreenshot = (url, sizes = [1280, 720]) => {
  const baseUrl = SCREENSHOT_SERVICE_URL
  return encodeURIComponent(
    `${baseUrl}/${encodeURIComponent(url)}/${sizes.join(',')}`
  )
}

const getImageUrl = (url, options = []) => {
  const baseUrl = CLOUDINARY_BASE_URL
  return `${baseUrl}/fetch/${options.concat('q_auto').join(',')}/${url}`
}

export default getImageUrl
