import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import languages from "@/constants/languagesData";
import { useLocation } from "react-router-dom";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const currentLang = i18n.language;

  return (
    <Select
      onValueChange={(value) => {
        const newPath = `/my-portfolio/${value}${location.pathname.substring("/my-portfolio".length + 3)}`;
        window.history.pushState({}, "", newPath);
        i18n.changeLanguage(value);
      }}
      defaultValue={currentLang}
    >
      <SelectTrigger className="border-0 shadow-none hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark">
        <Globe className="h-4 w-4" strokeWidth={1.7} />
      </SelectTrigger>
      <SelectContent className="rounded-xl border border-borderLight dark:border-0 bg-background/80 backdrop-blur-sm dark:bg-backgroundPrimaryDark/90 mt-2 right-10">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="cursor-pointer rounded-lg"
            aria-label={lang.name}
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
