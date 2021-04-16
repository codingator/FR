import PTStyle from './post-title.module.css'
import utilStyle from '../styles/utils.module.css'

export default function PostTitle({ children }) {
  return (
    <h2 className={`${PTStyle.title} ${utilStyle.headingXl}`}>
      {children}
    </h2>
  )
}