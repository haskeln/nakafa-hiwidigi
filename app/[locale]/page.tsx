import { SearchBar } from "@/components/sidebar/search-bar";
import { buttonVariants } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations("Home");

  setRequestLocale(locale);

  return (
    <div
      data-pagefind-ignore
      className="relative flex h-[calc(100dvh-4rem)] items-center justify-center md:h-dvh"
    >
      <Particles className="pointer-events-none absolute inset-0 opacity-50" />
      <div className="mx-auto w-full max-w-xl px-4">
        <div className="relative flex h-full flex-col">
          <h1 className="mb-8 font-medium text-4xl leading-none tracking-tighter md:text-center">
            {t("title")}
          </h1>
          <SearchBar
            forceOpen
            className="h-12 rounded-xl border-primary/10 sm:w-full"
          />

          <a
            href="https://github.com/nabilfatih/nakafa.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-6 w-fit md:mx-auto"
            )}
          >
            {t("contribute")}
          </a>
        </div>
      </div>
    </div>
  );
}
