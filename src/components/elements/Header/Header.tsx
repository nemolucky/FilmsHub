import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>🎬 FilmHub</div>
				<nav className={styles.nav}>
					<a href='#' className={styles.navLink}>
						Home
					</a>
					<a href='#' className={styles.navLink}>
						Films
					</a>
					<a href='#' className={styles.navLink}>
						Favorites
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Header
