import { contactContent, email } from "@/lib/portfolio-config";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
  >
    <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.89 9.89 0 0 0 4.83 1.24h.01c5.49 0 9.94-4.45 9.95-9.94A9.9 9.9 0 0 0 12.04 2Zm0 18.07h-.01a8.1 8.1 0 0 1-4.12-1.12l-.3-.18-3.09.81.83-3.01-.2-.31a8.08 8.08 0 0 1-1.24-4.32 8.13 8.13 0 1 1 8.13 8.13Zm4.46-6.1c-.24-.12-1.4-.7-1.62-.78-.22-.08-.37-.12-.53.12-.16.23-.61.77-.75.92-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.45-.38-.39-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.4-.58 1.6-1.14.2-.56.2-1.03.14-1.14-.06-.1-.21-.16-.45-.28Z" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={className}
  >
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Contact = () => (
  <section id="contact" className="mx-auto max-w-[900px] py-16 md:py-20 lg:py-24">
    <h2 className="numbered-heading">{contactContent.heading}</h2>

    <div className="mx-auto mb-14 max-w-[600px] text-center md:mb-24">
      <h3 className="text-[clamp(40px,5vw,60px)] font-semibold leading-none text-[color:var(--lightest-slate)]">
        {contactContent.title}
      </h3>
      <p className="mx-auto mt-5 max-w-xl text-[color:var(--light-slate)]">{contactContent.description}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[4px_4px_0_0_var(--blue)]"
        >
          <a href={contactContent.whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-4" />
            {contactContent.chatButtonLabel}
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-[color:var(--blue)] bg-transparent font-mono text-[color:var(--blue)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[color:var(--blue)]/10 hover:text-[color:var(--blue)] hover:shadow-[4px_4px_0_0_var(--blue)]"
        >
          <a href={`mailto:${email}`}>
            <EmailIcon className="size-4" />
            {contactContent.emailButtonLabel}
          </a>
        </Button>
      </div>
    </div>
  </section>
);
