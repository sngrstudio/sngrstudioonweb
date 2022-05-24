const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/radenpioneer/image'

const getImageUrl = (url, options = ['q_auto']) => {
  const baseUrl = CLOUDINARY_BASE_URL
  return `${baseUrl}/fetch/${options.join(',')}/${url}`
}

export default getImageUrl
