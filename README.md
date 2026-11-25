# Dapur Ngebul — Game Masak Cepat

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/gustzy2000-dev/dapur-ngebul/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/gustzy2000-dev/dapur-ngebul/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

Game masak cepat yang dimainkan di browser desktop dengan keyboard dan mouse.
Pelanggan memesan hidangan, kamu merakit bahannya di piring, memasaknya di
kompor, lalu menyajikannya sebelum waktu pesanan habis.

## Cara main

- Klik bahan di meja (atau tekan tombol **1–6**) untuk merakit hidangan di piring.
- Tekan **Spasi** atau tombol **MASAK** untuk memasak (3 detik).
- Tekan **Enter** atau tombol **SAJIKAN** untuk mengantar hidangan ke pesanan yang cocok.
- Tekan **T** untuk membuang racikan.

## Resep

| Hidangan | Bahan |
| --- | --- |
| Nasi Telur | Nasi + Telur |
| Nasi Goreng | Nasi + Telur + Sambal |
| Mie Goreng | Mie + Ayam + Sayur |
| Mie Pedas | Mie + Sambal + Telur |
| Soto Ayam | Ayam + Telur + Sayur |
| Ayam Geprek | Ayam + Sambal + Nasi |

Shift berlangsung 150 detik. Setiap pesanan punya batas waktu sendiri — kalau
habis, pelanggan pergi dan kamu kehilangan satu hati. Sajikan 4 hidangan untuk
naik level; pelanggan makin tidak sabar di level yang lebih tinggi.

## Menjalankan

Buka `game/index.html` di Chrome desktop, atau jalankan server statis apa pun
dari folder repo dan buka `http://localhost:8080/game/`.

## Entri make.fun

Dibuat untuk kompetisi [Make the best cooking game](https://make.fun/bounty/best-cooking-game-20261125-0137).
`main.ts` menyalin `game/` dan `screenshots/` ke direktori output dan menulis
`dossier.json` dengan library `vendor/makefun-game.ts`.
