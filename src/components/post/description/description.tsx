import { FC, PropsWithChildren } from 'react'

const PostDescription: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <div className="prose prose-lg md:prose-2xl max-w-none px-4 md:px-8 py-16">
        {children}
      </div>
    </div>
  )
}

export default PostDescription
