const gql = async (query, variables={}) => {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    return data.json()
}

const GET_BLOG_POSTS = `
    query GetBlogPosts($page: Int!) {
        user(username: "sngrdev") {
            publication {
                posts(page: $page) {
                    title,
                    slug,
                    dateAdded,
                    brief
                }
            }
        }
    }
`

const GET_SINGLE_POST = `
    query GetSinglePost($slug: String!) {
        post(slug: $slug, hostname: "blog.sngr.dev") {
            title,
            slug,
            dateAdded,
            contentMarkdown
        }
    }
`

export const AllPosts = await gql(GET_BLOG_POSTS, { page: 0 }).then(result => result.data.user.publication.posts)
export const SinglePost = async (slug) => await gql(GET_SINGLE_POST, { slug }).then(result => result.data.post) 