import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Sprinkles from './components/Sprinkles';
import PhotoCard from './components/PhotoCard';
import MessageTable from './components/MessageTable';
import PuzzleLayer from './components/PuzzleLayer';
import './App.css';

export default function App() {
  // step 0: Q1 | step 1: Q2 | step 2: Q3 | step 3: Halaman Utama Terbuka
  const [step, setStep] = useState(0);

  // Jalankan kembang api (fireworks love) HANYA saat mencapai step 3
  useEffect(() => {
    if (step === 3) {
      const duration = 4 * 1000; // Durasi kembang api 4 detik
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
      
      // Konfigurasi path SVG berbentuk Hati (Love)
      const heart = confetti.shapeFromPath({
        path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
        matrix: [0.0333, 0, 0, 0.0333, -5.566, -5.566]
      });

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Tembakan dari kiri layar
        confetti(Object.assign({}, defaults, { 
          particleCount,
          origin: { x: Math.random() * 0.2 + 0.1, y: Math.random() * 0.2 + 0.2 },
          shapes: [heart],
          colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585'] // Warna pink gradasi
        }));
        // Tembakan dari kanan layar
        confetti(Object.assign({}, defaults, { 
          particleCount, 
          origin: { x: Math.random() * 0.2 + 0.7, y: Math.random() * 0.2 + 0.2 },
          shapes: [heart],
          colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585']
        }));
      }, 250);
    }
  }, [step]);

  // Fungsi penentu warna background berdasarkan level pertanyaan
  const getBgClass = () => {
    if (step === 0) return 'bg-pink-950'; // Pink sangat gelap (Q1)
    if (step === 1) return 'bg-pink-800'; // Agak terang (Q2)
    if (step === 2) return 'bg-pink-600'; // Mendekati warna utama (Q3)
    return 'bg-gradient-to-br from-pink-300 via-pink-400 to-fuchsia-500'; // Warna halaman utama
  };

  return (
    // duration-1000 akan membuat perpindahan warna background sangat halus (1 detik)
    <div className={`min-h-screen relative flex flex-col items-center justify-center py-10 overflow-hidden transition-colors duration-1000 ${getBgClass()}`}>
      
      {step < 3 ? (
        // Render Teka-Teki jika belum mencapai halaman utama
        <PuzzleLayer step={step} setStep={setStep} />
      ) : (
        // Render Desain Ulang Tahun (semua komponen sebelumnya)
        <>
          <Sprinkles />
          <PhotoCard />
          <MessageTable />
        </>
      )}

    </div>
  );
}