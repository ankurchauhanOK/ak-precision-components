import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const jobs = [
  {
    title: "CNC Programmer",
    type: "Full-time",
    dept: "Manufacturing",
  },
  {
    title: "Software Developer",
    type: "Full-time",
    dept: "Software",
  },
  {
    title: "Quality Inspector",
    type: "Full-time",
    dept: "Manufacturing",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    dept: "Software",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Careers
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Join the Team
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5]">
              Help us build the future of manufacturing — in both physical and
              digital realms.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-4">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl border border-light-sage p-6 flex items-center justify-between hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-semibold text-deep-forest">{job.title}</h3>
                  <p className="text-sm text-sage">
                    {job.dept} · {job.type}
                  </p>
                </div>
                <Button variant="outline" className="text-sm px-4 py-2">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}