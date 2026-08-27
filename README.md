<h2>🧩 Přehled projektu</h2>

<p>
    SafeSoft je firemní webová aplikace vytvořená v rámci zadání, jehož součástí byla registrace uživatelů, autentizace, administrace a základní e-shop.
</p>

<p>
    Projekt jsem ale nevnímal pouze jako seznam požadovaných funkcí. Zajímalo mě
    <strong>jak jednotlivé části aplikace dávají smysl jako jeden celek – kdo je používá,
    jaké má jednotlivý uživatel oprávnění, jak mezi sebou části systému komunikují
    a kde má být určitá odpovědnost řešena.</strong>
</p>
<p>
    Odevzdání proběhlo až po uplynutí celé dostupné lhůty záměrně. Čas navíc jsem využil především k iteracím,
    refaktoringu, doplnění bezpečnostních prvků a ověřování, zda navržené řešení skutečně funguje tak, jak jsem zamýšlel.
</p>
<p>
    Při vývoji jsem využíval také <strong>AI asistenci (ChatGPT)</strong> jako podporu při hledání řešení a studiu neznámých konceptů.
    Klíčová rozhodnutí, architektura a finální implementace však vychází z vlastního pochopení problému a postupného ověřování v praxi.
</p>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft1.webp)

<h3>Co měl projekt řešit</h3>

<p>Základní funkcionalita vycházela ze zadání:</p>
<ul>
    <li>Registrace uživatele (jméno, příjmení, e-mail, heslo)</li>
    <li>Automatické přiřazení role <strong>superadmin</strong> prvnímu registrovanému uživateli</li>
    <li>Přihlášení a odhlášení uživatele</li>
    <li><strong>Dvoufaktorová autentizace (TOTP)</strong></li>
</ul>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft6.webp)

<p>Součástí aplikace je také víceúrovňová práce s uživateli a jejich oprávněními:</p>
<ul>
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

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft5.webp)

<h3>🚀 Co jsem řešil nad rámec zadání</h3>

<p>Při vývoji jsem postupně narazil na další otázky, které původní zadání přímo neřešilo.
    Některé jsem vyřešil implementací, jiné jsem využil jako příležitost lépe pochopit konkrétní část aplikace.</p>
<ul>
    <li>
        <strong>Ošetření vstupů proti XSS</strong> s důrazem na čitelnost a udržitelnost kódu
    </li>
    <li>
        <strong>Logovací systém</strong> dostupný pro roli superadmin
    </li>
    <li>
        Dynamické načítání produktů v e-shopu pomocí
        <strong>JavaScriptu</strong>
    </li>
    <li>
        <strong>Košík objednávek</strong> ukládaný do cookies včetně ochrany proti manipulaci s cenami
    </li>
</ul>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft2.webp)
<ul>
    <li>
        <strong>Dynamické generování testovacích objednávek</strong> pro
        administrátorské role
    </li>
    <li>
        Administrace produktů (včetně cen) dostupná pouze
        <strong>superadminovi</strong>
    </li>
    <li>
        Dynamicky načítané formuláře pomocí modal dialogů
    </li>
</ul>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft3.webp)

<p>
    Dynamické části aplikace pro mě nebyly pouze způsobem, jak vytvořit zajímavější UI.
    Byly také příležitostí pochopit <strong>tok dat mezi klientskou a serverovou částí aplikace a rozdělení odpovědnosti mezi jednotlivé vrstvy</strong>.
</p>

![SafeSoft](https://dnx.mzf.cz/assets/portfolio/gallery/safesoft4.webp)

<h3>🧠 Architektonická a produktová rozhodnutí</h3>

<p>
    Během vývoje jsem některé původní nápady
    <strong>vědomě opustil nebo odložil.</strong>.
</p>
<p>
    Nechtěl jsem pouze přidávat další funkcionalitu proto, aby projekt působil rozsáhleji.
    Zajímalo mě také, zda by nová funkce měla skutečný přínos vzhledem ke komplexitě, kterou by do aplikace přinesla.
</p>

<p>
    Příkladem je původní koncept interní „sociální sítě“ s vlastním obsahem uživatelů.
    Postupně jsem dospěl k tomu, že bez pokročilejší personalizace by vznikl pouze obecný feed,
    který by neposkytoval dostatečnou hodnotu oproti své přidané komplexitě.
</p>
<p>
    Jako smysluplnější směr dalšího rozvoje jsem proto identifikoval například <strong>personalizované RSS odběry</strong>,
    které by umožnily pracovat s obsahem podle skutečných preferencí uživatele.
</p>
<p>
    Pro mě je právě tento způsob rozhodování důležitější než samotné množství implementovaných funkcí:
    <strong>technické řešení má podle mě smysl tehdy, když odpovídá problému, který má produkt řešit</strong>.
</p>
<h3>🔧 Možnosti dalšího rozvoje</h3>

<p>Některé nápady zůstaly záměrně mimo současný rozsah projektu:</p>
<ul>
    <li>Stav objednávky</li>
    <li>Filtrování produktů</li>
    <li>Rozšíření práce s obsahem na základě uživatelských preferencí</li>
</ul>
<p>
    Tyto funkce proto vnímám spíše jako možné další směry než jako nedokončené části původního zadání.
</p>
<h4>Technologie</h4>
<ul>
    <li>C#</li>
    <li>.NET / ASP.NET</li>
    <li>Entity Framework</li>
    <li>JavaScript (s možností přepisu do Vue)</li>
    <li>HTML/CSS</li>
    <li>SQL</li>
</ul>


<h3>▶️ Spuštění projektu</h3>

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
