export default function Sprinkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sprinkle Kiri */}
      <div className="absolute left-4 top-10 text-5xl animate-bounce">✨</div>
      <div className="absolute left-10 top-40 text-4xl animate-pulse">💖</div>
      <div className="absolute left-6 bottom-32 text-5xl">🎉</div>
      <div className="absolute left-16 bottom-10 text-3xl animate-bounce">🌸</div>

      {/* Sprinkle Kanan */}
      <div className="absolute right-4 top-20 text-5xl animate-pulse">🌸</div>
      <div className="absolute right-10 top-60 text-4xl animate-bounce">🎊</div>
      <div className="absolute right-8 bottom-40 text-5xl">✨</div>
      <div className="absolute right-12 bottom-12 text-4xl">🎂</div>
    </div>
  );
}