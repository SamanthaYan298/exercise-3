import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <h1>Header here</h1>
            <Link href='/'>Home</Link>
        </header>
    )
}