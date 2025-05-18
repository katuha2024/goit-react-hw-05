import myStyles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
const Search = ({ onSubmit, onChange, query }) => {
  return (
    <form className={myStyles.form} onSubmit={onSubmit}>
      <input
        className={myStyles.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        value={query}
        onChange={onChange}
      />
      <button className={myStyles.btn} type="submit">
        <FcSearch  size="16px" />
      </button>
    </form>
  );
};
export default Search;