import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const About = () => {
  const { t } = useTranslation();
  const paragraph1 = t("about.paragraph1");

  const isCatalanOrSpanish = i18n.language === "ca" || i18n.language === "es";

  return (
    <section id="about" className="py-10">
      <h2 className="text-2xl font-semibold mb-2">{t("about.title")}</h2>
      <div className="opacity-90">
        <p className="space-y-4">
          {isCatalanOrSpanish ? (
            <>
              {paragraph1.split(" responsive")[0]}
              <em> responsive</em>
              {paragraph1.split(" responsive")[1]}
            </>
          ) : (
            paragraph1
          )}
        </p>
        <p>{t("about.paragraph2")}</p>
      </div>
    </section>
  );
};

export default About;
