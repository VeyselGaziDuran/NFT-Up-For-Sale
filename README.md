
# NFT Up For Sale


Bu uygulama, kullanıcının belirttiği bir klasör içerisindeki PNG veya JPG dosyalarını OpenSea.io adlı bir NFT platformuna yüklemek için kullanılır.
Öncelikle, kullanıcının OpenSea.io hesabına erişim için bir API anahtarına ihtiyacı vardır. Bu anahtar, uygulamanın kaynak kodunda yer alan "API_KEY" 
değişkenine atanmalıdır.

Uygulama, kullanıcı tarafından belirtilen "img" klasörü içerisindeki tüm PNG ve JPG dosyalarını tarar ve her bir dosyayı OpenSea.io'ya yükler. 
Her resim için, dosyanın adı "MyNFT" olarak ayarlanır ve sonraki resimler için sayısal bir değer eklenir (örneğin "MyNFT1", "MyNFT2" vb.). 
Ayrıca, her resim için açıklama "My first NFT" olarak ayarlanır ve her resim için aynı sabit fiyat "1000000000000000000" olarak ayarlanır.

Uygulama, resimlerin tümünü yüklerken bekler ve sonunda yükleme işlemi sonucu olarak dönen sonuçları yazdırır.




## Nasıl Kullanılır

- Öncelikle, OpenSea API anahtarınızı API_KEY değişkenine atamanız gerekir. Bu anahtarı OpenSea hesabınızda "API Key" sekmesinden alabilirsiniz.

- "img" klasörü içine yüklemek istediğiniz resimleri yerleştirin.

- Terminalde uygulamanın olduğu dizine gidin ve node script.js komutunu çalıştırın.

- Uygulama, "img" klasöründe bulunan PNG ve JPG uzantılı tüm resimleri yükler. Resimlerin adları "MyNFT1", "MyNFT2" gibi sayısal bir değer eklenerek otomatik olarak oluşur.

- Yükleme işlemi tamamlandıktan sonra, uygulama yüklenen NFTlerin OpenSea'daki adreslerini veya başka bilgileri konsol'da görüntüler.


  
## Not

- Lütfen dikkat edin, her NFT satışı için Ethereum ile ödeme yapmanız gerekecektir.

  
