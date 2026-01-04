import styles from '../header/header.module.css'

export default function SearchBar() {
  return (
    <div
      className={styles.searchHeader}
      data-fls-dynamic=".bottom-header__container, 767,98"
    >
      <form action="#" method="post" name="search" id="search">
        <div className={styles.searchForm}>
          <input
            data-fls-input=""
            name="search"
            autoComplete="off"
            type="search"
            placeholder="Search"
            className={`${styles.input} ${styles.searchInput}`}
          />
          <button
            data-fls-button=""
            className={styles.buttonSearch}
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
