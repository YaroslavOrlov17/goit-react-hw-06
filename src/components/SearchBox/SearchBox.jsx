import s from "./SearchBox.module.css"
import { MdOutlineSearch } from "react-icons/md"

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.searchInputBox}>
      <div className={s.searchBox}>
        <input
          className={s.searchInput}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
          placeholder="Search contact..."
        />
        <MdOutlineSearch className={s.searchIcon} size="25" />
      </div>
    </div>
  )
}

export default SearchBox
