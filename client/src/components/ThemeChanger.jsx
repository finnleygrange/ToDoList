function ThemeChanger({ toggleTheme, isDarkTheme }) {
  function HandleToggleTheme() {
    toggleTheme();
  }

  return (
    <>
      <div className="mt-2 d-flex justify-content-end">
        <button
          type="button"
          className={`btn border ${isDarkTheme ? "btn-dark" : "btn-light"}`}
          onClick={HandleToggleTheme}
        >
          {isDarkTheme ? (
            <i class="fa-solid fa-moon" />
          ) : (
            <i class="fa-solid fa-sun" />
          )}
        </button>
      </div>
    </>
  );
}

export default ThemeChanger;
