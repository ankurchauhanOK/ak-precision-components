import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Contact
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Let&apos;s Build Something Better.
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Tell us about your requirements. We&apos;ll respond within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-light-sage focus:border-forest focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-light-sage focus:border-forest focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-light-sage focus:border-forest focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <div className="bg-warm-bg rounded-2xl p-6">
                  <h3 className="font-semibold text-deep-forest mb-2">
                    Request Manufacturing Quote
                  </h3>
                  <p className="text-sm text-sage mb-4">
                    Send us your drawings and specifications for a quick quote.
                  </p>
                  <Button href="mailto:info@akprecision.com" variant="primary">
                    Email Us
                  </Button>
                </div>
                <div className="bg-warm-bg rounded-2xl p-6">
                  <h3 className="font-semibold text-deep-forest mb-2">
                    Book Software Demo
                  </h3>
                  <p className="text-sm text-sage mb-4">
                    See our software in action with a personalized demo.
                  </p>
                  <Button href="mailto:info@akprecision.com" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}