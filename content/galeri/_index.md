---
title: "Galeri"
date: 2026-08-12
draft: false
layout: "galeri"
galeri_item:
  - foto: "/images/galeri/foto-asrama-1.webp"
    judul: "Asrama"
    deskripsi: "Asrama tampak dari depan"
  - foto: "/images/galeri/foto-asrama-2.webp"
    judul: "Asrama"
    deskripsi: "Ranjang-ranjang santri di lantai 2 Asrama"
  - foto: "/images/galeri/foto-asrama-3.webp"
    judul: "Asrama"
    deskripsi: "Lantai 2 Asrama dengan balkon yang menghadap ke pepohonan"
  - foto: "/images/galeri/foto-asrama-4.webp"
    judul: "Asrama"
    deskripsi: "Tangga menuju lantai 2 dilihat dari bawah"
  - foto: "/images/galeri/foto-kamar-santri-1.jpeg"
    judul: "Asrama"
    deskripsi: "Kamar santri 1 di lantai 1"
  - foto: "/images/galeri/foto-kamar-santri-2.jpeg"
    judul: "Asrama"
    deskripsi: "Kamar santri 2 di lantai 1" 
  - foto: "/images/galeri/foto-kamar-mandi-2.jpeg"
    judul: "Asrama"
    deskripsi: "Kamar mandi dengan wc duduk" 
  - foto: "/images/galeri/foto-kamar-mandi-1.jpeg"
    judul: "Asrama"
    deskripsi: "Kamar mandi dengan wc jongkok" 
  - foto: "/images/galeri/foto-kamar-mandi-3.jpeg"
    judul: "Asrama"
    deskripsi: "Kamar mandi dengan wc jongkok" 
  - foto: "/images/galeri/foto-tangga.jpeg"
    judul: "Asrama"
    deskripsi: "Tangga menuju lantai 2" 
  - foto: "/images/galeri/foto-jemuran-1.jpeg"
    judul: "Asrama"
    deskripsi: "Jemuran di luar asrama" 
  - foto: "/images/galeri/foto-jemuran-2.jpeg"
    judul: "Asrama"
    deskripsi: "Jemuran di lantai 2" 
---

<style>
  .container-galeri {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 30px;
  }

  .container-galeri h1{
    text-align: center;
    margin-bottom: 15px;
  }

  .grid-galeri {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
  }

  .card-galeri {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-galeri:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .card-galeri img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
    border-radius: 10px;
  }

  .info-galeri {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    .grid-galeri {
      grid-template-columns: repeat(1,1fr);
    }

    .card-galeri img {
      width: 100%;
      height: auto;
      max-height: 300px;
      object-fit: contain;
    }
  }

</style>