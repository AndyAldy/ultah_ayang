// src/App.jsx
import Sprinkles from './components/sprinkles';
import PhotoCard from './components/PhotoCard';
import MessageTable from './components/MessageTable';
import './App.css'; // Opsional jika kamu butuh styling ekstra dari file css

export default function App() {
  return (
    // Background gradient pink ke fuchsia
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-400 to-fuchsia-500 relative flex flex-col items-center justify-center py-10 overflow-x-hidden">
      
      {/* Efek hiasan ulang tahun */}
      <Sprinkles />

      {/* Konten Utama */}
      <PhotoCard />
      <MessageTable />
      
    </div>
  );
}