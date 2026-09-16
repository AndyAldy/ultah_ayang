import heroImg from '../assets/Ayang.jpg'; // Pastikan path & nama file sesuai

export default function PhotoCard() {
  return (
    <div className="animate-popup-slow bg-white/30 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 z-10 flex flex-col items-center mb-8">
      {/* Foto Utama */}
      <img 
        src={heroImg} 
        alt="Ulang Tahun" 
        className="w-64 h-64 object-cover rounded-xl shadow-inner mb-5" 
      />
       
      {/* Table di dalam area foto */}
      <table className="w-full text-center bg-white/60 rounded-lg overflow-hidden shadow-sm">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-bold text-pink-700 border-b border-pink-200">Untuk:</td>
            <td className="px-4 py-2 text-pink-900 border-b border-pink-200 font-semibold">Angel Cayang</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-pink-700">Dari:</td>
            <td className="px-4 py-2 text-pink-900 font-semibold">Andy cayang</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}