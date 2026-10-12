/**
 * CSS-only 3D wireframe globe: meridian rings rotated around the Y axis and
 * latitude rings tilted around X, spinning inside a preserve-3d stage.
 */
export function Globe3D({ className = "", tone = "brand" }: { className?: string; tone?: "brand" | "light" }) {
  const meridians = [0, 30, 60, 90, 120, 150];
  const latitudes = [-60, -30, 0, 30, 60];
  const color = tone === "light" ? "rgb(255 255 255 / 0.55)" : "rgb(49 87 209 / 0.45)";
  return (
    <div aria-hidden="true" className={`pointer-events-none [perspective:900px] ${className}`}>
      <div className="relative size-full [transform-style:preserve-3d] motion-safe:animate-[globe-spin_24s_linear_infinite]" style={{ transform: "rotateX(-18deg)" }}>
        {meridians.map((deg) => (
          <span
            key={`m${deg}`}
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: color, transform: `rotateY(${deg}deg)` }}
          />
        ))}
        {latitudes.map((lat) => {
          const scale = Math.cos((lat * Math.PI) / 180);
          const offset = Math.sin((lat * Math.PI) / 180) * 50;
          return (
            <span
              key={`l${lat}`}
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: color, transform: `translateY(${offset}%) rotateX(90deg) scale(${scale})` }}
            />
          );
        })}
        <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_6px_rgb(254_205_8/0.6)]" />
      </div>
    </div>
  );
}
