import { steps } from "@/_data/home";
import { HowItWorksStepType } from "@/app/types/home";
import Image from "next/image";



function TimelineItem({
  step,
  isLast,
}: {
  step: HowItWorksStepType;
  isLast: boolean;
}) {
  return (
    <li className="relative flex gap-6">
      <div className="relative mt-1 flex w-8 flex-col items-center">
        <span
          className="h-8 w-8 rounded-full bg-white "
          aria-hidden="true"
        />
        {!isLast ? (
          <span
            className="mt-2 h-[50%] w-px bg-white"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="pb-8 pt-1">
        <h3 className="text-base font-semibold text-(--color-white)">{step.title}</h3>
        <p className=" text-sm leading-6 text-zinc-300">
          {step.description}
        </p>
      </div>
    </li>
  );
}

interface HowItWorksSectionProps {
  title?: string;
}

export default function HowItWorksSection({ title }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="bg-(--color-black)">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        {/* Left: ring background + mockup */}
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/ring_circle.svg"
            alt=""
            width={900}
            height={900}
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[120%] -translate-x-1/2 -translate-y-1/2 select-none opacity-90"
            priority
          />
          <div className="relative mx-auto w-[65%]">
            <Image
              src="/images/how-it-work.png"
              alt="How it works"
              width={750}
              height={1400}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        {/* Right: content */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-(--color-white) md:text-4xl">
            {title || "How does this app work?"}
          </h2>

          <ul className="mt-8">
            {steps.map((step, idx) => (
              <TimelineItem
                key={step.title}
                step={step}
                isLast={idx === steps.length - 1}
              />
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="https://apps.apple.com/sa/app/universal-tv-remote-control/id1492122256" className="inline-flex" target="_blank">
              <Image
                src="/images/app-store-white.png"
                alt="Available on the App Store"
                width={170}
                height={52}
                className="h-auto w-[160px]"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=codematics.universal.tv.remote.control" className="inline-flex" target="_blank">
              <Image
                src="/images/play-store-white.png"
                alt="Available on Google Play"
                width={190}
                height={52}
                className="h-auto w-[160px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}