import { useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../i18n";

const VALID_LANGUAGES = ["en", "es", "ca"];
const BASE_PATH = "/my-portfolio";

export const useLanguageRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const langCode = useMemo(() => location.pathname.split("/")[2], [location]);

  useEffect(() => {
    if (VALID_LANGUAGES.includes(langCode)) {
      i18n.changeLanguage(langCode);
    } else {
      const newPath = `${BASE_PATH}/en${location.pathname.substring(BASE_PATH.length)}`;
      navigate(newPath, { replace: true });
    }
  }, [langCode, location.pathname, navigate]);

  const changeLanguage = (lang: string) => {
    if (VALID_LANGUAGES.includes(lang)) {
      const newPath = `${BASE_PATH}/${lang}${location.pathname.substring(BASE_PATH.length + 3)}`;
      navigate(newPath);
    }
  };

  return { changeLanguage };
};
