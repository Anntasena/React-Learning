### Overview of Reusability

## How to reuse code in react?

Reuse Code bisa react 2 macam (.jsx)
-> reuse [UI] > Component dan props (menggunakan props sebagai component API) > children prop

-> reuse [stateful_logic] (logika yang setidaknya berisi satu hook) > Custom hooks

Reuse code (.js)
-> reuse non stateful logic (normal javascript function)

## Advance pattern

[Render_Props_Pattern]
-> Render props pattern > Render Props adalah pola di React yang digunakan untuk menghindari duplikasi kode dengan cara menggunakan fungsi sebagai child component. Ini berguna untuk reusability tanpa harus membuat HOC atau hooks.

📌 Konsep Singkat Render Props
Alih-alih meng-hardcode perilaku dalam komponen, kita meneruskannya sebagai fungsi (props).

[Compound_Component_Pattern]
-> Compound Component Pattern adalah pola di React yang memungkinkan beberapa komponen bekerja bersama dalam satu entitas yang lebih besar, memberikan kontrol lebih fleksibel kepada pengguna.

📌 Konsep Singkat Compound Components
Alih-alih membuat komponen dengan banyak props untuk mengontrol perilakunya, kita membiarkan pengguna menyusun struktur komponennya sendiri dengan komponen child yang sudah kita sediakan.
