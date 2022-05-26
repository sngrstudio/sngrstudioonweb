import { FC } from 'react'
import getImageUrl, { getScreenshot } from '@lib/image'

interface IPostScreenshots {
  items: any
  mobile?: boolean
}

const PostScreenshots: FC<IPostScreenshots> = ({ items, mobile = false }) => {
  return (
    <div
      className={`grid ${
        mobile ? 'grid-cols-2 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'
      } gap-10 max-w-screen-xl mx-auto`}
    >
      {items.map((item, i) => {
        const url = new URL(item.url)
        const imgOptions = mobile ? ['w_393,h_851'] : ['w_640,h_360']
        const imgSizes = mobile ? [393, 851] : [1280, 720]
        return (
          <div
            className={`flex flex-col gap-2 ${
              i === 0 && !mobile && 'md:col-span-2'
            }`}
            key={url.hostname + url.pathname}
          >
            <div className={`card`}>
              <figure>
                <img
                  src={getImageUrl(
                    getScreenshot(url.hostname + url.pathname, imgSizes),
                    imgOptions.concat('f_jpg')
                  )}
                  width={mobile ? 640 : 393}
                  height={mobile ? 360 : 851}
                  alt={item.title}
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-3xl text-base-100">
                {item.title}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostScreenshots
