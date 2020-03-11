# Zadanie na start
## Dzień 3

### Zadanie #1 | W pełni działające menu i strony !

Na tym etapie warto by było żeby za równo strona *Podpowiadamy* jak *Dodaj aukcje* i *Koszyk* - działały.

#### 1.1 Now moduł `advice`:

Pamiętaj, że chcemy podzielić naszą aplikację na jeszcze jedną część: *Blog z artykułami "Podpowiadamy"*.

Tak więc, musimy przygotować komponent `advices-site`, jednak będzie on _"zamieszkiwał"_ inny moduł niż **auction**.

Przygotuj nowy moduł + routing `advice`.  
Korzystając z GUI do **Angular Schematics** wykorzystaj opcję *Classic module of pages*.  
(polecenie utworzenia modułu powinno zawierać flagi `--routing --module app`)

#### 1.2 Nowa strona `advices-site`:

Dodaj nowy komponent do modułu `advice` nazwij go `advices-site` nadaj `--inlineStyle`

Połącz komponent z tablicą routingu analogicznie do tego jak robiliśmy to w module `auction`

Teraz wszystkie strony: *Aukcje* *Promocje* *Podpowiadamy*, powinny poprawnie odprowadzać do swoich komponentów `*-site`  

---

### Zadanie #2 | Dokończenie routingu stron w module auction

#### 2.1 Buttony w menu:

Dodaj na koniec widoku `main-menu` kod HTML pomiędzy jego znacznikami:
```html
....
    </div>
    <!-- tutaj -->
</nav>
```
Kod z buttonami do dodania:
```html
<div class="text-light">
  <a class="btn btn-primary">
    <i class="fa fa-plus"></i> Dodaj
  </a>
  <a class="btn btn-secondary ml-2">
    <i class="fa fa-shopping-basket"></i> Koszyk
  </a>
</div>
```

Już na tym etapie możesz dodać odpowiednie linki do podstron np.
`add-auction` oraz `shopping-cart`

#### 2.2 Uzupełnienie stron:

Dodaj w module `auction` dwa nowe komponenty: `add-auction-site` oraz `shopping-cart-site` wygeneruj je jako `--inlineStyle`

#### 2.3 Routing

Podłącz strony z routingiem i menu (przyciski).

#### 2.4 Widoki do stron

Wejdź na przygotowaną stronę [https://codesandbox.io/s/auction-portal-htmls-ulkx1]()  
Przekopiuj HTML dla `add-auction-site` oraz dla `advices-site` z załączonych tam stron  
*add-auction.html* oraz *advices-site.html*
