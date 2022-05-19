const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/radenpioneer/image'

const getImageUrl = (url) => {
  const baseUrl = CLOUDINARY_BASE_URL
  return `${baseUrl}/fetch/q_auto,f_auto/${url}`
}

export default getImageUrl