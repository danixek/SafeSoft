<h2>🧩 Přehled projektu</h2>

<p>
    Projekt byl vypracován v rámci zadání s důrazem na
    <strong>kvalitu implementace, bezpečnost a rozšiřitelnost řešení</strong>.
    Odevzdání proběhlo po uplynutí celé dostupné lhůty záměrně, aby byl prostor
    na iterace, refaktoring a ověření funkčnosti.
</p>

<p>
    Při vývoji jsem využíval moderní nástroje včetně
    <strong>AI asistence (ChatGPT)</strong> jako podpory při hledání řešení a studiu
    neznámých konceptů. Klíčová rozhodnutí, architektura a finální implementace
    však vychází z vlastního pochopení problému a postupného ověřování v praxi.
</p>

![alt text](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft1.webp)

<h3>✅ Implementované funkce (dle zadání)</h3>

<ul>
    <li>Registrace uživatele (jméno, příjmení, e-mail, heslo)</li>
    <li>Automatické přiřazení role <strong>superadmin</strong> prvnímu registrovanému uživateli</li>
    <li>Přihlášení a odhlášení uživatele</li>
    <li><strong>Dvoufaktorová autentizace (TOTP)</strong></li>

![alt text](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft6.webp)

    <li>Vícestránkové menu dostupné všem uživatelům</li>
    <li>
        Administrace uživatelů:
        <ul>
            <li>přehled registrovaných uživatelů</li>
            <li>editace základních údajů a rolí</li>
            <li>odebrání administrátorských oprávnění</li>
            <li>volitelné odstranění uživatele</li>
        </ul>
    </li>
</ul>

![alt text](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft5.webp)

<h3>🚀 Funkce nad rámec zadání</h3>

<ul>
    <li>
        <strong>Ošetření vstupů proti XSS</strong> s důrazem na čitelnost a
        udržitelnost kódu
    </li>
    <li>
        <strong>Logovací systém</strong> dostupný pro roli superadmin
    </li>
    <li>
        Dynamické načítání produktů v e-shopu pomocí
        <strong>JavaScriptu</strong>
    </li>
    <li>
        Implementace <strong>košíku objednávek</strong> ukládaného do cookies
        včetně ochrany proti manipulaci s cenami
    </li>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft2.webp)

    <li>
        <strong>Dynamické generování testovacích objednávek</strong> pro
        administrátorské role
    </li>
    <li>
        Administrace produktů (včetně cen) dostupná pouze
        <strong>superadminovi</strong>
        <ul>
            <li>formuláře se načítají dynamicky (modal dialog)</li>
        </ul>
    </li>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft3.webp)
</ul>


<p>
    Dynamické části aplikace byly zvoleny záměrně jako příležitost
    osvojit si práci s klientskou logikou a tokem dat mezi frontendem a backendem.
</p>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft4.webp)

<h3>🧠 Architektonická a produktová rozhodnutí</h3>

<p>
    Některé původní nápady byly v průběhu vývoje
    <strong>vědomě opuštěny nebo odloženy</strong>, zejména pokud by výrazně navyšovaly
    komplexitu, neodpovídaly rozsahu zadání nebo by vedly k technicky zavádějícímu
    řešení.
</p>

<p>
    Koncept interní „sociální sítě“ s údajně „vlastním obsahem“ uživatelů byl
    opuštěn, jelikož by bez pokročilejší personalizace šlo pouze o obecný feed
    bez skutečné individualizace. Alternativní řešení (např. personalizované RSS
    odběry) bylo identifikováno jako možný směr dalšího rozvoje, nikoli jako součást
    aktuální implementace.
</p>

<h3>🔧 Funkce plánované do budoucna</h3>

<ul>
    <li>Stav objednávky</li>
    <li>Filtrování produktů</li>
    <li>Rozšíření práce s obsahem na základě uživatelských preferencí</li>
</ul>


Pro spuštění projektu doporučuji použít pokročilé editory jako Visual Studio Community nebo JetBrains Rider.
Alternativně lze použít i Visual Studio Code s doinstalovaným rozšířením C# Dev Kit, který nainstaluje .NET SDK včetně nástroje dotnet.

1. Naklonujte repozitář  
   `git clone https://github.com/danixek/SafeSoft.git`  
   `cd SafeSoft`
2. Ověřte připojení k databázi v souboru `appsettings.json`  
   (pokud používáte výchozí nastavení, přeskočte)
3. Sestavte projekt:  
   `dotnet build`  
   Spuštěním se zkontroluje struktura projektu a automaticky se stáhnou závislosti - NuGet balíčky.
4. Proveďte migraci databáze:
   ```bash příkazy  
   dotnet ef database update
5. Spusťte projekt:  
   `dotnet run`
   
> 💡 **Poznámka:** Pokud se příkaz `dotnet ef` nezdaří, je pravděpodobně potřeba doinstalovat EF CLI nástroj:  
`dotnet tool install --global dotnet-ef`

Po úspěšném spuštění se v konzoli objeví adresa (např. https://localhost:7204).
Otevřete ji v prohlížeči – projekt by měl být dostupný.
Ve Visual Studiu Community nebo Rideru se aplikace často spustí automaticky s otevřením prohlížeče.
