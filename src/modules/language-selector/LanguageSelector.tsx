import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { updateDocumentTitle } from "@/i18n";
import languages from "@/constants/languagesData";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    updateDocumentTitle();
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={i18n.language}>
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
