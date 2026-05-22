type ParticleFieldProps = {
  variant?: "dark" | "light";
};

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  top: `${8 + ((index * 17) % 78)}%`,
  left: `${4 + ((index * 23) % 92)}%`,
  size: 2 + (index % 4) * 2,
  delay: `${(index % 7) * 0.9}s`,
  duration: `${10 + (index % 5) * 2}s`,
}));

export function ParticleField({ variant = "dark" }: ParticleFieldProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`particle absolute rounded-full ${
            variant === "dark" ? "bg-white/18" : "bg-sky-400/18"
          }`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

