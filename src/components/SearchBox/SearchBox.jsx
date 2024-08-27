import css from "../SearchBox/SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.searchName}
      />
    </div>
  );
}

export default SearchBox;
