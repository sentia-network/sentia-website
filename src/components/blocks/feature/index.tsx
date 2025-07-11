import Icon from "@/components/icon";
import { Section as SectionType } from "@/types/blocks/section";

export default function Feature({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-(--breakpoint-md) flex-col items-center gap-2">
          <h2 className="mb-2 text-pretty text-3xl font-semibold lg:text-4xl leading-[1.2] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            {section.title}
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
            {section.description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {section.items?.map((item, i) => (
            <div key={i} className="flex flex-col">
              {item.icon && (
                <div className="mb-5 flex size-16 items-center justify-center rounded-full border border-primary">
                  <Icon name={item.icon} className="size-8 text-primary" />
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
