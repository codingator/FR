import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getPreNextPostBySlug(slug, fields = []) {
  const posts = getAllPosts(['slug', 'title', 'date'])

  const items = {}
  // console.log(posts.slug.indexOf(slug));
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].slug == slug) {
      if (i == 0) { items['pre'] = posts[i + 1]; break} 
      else if (i == posts.length - 1) { items['next'] = posts[i - 1]; break }

      items['pre'] = posts[i + 1]
      items['next'] = posts[i - 1]
      break;
    }
  }

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
