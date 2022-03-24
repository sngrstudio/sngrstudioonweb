import Image from '@11ty/eleventy-img'
import Cache from '@11ty/eleventy-fetch'

const getImage = async (url, {widths = []}) => {
    const result = await Image(url, {
        outputDir: './public/img/_o/',
        urlPath: '/img/_o/',
        widths: widths.length === 0 ? [null] : widths,
        formats: ['avif', 'webp', 'jpeg']
    })

    return result
}

const getAsset = async (url, {type, duration = '30d', options = {}}) => {
    const result = await Cache(url, {
        type,
        duration,
        fetchOptions: options
    })

    return result
}

export { getImage, getAsset }