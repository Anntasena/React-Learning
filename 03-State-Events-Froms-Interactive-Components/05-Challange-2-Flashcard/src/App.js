import { useState } from "react";

const questions = [
  {
    id: 1564,
    question: "Apa itu DOM dalam pengembangan web?",
    answer:
      "Document Object Model, yang merepresentasikan struktur HTML halaman sebagai pohon objek.",
  },
  {
    id: 2783,
    question: "Apa yang dimaksud dengan responsive design?",
    answer:
      "Desain yang bisa menyesuaikan tampilan sesuai dengan ukuran layar perangkat.",
  },
  {
    id: 3952,
    question: "Apa kegunaan Flexbox dalam CSS?",
    answer:
      "Flexbox digunakan untuk membuat layout yang fleksibel dan dapat menyesuaikan dirinya secara responsif.",
  },
  {
    id: 4537,
    question: "Apa perbedaan antara var, let, dan const dalam JavaScript?",
    answer:
      "Var memiliki fungsi cakupan, sedangkan let dan const memiliki cakupan blok. Const tidak dapat diubah setelah diinisialisasi.",
  },
  {
    id: 5198,
    question: "Apa itu Event Bubbling dalam JavaScript?",
    answer:
      "Proses di mana event pada elemen terdalam memicu event pada elemen induknya.",
  },
  {
    id: 6294,
    question: "Apa itu async dan await dalam JavaScript?",
    answer:
      "Async digunakan untuk mendefinisikan fungsi asinkron, sedangkan await menunggu eksekusi fungsi asinkron selesai.",
  },
  {
    id: 7346,
    question: "Apa itu Virtual DOM dalam React?",
    answer:
      "Virtual DOM adalah representasi ringan dari DOM asli yang digunakan React untuk meningkatkan kinerja rendering.",
  },
  {
    id: 8245,
    question: "Bagaimana cara mengelola state dalam React?",
    answer:
      "Dengan menggunakan useState atau state management library seperti Redux.",
  },
  {
    id: 9321,
    question: "Apa itu prop drilling dalam React?",
    answer:
      "Proses mengoper prop ke komponen tingkat lebih dalam secara berantai.",
  },
  {
    id: 1043,
    question: "Apa itu Hook dalam React?",
    answer:
      "Hook adalah fungsi khusus yang memungkinkan penggunaan fitur seperti state dalam komponen fungsional.",
  },
  {
    id: 1234,
    question: "Apa itu React?",
    answer:
      "React adalah library JavaScript untuk membangun antarmuka pengguna, terutama untuk aplikasi web yang bersifat dinamis.",
  },
  {
    id: 2345,
    question: "Apa perbedaan antara komponen stateful dan stateless di React?",
    answer:
      "Komponen stateful memiliki state lokal yang bisa berubah, sedangkan stateless tidak memiliki state internal dan hanya menerima data melalui props.",
  },
  {
    id: 3456,
    question: "Apa itu JSX di React?",
    answer:
      "JSX adalah ekstensi sintaks JavaScript yang memungkinkan Anda menulis elemen HTML dalam JavaScript.",
  },
  {
    id: 4567,
    question: "Apa itu props di React?",
    answer:
      "Props adalah singkatan dari 'properties' dan digunakan untuk mengirim data dari komponen induk ke komponen anak.",
  },
  {
    id: 5678,
    question: "Apa itu state di React?",
    answer:
      "State adalah objek yang menyimpan data yang dapat berubah dalam komponen dan mempengaruhi rendering komponen tersebut.",
  },
  {
    id: 6789,
    question: "Bagaimana cara menangani event dalam React?",
    answer:
      "Event di React ditangani dengan menggunakan sintaks JSX dan menghubungkannya ke fungsi handler yang ditulis di dalam komponen.",
  },
  {
    id: 7890,
    question: "Apa itu useEffect di React?",
    answer:
      "useEffect adalah hook yang digunakan untuk menangani efek samping dalam komponen fungsional, seperti fetching data atau manipulasi DOM.",
  },
  {
    id: 8901,
    question: "Apa itu useRef di React?",
    answer:
      "useRef adalah hook yang memberikan akses ke elemen DOM atau nilai yang tetap antara render tanpa memicu re-render.",
  },
  {
    id: 9012,
    question: "Apa itu componentDidMount di React?",
    answer:
      "componentDidMount adalah lifecycle method yang dijalankan setelah komponen selesai dirender ke layar.",
  },
  {
    id: 1023,
    question: "Apa itu context API di React?",
    answer:
      "Context API digunakan untuk berbagi data antar komponen tanpa perlu props drilling, memungkinkan pengelolaan state global.",
  },
  {
    id: 1124,
    question: "Bagaimana cara mengubah state di React?",
    answer:
      "State diubah dengan menggunakan setter function yang didapat dari useState atau melalui metode setState pada komponen kelas.",
  },
  {
    id: 1225,
    question: "Apa itu React Router?",
    answer:
      "React Router adalah library yang digunakan untuk menangani routing dalam aplikasi React, memungkinkan navigasi antar halaman.",
  },
  {
    id: 1326,
    question: "Apa itu higher-order component (HOC) di React?",
    answer:
      "HOC adalah fungsi yang menerima komponen sebagai argumen dan mengembalikan komponen baru dengan tambahan fungsionalitas.",
  },
  {
    id: 1427,
    question: "Apa itu React.memo?",
    answer:
      "React.memo adalah higher-order component yang memungkinkan komponen fungsional untuk hanya merender ulang jika props-nya berubah.",
  },
  {
    id: 1528,
    question: "Apa itu Suspense di React?",
    answer:
      "Suspense adalah fitur di React yang memungkinkan komponen untuk menunggu data yang dimuat secara asinkron sebelum rendering terjadi.",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

function FlashCard() {
  const [selectedId, setselectedId] = useState(null);

  const handlerClick = function (id) {
    setselectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handlerClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
