## useState Vs useReducer

## **useState**

- Sangat ideal untuk satu bagian dari state yang independen satu sama lain (numbers, string, single array, etc).
- Logika untuk memperbaharui state biasanya ditempatkan langsung ke dalam event handler atau efek, sehingga logika tersebut mungkin tersebar di seluruh komponen.
- State diperbarui dengan memanggil setState.
- **Imperatif** state update: kita memberi tahu React bagaimana memperbarui state secara langsung.
- Lebih mudah dimengerti dan digunakan, terutama untuk state yang sederhana.

## **useReducer**

- Ideal untuk beberapa state yang saling berhubungan dan bergantung satu sama lain, atau ketika kita memiliki state yang sangat kompleks.
- Semua logika update dikelola di satu tempat yaitu di "reducer function", yang membuat logika tersebut terpisah dengan baik dari komponen.
- State diperbarui dengan "dispatching an action" ke "reducer".
- **Deklaratif** state update: transisi state yang kompleks dipetakan ke actions tertentu.
- Lebih sulit dimengerti dan diimplementasikan, tetapi memberikan struktur yang lebih baik untuk state yang rumit.

---

## **Kapan kita harus menggunakan useReducer?**

1. Apakah kita hanya perlu satu state?

   - **[YES]** -> Gunakan useState.

2. Apakah kita memiliki lebih dari satu state?

   - **[NO]** -> Gunakan useState.
   - **[YES]** Apakah state tersebut perlu diupdate secara bersamaan?
     - **[NO]** -> Gunakan useState (state terpisah).
     - **[YES]** -> Gunakan useReducer.

3. Apakah logika pembaruan state menjadi terlalu kompleks atau sulit dipahami?
   - **[YES]** -> Gunakan useReducer, karena dengan menempatkan semua logika dalam reducer function, kita dapat menyederhanakan struktur kode.

4. Apakah kita perlu melacak berbagai kondisi atau transisi state yang saling bergantung?
   - **[YES]** -> Gunakan useReducer, karena transisi state dapat dipetakan dengan jelas melalui actions.

5. Apakah kita sedang membangun aplikasi yang membutuhkan performa tinggi dengan pembaruan state yang optimal?
   - **[YES]** -> Gunakan useReducer, karena dapat membantu mengurangi rendering ulang komponen dengan kontrol yang lebih baik terhadap pembaruan state.

---

## **Keuntungan utama useReducer**

1. Semua logika terkait state dikelola di satu tempat (reducer function).
2. Cocok untuk skenario di mana banyak state saling bergantung atau memerlukan pembaruan serentak.
3. Mempermudah debugging karena transisi state lebih terstruktur dan dapat dilacak.

## **Contoh sederhana useReducer**

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Action type tidak dikenali');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## **Ringkasan**

- **Gunakan useState** untuk state sederhana yang tidak saling bergantung.
- **Gunakan useReducer** untuk state kompleks atau yang saling terhubung, serta untuk manajemen state yang lebih terstruktur.
- Kedua hooks ini adalah tools yang fleksibel untuk kebutuhan state management di React, tergantung kompleksitas aplikasi Anda.

