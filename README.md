# Mimari Ürünler İçin Kurumsal Web Sitesi

Mimari ürünlerin, markaların, katalogların ve referans projelerin tanıtımı için PHP, HTML, CSS ve JavaScript kullanılarak geliştirilmiş bir web sitesi projesidir.

Proje; ürün koleksiyonlarını keşfetmeyi, kataloglara ulaşmayı ve referans projeleri incelemeyi sağlayan, masaüstü, tablet ve mobil ekranlara uyumlu bir arayüz sunar.

## Özellikler

- Responsive arayüz ve farklı ekran boyutlarına özel düzenlemeler
- Marka ve ürün gruplarına göre içerik sunumu
- Ürün detayları ve benzer ürün önerileri
- Katalog arşivi ve markaların katalog sayfalarına bağlantılar
- Referans projeler ve projelerde kullanılan ürünlerin gösterimi
- Çok dil desteği
- Blog, showroom ve iletişim bölümleri
- JavaScript ile etkileşimli gezinme ve arayüz bileşenleri

## Kullanılan Teknolojiler

| Teknoloji | Kullanım |
| --- | --- |
| **PHP 8+** | Uygulamanın sunulması ve yerel sunucu yönlendirmesi |
| **HTML** | Sayfa ve içerik yapısı |
| **CSS** | Görsel tasarım ve responsive düzen |
| **JavaScript** | İstemci tarafı etkileşimleri ve dil desteği |

## Proje Yapısı

- **`index.php`**: Ana uygulama; sayfa içerikleri, stiller ve istemci tarafı kodları
- **`router.php`**: PHP yerleşik sunucusu için yönlendirme
- **`.htaccess`**: Apache yönlendirme ayarları
- **`BASLAT.bat`**: Windows için yerel başlatıcı
- **`assets/i18n.css`**: Dil desteğiyle ilgili stiller
- **`assets/i18n.js`**: Dil desteğiyle ilgili JavaScript kodu
- **`assets/brands/`**: Marka logoları
- **`assets/katalog/`**: Katalog kapakları ve ilgili dosyalar
- **`assets/katalog/fallback/`**: Varsayılan katalog kartı görselleri

## Yerel Ortamda Çalıştırma

Bilgisayarınızda **PHP 8 veya üzeri** kurulu olmalıdır.

1. Depoyu indirin veya klonlayın.
2. Terminali `index.php` dosyasının bulunduğu klasörde açın.
3. Aşağıdaki komutu çalıştırın:

   ```bash
   php -S localhost:8080 router.php
   ```

4. Tarayıcıda [http://localhost:8080](http://localhost:8080) adresini açın.

**Windows:** PHP komutu PATH üzerinden erişilebiliyorsa `BASLAT.bat` dosyasıyla da başlatılabilir.

**Not:** Yerel sunucu çalıştığı sürece terminal penceresi açık kalmalıdır.

## Mimari Not

Bu sürümde içerik ve arayüzün büyük bölümü `index.php` içinde tutulur. `router.php` ve `.htaccess`, uygulama rotalarını bu giriş dosyasına yönlendirir. Görsellerin bir bölümü ana dosyaya gömülüdür; diğer varlıklar `assets` klasöründe bulunur.

## Proje Durumu

Bu depo, geliştirilen web sitesinin kaynak kodlarını içerir. Bu sürüm için canlı demo bağlantısı bulunmamaktadır.
