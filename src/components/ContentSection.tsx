import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "accent";
}

export const ContentSection = ({ id, title, subtitle, children, variant = "default" }: ContentSectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${variant === "accent" ? "bg-secondary/30" : ""}`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        <div className="prose prose-lg prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};
