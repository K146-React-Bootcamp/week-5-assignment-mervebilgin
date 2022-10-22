## React.memo, useMemo ve useCallback Nedir?

Hesaplanması uzun süren işlevlerimizin sonuçlarını saklayarak aynı girdiler için aynı işlev çağrıldığında: işlevin tekrar çalıştırılmadan saklanılan sonucunun dönülmesine _Memoization_ denir.

Fakat sonuçların saklanması işlemi ucuz değildir. Bu yüzden sadece maliyetli ve aynı girdilerle aynı çıktıları üreten işlevlerde kullanılması önerilir.

Kendi başınıza kuracağınız bir yapı da memoization olabilir. Bu kullandığınız dilin bir özelliği değil programlama da bir tekniğin adıdır.

### React.memo
Bileşenimizi sardığımız üst katman bir bileşendir. Bileşenimizin aldığı props ları yüzeysel olarak kontrol ederek, bir değişiklik yoksa son render edilen sonucu kullanır.

Memogörsel

props kontrolleri üzerinde yetki sahibi olmak için, React.memo ‘ya ikinci parametre olarak bir işlev veririz. Bu işlev iki parametre alır. İlki mevcut props değerleri, ikincisi ise yeni props değerleridir. Bu işlev true değeri döndüğünde props değişikliği olmadığı için yeniden render işlemi yapılmaz. false döndüğünde bileşenimiz yeniden render edilir.


### useMemo
Memoization da bahsettiğimiz tekniğin React hook’u olarak yapılmasını sağlayan bir işlevdir. İki parametre alır, ilki memoization uygulamak istediğimiz işlemi tutan bir işlevdir. Diğeri o işlemin girdilerini tutan bir deps dizisidir.

memo 3

Yukarıdaki görsele göre memoizedValue , a ve b girdileri aynı olduğu sürece önceden üretilen değeri döndürecek. Tekrar computeExpensiveValue işlevini çalıştırmayacaktır. Memoization başlığı altında da bahsettiğimiz gibi işlemimiz buna değecek pahalı bir işlem olmalıdır. Basit işlemlerin sonuçlarının saklanma ve kontrol giderleri, işlemlerin kendilerinden daha maliyetli olabilir.


### useCallback
useMemo nun aksine aldığı işlevin sonucunu saklamak yerine işlevin kendisini saklar. deps olarak verilen değerleri değişmediği sürece de sakladığı işlevi döndürür.

memo 4

Bunun faydası şudur. Bileşen içinde tanımladığımız işlevler, o bileşen yeniden render edildiğinde yeniden tanımlanır ve farklı bir referansa sahip olur. Bu yüzden bu işlevler props olarak iletildiğinde aslında işlev değişmemesine rağmen iletildiği bileşenin yeniden render edilmesine neden olurlar.

_Çünkü bileşenler işlev olarak aldığı propsların referanslarını karşılaştırarak değişip değişmediğini hesaplar._


_Yararlandığım kaynaklar:_
[https://aykutkardas.medium.com/react-memo-usememo-ve-usecallback-nedir](https://aykutkardas.medium.com/react-memo-usememo-ve-usecallback-nedir-31ccbdcb76c6#:~:text=Memoization%20da%20bahsetti%C4%9Fimiz%20tekni%C4%9Fin%20React,girdilerini%20tutan%20bir%20deps%20dizisidir.)
