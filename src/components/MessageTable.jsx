export default function MessageTable() {
  return (
    <div className="z-10 bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-xl w-11/12 max-w-2xl border border-white/50">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="text-2xl text-fuchsia-900 font-extrabold border-b-2 border-fuchsia-400 pb-3 text-center">
              Happy Birthday! 🎈
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-4 text-fuchsia-950 leading-relaxed font-medium text-lg text-center">
              Selamat ulang tahun! Semoga hari-harimu selalu dipenuhi dengan kebahagiaan, 
              secantik warna barbie pink ini. Semoga semua doa, cita-cita, dan harapanmu terkabul tahun ini. 
              Terima kasih sudah lahir ke dunia! 🎉💖
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}