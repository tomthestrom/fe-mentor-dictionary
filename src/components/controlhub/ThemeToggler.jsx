import Moon from "../svg/Moon"

function ThemeToggler() {
  return (
    <form className="theme-toggler">
        <input id="theme-toggler" className="theme-toggler__checkbox" aria-label="theme switcher" type="checkbox" name="theme-toggle"/>
        <label htmlFor="theme-toggler" className="theme-toggler__moon"><Moon /></label>
    </form>
  )
}
export default ThemeToggler