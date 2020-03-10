# Zadanie na start
## Dzień 2

### Zadanie #1 | Dodawanie nowych komponentów

W projekcie utwórz nowy komponent `footer`. Korzystając z cli. Wykorzystaj flagi:
```
--inlineStyle --inlineTemplate --skipTests
```

Zauważ, że teraz kod HTML do widoku - będzie zawarty w tym samym pliku co logika.  

Wklej odpowiedni kod dla template **footera**:
```html
<nav class="navbar fixed-bottom navbar-expand navbar-light bg-light mt-5 p-3">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="link">Link</a>
    </li>
  </ul>
</nav>
```

Korzystając z odpowiedniej dyrektywy i modelu danych, utwórz w logice, tablicę linków:
"Polityka prywatności","Regulamin","Pomoc"  

Przedstaw je jako elementy `li > a` analogicznie jak przykład (link)Link w kodzie wyżej. Tak aby wyświetlały odpowiednio linki do podstron.  



### Zadanie #2 | Zestaw ikon na stronie

W projekcie będziemy korzystać z zestawu ikon FontAwesome. Posługując się zaleceniami ze strony:
[fontawesome.com/how-to-use/on-the-web/setup/using-package-managers](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)  

Używając komendy:
```
npm install --save @fortawesome/fontawesome-free
```

zainstaluj ikony do naszego projektu.  
Następnie, aby je dołączyć trzeba do projektu dołączyć plik `css/all.min.css` z nowo zainstalowanej biblioteki.  

Aby dołączyć ten plik - musisz przejrzeć katalog nowo-zainstalowanej biblioteki i podać odpowiednią ścieżkę do pliku `all.min.css` w pliku `angular.json` - analogicznie jak robiliśmy to dla `bootstrap` wczoraj.

Aby potwierdzić że ikony działają umieść na widoku któregoś z komponentów kod:
```html
<i class="fa fa-user"></i>
```
Jeśli pojawi się ikonka z ludzikiem - zadanie zostało wykonane poprawnie.

PS.  
**Pamiętaj, że nie jest to najbardziej optymalny sposób instalacji tych ikon. Istnieje dedykowana instalacja dla Angulara.** (temat omówimy szerzej w dalszej części szkolenia...)
