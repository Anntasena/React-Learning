import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander
        collapseNumWords={20}
        expandButtonText="Show Text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        buttonInLine={false}
        className="box"
      >
        TypeScript adalah superset dari JavaScript yang dirancang untuk
        meningkatkan pengembangan aplikasi dengan menambahkan dukungan tipe
        statis. Fitur ini memungkinkan pengembang untuk mendeteksi kesalahan
        selama waktu kompilasi, bukan saat runtime, sehingga meningkatkan
        keandalan dan keterbacaan kode. TypeScript kompatibel dengan JavaScript
        sepenuhnya, artinya kode JavaScript biasa dapat digunakan langsung dalam
        TypeScript. Namun, TypeScript harus dikompilasi menjadi JavaScript
        sebelum dapat dijalankan di browser. Hal ini menjadikannya pilihan
        populer untuk proyek besar dan aplikasi kompleks dengan tim pengembang
        besar.
      </TextExpander>
      <TextExpander expanded={true}>
        TypeScript adalah superset dari JavaScript yang dirancang untuk
        meningkatkan pengembangan aplikasi dengan menambahkan dukungan tipe
        statis. Fitur ini memungkinkan pengembang untuk mendeteksi kesalahan
        selama waktu kompilasi, bukan saat runtime, sehingga meningkatkan
        keandalan dan keterbacaan kode. TypeScript kompatibel dengan JavaScript
        sepenuhnya, artinya kode JavaScript biasa dapat digunakan langsung dalam
        TypeScript. Namun, TypeScript harus dikompilasi menjadi JavaScript
        sebelum dapat dijalankan di browser. Hal ini menjadikannya pilihan
        populer untuk proyek besar dan aplikasi kompleks dengan tim pengembang
        besar.
      </TextExpander>
      <TextExpander collapseNumWords={5}>
        TypeScript adalah superset dari JavaScript yang dirancang untuk
        meningkatkan pengembangan aplikasi dengan menambahkan dukungan tipe
        statis. Fitur ini memungkinkan pengembang untuk mendeteksi kesalahan
        selama waktu kompilasi, bukan saat runtime, sehingga meningkatkan
        keandalan dan keterbacaan kode. TypeScript kompatibel dengan JavaScript
        sepenuhnya, artinya kode JavaScript biasa dapat digunakan langsung dalam
        TypeScript. Namun, TypeScript harus dikompilasi menjadi JavaScript
        sebelum dapat dijalankan di browser. Hal ini menjadikannya pilihan
        populer untuk proyek besar dan aplikasi kompleks dengan tim pengembang
        besar.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className = "box",
  buttonColor = "green",
  expanded,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  collapseNumWords = 10,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleExpandText = function () {
    setIsExpanded((expanded) => !expanded);
  };

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapseNumWords).join(" ") + "...";

  const buttonSytle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "10px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      {displayText}
      <button style={buttonSytle} onClick={handleExpandText}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
