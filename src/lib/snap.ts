const getScreenshot = (url) => {
    const SCREENSHOT_SERVICE_URL = 'https://snap.sngr.dev/?w=1024&h=768&url='
    return SCREENSHOT_SERVICE_URL + url
}

const getSnap = (url, options = []) => {
    const CLOUDINARY_URL = 'https://res.cloudinary.com/radenpioneer/image/fetch'
    return CLOUDINARY_URL + `/${options.join(',') || 'f_auto,q_auto'}/` + encodeURIComponent(getScreenshot(`https://${url}`))
}

export default getSnap