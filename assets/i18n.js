(function () {
  'use strict';

  const translations = new Map(Object.entries({
    'Ürünler':'Products','Hakkımızda':'About Us','Referanslar':'References',
    'Profesyonel Çözümler':'Professional Solutions','Blog':'Blog','İletişim':'Contact',
    'Mekanlara Değer Katan Seçkin Tasarımlar':'Distinguished Designs That Add Value to Spaces',
    'Koleksiyonları Keşfedin':'Explore the Collections','Tasarımın Zamansız Hali':'The Timeless Form of Design',
    'Tasarımın':'The Timeless','Zamansız Hali':'Form of Design','Mekanlara':'Distinguished Designs',
    'Değer Katan':'That Add Value','Seçkin Tasarımlar':'to Spaces',
    'LİKYA YAPI':'LIKYA YAPI','Hakkımızda →':'About Us →','Öne Çıkan Ürün Grupları':'Featured Product Groups',
    'Tüm Ürünleri İnceleyin →':'View All Products →','Seçili Projeler':'Selected Projects',
    'Tüm Projeleri İnceleyin →':'View All Projects →','İzmir Showroom':'Izmir Showroom',
    'Randevu Alın →':'Book an Appointment →','Görüntüle →':'View →','Görüntüle':'View',
    'Mekanlara ilham veren':'Inspiring spaces with','seçkin tasarımlar.':'distinguished designs.',
    'İLETİŞİM':'CONTACT','KURUMSAL':'CORPORATE','BİZİ TAKİP EDİN':'FOLLOW US',
    'Tüm hakları saklıdır.':'All rights reserved.','Gizlilik Politikası':'Privacy Policy',
    'Kullanım Şartları':'Terms of Use','Çerez Politikası':'Cookie Policy',
    'Tasarım, kalite ve güven üzerine kurulu bir yolculuk.':'A journey built on design, quality and trust.',
    'BİZ KİMİZ':'WHO WE ARE','Mekanlara Değer Katan Birikim':'Expertise That Adds Value to Spaces',
    'Seçkin Tasarımın İzinde':'In Pursuit of Distinguished Design','Kalite':'Quality','Tasarım':'Design','Güven':'Trust',
    'Uzun yıllar mekanlara değer katan ürünleri seçiyoruz.':'We select products that add lasting value to spaces.',
    'Estetik ve işlevselliği bir araya getiren ürünleri sunuyoruz.':'We offer products that unite aesthetics and functionality.',
    'Şeffaf iletişim ve sorumlu çözüm ortaklığı sunuyoruz.':'We provide transparent communication and responsible partnership.',
    'Mimari Vizyonla Bütünleşen Çözümler':'Solutions Integrated with Architectural Vision',
    'İhtiyacı Anlamak':'Understanding the Need','Doğru Ürünü Seçmek':'Selecting the Right Product',
    'Mekana Değer Katmak':'Adding Value to the Space','Randevu Alın':'Book an Appointment',
    'Ürün Koleksiyonları':'Product Collections','Seçkin ürün gruplarımızı keşfedin.':'Explore our distinguished product groups.',
    'Mekanlara değer katan seçkin koleksiyonlar':'Distinguished collections that add value to spaces',
    'KOLEKSİYONLAR':'COLLECTIONS','Malzeme, Tasarım ve İşlev':'Material, Design and Function',
    'Dünyanın seçkin markalarını, zamansız tasarım ve üstün malzeme kalitesiyle bir araya getiriyoruz.':'We bring together the world’s distinguished brands through timeless design and exceptional material quality.',
    'Banyo':'Bathroom','Isıtma':'Heating','Wellness':'Wellness','Yüzeyler':'Surfaces','Aksesuar':'Accessories',
    'Tüm Ürünler':'All Products','Tümü':'All','Markalar':'Brands','Koleksiyonlar':'Collections','Koleksiyon':'Collection',
    'Koleksiyonları İnceleyin':'Explore Collections','Ürünü İnceleyin':'View Product',
    'MARKALAR & KOLEKSİYONLAR':'BRANDS & COLLECTIONS','TEKNİK ÖZELLİKLER':'TECHNICAL SPECIFICATIONS',
    'ÜRÜN ÖZELLİKLERİ':'PRODUCT FEATURES','ÜRÜN DETAYI':'PRODUCT DETAIL','İLGİLİ ÜRÜNLER':'RELATED PRODUCTS',
    'Benzer Ürünler':'Similar Products','Bilgi Alın':'Request Information','Kataloğu İncele':'View Catalogue',
    'Referans Projeler':'Reference Projects','Projelerimizi keşfedin.':'Explore our projects.',
    'Tüm Referanslar':'All References','Konut':'Residential','Otel':'Hotel','Ticari':'Commercial','Toplantı':'Meeting',
    'PROJE DETAYI':'PROJECT DETAIL','KONUM':'LOCATION','YAPI TÜRÜ':'BUILDING TYPE',
    'KULLANIM':'USE','REFERANS KAPSAMI':'REFERENCE SCOPE','ÇÖZÜM KAPSAMI':'SOLUTION SCOPE',
    'ÖNE ÇIKANLAR':'HIGHLIGHTS','PROJEDE KULLANILAN ÜRÜNLER':'PRODUCTS USED IN THE PROJECT',
    'Malzeme & ürün seçkisi':'Material & Product Selection','Benzer Bir Proje İçin Görüşün':'Discuss a Similar Project',
    'Tüm Projelere Dönün':'Back to All Projects','Mimarlar ve Profesyoneller':'Architects and Professionals',
    'Projeniz İçin Yanınızdayız':'Supporting Your Project','PROFESYONEL ÇÖZÜMLER':'PROFESSIONAL SOLUTIONS',
    'PROJE SÜRECİ':'PROJECT PROCESS','TEKNİK DESTEK':'TECHNICAL SUPPORT','Katalogları İnceleyin':'Browse Catalogues',
    'Kataloglar':'Catalogues','KATALOG ARŞİVİ':'CATALOGUE ARCHIVE','Koleksiyonları Kaynağından Keşfedin':'Discover Collections at the Source',
    'Kategoriler':'Categories','Tüm Kataloglar':'All Catalogues','GÜNCEL SEÇKİ':'CURRENT SELECTION',
    'Banyo Dolapları':'Bathroom Furniture','Vitrifiye':'Sanitaryware','Batarya & Armatür':'Faucets & Taps','Yüzeyler & Seramik':'Surfaces & Ceramics','Lavabolar':'Washbasins','Küvet & Duş Alanları':'Bathtubs & Shower Areas','Banyo Aksesuarları':'Bathroom Accessories','Radyatör & Havlupan':'Radiators & Towel Warmers','Seramik':'Ceramic Surfaces','Mozaik':'Mosaic',
    'Bataryalar':'Faucets','Duş Kanalları':'Shower Channels','Radyatör & Havlupan':'Radiators & Towel Warmers',
    'Duş & Küvet':'Showers & Bathtubs','Aksesuar & Dizayn':'Accessories & Design','Aynalar':'Mirrors',
    'Aynalı Dolaplar':'Mirror Cabinets','Banyo Mobilyaları':'Bathroom Furniture','Banyo Aksesuarları':'Bathroom Accessories',
    'Akıllı Klozetler':'Smart Toilets','Banyo Çözümleri':'Bathroom Solutions','Duş Sistemleri':'Shower Systems',
    'Rezervuar Sistemleri':'Concealed Cistern Systems','Kumanda Panelleri':'Flush Plates','Seramik Yüzeyler':'Ceramic Surfaces',
    'Spa, Sauna & Hamam':'Spa, Sauna & Hammam','Spa & Wellness':'Spa & Wellness','Lavabolar':'Washbasins',
    'Kataloğu İncele ›':'View Catalogue ›','Blog Yazıları':'Journal','Tüm Yazılar':'All Articles',
    'Devamını Oku →':'Read More →','Bloga Dön':'Back to Blog','SON YAZILAR':'LATEST ARTICLES',
    'BİZE ULAŞIN':'CONTACT US','Bizimle İletişime Geçin':'Contact Us',
    'Projeleriniz için doğru çözümleri birlikte belirleyelim':'Let us identify the right solutions for your projects together',
    'Telefon':'Phone','E-Posta':'Email','Adres':'Address','Çalışma Saatleri':'Working Hours','Pazartesi – Cuma':'Monday – Friday',
    'Genel İletişim':'General Enquiry','Soru ve bilgi talepleriniz için':'For questions and information requests',
    'Profesyonel Proje Talebi':'Professional Project Enquiry','Mimarlar ve proje ekipleri için':'For architects and project teams',
    'Adınız Soyadınız':'Full Name','E-Posta Adresiniz':'Email Address','Telefon Numaranız':'Phone Number',
    'Konu':'Subject','Mesajınız':'Message','Mesaj Gönder':'Send Message','Firma / Ofis Adı':'Company / Studio Name',
    'Mesleğiniz':'Profession','Proje Türü':'Project Type','Proje Konumu':'Project Location',
    'İlgilendiğiniz Ürün Grubu':'Product Group of Interest','Projeniz Hakkında':'About Your Project',
    'Proje Talebini Gönder':'Submit Project Enquiry','Seçiniz':'Select','Mimar':'Architect','İç Mimar':'Interior Architect',
    'Proje Yöneticisi':'Project Manager','Müteahhit':'Contractor','Yüklenici / Uygulamacı':'Contractor / Installer','Diğer':'Other',
    'Ticari Alan':'Commercial Space','Ofis':'Office','Özel Proje':'Special Project','İZMİR KÖRFEZİ · ALSANCAK':'IZMIR BAY · ALSANCAK',
    'Haritalarda Aç':'Open in Maps','Koleksiyonları yakından keşfedin.':'Experience the Collections Up Close.',
    'Randevu Talebi':'Request an Appointment','Gönder':'Send','Projenizi Birlikte Şekillendirelim':'Let Us Shape Your Project Together',
    'Bizimle İletişime Geçin →':'Contact Us →','Ana sayfaya dön':'Return to homepage','Ana menü':'Main navigation',
    'Sayfa yolu':'Breadcrumb','Türk bayrağı':'Turkish flag','Aktif dil: Türkçe':'Current language: Turkish',
    'Menüyü aç':'Open menu','Menüyü kapat':'Close menu',
    'Teşekkür ederiz. Mesajınız başarıyla alındı.':'Thank you. Your message has been received successfully.',
    'Teşekkür ederiz. Proje talebiniz başarıyla alındı.':'Thank you. Your project enquiry has been received successfully.'
  }));

  const paragraphTranslations = new Map(Object.entries({
    'Likya Yapı, yaşam alanlarınıza zarafet ve işlevsellik katan özgün ürünler sunar. İlham veren tasarımları ve yaratıcı çözümleriyle estetik ile sürdürülebilirliği bir araya getiriyoruz.':'Likya Yapı offers distinctive products that bring elegance and functionality to living spaces. We unite aesthetics and sustainability through inspiring design and creative solutions.',
    'Likya Yapı, seçkin uluslararası markaların üstün kaliteli ürünlerini mimari vizyonla buluşturan, yaşam alanlarına değer katan İzmir merkezli bir çözüm ortağıdır.':'Based in Izmir, Likya Yapı is a solution partner that brings premium products from distinguished international brands together with architectural vision to add value to living spaces.',
    'Her projeyi mekanın ihtiyaçlarını ve tasarım dilini anlayarak ele alıyor, doğru ürün seçimini güvenilir bir süreçle sonuca taşıyoruz.':'We approach every project by understanding its spatial needs and design language, guiding the right product selection through a reliable process.',
    'Mekanın kullanım amacını, ölçüsünü ve tasarım beklentilerini birlikte değerlendiriyoruz.':'We evaluate the space’s purpose, dimensions and design expectations together.',
    'Malzeme, yüzey ve teknik özellikleri projeye uygun seçkin alternatiflerle buluşturuyoruz.':'We match materials, surfaces and technical requirements with distinguished alternatives suited to the project.',
    'Estetik, işlevsellik ve uzun ömürlü kullanımı bir araya getiren çözümler sunuyoruz.':'We provide solutions that combine aesthetics, functionality and lasting use.',
    'Koleksiyonlarımızı yakından incelemek ve uzman ekibimizle projeniz için doğru ürünleri belirlemek üzere showroom’umuzu ziyaret edin.':'Visit our showroom to experience our collections and identify the right products for your project with our expert team.',
    'Koleksiyonlarımızı yakından keşfetmek ve uzman ekibimizden ilham almak için sizi showroom’umuza bekliyoruz.':'We welcome you to our showroom to experience our collections and draw inspiration from our expert team.',
    'Kategorilere göz atın, ilginizi çeken markaların güncel katalog ve koleksiyonlarına kolayca ulaşın.':'Browse the categories and easily access the latest catalogues and collections from the brands that interest you.',
    'Seçkin markaların kataloglarını tek bir arşivde keşfedin.':'Discover catalogues from distinguished brands in a single archive.',
    'Sorularınız, ürün seçimleriniz ve projeleriniz için ekibimize doğrudan ulaşabilirsiniz.':'Contact our team directly with your questions, product selections and projects.',
    'Sizi İzmir showroom’umuzda ağırlamaktan memnuniyet duyarız.':'We would be delighted to welcome you to our Izmir showroom.',
    'Projenizi paylaşın, ihtiyaçlarınıza uygun ürün ve çözüm seçeneklerini birlikte belirleyelim.':'Tell us about your project and let us identify suitable product and solution options together.',
    'Ürün, malzeme ve tasarım seçimleriniz için uzman ekibimize ulaşın.':'Contact our expert team for your product, material and design selections.'
  }));
  paragraphTranslations.forEach((value,key)=>translations.set(key,value));

  const extendedTranslations = {
    'Mimari fikirleri doğru ürün, güçlü teknik destek ve güvenilir çözüm ortaklığıyla buluşturuyoruz.':'We bring architectural ideas together with the right products, strong technical support and reliable partnership.',
    'Projelerinize Özel Çözüm Ortaklığı':'A Dedicated Solution Partner for Your Projects',
    'Mimarlar, iç mimarlar, tasarımcılar ve proje ekipleri için ürün seçiminden uygulama sürecine kadar bütüncül destek sunuyoruz. Seçkin koleksiyonları projenizin dili, ölçeği ve teknik gereksinimleriyle buluşturuyoruz.':'We provide architects, interior designers and project teams with comprehensive support from product selection through implementation. We match distinguished collections with the language, scale and technical requirements of your project.',
    'Profesyonellere Özel Destek':'Dedicated Professional Support','Ürün & Malzeme Danışmanlığı':'Product & Material Consultancy',
    'Numune & Proje Desteği':'Sample & Project Support','Teknik Dokümantasyon':'Technical Documentation','Uygulama Desteği':'Implementation Support',
    'ÇALIŞMA SÜRECİ':'WORKFLOW','Fikirden Uygulamaya':'From Concept to Implementation','İhtiyacı Anlama':'Understanding the Brief',
    'Doğru Ürünü Seçme':'Selecting the Right Product','BİRLİKTE ÇALIŞALIM':'LET’S WORK TOGETHER',
    'Projenizi Bizimle Paylaşın →':'Share Your Project With Us →','PROJENİZ İÇİN':'FOR YOUR PROJECT',
    'Projenizi birlikte değerlendirelim.':'Let us review your project together.','PROJE TALEBİ':'PROJECT ENQUIRY',
    'Projeniz, ihtiyaçlarınız ve tercih ettiğiniz ürün grupları hakkında bize bilgi bırakın. Ekibimiz sizinle iletişime geçsin.':'Tell us about your project, requirements and preferred product groups. Our team will contact you.',
    'İletişim bilgilerimin proje hakkında benimle iletişime geçilmesi amacıyla kullanılmasını kabul ediyorum.':'I consent to my contact details being used to contact me about this project.',
    'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.':'Your request has been received. We will contact you shortly.',
    'Otel, konut, ofis ve özel yaşam projelerinde seçkin markaları doğru malzeme ve güçlü tasarım anlayışıyla buluşturuyoruz.':'We unite distinguished brands with the right materials and a strong design approach across hospitality, residential, office and bespoke living projects.',
    'Projenin kapsamını, tasarım yaklaşımını ve teknik beklentilerini birlikte değerlendiririz.':'We review the project scope, design approach and technical expectations together.',
    'Koleksiyonlarımız arasından projeye uygun ürün, ölçü ve yüzey seçeneklerini sunarız.':'We present product, size and finish options suited to the project from our collections.',
    'Seçimlerin doğru uygulanması için proje ve saha sürecinde profesyonel destek sağlarız.':'We provide professional project and site support to ensure selections are implemented correctly.',
    'Projenizin estetik yaklaşımına, kullanım amacına ve bütçesine uygun ürün alternatiflerini birlikte belirliyoruz.':'Together, we identify product alternatives suited to your project’s aesthetic, purpose and budget.',
    'Malzeme ve yüzey kararlarını kolaylaştıran numune desteğiyle seçim sürecini daha güvenli hâle getiriyoruz.':'We make the selection process more reliable with samples that support material and finish decisions.',
    'Ölçü, yüzey, uygulama ve teknik özelliklere ilişkin ihtiyaç duyduğunuz bilgileri proje ekibinizle paylaşıyoruz.':'We provide your project team with the required information on dimensions, finishes, application and technical specifications.',
    'Seçkin mekanlar oluştururken doğru ürün, malzeme ve tasarım kararlarına eşlik eden içerikler.':'Insights that support the right product, material and design decisions for distinguished spaces.',
    'Mimari, tasarım, malzeme ve yaşam alanlarına dair ilham veren fikirler.':'Inspiring ideas on architecture, design, materials and living spaces.',
    'GÜNCEL YAZILAR':'LATEST ARTICLES','LİKYA YAPI JOURNAL':'LIKYA YAPI JOURNAL','Devamını Oku':'Read More','Paylaş':'Share',
    'Diğer Referanslarımız':'Other References','Tümünü Gör':'View All','Daha Az Göster':'Show Less','Mekanlara İz Bırakan Projeler':'Projects That Leave Their Mark',
    'Seçkin projelere değer katan çözümler':'Solutions that add value to distinguished projects',
    'İlham & Uzmanlık':'Inspiration & Expertise','Doğru Ürün, Doğru Ölçek':'The Right Product, The Right Scale',
    'Mekana Bütüncül Bakın':'Take a Holistic View of the Space','Teknik Detayları İnceleyin →':'View Technical Details →',
    'TEKNİK BİLGİLER':'TECHNICAL INFORMATION','Ebat / Ölçü':'Size / Dimensions','Ölçü':'Dimensions',
    'Teknik Doküman':'Technical Document','Teknik Doküman Talep Edin →':'Request Technical Documents →',
    'Teknik föy, ölçülü çizim ve montaj detayları talep üzerine paylaşılır.':'Datasheets, dimensioned drawings and installation details are available upon request.',
    'Görsel temsilidir. Kesin ürün seçimi üretici kataloğu ve teknik onayla yapılır.':'Image is for reference. Final product selection is subject to the manufacturer catalogue and technical approval.',
    'Ürün grubuna ait temel özellikler':'Key features of the product group','Ürün Hakkında Bilgi Alın →':'Request Product Information →',
    'Tüm Ürünlere Dönün':'Back to All Products','Tüm Projelere Dönün':'Back to All Projects',
    'Projeniz İçin Doğru Ürünü Birlikte Seçelim':'Let Us Select the Right Product for Your Project',
    'Projeniz İçin Birlikte Çalışalım':'Let Us Work Together on Your Project',
    'Projeniz İçin Doğru Markayı Birlikte Seçelim':'Let Us Select the Right Brand for Your Project',
    'Koleksiyon Seçiminde Uzman Desteği Alın':'Get Expert Support in Selecting Collections',
    'Banyo, yüzey ve yaşam alanlarına yönelik seçkin marka kataloglarını keşfedin.':'Discover distinguished brand catalogues for bathrooms, surfaces and living spaces.',
    'İlgilendiğiniz kategoriyi seçin; güncel koleksiyonları, ürün seçeneklerini ve teknik detayları markaların kendi sayfalarında inceleyin.':'Choose a category and explore current collections, product options and technical details on each brand’s official website.',
    'Katalog bağlantıları ilgili markaların resmî web sitelerinde yeni sekmede açılır.':'Catalogue links open the official brand websites in a new tab.',
    'Markaları Keşfedin':'Discover the Brands','SEÇKİN İŞ BİRLİKLERİ':'DISTINGUISHED PARTNERSHIPS',
    'Seçkin Markaları':'Distinguished Brands','Tasarımın Güçlü İmzaları':'Strong Signatures of Design',
    'Global ölçekteki seçkin markaların güvenilir temsilcisi.':'A trusted representative of distinguished global brands.',
    'Banyo, yüzey ve mimari çözüm alanlarında öne çıkan markaları; doğru ürün seçimi, proje deneyimi ve uzman desteğimizle bir araya getiriyoruz.':'We bring leading bathroom, surface and architectural solution brands together with informed product selection, project experience and expert support.',
    'Bir markanın resmî web sitesini ziyaret etmek için logosuna tıklayın.':'Select a logo to visit the brand’s official website.',
    'Dünyanın seçkin üreticilerini Likya Yapı güvencesiyle keşfedin.':'Discover the world’s distinguished manufacturers with the assurance of Likya Yapı.',
    'Banyo mobilyaları':'Bathroom furniture','Banyo mobilyaları ve aksesuar':'Bathroom furniture and accessories',
    'Batarya ve armatür':'Faucets and fittings','Seramik ve yüzeyler':'Ceramics and surfaces','Mozaik ve yüzeyler':'Mosaic and surfaces',
    'Büyük ebat yüzeyler':'Large-format surfaces','Yapı ve yüzey çözümleri':'Building and surface solutions',
    'Duş kanalları ve drenaj':'Shower channels and drainage','Vitrifiye ve banyo':'Sanitaryware and bathroom',
    'Ticari alan':'Commercial space','İç mimari proje':'Interior architecture project','Özel detaylar':'Bespoke details',
    'Koleksiyon ve üreticiye göre farklı renk ve dokular':'Colours and textures vary by collection and manufacturer',
    'Ürün özellikleri, ölçü seçenekleri ve teknik bilgiler':'Product features, size options and technical information',
    'Ürün ve malzeme seçiminde uzman ekibimizden destek alın.':'Get support from our expert team for product and material selection.',
    'Banyo ürünleri seçilirken günlük kullanım, mekânın yerleşimi ve diğer banyo elemanlarıyla uyum birlikte değerlendirilmelidir. Koleksiyonlar arasındaki ölçü, form ve yüzey seçenekleri projeye uygun bir bütün oluşturmak için incelenebilir.':'When selecting bathroom products, everyday use, layout and compatibility with other bathroom elements should be considered together. Dimensions, forms and finishes across collections can be reviewed to create a coherent scheme suited to the project.',
    'Lavabo ve tamamlayıcı ürünler, banyonun genel tasarım diliyle birlikte ele alınabilir. Form, renk ve malzeme seçimi yapılırken tezgâh, armatür ve kullanım alanıyla uyumun değerlendirilmesi önemlidir.':'Washbasins and complementary products can be considered within the overall bathroom design. When choosing form, colour and material, compatibility with the countertop, fittings and use of the space is important.',
    'Seramik yüzeylerin renk, doku ve desen seçenekleri mekânın atmosferini belirleyen unsurlardır. Koleksiyon seçimi sırasında kaplanacak alan, diğer malzemelerle ilişki ve uygulama koşulları birlikte değerlendirilmelidir.':'The colours, textures and patterns of ceramic surfaces contribute to the atmosphere of a space. When choosing a collection, the area to be covered, its relationship with other materials and installation conditions should be considered together.',
    'Büyük ebatlı yüzey seçenekleri, mimari projelerde malzeme bütünlüğü açısından değerlendirilebilir. Ölçü, yüzey ve uygulama alternatifleri koleksiyona göre değişebileceği için seçim öncesinde ilgili ürün bilgileri incelenmelidir.':'Large-format surfaces can be considered for material continuity in architectural projects. Dimensions, finishes and application options may vary by collection, so the relevant product information should be reviewed before selection.',
    'Vitrifiye ve banyo elemanlarının formu, rengi ve yerleşimi mekânın karakteriyle birlikte düşünülebilir. Koleksiyon seçimi yapılırken kullanım ihtiyaçları, montaj koşulları ve tamamlayıcı ürünlerle uyum dikkate alınmalıdır.':'The form, colour and layout of sanitaryware and bathroom elements can be considered alongside the character of the space. Usage requirements, installation conditions and compatibility with complementary products should guide collection selection.',
    'Armatür seçiminde tasarımın yanı sıra kullanım noktası, yerleşim ve diğer banyo elemanlarıyla uyum önem taşır. Ürün serisine göre değişebilen form ve uygulama seçenekleri projenin ihtiyaçları doğrultusunda incelenmelidir.':'When selecting fittings, their location, layout and compatibility with other bathroom elements matter alongside design. Form and application options, which may vary by product series, should be reviewed against the needs of the project.',
    'Seramik yüzey seçimi, projenin genel malzeme ve tasarım yaklaşımıyla birlikte ele alınabilir. İlgili koleksiyonun renk, doku, ölçü ve kullanım seçenekleri değerlendirilerek mekâna uygun alternatifler belirlenebilir.':'Ceramic surface selection can be considered within the overall material and design approach of the project. Reviewing a collection’s colours, textures, dimensions and intended uses can help identify options suited to the space.',
    'Doğal malzemelerden ilham alan renk ve doku seçenekleri, farklı mekân kurgularında değerlendirilebilir. Yüzeylerin diğer kaplama ve mobilyalarla ilişkisi, kullanım amacı ve uygulama koşulları seçim sürecine yön verebilir.':'Colours and textures inspired by natural materials can be considered in different interior schemes. Their relationship with other finishes and furniture, intended use and installation conditions can guide the selection process.',
    'Malzeme, yüzey ve tasarım seçenekleri; konut, otel ve ticari alan projelerinde farklı estetik yaklaşımlara göre değerlendirilebilir. Ölçü, renk ve uygulama alternatifleri ürün serisine göre değişebileceği için mekânın kullanım amacı ve uygulama koşulları birlikte ele alınmalıdır.':'Material, finish and design options can be considered for different aesthetic approaches in residential, hotel and commercial projects. Dimensions, colours and application options may vary by product series, so intended use and installation conditions should be considered together.',
    'Malzeme karakteri, renk ve yüzey dokusu mekânın tasarım diliyle birlikte değerlendirilebilir. Koleksiyon seçimi yapılırken kaplanacak alanın ölçeği, diğer malzemelerle uyum ve kullanım koşulları dikkate alınmalıdır.':'Material character, colour and surface texture can be considered alongside the design language of the space. The scale of the area, compatibility with other materials and usage conditions should be considered when selecting a collection.',
    'Seramik koleksiyonlarının renk ve yüzey seçenekleri, projede hedeflenen tasarım yaklaşımını tamamlamak için incelenebilir. Ölçü ve uygulama alternatifleri değerlendirilirken mekânın işlevi ve diğer malzemelerle uyum göz önünde bulundurulmalıdır.':'The colours and finishes of ceramic collections can be reviewed to complement the project’s design approach. The function of the space and compatibility with other materials should be considered when evaluating dimensions and application options.',
    'Büyük ebatlı yüzeyler, projenin genel malzeme dili ve uygulama alanıyla birlikte değerlendirilebilir. İlgili koleksiyonun ölçü, yüzey ve uygulama bilgileri incelenerek tasarım hedeflerine uygun seçenekler belirlenmelidir.':'Large-format surfaces can be considered within the project’s material language and application area. A collection’s dimensions, finishes and application information should be reviewed to identify options suited to the design objectives.',
    'Güncel koleksiyonları ve kategoriye ait seçenekleri incelemek için markanın resmî ürün sayfasına geçebilirsiniz. Projenizin ihtiyaçlarına uygun alternatifleri değerlendirmek ve seçim süreci hakkında bilgi almak için Likya Yapı ekibiyle iletişime geçebilirsiniz.':'Visit the brand’s official product page to explore current collections and options in this category. Contact the Likya Yapı team to discuss alternatives suited to your project and learn more about the selection process.',
    'Banyo mekânları için estetik ve işlevi bir araya getiren koleksiyonlar.':'Collections that unite aesthetics and function for bathroom spaces.',
    'Banyo projeleri için seçkin lavabo ve tamamlayıcı tasarım çözümleri.':'Distinguished washbasin and complementary design solutions for bathroom projects.',
    'Estetik ve işlevi bir araya getiren çağdaş seramik yüzeyler.':'Contemporary ceramic surfaces that unite aesthetics and function.',
    'Mimari projeler için etkileyici büyük ebatlı yüzey seçenekleri.':'Striking large-format surface options for architectural projects.',
    'Heykelsi formlarıyla öne çıkan vitrifiye koleksiyonları.':'Sanitaryware collections distinguished by sculptural forms.',
    'Minimal çizgilerle tamamlanan çağdaş armatür çözümleri.':'Contemporary fitting solutions defined by minimalist lines.',
    'Mimari projeler için bütüncül seramik yüzey çözümleri.':'Integrated ceramic surface solutions for architectural projects.',
    'Doğal malzemelerden ilham alan modern seramik koleksiyonları.':'Modern ceramic collections inspired by natural materials.',
    'Teknik performans ve tasarımı buluşturan seramik koleksiyonları.':'Ceramic collections that combine technical performance and design.',
    'Malzeme karakterini çağdaş yüzeylere taşıyan seramik koleksiyonları.':'Ceramic collections that bring material character to contemporary surfaces.',
    'Güncel tasarım diliyle geliştirilen seramik yüzey koleksiyonları.':'Ceramic surface collections developed with a contemporary design language.',
    'Mimari uygulamalar için büyük ebatlı yüzey çözümleri.':'Large-format surface solutions for architectural applications.'
  };
  Object.entries(extendedTranslations).forEach(([key,value])=>translations.set(key,value));

  const contentTranslations = {
    'Zamansız Bir Banyo Tasarımı Nasıl Oluşturulur?':'How to Create a Timeless Bathroom Design',
    'Malzeme, renk ve ürün seçiminde yıllar boyunca değerini koruyan sakin ve dengeli bir yaklaşım.':'A calm, balanced approach to materials, colours and products that retains its value for years.',
    'Evde Wellness Alanı Planlarken Nelere Dikkat Edilmeli?':'What to Consider When Planning a Wellness Area at Home',
    'Spa, sauna ve jakuzi seçiminden yerleşime kadar kişisel bir dinlenme alanının temel kararları.':'Key decisions for a personal retreat, from spa, sauna and whirlpool selection to layout.',
    'Mekanlarda Doğal Taş Seçiminin İncelikleri':'The Art of Selecting Natural Stone for Interiors',
    'Doku, yüzey ve renk uyumuyla doğal taşın mimari karakteri nasıl güçlendirdiğini keşfedin.':'Discover how texture, finish and colour harmony strengthen the architectural character of natural stone.',
    'Showroom Ziyaretini Verimli Bir Ürün Seçimine Dönüştürmek':'Turning a Showroom Visit into an Effective Product Selection',
    'Numune, ölçü ve teknik detayları yerinde değerlendirerek doğru ürüne daha güvenle karar verin.':'Choose the right product with confidence by reviewing samples, dimensions and technical details in person.',
    'Mimari Projelerde Malzeme Bütünlüğü':'Material Coherence in Architectural Projects',
    'Farklı ürün gruplarını ortak bir tasarım dili altında buluşturmanın dengeli yolları.':'Balanced ways to unite different product groups under a consistent design language.',
    'Banyo Mobilyası Seçerken İşlev ve Estetik Dengesi':'Balancing Function and Aesthetics in Bathroom Furniture',
    'Depolama ihtiyacı, ölçü ve yüzey kararlarını mekanın atmosferiyle birlikte ele alın.':'Consider storage, dimensions and finish decisions together with the atmosphere of the space.',
    'Banyoda Lüksün Tanımı':'Defining Luxury in the Bathroom','Banyonuzda Dünyaca Ünlü Tasarımlar':'World-Renowned Design in Your Bathroom',
    'Size Özel Tasarım Banyo Ürünleri':'Bespoke Bathroom Products for You','Evinize Renkli Banyolar Gelsin':'Bring Colourful Bathrooms into Your Home',
    'Yenilik İsteyenlere Özel Banyo Dolapları':'Bathroom Furniture for Those Seeking Something New',
    'Banyo Aksesuarları ile Banyonuzu Baştan Yaratın':'Transform Your Bathroom with Accessories',
    'BANYO & TASARIM':'BATHROOM & DESIGN','MALZEME':'MATERIAL','REHBER':'GUIDE','MİMARİ':'ARCHITECTURE',
    'ÜRÜN REHBERİ':'PRODUCT GUIDE','TASARIM':'DESIGN','AKSESUAR':'ACCESSORIES',
    'Doğal kaplama · lake · kompakt yüzey':'Natural veneer · lacquer · compact surface','Duvara monte veya ayaklı':'Wall-mounted or floor-standing',
    'Yüksek dayanımlı vitrifiye seramik':'High-durability vitreous ceramic','Tezgah üstü · asma · ankastre':'Countertop · wall-hung · built-in',
    'Çelik · alüminyum':'Steel · aluminium','Duvar montajı':'Wall-mounted','Projeye özel ölçülendirme':'Custom project dimensions',
    'Taş · ahşap · cam · kompozit':'Stone · wood · glass · composite','Mekana özel uygulama':'Bespoke installation',
    'Standart ve ankastre modüller':'Standard and concealed modules','Pirinç gövde · PVD yüzey seçenekleri':'Brass body · PVD finish options',
    'Tezgah · duvar · zemin':'Countertop · wall · floor','AISI 304 paslanmaz çelik':'AISI 304 stainless steel',
    'Zemin veya duvar dibi':'Floor or wall edge','Farklı modül ve büyük ebat seçenekleri':'Various modules and large-format options',
    'Porselen · seramik':'Porcelain · ceramic','Duvar ve zemin':'Wall and floor','Modüler fileli ölçüler':'Modular mesh-mounted sizes',
    'Cam · taş · porselen':'Glass · stone · porcelain','Duvar · zemin · havuz':'Wall · floor · pool',
    'Standart ve özel ölçü seçenekleri':'Standard and custom size options','Akrilik · mineral döküm · cam':'Acrylic · mineral cast · glass',
    'Zemin üstü · gömme · bağımsız':'Floor-mounted · recessed · freestanding','Koleksiyona göre değişken':'Varies by collection',
    'Pirinç · paslanmaz çelik · cam':'Brass · stainless steel · glass','Duvar veya tezgah':'Wall or countertop',
    'Projeye özel':'Custom to project','Seçili yüzey ve malzeme kombinasyonları':'Selected finish and material combinations',
    'Uygulamaya göre':'Application-specific','Projeye göre':'Project-specific','Koleksiyona göre':'Collection-specific',
    'Teknik özellikler proje gereksinimlerine göre belirlenir.':'Technical specifications are determined according to project requirements.',
    'Armatür deliği, taşma kanalı ve montaj tipine göre farklı teknik seçenekler sunulur.':'Technical options vary by tap hole, overflow and installation type.',
    'Isıl güç ihtiyacı, tesisat bağlantısı ve mekan ölçüsüne göre ürün seçimi yapılır.':'Products are selected according to heat output, plumbing connection and room dimensions.',
    'Islak hacim altyapısı, mekanik gereksinimler ve kullanıcı kapasitesi birlikte planlanır.':'Wet-area infrastructure, mechanical requirements and user capacity are planned together.',
    'Debi, basınç, bağlantı ve kaplama alternatifleri teknik projeye göre seçilir.':'Flow, pressure, connection and finish options are selected according to the technical project.',
    'Yalıtım detayı, çıkış yönü ve zemin yüksekliğine uygun kanal seçimi yapılır.':'The channel is selected according to waterproofing details, outlet direction and floor height.',
    'Kalınlık, kaymazlık, derz ve uygulama yüzeyi proje koşullarına göre değerlendirilir.':'Thickness, slip resistance, joints and substrate are evaluated according to project conditions.',
    'Islak hacim ve havuz uygulamaları için yüzey, derz ve kimyasal dayanım seçenekleri incelenir.':'Finish, grout and chemical resistance options are assessed for wet areas and pools.',
    'Mekan ölçüsü, gider konumu ve cam güvenlik kriterlerine göre ürün yapılandırılır.':'The product is configured according to room dimensions, drain position and glass safety criteria.',
    'Montaj noktaları, yüzey rengi ve kullanım senaryosu ürün ailesiyle birlikte seçilir.':'Mounting points, finish colour and usage scenario are selected with the product family.',
    'Özel tasarım talepleri teknik ekip ve üretici iş birliğiyle projelendirilir.':'Bespoke design requests are developed with the technical team and manufacturer.'
  };
  Object.entries(contentTranslations).forEach(([key,value])=>translations.set(key,value));

  const detailTranslations = {
    'SEÇİLİ PROJE':'SELECTED PROJECT','Mekana Değer Katan Çözüm':'A Solution That Adds Value to the Space',
    'Malzeme':'Material','Montaj / Uygulama':'Installation / Application','Uygulama':'Application',
    'Yüzey Seçenekleri':'Finish Options','Bilgi Alın':'Request Information','Benzer Bir Proje İçin Görüşün':'Discuss a Similar Project',
    'İyi tasarlanmış bir mekan, yalnızca güzel ürünlerin bir araya gelmesiyle değil; ölçü, malzeme, ışık ve kullanım alışkanlıklarının aynı bütün içinde değerlendirilmesiyle oluşur. Bu nedenle seçim sürecinin ilk adımı mekanın ihtiyaçlarını doğru tanımlamaktır.':'A well-designed space is created not simply by combining beautiful products, but by considering dimensions, materials, light and patterns of use as one coherent whole. The first step is therefore to define the needs of the space accurately.',
    'Yüzeylerin birbiriyle kurduğu ilişki, ürünlerin kullanım konforu ve uzun ömürlü olması tasarım kararlarının merkezinde yer almalıdır. Sade bir renk paleti, doğal dokular ve doğru oranlar zamansız bir görünüm oluşturur.':'The relationship between surfaces, user comfort and product longevity should remain central to every design decision. A restrained colour palette, natural textures and considered proportions create a timeless appearance.',
    'Ürün seçerken yalnızca görünümü değil, teknik ölçüleri ve uygulama koşullarını da birlikte ele almak gerekir. Numuneleri gün ışığında incelemek ve alternatifleri mekanın gerçek ölçüleri üzerinden karşılaştırmak karar sürecini kolaylaştırır.':'Product selection should consider not only appearance but also technical dimensions and installation conditions. Reviewing samples in daylight and comparing alternatives against the actual dimensions of the space makes decision-making easier.',
    '“Zamansız mekanlar, dikkat çeken parçalardan önce doğru kurulmuş bir bütünlüğe dayanır.”':'“Timeless spaces depend on a carefully composed whole before they depend on statement pieces.”',
    'Likya Yapı showroom’unda koleksiyonları yakından inceleyebilir, projenize uygun ürün ve yüzey seçeneklerini uzman ekibimizle birlikte değerlendirebilirsiniz.':'At the Likya Yapı showroom, you can experience the collections and review product and finish options suited to your project with our expert team.',
    'Birlikte değerlendirelim.':'Let Us Review It Together.','İletişime Geçin →':'Contact Us →',
    'Şehir / İlçe':'City / District','Projenizin kapsamını, ihtiyaçlarınızı ve varsa ölçü bilgilerini paylaşabilirsiniz.':'Share your project scope, requirements and dimensions, if available.',
    'İletişim formu seçimi':'Contact form selection','Likya Yapı İzmir Showroom konumu':'Likya Yapı Izmir Showroom location',
    'Likya Yapı adresini Google Haritalar\'da aç':'Open Likya Yapı in Google Maps','Blog yazısını paylaş':'Share blog article'
  };
  Object.entries(detailTranslations).forEach(([key,value])=>translations.set(key,value));

  /* Dynamically rendered product and reference-detail content. */
  Object.entries({
    'Fikir aşamasından uygulamaya kadar projenizin her adımında yanınızdayız.':'We support you at every stage of your project, from concept to implementation.',
    'PROJE TÜRÜ':'PROJECT TYPE','LOKASYON':'LOCATION','Ticari projesi':'Commercial project',
    'Konut ve ortak yaşam alanları':'Residential and shared living areas',
    'Doğal taş · ahşap dokular · özel detaylar':'Natural stone · wood textures · bespoke details',
    'Banyo Dolapları koleksiyonlarını keşfedin':'Explore Bathroom Furniture collections',
    'Seçkin markaları ve bu ürün grubuna ait koleksiyonları inceleyin.':'Explore distinguished brands and collections in this product group.',
    'Banyo Dolapları koleksiyonları':'Bathroom Furniture collections','Laufen Koleksiyonları':'Laufen Collections',
    'Laufen markasının seçili ürünlerini ve teknik detaylarını inceleyin.':'Explore selected Laufen products and their technical details.',
    'BANYO DOLAPLARI · ÜRÜN DETAYI':'BATHROOM FURNITURE · PRODUCT DETAIL',
    'Banyo dolapları; estetik, işlevsellik ve akıllı depolama çözümlerini bir araya getirir.':'Bathroom furniture brings together aesthetics, functionality and intelligent storage solutions.',
    'BENZER ÜRÜNLER':'RELATED PRODUCTS','Benzer Ürünleri Keşfedin':'Discover Similar Products',
    'İnceleyin':'View','Ürünü İnceleyin':'View Product',
    'Hakkımızda':'About Us','Tüm Ürünleri İnceleyin':'View All Products','Görüntüle':'View',
    'Tüm Projeleri İnceleyin':'View All Projects','Randevu Alın':'Book an Appointment',
    'Bizimle İletişime Geçin':'Contact Us','Koleksiyonları İnceleyin':'Explore Collections',
    'Projenizi Bizimle Paylaşın':'Share Your Project With Us',
    'Ad Soyad*':'Full Name*','E-posta Adresi*':'Email Address*','Telefon Numaranız*':'Phone Number*',
    'Proje türü':'Project type','Projenizden kısaca bahsedin':'Tell us briefly about your project',
    'İletişim bilgilerimin talebim hakkında benimle iletişime geçilmesi amacıyla kullanılmasını kabul ediyorum.':'I consent to my contact details being used to contact me about my enquiry.',
    'ÜRÜN BİLGİ TALEBİ':'PRODUCT ENQUIRY','Formu kapat':'Close form','Ürün bilgi formu':'Product enquiry form',
    'hakkında bilgi almak için formu doldurun, ekibimiz sizinle iletişime geçsin.':'— complete the form to request information and our team will contact you.',
    'Seçili ürün':'Selected product',
    'PROJELER':'PROJECTS','Pazartesi - Cuma':'Monday - Friday','Pazartesi – Cuma /':'Monday – Friday /',
    'Ürün koleksiyonlarımızı yerinde keşfetmek ve uzman ekibimizden ilham almak için sizi showroom’umuza bekliyoruz.':'Visit our showroom to experience our product collections and draw inspiration from our expert team.'
  }).forEach(([key,value])=>translations.set(key,value));

  const originals = new WeakMap();
  const attrOriginals = new WeakMap();
  let language = localStorage.getItem('likya-language') === 'en' ? 'en' : 'tr';
  let applying = false;

  function translatedText(text) {
    const trimmed = text.trim();
    if (!trimmed) return text;
    let result = translations.get(trimmed);
    if (!result) {
      const productCopy = trimmed.match(/^(.+), (.+) sunar\. (.+) ürün grubundaki seçenekler, projenin tasarım dili ve kullanım ihtiyaçlarıyla birlikte değerlendirilebilir\.$/);
      if (productCopy) {
        const brandCopy = productCopy[2].replace(/^./,letter=>letter.toLocaleUpperCase('tr-TR'))+'.';
        const translatedCopy = translations.get(brandCopy);
        if (translatedCopy) result = `${productCopy[1]} offers ${translatedCopy.replace(/\.$/,'').replace(/^./,letter=>letter.toLowerCase())}. Options in the ${translations.get(productCopy[3]) || productCopy[3]} category can be considered alongside the project’s design language and usage requirements.`;
      }
    }
    if (!result) {
      const count = trimmed.match(/^(\d+) katalog$/i);
      if (count) result = `${count[1]} catalogues`;
    }
    if (!result) {
      const collection = trimmed.match(/^(.+) koleksiyonunu keşfedin$/i);
      if (collection) result = `Explore the ${collection[1]} collection`;
    }
    if (!result) {
      const collections = trimmed.match(/^(.+) koleksiyonlar(?:ı|ını keşfedin)$/i);
      if (collections) {
        const name=translations.get(collections[1]) || collections[1];
        result=/keşfedin$/i.test(trimmed)?`Explore ${name} collections`:`${name} collections`;
      }
    }
    if (!result) {
      const brand = trimmed.match(/^(.+) markasının seçili ürünlerini ve teknik detaylarını inceleyin\.$/i);
      if (brand) result=`Explore selected ${brand[1]} products and their technical details.`;
    }
    if (!result) {
      const detail = trimmed.match(/^(.+) · ÜRÜN DETAYI$/i);
      if (detail) result=`${translations.get(detail[1]) || detail[1]} · PRODUCT DETAIL`;
    }
    if (!result && /\bprojesinde\b/i.test(trimmed)) {
      const projectName = trimmed.split(/\s+projesinde\b/i)[0];
      result = `In the ${projectName} project, architectural character, material quality and user needs were considered together to create a coherent and enduring solution.`;
    }
    if (!result) {
      const area = trimmed.match(/^(.+) alanları$/i);
      if (area) result = `${area[1]} areas`;
    }
    if (!result) {
      const date = trimmed.replace(/Ocak/g,'January').replace(/Şubat/g,'February').replace(/Mart/g,'March').replace(/Nisan/g,'April').replace(/Mayıs/g,'May').replace(/Haziran/g,'June').replace(/Temmuz/g,'July').replace(/Ağustos/g,'August').replace(/Eylül/g,'September').replace(/Ekim/g,'October').replace(/Kasım/g,'November').replace(/Aralık/g,'December');
      if(date!==trimmed) result=date;
    }
    if (!result && /Pazartesi\s*[–-]\s*Cuma/i.test(trimmed)) result=trimmed.replace(/Pazartesi\s*[–-]\s*Cuma/i,'Monday – Friday');
    if (!result) return text;
    return text.replace(trimmed, result);
  }

  function translateTree(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return /\S/.test(node.nodeValue || '') && !node.parentElement.closest('script,style')
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originals.has(node)) originals.set(node,node.nodeValue);
      const original=originals.get(node);
      const nextValue=language==='en'?translatedText(original):original;
      if(node.nodeValue!==nextValue) node.nodeValue=nextValue;
    });
    root.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(element => {
      if (!attrOriginals.has(element)) {
        const saved={}; ['placeholder','aria-label','title','alt'].forEach(attr=>{if(element.hasAttribute(attr))saved[attr]=element.getAttribute(attr)});
        attrOriginals.set(element,saved);
      }
      const saved=attrOriginals.get(element);
      Object.entries(saved).forEach(([attr,value])=>{
        const nextValue=language==='en'?translatedText(value):value;
        if(element.getAttribute(attr)!==nextValue) element.setAttribute(attr,nextValue);
      });
    });
    root.querySelectorAll('input[data-product-subject]').forEach(input=>{
      if(!input.dataset.i18nOriginalValue) input.dataset.i18nOriginalValue=input.value;
      const original=input.dataset.i18nOriginalValue;
      input.value=language==='en'
        ? original.replace(' hakkında bilgi talebi',' information request')
        : original;
    });
  }

  /* Some late layout scripts recreate CTA labels after the general tree pass.
     Re-apply the visible button copy on every refresh so English never falls
     back to the Turkish render-time labels. */
  const buttonCopy = new Map(Object.entries({
    'Hakkımızda':'About Us','Hakkımızda →':'About Us →',
    'Tüm Ürünleri İnceleyin':'View All Products','Tüm Ürünleri İnceleyin →':'View All Products →',
    'Görüntüle':'View','Görüntüle →':'View →',
    'Tüm Projeleri İnceleyin':'View All Projects','Tüm Projeleri İnceleyin →':'View All Projects →',
    'Randevu Alın':'Book an Appointment','Randevu Alın →':'Book an Appointment →',
    'Bizimle İletişime Geçin':'Contact Us','Bizimle İletişime Geçin →':'Contact Us →',
    'Koleksiyonları İnceleyin':'Explore Collections',
    'Ürünü İnceleyin':'View Product',
    'Projenizi Bizimle Paylaşın':'Share Your Project With Us','Projenizi Bizimle Paylaşın →':'Share Your Project With Us →'
  }));
  const buttonCopyReverse = new Map([...buttonCopy].map(([tr,en])=>[en,tr]));
  function enforceButtonCopy(root=document){
    root.querySelectorAll('a,button,[role="button"],.catalog-card-label').forEach(element=>{
      const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
      const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node=>{
        const value=node.nodeValue||''; const trimmed=value.trim(); if(!trimmed)return;
        const replacement=language==='en'?buttonCopy.get(trimmed):buttonCopyReverse.get(trimmed);
        if(replacement) node.nodeValue=value.replace(trimmed,replacement);
      });
      const whole=element.textContent.trim();
      const replacement=language==='en'?buttonCopy.get(whole):buttonCopyReverse.get(whole);
      if(replacement && element.children.length===0) element.textContent=replacement;
    });
  }
  function enforceCatalogueHeading(root=document){
    const heading=root.querySelector('.catalogue-intro h2');
    if(!heading)return;
    const desired=language==='en'?'Discover Collections at the Source':'Koleksiyonları Kaynağından Keşfedin';
    if(heading.textContent.replace(/\s+/g,' ').trim()===desired)return;
    heading.innerHTML=language==='en'?'Discover Collections<br>at the Source':'Koleksiyonları<br>Kaynağından Keşfedin';
  }

  function flag(code) {
    if(code==='tr') return '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#E30A17"/><circle cx="12" cy="10" r="5.6" fill="#fff"/><circle cx="13.7" cy="10" r="4.5" fill="#E30A17"/><path d="m19.2 10 2.7-.88-1.67 2.3v-2.84l1.67 2.3z" fill="#fff"/></svg>';
    return '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="3"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>';
  }

  function installPicker() {
    const button=document.querySelector('.header .lang');
    if(!button || button.dataset.i18nReady) return;
    button.dataset.i18nReady='true';
    button.innerHTML=`<span>${language.toUpperCase()}</span>${flag(language)}`;
    button.setAttribute('aria-label',language==='en'?'Current language: English':'Aktif dil: Türkçe');
    const menu=document.createElement('div'); menu.className='language-menu language-switch-inline';
    menu.innerHTML=`<button type="button" data-language="tr" aria-label="Türkçe" title="Türkçe">${flag('tr')}</button><button type="button" data-language="en" aria-label="English" title="English">${flag('en')}</button>`;
    button.parentElement.appendChild(menu);
    button.hidden=true;
    menu.querySelectorAll('[data-language]').forEach(option=>option.classList.toggle('selected',option.dataset.language===language));
    menu.querySelectorAll('[data-language]').forEach(option=>option.addEventListener('click',event=>{
      event.preventDefault(); event.stopPropagation(); setLanguage(option.dataset.language);
    }));
  }

  function installMobileNavigation(){
    const header=document.querySelector('.header');
    if(!header)return;
    let drawer=document.getElementById('mobile-navigation-drawer');
    if(!drawer){
      drawer=document.createElement('nav');
      drawer.id='mobile-navigation-drawer';
      drawer.className='mobile-navigation-drawer';
      drawer.setAttribute('aria-label','Mobil menü');
      document.body.appendChild(drawer);
    }
    const items=language==='en'
      ?[['/hakkimizda','About Us'],['/urunler','Products'],['/markalar','Brands'],['/referanslar','References'],['/profesyoneller','Professional Solutions'],['/blog','Blog'],['/iletisim','Contact']]
      :[['/hakkimizda','Hakkımızda'],['/urunler','Ürünler'],['/markalar','Markalar'],['/referanslar','Referanslar'],['/profesyoneller','Profesyonel Çözümler'],['/blog','Blog'],['/iletisim','İletişim']];
    const drawerMarkup=items.map(([href,label])=>`<a href="${href}">${label}<span aria-hidden="true">›</span></a>`).join('');
    if(drawer.dataset.menuLanguage!==language || drawer.innerHTML!==drawerMarkup){
      drawer.innerHTML=drawerMarkup;
      drawer.dataset.menuLanguage=language;
    }
    let toggle=header.querySelector('.mobile-menu-toggle');
    if(!toggle){
      toggle=document.createElement('button');
      toggle.type='button';
      toggle.className='mobile-menu-toggle';
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-controls','mobile-navigation-drawer');
      toggle.setAttribute('aria-label','Menüyü aç');
      toggle.innerHTML='<span></span><span></span><span></span>';
      header.appendChild(toggle);
    }
    const close=()=>{
      header.classList.remove('mobile-menu-open');
      document.body.classList.remove('mobile-menu-page-open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Menüyü aç');
    };
    if(toggle.dataset.mobileNavigationBound!=='true'){
      toggle.dataset.mobileNavigationBound='true';
      toggle.addEventListener('click',event=>{
        event.preventDefault();event.stopPropagation();
        const open=!header.classList.contains('mobile-menu-open');
        header.classList.toggle('mobile-menu-open',open);
        document.body.classList.toggle('mobile-menu-page-open',open);
        toggle.setAttribute('aria-expanded',String(open));
        toggle.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');
      });
      document.addEventListener('click',event=>{if(!header.contains(event.target))close()});
      document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
    }
    /* Use a real page navigation for the full-screen mobile drawer.  The
       homepage has its own SPA click interceptor; pointerup runs before that
       click path and keeps iOS/Android taps reliable on every route. */
    const navigateFromDrawer=event=>{
      const link=event.target.closest('a[href]');
      if(!link)return;
      const url=new URL(link.href,window.location.href);
      if(url.origin!==window.location.origin)return;
      event.preventDefault();
      event.stopPropagation();
      close();
      window.location.assign(url.href);
    };
    drawer.onpointerup=navigateFromDrawer;
    drawer.onclick=navigateFromDrawer;
  }

  function arrangeMobileBrandCarousel(){
    const carousel=document.querySelector('.brands-carousel');
    if(!carousel)return;
    const bar=carousel.querySelector('.brands-carousel-bar');
    const actions=carousel.querySelector('.brands-carousel-actions');
    const windowElement=carousel.querySelector('.brands-carousel-window');
    if(!bar||!actions||!windowElement)return;
    if(window.matchMedia('(max-width:560px)').matches){
      if(actions.parentElement!==windowElement)windowElement.appendChild(actions);
    }else if(actions.parentElement!==bar){
      bar.appendChild(actions);
    }
  }

  function arrangeHomeProductGroups(){
    const section=document.querySelector('[data-home-product-groups]');
    if(!section)return;
    if(!section.homeProductRefresh){
      const track=section.querySelector('[data-home-product-track]');
      const extra=section.querySelector('[data-home-product-extra]');
      const cards=[...track.children,...extra.content.children];
      section.homeProductCards=cards;
      const previous=section.querySelector('[data-home-product-prev]');
      const next=section.querySelector('[data-home-product-next]');
      const status=section.querySelector('[data-home-product-status]');
      const controls=section.querySelector('.home-product-controls');
      let page=0,mode='';
      section.homeProductRefresh=()=>{
        const current=window.matchMedia('(max-width:560px)').matches?'mobile':window.matchMedia('(max-width:850px)').matches?'tablet':'desktop';
        if(current!==mode){page=0;mode=current;}
        let frame=section.querySelector('.home-product-carousel');
        if(mode==='mobile'){
          if(frame){section.insertBefore(track,extra);section.appendChild(controls);frame.remove();}
        }else if(!frame){
          frame=document.createElement('div');frame.className='home-product-carousel';
          section.insertBefore(frame,track);frame.append(track,controls);
        }
        const size=mode==='tablet'?2:4;
        const count=mode==='mobile'?1:Math.ceil(cards.length/size);
        page=Math.max(0,Math.min(page,count-1));
        const visible=cards.slice(page*size,page*size+size);
        if(track.children.length!==visible.length||visible.some((card,index)=>track.children[index]!==card))track.replaceChildren(...visible);
        previous.disabled=page===0;next.disabled=page===count-1;
        const pageText=(page+1)+' / '+count;
        if(status.textContent!==pageText)status.textContent=pageText;
      };
      previous.addEventListener('click',()=>{page--;section.homeProductRefresh();});
      next.addEventListener('click',()=>{page++;section.homeProductRefresh();});
    }
    section.homeProductRefresh();
  }

  function arrangeMobileDetailCarousels(){
    const mobile=window.matchMedia('(max-width:560px)').matches;
    document.querySelectorAll('.related-products').forEach(section=>{
      const head=section.querySelector('.related-products-head');
      const actions=section.querySelector('.related-products-actions');
      const track=section.querySelector('[data-related-track]');
      let mobileWindow=section.querySelector(':scope > .related-products-mobile-window');
      if(!head||!actions||!track)return;
      if(mobile){
        if(!mobileWindow){
          mobileWindow=document.createElement('div');
          mobileWindow.className='related-products-mobile-window';
          section.insertBefore(mobileWindow,track);
          mobileWindow.appendChild(track);
        }
        if(actions.parentElement!==mobileWindow)mobileWindow.appendChild(actions);
      }else{
        if(actions.parentElement!==head)head.appendChild(actions);
        if(mobileWindow){
          section.insertBefore(track,mobileWindow);
          mobileWindow.remove();
        }
      }
    });
    document.querySelectorAll('.reference-used-products').forEach(section=>{
      const head=section.querySelector('.reference-used-products-head');
      const actions=section.querySelector('.reference-refresh-controls');
      const viewport=section.querySelector('.reference-products-viewport');
      if(!head||!actions||!viewport)return;
      if(mobile){
        if(actions.parentElement!==viewport)viewport.appendChild(actions);
      }else if(actions.parentElement!==head){
        head.appendChild(actions);
      }
    });
  }

  /* Keep the hero, gallery stage, thumbnails and zoom view on the exact same
     image source. Some legacy detail-page scripts replace only the visible
     image, leaving the thumbnail key and zoom background out of sync. */
  function installUnifiedDetailGalleries(){
    document.querySelectorAll('[data-product-gallery]').forEach(gallery=>{
      const stage=gallery.querySelector('[data-gallery-stage]');
      const main=gallery.querySelector('[data-gallery-main]');
      const zoom=gallery.querySelector('[data-gallery-zoom]');
      const thumbs=[...gallery.querySelectorAll('[data-gallery-image]')];
      if(!stage||!main||!thumbs.length)return;

      const imageSource=thumb=>{
        const image=thumb.querySelector('img');
        return image?.currentSrc||image?.src||'';
      };
      const activeIndex=()=>Math.max(0,thumbs.findIndex(thumb=>thumb.classList.contains('active')));
      const hero=()=>document.querySelector('.hero.inner-hero');
      const applySource=(index,updateSelection=true)=>{
        const normalized=(index+thumbs.length)%thumbs.length;
        const source=imageSource(thumbs[normalized]);
        if(!source)return;
        if(updateSelection)thumbs.forEach((thumb,thumbIndex)=>{
          const active=thumbIndex===normalized;
          thumb.classList.toggle('active',active);
          thumb.setAttribute('aria-pressed',active?'true':'false');
        });
        if(main.src!==source)main.src=source;
        main.dataset.unifiedGallerySource=source;
        if(zoom)zoom.style.backgroundImage=`url("${source.replace(/"/g,'\\"')}")`;
        const detailHero=hero();
        if(detailHero){
          detailHero.style.backgroundImage=`linear-gradient(90deg,rgba(15,12,10,.72),rgba(15,12,10,.2)),url("${source.replace(/"/g,'\\"')}")`;
          detailHero.style.backgroundPosition='center';
        }
        return {index:normalized,source};
      };
      const sync=()=>applySource(activeIndex(),false);

      if(!gallery.dataset.unifiedGalleryReady){
        gallery.dataset.unifiedGalleryReady='true';
        thumbs.forEach((thumb,index)=>thumb.addEventListener('click',()=>requestAnimationFrame(()=>applySource(index))));
        gallery.querySelector('[data-gallery-prev]')?.addEventListener('click',()=>requestAnimationFrame(sync));
        gallery.querySelector('[data-gallery-next]')?.addEventListener('click',()=>requestAnimationFrame(sync));

        stage.addEventListener('click',event=>{
          if(event.target.closest('.product-gallery-nav'))return;
          if(!window.matchMedia('(hover:none),(max-width:850px)').matches)return;
          const selected=applySource(activeIndex(),false);
          if(!selected)return;
          openDetailGalleryLightbox(gallery,thumbs,selected.index,applySource);
        });

        new MutationObserver(()=>{
          if(gallery.dataset.unifiedGallerySyncing)return;
          gallery.dataset.unifiedGallerySyncing='true';
          requestAnimationFrame(()=>{
            sync();
            delete gallery.dataset.unifiedGallerySyncing;
          });
        }).observe(gallery,{subtree:true,attributes:true,attributeFilter:['class','src']});
      }
      sync();
    });
  }

  function openDetailGalleryLightbox(gallery,thumbs,startIndex,applySource){
    document.querySelector('.detail-gallery-lightbox')?.remove();
    let index=startIndex;
    const overlay=document.createElement('div');
    overlay.className='detail-gallery-lightbox';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label',language==='en'?'Image zoom':'Görsel yakınlaştırma');
    overlay.innerHTML=`<button type="button" class="detail-gallery-lightbox-close" aria-label="${language==='en'?'Close':'Kapat'}">×</button><button type="button" class="detail-gallery-lightbox-nav is-prev" aria-label="${language==='en'?'Previous image':'Önceki görsel'}">‹</button><img alt=""><button type="button" class="detail-gallery-lightbox-nav is-next" aria-label="${language==='en'?'Next image':'Sonraki görsel'}">›</button>`;
    const image=overlay.querySelector('img');
    const show=next=>{
      const selected=applySource(next);
      if(!selected)return;
      index=selected.index;
      image.src=selected.source;
    };
    const close=()=>{
      overlay.remove();
      document.body.classList.remove('detail-gallery-lightbox-open');
      document.removeEventListener('keydown',onKeydown);
    };
    const onKeydown=event=>{
      if(event.key==='Escape')close();
      if(event.key==='ArrowLeft')show(index-1);
      if(event.key==='ArrowRight')show(index+1);
    };
    overlay.querySelector('.detail-gallery-lightbox-close').addEventListener('click',close);
    overlay.querySelector('.is-prev').addEventListener('click',event=>{event.stopPropagation();show(index-1)});
    overlay.querySelector('.is-next').addEventListener('click',event=>{event.stopPropagation();show(index+1)});
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    let touchStart=0;
    overlay.addEventListener('touchstart',event=>{touchStart=event.changedTouches[0].clientX},{passive:true});
    overlay.addEventListener('touchend',event=>{
      const distance=event.changedTouches[0].clientX-touchStart;
      if(Math.abs(distance)>45)show(index+(distance<0?1:-1));
    },{passive:true});
    document.body.appendChild(overlay);
    document.body.classList.add('detail-gallery-lightbox-open');
    document.addEventListener('keydown',onKeydown);
    show(index);
    overlay.querySelector('.detail-gallery-lightbox-close').focus();
  }

  function scheduleUnifiedDetailGalleries(){
    requestAnimationFrame(()=>requestAnimationFrame(installUnifiedDetailGalleries));
  }

  let revealSequence=0;
  function beginStablePageRender(){
    revealSequence+=1;
    document.documentElement.classList.add('likya-booting');
  }
  function revealStablePage(){
    const sequence=++revealSequence;
    const fontsReady=document.fonts?.ready||Promise.resolve();
    Promise.race([fontsReady,new Promise(resolve=>setTimeout(resolve,700))]).then(()=>{
      requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
        if(sequence!==revealSequence)return;
        installUnifiedDetailGalleries();
        document.documentElement.classList.remove('likya-booting');
      })));
    });
  }

  function normalizeFooterSocials(){
    document.querySelectorAll('.footer .socials').forEach(socials=>{
      const linkedin=socials.querySelector('[aria-label="LinkedIn"]');
      if(linkedin)linkedin.href='https://www.linkedin.com/in/likya-yapi-9586a4176/';

      const facebook=socials.querySelector('[aria-label="Facebook"]');
      const pinterest=socials.querySelector('[aria-label="Pinterest"]');
      const target=facebook||pinterest;
      if(!target)return;
      target.href='https://tr-tr.facebook.com/people/Likya-YAPI/100077457622130/';
      target.setAttribute('aria-label','Facebook');
      if(!target.querySelector('.facebook-modern-icon')){
        target.innerHTML='<svg class="facebook-modern-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.8l.42-3.15H13.7V7.83c0-.91.26-1.53 1.62-1.53h1.73V3.48c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.34v2.16H7.47V13h2.83v8h3.4Z"></path></svg>';
      }
    });
  }

  function normalizeReferenceArrows(){
    document.querySelectorAll('.reference-layout-refresh .reference-refresh-controls button').forEach(button=>{
      if(button.classList.contains('has-modern-chevron'))return;
      const previous=button.hasAttribute('data-refresh-prev');
      button.classList.add('has-modern-chevron');
      button.innerHTML=previous
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"></path></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"></path></svg>';
    });
    document.querySelectorAll('.reference-layout-refresh .reference-used-product-link').forEach(link=>{
      if(link.classList.contains('has-modern-chevron'))return;
      link.classList.add('has-modern-chevron');
      link.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"></path></svg>';
    });
  }

  function lockContactFormFrame(){
    const area=document.querySelector('.contact-form-area');
    const tabs=area?.querySelector('.contact-form-tabs');
    const panels=area?[...area.querySelectorAll('.contact-choice-panel')]:[];
    if(!area||!tabs||!panels.length)return;
    area.style.height='auto';
    area.style.minHeight='0';
    requestAnimationFrame(()=>{
      if(!document.documentElement.contains(area))return;
      const areaStyle=getComputedStyle(area);
      const tabsStyle=getComputedStyle(tabs);
      const verticalPadding=parseFloat(areaStyle.paddingTop)+parseFloat(areaStyle.paddingBottom);
      const tabSpace=tabs.offsetHeight+parseFloat(tabsStyle.marginBottom);
      const panelHeight=Math.max(...panels.map(panel=>panel.scrollHeight));
      const lockedHeight=Math.ceil(verticalPadding+tabSpace+panelHeight)+2;
      area.style.height=lockedHeight+'px';
      area.style.minHeight=lockedHeight+'px';
    });
  }

  function installCatalogueSearch(){
    const results=document.querySelector('.catalogue-archive .catalogue-results');
    const head=results?.querySelector('.catalogue-results-head');
    const filters=document.querySelector('.catalogue-archive .catalogue-filters');
    if(!results||!head||!filters)return;
    let search=results.querySelector('.catalogue-search');
    if(!search){
      search=document.createElement('label');
      search.className='catalogue-search';
      search.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg><span class="catalogue-search-label">Kataloglarda ara</span><input type="search" autocomplete="off" placeholder="Katalog, marka veya kategori ara"><button type="button" aria-label="Aramayı temizle">×</button>';
      results.insertBefore(search,head);
    }
    const input=search.querySelector('input');
    const clear=search.querySelector('button');
    const apply=()=>{
      const query=(input.value||'').trim().toLocaleLowerCase('tr-TR');
      const selected=filters.querySelector('[data-catalogue-filter].selected')?.dataset.catalogueFilter||'Tüm Kataloglar';
      let visible=0;
      results.querySelectorAll('[data-catalogue-category]').forEach(card=>{
        const category=card.dataset.catalogueCategory||'';
        const inCategory=selected==='Tüm Kataloglar'||category===selected;
        const searchable=(card.textContent+' '+category).toLocaleLowerCase('tr-TR');
        const show=inCategory&&(!query||searchable.includes(query));
        card.hidden=!show;
        if(show)visible++;
      });
      const count=results.querySelector('[data-catalogue-count]');
      if(count&&count.textContent!==visible+' katalog')count.textContent=visible+' katalog';
      search.classList.toggle('has-value',Boolean(query));
    };
    if(!search.dataset.searchReady){
      search.dataset.searchReady='true';
      input.addEventListener('input',apply);
      clear.addEventListener('click',()=>{input.value='';input.focus();apply()});
    }
    filters.querySelectorAll('[data-catalogue-filter]').forEach(button=>{
      if(button.dataset.catalogueSearchBound)return;
      button.dataset.catalogueSearchBound='true';
      button.addEventListener('click',()=>setTimeout(apply,0));
    });
    apply();
  }

  function setLanguage(next) {
    language=next==='en'?'en':'tr'; localStorage.setItem('likya-language',language);
    applying=true; document.documentElement.lang=language; translateTree(document.body); enforceButtonCopy(document); enforceCatalogueHeading(document); installPicker(); installMobileNavigation(); arrangeMobileBrandCarousel(); arrangeMobileDetailCarousels(); arrangeHomeProductGroups(); normalizeFooterSocials(); normalizeReferenceArrows(); installCatalogueSearch(); lockContactFormFrame(); scheduleUnifiedDetailGalleries();
    document.querySelectorAll('.header .lang').forEach(button=>{button.querySelector('span').textContent=language.toUpperCase(); const svg=button.querySelector('svg'); if(svg)svg.outerHTML=flag(language)});
    document.querySelectorAll('.language-menu [data-language]').forEach(option=>option.classList.toggle('selected',option.dataset.language===language));
    document.title=language==='en'?'Likya Yapı | Distinguished Design':'Likya Yapı';
    applying=false;
  }

  function refresh() { if(applying)return; applying=true; installPicker(); installMobileNavigation(); arrangeMobileBrandCarousel(); arrangeMobileDetailCarousels(); arrangeHomeProductGroups(); translateTree(document.body); enforceButtonCopy(document); enforceCatalogueHeading(document); normalizeFooterSocials(); normalizeReferenceArrows(); installCatalogueSearch(); lockContactFormFrame(); scheduleUnifiedDetailGalleries(); document.documentElement.lang=language; applying=false; }
  document.addEventListener('click',event=>{
    const option=event.target.closest && event.target.closest('[data-language]');
    if(option){event.preventDefault();event.stopPropagation();setLanguage(option.dataset.language);return}
    document.querySelectorAll('.language-menu [data-language]').forEach(option=>option.classList.toggle('selected',option.dataset.language===language));
  },true);
  document.addEventListener('DOMContentLoaded',()=>{refresh();revealStablePage()});
  window.addEventListener('hashchange',()=>{beginStablePageRender();setTimeout(()=>{refresh();revealStablePage()},0)});
  window.addEventListener('resize',()=>{arrangeMobileBrandCarousel();arrangeMobileDetailCarousels();arrangeHomeProductGroups();lockContactFormFrame()});
  if(document.fonts?.ready)document.fonts.ready.then(lockContactFormFrame);
  let refreshQueued=false;
  new MutationObserver(records=>{
    if(applying || refreshQueued)return;
    const relevant=records.some(record=>{
      const target=record.target.nodeType===Node.ELEMENT_NODE?record.target:record.target.parentElement;
      return !target?.closest?.('#mobile-navigation-drawer,.language-menu');
    });
    if(!relevant)return;
    refreshQueued=true;
    requestAnimationFrame(()=>{refreshQueued=false;refresh()});
  }).observe(document.documentElement,{childList:true,subtree:true});
})();
