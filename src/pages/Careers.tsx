import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileUp,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { images } from "@/data/images";
import { openPositions } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

// Preview configuration: set a title to true only when OCP confirms an opening.
const hiringStatus: Record<string, boolean> = {
  "Claims Support Specialist": true,
  "FNOL Intake Specialist": false,
  "Quality Assurance Auditor": true,
  "Customer Care Representative": false,
  "Back Office Analyst": false,
};

const roleDetails: Record<
  string,
  { summary: string; qualifications: string[] }
> = {
  "Claims Support Specialist": {
    summary:
      "Support claims teams with accurate file documentation, coordination, and day-to-day administrative tasks.",
    qualifications: [
      "Strong attention to detail",
      "Clear written and verbal communication",
      "Comfort working with digital systems",
    ],
  },
  "FNOL Intake Specialist": {
    summary:
      "Assist with first notice of loss intake, capture essential information, and support timely claim handoffs.",
    qualifications: [
      "Good listening and communication skills",
      "Accurate data entry",
      "Ability to follow structured procedures",
    ],
  },
  "Quality Assurance Auditor": {
    summary:
      "Review operational work for completeness, consistency, and alignment with documented quality standards.",
    qualifications: [
      "Analytical mindset",
      "Excellent attention to detail",
      "Ability to document clear feedback",
    ],
  },
  "Customer Care Representative": {
    summary:
      "Provide professional, helpful communication to customers throughout their service experience.",
    qualifications: [
      "Customer-focused communication",
      "Problem-solving skills",
      "Comfort using support tools",
    ],
  },
  "Back Office Analyst": {
    summary:
      "Help keep operational records, workflows, and administrative processes accurate and organized.",
    qualifications: [
      "Organizational skills",
      "Proficiency with everyday office tools",
      "Accuracy and reliability",
    ],
  },
};

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState("");
  const [cvName, setCvName] = useState("");
  const hasOpenRoles = openPositions.some(
    (position) => hiringStatus[position.title] === true,
  );

  const selectRole = (title: string) => {
    if (!hiringStatus[title]) return;
    setSelectedRole(title);
    document
      .getElementById("job-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Working at OCP — opening section */}
      <section
        id="content"
        className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white md:pb-28 md:pt-40"
      >
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-green/[0.06] blur-[110px]" />
        <div className="container-mw container-px relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Working at OCP
                </p>
              </div>
              <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Bring your best thinking.{" "}
                <span className="text-brand-blueLight">
                  We’ll help it grow.
                </span>
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                Our work is demanding, collaborative, and meaningful. We invest
                in the training, resources, and mentorship that help people
                build lasting careers in insurance operations.
              </p>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("open-positions")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-blueLight hover:text-brand-navy"
              >
                See Open Roles <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
            <div className="relative grid grid-cols-2 gap-4">
              <Reveal delay={0.08}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={images.team}
                    alt="OCP team"
                    className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] md:h-[440px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-sm font-bold text-white">
                    Our people
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="group relative mt-10 overflow-hidden rounded-2xl">
                  <img
                    src={images.development}
                    alt="OCP training session"
                    className="h-[340px] w-full object-cover object-[75%_center] transition-transform duration-700 group-hover:scale-[1.035] md:h-[440px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-sm font-bold text-white">
                    Professional development
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Positions: all roles shown, status clearly distinguished */}
      <section
        id="open-positions"
        className="relative scroll-mt-20 overflow-hidden bg-white py-20 md:py-28"
      >
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-blue/[0.035] blur-[100px]" />
        <div className="container-mw container-px relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brand-green" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Open Positions
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl">
              Build a career,{" "}
              <span className="text-brand-blue">not just a job.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-brand-navy/60">
              Join a collaborative team where learning, accountability, and
              professional development are part of the culture.
            </p>
            <p className="mt-4 text-xs text-brand-navy/45">
              Role descriptions and qualifications below are draft examples
              pending OCP approval.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5">
            {openPositions.map((position, index) => {
              const isOpen = hiringStatus[position.title] === true;
              const details = roleDetails[position.title];
              return (
                <Reveal
                  key={position.title}
                  delay={Math.min(index * 0.04, 0.2)}
                >
                  <article
                    className={`rounded-2xl border p-6 transition-all duration-300 md:p-8 ${isOpen ? "border-brand-blue/30 bg-white shadow-card" : "border-surface-200 bg-surface-50"}`}
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold text-brand-navy md:text-2xl">
                            {position.title}
                          </h3>
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${isOpen ? "bg-brand-green/15 text-green-700" : "bg-surface-200 text-brand-navy/50"}`}
                          >
                            {isOpen ? "Open Position" : "Not Hiring"}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-brand-navy/55">
                          <span className="inline-flex items-center gap-1.5">
                            <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-blue" />
                            {position.dept} · {position.type}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-brand-green" />
                            {position.location}
                          </span>
                        </div>
                        {details && (
                          <>
                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-brand-navy/65">
                              {details.summary}
                            </p>
                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy/70">
                              Suggested qualifications
                            </p>
                            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                              {details.qualifications.map((qualification) => (
                                <li
                                  key={qualification}
                                  className="flex items-start gap-2 text-sm text-brand-navy/60"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                                  {qualification}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <button
                        type="button"
                        disabled={!isOpen}
                        onClick={() => selectRole(position.title)}
                        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold ${isOpen ? "bg-brand-blue text-white transition-colors hover:bg-brand-navy" : "cursor-not-allowed border border-surface-200 bg-surface-200 text-brand-navy/35"}`}
                      >
                        {isOpen ? "Apply Now" : "Applications Closed"}
                        {isOpen && <ArrowRight className="h-4 w-4" />}
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          {!hasOpenRoles && (
            <p className="mt-8 rounded-xl border border-surface-200 bg-surface-50 px-5 py-4 text-sm text-brand-navy/60">
              There are no active vacancies at the moment. You can explore our
              roles here and check back for future opportunities.
            </p>
          )}
        </div>
      </section>

      {/* Form preview — no submission service connected */}
      <section
        id="job-application"
        className="relative scroll-mt-20 overflow-hidden bg-brand-navy py-20 md:py-28"
      >
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Application Form
                </p>
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Your next step starts here.
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                When positions become available, you’ll be able to apply
                directly through this form.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-9 rounded-3xl border border-surface-200 bg-white p-6 shadow-card md:p-10">
                <div className="mb-7 flex items-start gap-3 rounded-xl border border-brand-blue/15 bg-brand-blue/[0.05] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-sm font-bold text-brand-navy">
                      Design preview only
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-navy/60">
                      Applications are not being accepted through this form yet.
                      No information or CV will be sent or saved.
                    </p>
                  </div>
                </div>
                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <label className="block text-sm font-semibold text-brand-navy">
                    Full Name
                    <input
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand-blue"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-brand-navy">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand-blue"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-brand-navy">
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+383 ..."
                      className="mt-2 w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand-blue"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-brand-navy">
                    Position
                    <select
                      name="position"
                      value={selectedRole}
                      onChange={(event) => setSelectedRole(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand-blue"
                    >
                      <option value="">Select an open position</option>
                      {openPositions
                        .filter(
                          (position) => hiringStatus[position.title] === true,
                        )
                        .map((position) => (
                          <option key={position.title} value={position.title}>
                            {position.title}
                          </option>
                        ))}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-brand-navy sm:col-span-2">
                    Upload CV (PDF or DOCX)
                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-dashed border-surface-300 bg-surface-50 px-4 py-5">
                      <FileUp className="h-6 w-6 shrink-0 text-brand-blue" />
                      <input
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) =>
                          setCvName(event.target.files?.[0]?.name ?? "")
                        }
                        className="min-w-0 w-full text-xs text-brand-navy/65 file:mr-3 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white"
                      />
                    </div>
                    {cvName && (
                      <span className="mt-2 block text-xs font-normal text-brand-navy/50">
                        Selected: {cvName} (not uploaded)
                      </span>
                    )}
                  </label>
                  <label className="block text-sm font-semibold text-brand-navy sm:col-span-2">
                    Additional Message (Optional)
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us a little about yourself..."
                      className="mt-2 w-full resize-y rounded-xl border border-surface-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand-blue"
                    />
                  </label>
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-brand-navy/35 px-7 py-3.5 text-sm font-bold text-white"
                    >
                      Submit Application <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-brand-navy/45">
                      Submission is disabled until an application delivery
                      service is connected.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
