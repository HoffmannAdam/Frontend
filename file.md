# ism

## attektinkto
1. ecmascript!
2. bonyolult, weboldalokosítás
3. js könyvtar: jquery
4. könyvtár - nehézségek egyszerűsétese, sok eltérő syntax jelent meg de egyzserű
5. bootstrap
6. es6 - ma ismert js --> dinamikus weboldalak létrehozása
7. ujra lette gondolva a fuggvények, változók; új beéített függvények
8. frontend keretrendszerek megjelenése
9. komplex js könyvtár, létező megoldásokat kínál
10. frontend mindenbe belenyúl
11. google angular, meta react (react inkabb library mint keretrendszer)
12. Vue.js 
13. JS kinet backendre is: Express.js
14. megjelent a Node.js -> megszűnik a böngészőtől való függés
15. megjelennek önálló szerverfuttatásra képes keretrendzerek pl: Express.js
16. Vite
17. fullstack: backend és frontend
18. chromium, node.js -> lightweight böngésző (képes asztali alkalmazásként működni)

## NODE
1. defer (később töltés)
2. script src="main.js" defer

## javascript
1. c alapú
2. script nyelv
3. gyengén típusos (c# erősem tipusos)
4. értelmezett prog nyelv -> böngésző értelmezi
5. js opcionális eleme - ;
6. változók: var, let, const
7. var - undefined változó
8. let - általános változó
9. const - állandó változó
10. tipusok: number, string, boolean, undefined, null, symbol

11. number - szám tipus (kezdetben 53 bit)
    speciálius számok: NaN, infinite
    bigint. csak egész számok, 64 bites (csak bigintel hajt végre műveleteket)
    bigint jelölése szam+n

12. string: szöveg
    3+alma=3alma
    indexelhető
    jelölése -  " ", ' '

13. template literal: ``
    sytax: {{}}

14. boolean: logikai érték (true/false)

15. undefined: ha egy változónak nincs megadva a tipusa
    pl let line -> nincs értéke
    értékadás '='

16. null: megszűnt hivatkozás
    pl nem érkezik be adat API-ről

17. symbol: speciális string, minden példánya egyedi
    pl symbol(1)==symbol(1) FALSE
    kulcsnak jó

18. '===' - tipus egyenlőség

19. ciklusok és elágazások (vezérlési szerkezetek):

    ciklusok (loop): for, for in, for of, while, do while
    while -> addig fut amíg a feltétel fenn áll, várható lefutási szám nulla, do while egyszer mindenképpen lefut
    for -> ciklus vátozó, logikai feltétel, lépésszám
    for..in -> visszaadja egy gyűjtemény összes indexét egyesével
    for..of -> vissszadja egy gyűjtemény minden elemét egyesével (foreach)

    ciklus mag a két { } közti rész
    elágazások (selection): if - ha a feltétel teljesül, else if, else, switchcase
    (if és else - egy irányú elágazás, else if - több irányú)

20. logikai operátorok: && (és), || (vagy), == (érték egyenlőség), === (érték és logikai egyenlőség), != (nem egyenlő), </> (kisebb, nagyobb), <= (kisebb vagy egyenlő), >= (nagyobb vagy egyenlő), ++ (increment),
    -- (decrement), +,-,*,/ (aritmatika), // egész osztás

21. igazság tábla:
    ÉS
    | && | 0 | 1 |
    |:--|:--:|--:|
    | 0 |  0 | 0 |
    | 1 |  0 | 1 |
    VAGY
    |or |0   |1  |
    |0|0|1|
    |1|1|1|

22. js array: adatgyűjtésre való objektum, indexelhető, elemek listáját tárolja, több féle adattipust is eltárol, tetszőlegesen módosítható(dimamikus), indexelés 0-ról indul
    syntax: `const [név] = [elem1, elem2.....]`
    metódusok: array.lenght (tömb hossza), array.delete() (egy elem törlése egy adott indexen), array.concat (tömbök összekapcsolása), array.sort (abc szerint rendez), array.slice (adott indexen elvágja a tömböt)
    array.push (tömb végéhez hozzáad egy elemet), array.pop (tömb végéről eltávolít egy elemet), 
    matematikai rendezés: numberic sort, math.min(), math.max()