import css from "../SearchBox/SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
