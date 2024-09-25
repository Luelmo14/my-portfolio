import { useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../i18n";

const VALID_LANGUAGES = ["en", "es", "ca"];
const BASE_PATH = "/my-portfolio";

export const useLanguageRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const langCode = useMemo(() => location.pathname.split("/")[2], [location]);

  const handleLanguageChange = useCallback(
    (lang: string) => {
      if (VALID_LANGUAGES.includes(lang)) {
        const newPath = `${BASE_PATH}/${lang}${location.pathname.substring(BASE_PATH.length + 3)}`;
        navigate(newPath, { replace: true });
      }
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    if (VALID_LANGUAGES.includes(langCode)) {
      i18n.changeLanguage(langCode);
    } else {
      handleLanguageChange("en");
    }

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [langCode, handleLanguageChange]);

  const changeLanguage = useCallback((lang: string) => {
    if (VALID_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return { changeLanguage };
};
