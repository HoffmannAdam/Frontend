# CLEAN CODE

---

## Mi a Clean Code?
- A clean code fejlesztési stílus lényege a komplexitás kiküszöbölése.

---

## Szempontjai:
1. Általános konvenciók:
    - Leíró, egyértelmű nevek => elnevezések utalajnak arra amit csinálnak.
2. Kommentelés:
    - Csak akkor kommenteljünk, ha a több információra van szükség egy adott kódrészlet értelmezéséhez.
    - Ne írjunk sok kommentet, mert zavaró lehet.
3. Szerkezeti tagolás:
    - Végrehajtási sorrend szerint tagoljuk a kódunkat. => Programegységekre bontsuk fel.
4. Whitespace a kódban:
    - Szerkezeti egységek szerint vizuálisan is tagojuk a kódunkat (üres sorok, space).
5. Töröld ami nem kell:
    - Ne vezessünk be felesleges függvényeket, változókat.
6. Ne ismételd magad:
    - Kerüljük a kódismétlést/duplikálást ahol csak lehet.
7. Ésszerű funkciolaitás:
    - Hosszú függvénydefiníciók zsúfoltá teszik a kódot. => Amit lehet szervezzünk ki külön függvényekbe.
    - Maximum 5-20 soros függvényeket írjunk.
8. Mágikus értékek:
    - Minden értékhez (pl.: string, integer) rendeljuk változót, hogy könnyen értelmezhetőek és módosíthatóak legyenek.
9. Újrafelhasználhatóság:
    - A már korábban megírt funkcióinkat felhasználhatjuk többszer előforduló feladatokhoz.
---

## Clean Code előnyei:
- Nagy mértékben javíthatja a kód teljesítményét, minőségét.
- Több időbe telik, viszont későbbi javítás során rengeteg időt spórolhatunk.
- Egyszerű kódmódosítás
- Kevesebb hibalehetőség

---

## Név konvenciók:
- Pascal Case:
    - `PascalCase`:
        - Minden szó első betűje nagy
        - Osztálynevekre használatják:
            - Java
            - C#
            - Python
            - pl.: `NumberOfPascals = 1`
- Camel Case:
    - `camelCase`:
        - Első szó első betűje kicsi, minden további szó első betűje nagy.
        - Változókra, függvényekre használják:
            - JavaScript
            - Java
            - Go
            - pl.: `numberOfCamels = 1`
- Snake Case:
    - `snake_case`:
        - Minden szó kis betű, alulvonással elválasztva.
        - Gyakran adatbázis táblákra, oszlopnevekre használják
        - Python, Ruby
        - pl.: `number_of_snakes = 1`
- Kebab Case:
    - `kebab-case`:
        - Minden szó kis betű, kötőjellel elválasztva
        - Főleg CSS osztálynevekra, HTML ID-re, URL-re és fájlnevekre használják.
        - pl.: `number-of-kebabs = 1`