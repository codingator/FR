import Link from 'next/link'
import Container from './container'
import { SocialIcon } from 'react-social-icons'
import headerStyle from './header.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Header() {
  return (
    <header>
      <Container>
        <h1 className={headerStyle.title}>
          <Link href="/">
            <a>DevZ</a>
          </Link>
        </h1>
        <hr className={headerStyle.divider} />
        <ul className={headerStyle.icons}>
          <li>
            <SocialIcon url="https://github.com/codingator" network="github" style={{ height: 32, width: 32 }} bgColor="#adb5bd" />
          </li>
          <li>
            <SocialIcon url="https://devz.co.kr/" network="rss" style={{ height: 32, width: 32 }} bgColor="#adb5bd" label="Portfolio" />
          </li>
          <li>
            <SocialIcon url="mailto:dev.jaehyeon.lee@gmail.com" network="email" style={{ height: 32, width: 32 }} bgColor="#adb5bd" />
          </li>
        </ul>
      </Container>
    </header>
  )
}
