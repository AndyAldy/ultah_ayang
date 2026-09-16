import { useState } from 'react';

export default function PuzzleLayer({ step, setStep }) {
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
  const [brokenHearts, setBrokenHearts] = useState([]);

  // Daftar pertanyaan
  const questions = [
    "Kamu sayang gak sama aku?",
    "Cinta sama aku??",
    "Yakin?"
  ];

  const handleYes = () => {
    // Lanjut ke pertanyaan berikutnya
    setStep((prev) => prev + 1);
    setNoBtnPos({ x: 0, y: 0 }); // Reset posisi tombol 'Tidak'
  };

  const handleNo = () => {
    // Pindahkan tombol 'Tidak' ke posisi random secara vertikal & horizontal
    const randomX = Math.floor(Math.random() * 250) - 125;
    const randomY = Math.floor(Math.random() * 250) - 125;
    setNoBtnPos({ x: randomX, y: randomY });

    // Tambahkan 1 broken heart di posisi acak layar
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // Muncul antara 10% - 90% lebar layar
      y: Math.random() * 80 + 10, // Muncul antara 10% - 90% tinggi layar
    };
    setBrokenHearts((prev) => [...prev, newHeart]);
  };

  return (
    <>
      {/* Layer Broken Hearts yang terus bertambah */}
      {brokenHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-5xl animate-popup-slow pointer-events-none z-40"
          style={{ top: `${heart.y}%`, left: `${heart.x}%` }}
        >
          💔
        </div>
      ))}

      {/* Kotak Pertanyaan 
          Note: Menggunakan trik 'key={step}' agar React melakukan render ulang div ini 
          setiap kali pertanyaan berubah, sehingga animasi 'popup' terpicu kembali! 
      */}
      <div 
        key={step} 
        className="z-50 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30 text-center max-w-sm w-11/12 mx-auto animate-popup-slow"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-10 drop-shadow-lg">
          {questions[step]}
        </h2>

{/* Posisi dinamis: Jika step 2 (Q3) maka di tengah, jika bukan maka di kiri tapi diberi jarak (pl-12) */}
        <div className={`flex items-center h-12 relative w-full ${step === 2 ? 'justify-center' : 'justify-start pl-12'}`}>
          <button
            onClick={handleYes}
            className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-8 rounded-full shadow-lg transform transition hover:scale-110 active:scale-95 z-50"
          >
            Iya
          </button>

          {/* Tombol 'Tidak' hanya muncul di pertanyaan 1 dan 2 */}
          {step < 2 && (
            <button
              onMouseEnter={handleNo}
              onClick={handleNo}
              style={{ transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)` }}
              // Menggunakan left-40 agar posisinya pas di sebelah kanan tombol 'Iya' sebelum lari
              className="bg-gray-500/80 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-200 ease-out z-40 absolute left-40"
            >
              Tidak
            </button>
          )}
        </div>
      </div>
    </>
  );
}