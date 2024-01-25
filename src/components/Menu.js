import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants/constants";
import { useTranslation } from "react-i18next";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
const { i18n, t } = useTranslation();

const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className={isActive} to="/">
            {t("home")}
        </NavLink>
        <NavLink className={isActive} to="/about">
            {t("about")}
        </NavLink>
      </div>

      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </nav>
  );
};