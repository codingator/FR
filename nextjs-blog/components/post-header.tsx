import PHStyle from './post-header.module.css'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={PHStyle.date}>
        <DateFormatter dateString={date} />
      </div>
      <div>
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  )
}
