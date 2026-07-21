export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[linear-gradient(180deg,#06111f_0%,#081323_100%)] px-6">
      <div className="flex flex-col items-center gap-5 text-center text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#1f5eff_0%,#35c4ff_48%,#4dd4a3_100%)] text-2xl font-bold shadow-[0_24px_60px_rgba(36,111,255,0.35)]">
          SA
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-sky-100/70">
            Scale Alpha
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Loading premium planning experience</h2>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="h-3 w-3 animate-bounce rounded-full bg-white/80"
              style={{ animationDelay: `${item * 0.12}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

