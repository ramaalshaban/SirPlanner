import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  files = [
    {
      fileName: 'Belge 1', img: '../../../assets/833px-PDF_file_icon.svg.png', kullaniciAdi: 'Ali', baslik: 'İşlem Mantığı', sayfa: 'Ürünler'
    },
    {
      fileName: 'Belge 2', img: '../../../assets/833px-PDF_file_icon.svg.png', kullaniciAdi: 'Veli', baslik: 'İşlem Mantığı', sayfa: 'Ürünler'
    },
    {
      fileName: 'Belge 3', img: '../../../assets/833px-PDF_file_icon.svg.png', kullaniciAdi: 'Ali', baslik: 'İşlem Mantığı', sayfa: 'Ürünler'
    },
    {
      fileName: 'Belge 4', img: '../../../assets/833px-PDF_file_icon.svg.png', kullaniciAdi: 'Veli', baslik: 'İşlem Mantığı', sayfa: 'Ürünler'
    },
  ]

}
