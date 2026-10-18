# Likya Yapı PHP Sunum Paketi

Bu paket, Likya Yapı web sitesinin PHP 8+ uyumlu teslim sürümüdür. Tasarım, gömülü görseller, katalog arşivi, responsive kurallar ve istemci tarafı etkileşimleri `index.php` içinde bulunur.

Katalog arşivindeki varsayılan kart görselleri, eksik veya yarım yüklenmeyi önlemek için `assets/katalog/fallback` altındaki optimize WebP dosyalarından sunulur. Markaya özel kapaklar yine `assets/katalog` klasörüne `assets/katalog/README.txt` içindeki adlarla eklenebilir.

## Hosting üzerinde yayınlama

Klasördeki bütün dosyaları PHP 8 veya üzeri çalışan hostingin `public_html` klasörüne yükleyin. Apache kullanılıyorsa `.htaccess` yönlendirmeleri otomatik çalışır.

## Bilgisayarda çalıştırma

PHP kuruluysa `BASLAT.bat` dosyasına çift tıklayın ve `http://localhost:8080` adresini açın.

Alternatif olarak klasörde terminal açıp şu komutu çalıştırın:

```text
php -S localhost:8080 router.php
```

XAMPP kullanılıyorsa klasörü `htdocs` içine taşıyıp Apache'yi başlatabilirsiniz.

## Ana dosyalar

- `index.php`: Web sitesinin tamamı
- `router.php`: PHP yerel sunucu yönlendirmesi
- `.htaccess`: Apache yönlendirme ve güvenlik başlıkları
- `BASLAT.bat`: Windows yerel başlatıcı
- `assets/katalog/fallback`: Katalog kartlarının optimize varsayılan kapakları
