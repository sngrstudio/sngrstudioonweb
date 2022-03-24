import { getAsset } from '@lib:assets'

const PEXELS_ENDPOINT = 'https://api.pexels.com/v1/search'
const PEXELS_API_KEY = import.meta.env.PEXELS_API_KEY || process.env.PEXELS_API_KEY

const getPexelsImages = async (query) => {
    const url = PEXELS_ENDPOINT + `?query=${query}&orientation=landscape&per_page=20`
    const result = await getAsset(url, {
        type: 'json',
        options: {
            headers: {
                'Authorization': PEXELS_API_KEY
            }
        }
    })

    return result.photos
}

export default getPexelsImages