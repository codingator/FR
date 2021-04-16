import Link from 'next/link'
import MPStyle from './more-post.module.css'
import ArrowButton from './arrow-button'

export function MorePost({ children }) {
  return (
    <div className={MPStyle.card}>
      {children}
    </div>
  )
}

export function LeftCard({
  postSlug,
  postTitle
}: {
  postSlug: string
  postTitle: string,
}) {
  return (
    <Link href={`/posts/${postSlug}`}>
      <a className={MPStyle.card_content}>
        <div className={MPStyle.card_left_mark}>
          <ArrowButton />
        </div>
        <div className={MPStyle.card_left}>
          <p>이전 이야기</p>
          <h3>{postTitle}</h3>
        </div>
      </a>
    </Link>
  )
}
export function RightCard({
  postSlug,
  postTitle
}: {
  postSlug: string
  postTitle: string,
}) {
  return (
    <Link href={`/posts/${postSlug}`}>
      <a className={MPStyle.card_content}>
        <div className={MPStyle.card_right}>
          <p>다음 이야기</p>
          <h3>{postTitle}</h3>
        </div>
        <div className={MPStyle.card_right_mark}>
          <ArrowButton />
        </div>
      </a>
    </Link>
  )
}