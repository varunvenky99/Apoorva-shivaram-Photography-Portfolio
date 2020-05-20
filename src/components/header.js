import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.liTitle}>
            <Link className={headerStyles.title} to="/">
              Apoorva Shivaram Photography
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/chicago"
            >
              Chicago
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/San_diego"
            >
              San Diego
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/turkey"
            >
              Turkey
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/Saint_Paul"
            >
              Como Park,St.Paul
            </Link>
          </li>
          <li className={headerStyles.navAbt}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.navCnt}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.navCurrentItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
