import { getAsset } from '@lib:assets'

const getVideosData = async (query) => {
    const result = await getAsset(`https://api.pexels.com/videos/search?query=${query}&per_page=25`, {
        type: 'json',
        options: {
            headers: {'Authorization': import.meta.env.PEXELS_API_KEY || process.env.PEXELS_API_KEY}
        }
    })

    return result.videos
}

const getVideos = async (query) => {
    const result = await getVideosData(query)
    return result
} 

export { getVideosData, getVideos }