import Image from '@11ty/eleventy-img'
import Cache from '@11ty/eleventy-fetch'

const getImage = async (url, widths = []) => {
    const result = await Image(url, {
        outputDir: './public/img/o/',
        urlPath: '/img/o/',
        widths: widths.concat([null]),
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