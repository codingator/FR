import Link from 'next/link'
import Container from './container'
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
      </Container>
    </header>
  )
}
