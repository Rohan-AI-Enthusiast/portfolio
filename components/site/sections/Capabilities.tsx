export function Capabilities() {
  return (
    <section id="about" className="relative bg-[#f6f6f6]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10">
        <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <h3 className="text-[44px] font-extrabold leading-[1] tracking-tight text-neutral-900 md:text-[56px]">
              What I can do for you
            </h3>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
              I translate ambiguous problems into shippable plans, align stakeholders,
              and drive execution with clear metrics.
            </p>

            <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60">
              {[
                "AI product strategy and roadmap",
                "LLM workflows and evaluation design",
                "Experimentation, metrics, and iteration loops",
                "Go to market positioning for AI features",
              ].map((text) => (
                <div key={text} className="flex items-center justify-between px-6 py-5">
                  <div className="text-base font-medium text-neutral-900">{text}</div>
                  <div className="text-neutral-500">⌃</div>
                </div>
              ))}
            </div>
          </div>

          <div id="projects" className="pt-3">
            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              <div className="text-sm font-medium text-neutral-700">Next section</div>
              <div className="mt-2 text-neutral-600">
                Placeholder content. We will replace this with your case studies and real projects.
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-medium text-neutral-900">Case Study A</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Problem, approach, outcome.
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-medium text-neutral-900">Case Study B</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    LLM workflow, evaluation, impact.
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-medium text-neutral-900">Case Study C</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Automation, data pipeline, monitoring.
                  </div>
                </div>
              </div>

              <div id="contact" className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
                <div className="font-medium text-neutral-900">Contact</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Replace this with your email and links later.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blogs" className="mt-24 text-sm text-neutral-500">
          Blogs placeholder.
        </div>
      </div>
    </section>
  );
}

