controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        color.startFadeFromCurrent(color.originalPalette, 1000)
        info.changeScoreBy(-1)
        info.startCountdown(10)
        smiler.follow(me, 0)
        if (eye) {
            eye.follow(me, 0)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(me)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (anticheat.length >= 5) {
        anticheat.shift()
    }
    anticheat.push(me.tilemapLocation())
})
controller.combos.attachCombo("a+b", function () {
    pause(200)
    selected_book = game.askForNumber("Počet knih: " + book_level, 1)
    game.setDialogFrame(img`
        eeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeee
        eeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee
        eedbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdee
        eedbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdee
        cedbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdec
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
        ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
        cedbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdec
        eedbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdee
        eedbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdee
        eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee
        eeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeee
        `)
    game.setDialogTextColor(15)
    if (selected_book <= book_level) {
        if (selected_book == 1) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 8 . 8 . . . . . . 
                . . . . . 8 8 . . 8 . . . . . . 
                . . . . 8 8 . . . 8 . . . . . . 
                . . . 8 8 . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Tohle není skutečné. Probuď se! Probuď se! Proč je všechno rozpixelované? Ty podivné zvuky… Jsem tady sám? Na fialových cihlových zdech jsou tváře—zdeformované, pokroucené. Některé mrkají. Některé ne. V rozích se objevují zvláštní tyrkysové kusy stěn, které hučí a skřípou jako ohýbaný kov a skřípání pružin. A pak… tam je. Smiler. Stejný jako z mých nočních můr. To mihotavé, průhledné šklebení na konci chodby. Ze země zvedám knihu a tužku a začínám psát—pro tebe. Jen abys věděl, že nejsi sám.", DialogLayout.Full)
        } else if (selected_book == 2) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . 8 8 . . . 8 8 . . . . . 
                . . . . 8 . . . . . 8 8 . . . . 
                . . . 8 . . . . . . . 8 . . . . 
                . . . 8 8 . . . . . 8 8 . . . . 
                . . . . . . . . . . 8 . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . 8 8 . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Bloudím nekonečným fialovým bludištěm, stěny se nepatrně mění, když se nedívám. V každé chodbě hučí tyrkysové bloky—někdy tón klesne hluboko, skoro jako zavrčení. Smiler se znovu a znovu objevuje přede mnou, přeskakuje mezi stěnami, jeho úsměv se nepřirozeně roztahuje. Zatočím za roh a ztuhnu—je tu něco dalšího. Ale zmizí dřív, než ho stačím rozpoznat. Běžím. Tyrkysové hučení přechází ve skřek. Zvuk utichá…", DialogLayout.Full)
        } else if (selected_book == 3) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 8 8 8 8 8 8 8 8 8 . . 
                . . . . 8 8 . . . . . . . 8 . . 
                . . . . . . . . . . . . . 8 . . 
                . . . . . . . . . . . . . 8 . . 
                . . . . . . . . . . . . 8 8 . . 
                . . . . . . . . . . . 8 8 . . . 
                . . . . . . . 8 8 8 8 8 . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 8 8 8 8 8 8 . . . 
                . . . 8 . . . . . . . . 8 . . . 
                . . . 8 8 . . . . . . . 8 . . . 
                . . . . 8 8 8 8 . 8 8 8 8 . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Mám pocit, že jsem tu křižovatku už viděl. Nebo ne? Mé kroky se rozléhají zeleným bludištěm, ze stěn na mě zírají tváře. Smiler se drží na okraji mého zorného pole. A pak ho uvidím poprvé—dokonalé, vznášející se, nemrkající Oko. Pohybuje se rychle, skoro příliš rychle, abych ho sledoval. Tyrkysové bloky lemují cestu a vibrují nízkými, deformovanými tóny. V dálce vidím žlutý blok—odlišný od ostatních. Když se ho dotknu, vzduch se zkroutí. Jsem venku. Ne—jen další level. Dveře přede mnou se vlní jako statický obraz. Projdu jimi a okamžitě se objevím jinde. Teleporty.", DialogLayout.Full)
        } else if (selected_book == 4) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . 8 . . . . . . . . . . 
                . . . . . 8 . . 8 . . . . . . . 
                . . . . 8 . . . 8 . . . . . . . 
                . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                . . . 8 8 . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Tvrdě dopadnu na podlahu. Tady je větší tma—žádné zelené cihly, jen černé prázdno proříznuté měnícími se neonovými liniemi, které kreslí tvary, jež neumím pojmenovat. Každé mrknutí je přeskupuje, jako by mě skenovaly. Tyrkysové hučení mě pronásleduje i sem, slabé a nepravidelné. Přede mnou se zjeví Smiler, jeho úsměv pokřivený geometrickými liniemi. A za ním—Oko. Moje kniha i tužka jsou pryč. Přesto se přede mnou ve vzduchu objevují slova—moje—ale nepíšu je já.", DialogLayout.Full)
        } else if (selected_book == 5) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 8 . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 8 8 8 8 8 8 8 . . . . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . 8 . . . 
                . . . . . . . . . . . . 8 . . . 
                . . 8 8 . . . . . . . 8 8 . . . 
                . . . 8 8 8 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Neon se rozpouští do růžových stěn. Tady je tepleji. Bezpečněji… aspoň zpočátku. Tváře na zdech jsou menší, ale jejich oči mě sledují. Tyrkysové segmenty tu stále jsou a tiše skřípají v pozadí. Mé kroky teď nejsou slyšet—a právě tehdy ho znovu uvidím—Oko, jak se tiše vznáší nade mnou, nemrkaje. Smiler se plíží mezi rohy, někdy se s Okem překrývá, jako by spolupracovali. Růžové stěny jemně pulzují, jako srdce. Za rohem spatřím něco nového—láhev se třpytivou tekutinou stojící uprostřed chodby.", DialogLayout.Full)
        } else if (selected_book == 6) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . 8 8 . . . . 8 . . . . . 
                . . . . 8 . . . . . . 8 . . . . 
                . . . . 8 . . . . . . 8 . . . . 
                . . . . 8 8 . . . . . 8 . . . . 
                . . . . . 8 8 . . . . 8 . . . . 
                . . . . . . 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Chytím láhev. Tekutina se pohybuje zvláštně, jako by odporovala sklu. Oko se spustí blíž, jeho zornička se rozšiřuje. Smiler se objeví za mnou. Napiju se. Čas se zastaví. Všechno zůstane uprostřed pohybu—Oko s nehybným pohledem, Smilerův úsměv zamrzlý ve vzduchu. Jen tyrkysové bloky stále hučí, děsivě beze změny. Pomalu jdu kolem nich, cítím, jak se klid tlačí do mých uší. Ale čas se vrátí příliš brzy. Oko je najednou hned vedle mě. Rozběhnu se k nejbližšímu teleportu.", DialogLayout.Full)
        } else if (selected_book == 7) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 . . . . . . 
                . . . 8 8 . . . . 8 8 8 8 8 . . 
                . . . . . . . . . . . 8 8 . . . 
                . . . . . . . . . . 8 8 . . . . 
                . . . . . . . . . . 8 . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . 8 8 8 8 8 8 8 8 8 8 . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . . 8 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Oslňující bílá mě pohltí celého. Žádné stíny. Žádné zdi—jen nekonečný odraz. A pak je vidím: tváře na bílém skle, jak se stále víc a víc usmívají. Smiler je tu, má mou vlastní tvář a pohybuje se nepřirozenými trhavými pohyby. Za ním se vznáší Oko. Tyrkysové segmenty jsou i tady, vsazené do bílé podlahy, jejich zvuky zkreslené a vzdálené. V dálce se otevírají a zavírají barevné čtverhranné tlamy, chrlící ohnivé koule do chodeb. Vyhnu se jedné—žár mi lízne paži—a vidím, jak se v odrazné stěně přede mnou objevují praskliny.", DialogLayout.Full)
        } else if (selected_book == 8) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 8 . . 8 . . . . . . 
                . . . . . 8 . . . 8 . . . . . . 
                . . . . . 8 . . . 8 . . . . . . 
                . . . . . 8 . . 8 8 . . . . . . 
                . . . . . 8 8 8 8 . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 8 . . 8 8 . . . . . 
                . . . . 8 8 . . . . 8 . . . . . 
                . . . . 8 . . . . . 8 . . . . . 
                . . . . 8 . . . . . 8 . . . . . 
                . . . . 8 8 . . . 8 8 . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Prasklina se rozšiřuje. Můj odraz přistoupí blíž a dotkne se mé ruky skrz stěnu připomínající sklo. Okamžitě mě zaplaví chlad. Za mým odrazem se Oko zvětší do nemožných rozměrů a zaplní prázdnotu. Smiler se k němu pomalu otočí, jako by naslouchal. Oba se na mě zadívají. Ústa mého odrazu se pohnou—bez zvuku—jen dvě slova: „Probuď se.“ Stěna exploduje na pixely. Padám. Nebo možná pořád stojím. Tyrkysové hučení se vytrácí do ticha. A pak… nic. Ale pokud čteš tyto řádky—znamená to, že jsem tě našel. Teď jsi tu se mnou.", DialogLayout.Full)
        }
    } else if (selected_book > 8) {
        game.splash("Maximální počet knih, které můžeš mít, je 8.")
    } else {
        game.splash("Tuto knihu jsi ještě nenašel.")
    }
    game.setDialogTextColor(1)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 d 1 . . . . . . 1 d 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 . 
        . . 1 . . . . . . . . . . 1 1 . 
        . . 1 1 . . . . . . . 1 1 1 1 . 
        . . 1 1 2 . . . . . . 1 1 1 . . 
        . . 1 1 2 1 1 . . . . 1 1 2 . . 
        . . . 1 2 1 1 1 1 1 2 1 2 . . . 
        . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
        . . . 2 2 . . . . . 2 . . 2 . . 
        . . . . 2 . . . . 2 2 . . 2 . . 
        `)
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `)
})
info.onCountdownEnd(function () {
    color.startFadeFromCurrent(color.Arcade, 1000)
    smiler.follow(me, 50)
    if (eye) {
        eye.follow(me, 150)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    text_haha.sayText("Secret room oujé:-D")
})
let random = 0
let textSprite: TextSprite = null
let potion: Sprite = null
let selected_book = 0
let eye: Sprite = null
let anticheat: tiles.Location[] = []
let book_level = 0
let text_haha: Sprite = null
let smiler: Sprite = null
let me: Sprite = null
tiles.setCurrentTilemap(tilemap`mapa`)
me = Render.getRenderSpriteVariable()
tiles.placeOnTile(me, tiles.getTileLocation(1, 1))
info.setScore(0)
Render.setViewAngleInDegree(90)
let level = 1
smiler = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `, SpriteKind.Enemy)
let seeker = sprites.create(img`
    1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 
    2 2 2 2 2 1 1 . . 1 1 2 2 2 2 2 
    . . . . . 1 2 1 1 2 1 . . . . . 
    1 1 1 1 1 1 a 1 1 2 1 1 1 1 1 1 
    a a a a a 1 a 8 8 2 2 a a a a a 
    a a a a a 1 a 8 8 2 2 a a a a a 
    . . . . . 1 1 f f 2 1 . . . . . 
    1 1 1 1 1 1 a f f 2 1 1 1 1 1 1 
    8 8 8 8 8 1 2 f f 2 1 8 8 8 8 8 
    . . . . . 1 1 8 8 a a . . . . . 
    . 1 1 1 1 2 2 a 1 1 1 1 1 1 1 . 
    . 1 1 1 1 2 2 a 1 1 1 1 1 1 1 . 
    . 2 2 2 2 2 2 1 1 2 2 2 2 2 2 . 
    . . . . . . . 2 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 2 . . . . . . . 
    `, SpriteKind.Player)
Render.setSpriteAnimations(smiler, Render.createAnimations(50, [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 . . . . . . 2 2 2 . . 
    . . 2 5 2 . . . . . . 2 5 2 . . 
    . . 2 2 2 . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . 2 2 . 
    . . 2 2 . . . . . . . 2 2 2 2 . 
    . . 2 2 3 . . . . . . 2 2 2 . . 
    . . 2 2 3 2 2 . . . . 2 2 3 . . 
    . . . 2 3 2 2 2 2 2 3 2 3 . . . 
    . . . 3 3 2 2 2 2 2 3 2 3 3 . . 
    . . . 3 3 . . . . . 3 . . 3 . . 
    . . . . 3 . . . . 3 3 . . 3 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 . . . . . . 2 2 2 . . 
    . . 2 5 2 . . . . . . 2 5 2 . . 
    . . 2 2 2 . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . 2 2 . 
    . . 2 2 . . . . . . . 2 2 2 2 . 
    . . 2 2 3 . . . . . . 2 2 2 . . 
    . . 2 2 3 2 2 . . . . 2 2 3 . . 
    . . . 2 3 2 2 2 2 2 3 2 3 . . . 
    . . . 3 3 2 2 2 2 2 3 2 3 3 . . 
    . . . 3 3 . . . . . 3 . . 3 . . 
    . . . . 3 . . . . 3 3 . . 3 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . a a a . . . . . . a a a . . 
    . . a e a . . . . . . a e a . . 
    . . a a a . . . . . . a a a . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . a . 
    . . a . . . . . . . . . . a a . 
    . . a a . . . . . . . a a a a . 
    . . a a 8 . . . . . . a a a . . 
    . . a a 8 a a . . . . a a 8 . . 
    . . . a 8 a a a a a 8 a 8 . . . 
    . . . 8 8 a a a a a 8 a 8 8 . . 
    . . . 8 8 . . . . . 8 . . 8 . . 
    . . . . 8 . . . . 8 8 . . 8 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `]))
Render.moveWithController(3, 2, 0)
tiles.placeOnTile(smiler, tiles.getTileLocation(20, 22))
smiler.follow(me, 50)
let col = [
13,
18,
29,
15,
13,
1,
30,
13,
13,
30
]
let row = [
36,
62,
40,
52,
36,
33,
48,
36,
36,
33
]
let ang = [
270,
0,
180,
180,
270,
90,
270,
270,
270,
90
]
let col2 = [
62,
36,
54,
56,
43,
52,
45,
51,
39,
48,
62
]
let row2 = [
1,
4,
6,
8,
13,
20,
22,
24,
30,
30,
30
]
let ang2 = [
0,
0,
90,
270,
270,
90,
180,
0,
270,
270,
270
]
let col3 = [
43,
60,
54,
56,
33,
45,
43
]
let row3 = [
33,
34,
45,
47,
49,
54,
56
]
let ang3 = [
0,
90,
90,
180,
90,
270,
180
]
color.setPalette(
color.Arcade
)
game.setGameOverPlayable(true, music.createSong(assets.song`You won`), false)
game.setGameOverScoringType(game.ScoringType.None)
game.setDialogTextColor(2)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . 1 d 1 . . . . . . 1 d 1 . . 
    . . 1 1 1 . . . . . . 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 . 
    . . 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . 1 1 1 1 . 
    . . 1 1 2 . . . . . . 1 1 1 . . 
    . . 1 1 2 1 1 . . . . 1 1 2 . . 
    . . . 1 2 1 1 1 1 1 2 1 2 . . . 
    . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
    . . . 2 2 . . . . . 2 . . 2 . . 
    . . . . 2 . . . . 2 2 . . 2 . . 
    `)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    `)
game.showLongText("Ahoj, vítej v mé hře! Ovládání: joystick nebo klávesy W/A/S/D (na telefonu dotykový joystick). Šipka NAHORU = vpřed, DOLŮ = vzad, vlevo/vpravo = otočit. Tlačítko A = skok, B = zahnat příšery (potřebuješ skóre). Najdi vítězný blok a projdi bludištěm živý. A / mezerník = pokračovat", DialogLayout.Full)
color.startFade(color.Black, color.Arcade, 2000)
music.setVolume(50)
music.play(music.createSoundEffect(WaveShape.Noise, 446, 446, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
music.play(music.createSoundEffect(WaveShape.Noise, 446, 446, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
let sound = 0
let wasNearInsignia = false
let lastVolume = -1
let potionGraceUntil = 0
let potion2: Sprite = null
let potions: Sprite[] = []
let ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 5 5 1 4 4 . . . . . 
    . . . . . 4 5 4 4 2 2 . . . . . 
    . . . . . 5 5 4 2 2 2 . . . . . 
    . . . . . 5 4 2 2 4 4 . . . . . 
    . . . . . . 4 2 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnTile(ball, tiles.getTileLocation(30 + randint(3, 5) * 2, 35))
ball.vy = 100
let wall = sprites.create(img`
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1 
    2 2 2 2 f d d d d d d d f 8 8 8 
    8 2 2 1 f d d d d d d d f 8 8 8 
    1 1 1 1 f 1 1 1 1 1 1 1 f f 1 1 
    f f f f f f f f f f f f f f f f 
    f 1 d d d d d 1 f 1 a a a a a 1 
    f f 1 1 1 1 1 1 f f 1 1 1 1 1 1 
    f f f f f f f f f f f f f f f f 
    1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 
    1 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 
    f f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f f 
    1 1 f f 1 1 1 1 1 1 f f 1 1 1 1 
    f f f f f f f f f f f f f f f f 
    1 f f 1 1 1 f f f 1 f f 1 1 1 f 
    `, SpriteKind.Player)
tiles.placeOnTile(wall, tiles.getTileLocation(33, 63))
text_haha = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(text_haha, tiles.getTileLocation(37, 65))
let book = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . e e e . . 8 . e e e . . . 
    . . . e d 1 e e 8 e 1 d e . . . 
    . . . e d d 1 1 8 d d d e . . . 
    . . . e d 1 d d d d 1 d e . . . 
    . . . e d d d 1 1 1 d d e . . . 
    . . . e d 1 d d d d 1 d e . . . 
    . . . e d d 1 1 d 1 d d e . . . 
    . . . e e e d d d d e e e . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Text)
tiles.placeOnRandomTile(book, assets.tile`myTile25`)
book_level = 0
let book_not_allowed = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . b b b . 2 2 . b b b . . . 
    . . . b d 1 2 b b 2 1 d b . . . 
    . . . b d 2 1 1 1 d 2 d b . . . 
    . . . b d 1 d d d d 1 d b . . . 
    . . . b d d d 1 1 1 d d b . . . 
    . . . b d 1 d d d d 1 d b . . . 
    . . . b d d 1 1 d 1 d d b . . . 
    . . . b b b d d d d b b b . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Text)
tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile28`)
anticheat = []
for (let index = 0; index < 5; index++) {
    anticheat.push(me.tilemapLocation())
}
function nearGoal(): boolean {
    let goal: Image = null
    if (level == 1) {
        goal = assets.tile`myTile`
    } else if (level == 2) {
        goal = assets.tile`myTile3`
    } else if (level == 3) {
        goal = assets.tile`myTile16`
    } else if (level == 4) {
        goal = assets.tile`myTile20`
    } else {
        return false
    }
    return me.tileKindAt(TileDirection.Right, goal) ||
        me.tileKindAt(TileDirection.Left, goal) ||
        me.tileKindAt(TileDirection.Top, goal) ||
        me.tileKindAt(TileDirection.Bottom, goal)
}
function teleportSafe(): boolean {
    return game.runtime() >= potionGraceUntil && !nearGoal()
}
function goalTileForLevel(): Image {
    if (level == 1) {
        return assets.tile`myTile`
    } else if (level == 2) {
        return assets.tile`myTile3`
    } else if (level == 3) {
        return assets.tile`myTile16`
    } else if (level == 4) {
        return assets.tile`myTile20`
    }
    return null
}
function seekerNearGoal(): boolean {
    let goal = goalTileForLevel()
    if (!goal) {
        return false
    }
    return seeker.tileKindAt(TileDirection.Right, goal) ||
        seeker.tileKindAt(TileDirection.Left, goal) ||
        seeker.tileKindAt(TileDirection.Top, goal) ||
        seeker.tileKindAt(TileDirection.Bottom, goal)
}
function teleportSeekerSafely(): void {
    let myLoc = me.tilemapLocation()
    let nearFallback: tiles.Location = null
    let minFallback: tiles.Location = null
    for (let attempt = 0; attempt < 30; attempt++) {
        tiles.placeOnRandomTile(seeker, assets.tile`transparency16`)
        let sLoc = seeker.tilemapLocation()
        let dist = Math.max(Math.abs(sLoc.column - myLoc.column), Math.abs(sLoc.row - myLoc.row))
        if (dist < 2 || seekerNearGoal()) {
            continue
        }
        if (dist >= 6 && dist <= 12) {
            return
        }
        if (dist >= 6) {
            nearFallback = sLoc
        } else {
            minFallback = sLoc
        }
    }
    if (nearFallback) {
        tiles.placeOnTile(seeker, nearFallback)
    } else if (minFallback) {
        tiles.placeOnTile(seeker, minFallback)
    }
}
forever(function () {
    if (level == 1 && me.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
        color.setPalette(
        color.Black
        )
        tiles.placeOnTile(me, tiles.getTileLocation(15, 41))
        tiles.placeOnTile(smiler, tiles.getTileLocation(5, 52))
        eye = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        animation.runImageAnimation(
        eye,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . 2 . . 2 . . . 2 . . . . 
            . 2 . . 2 . . 2 . . . 2 . . 2 . 
            . . 2 . . 2 2 2 2 2 2 . . 2 . . 
            2 . . 2 2 2 3 3 3 3 2 2 2 . . 2 
            . 2 2 2 3 3 . . . . . . 2 2 2 . 
            . . 2 3 . . . 2 2 . . . . 2 . . 
            . 2 3 . . . 2 4 4 2 . . . . 2 . 
            . 2 3 . . . 2 4 4 2 . . . . 2 . 
            . . 2 . . . . 2 2 . . . . 2 3 . 
            . . . 2 . . . . . . . . 2 3 . . 
            . . . . 2 2 . . . . 2 2 3 . . . 
            . . . . . . 2 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . 1 . . . . 
            . 1 . . 1 . . 1 . . . 1 . . 1 . 
            . . 1 . . 1 1 1 1 1 1 . . 1 . . 
            1 . . 1 1 1 2 2 2 2 1 1 1 . . 1 
            . 1 1 1 2 2 . . . . . . 1 1 1 . 
            . . 1 2 . . . 1 1 . . . . 1 . . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . 1 2 . . . 1 d d 1 . . . . 1 . 
            . . 1 . . . . 1 1 . . . . 1 2 . 
            . . . 1 . . . . . . . . 1 2 . . 
            . . . . 1 1 . . . . 1 1 2 . . . 
            . . . . . . 1 1 1 1 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . 2 . . 2 . . . 2 . . . . 
            . 2 . . 2 . . 2 . . . 2 . . 2 . 
            . . 2 . . 2 2 2 2 2 2 . . 2 . . 
            2 . . 2 2 2 3 3 3 3 2 2 2 . . 2 
            . 2 2 2 3 3 . . . . . . 2 2 2 . 
            . . 2 3 . . . 2 2 . . . . 2 . . 
            . 2 3 . . . 2 4 4 2 . . . . 2 . 
            . 2 3 . . . 2 4 4 2 . . . . 2 . 
            . . 2 . . . . 2 2 . . . . 2 3 . 
            . . . 2 . . . . . . . . 2 3 . . 
            . . . . 2 2 . . . . 2 2 3 . . . 
            . . . . . . 2 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . 8 . . 8 . . . 8 . . . . 
            . 8 . . 8 . . 8 . . . 8 . . 8 . 
            . . 8 . . 8 8 8 8 8 8 . . 8 . . 
            8 . . 8 8 8 a a a a 8 8 8 . . 8 
            . 8 8 8 a a . . . . . . 8 8 8 . 
            . . 8 a . . . 8 8 . . . . 8 . . 
            . 8 a . . . 8 6 6 8 . . . . 8 . 
            . 8 a . . . 8 6 6 8 . . . . 8 . 
            . . 8 . . . . 8 8 . . . . 8 a . 
            . . . 8 . . . . . . . . 8 a . . 
            . . . . 8 8 . . . . 8 8 a . . . 
            . . . . . . 8 8 8 8 a a . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        eye.follow(me, 150)
        tiles.placeOnTile(eye, tiles.getTileLocation(27, 40))
        level = 2
        Render.setViewAngleInDegree(90)
        color.setPalette(
        color.Arcade
        )
        game.showLongText("LEVEL II - stiskni A", DialogLayout.Full)
        color.startFade(color.Black, color.Arcade, 2000)
    }
    if (level == 2 && me.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
        color.setPalette(
        color.Black
        )
        tiles.placeOnTile(smiler, tiles.getTileLocation(48, 17))
        tiles.placeOnTile(eye, tiles.getTileLocation(50, 27))
        tiles.placeOnTile(me, tiles.getTileLocation(33, 30))
        potion = sprites.create(img`
            . . . . . . 
            . . . . . . 
            . . . . . . 
            . . . . . . 
            . . . . . . 
            . . . . . . 
            . . . . . . 
            8 8 8 . . . 
            . 8 . . . . 
            9 8 8 . . . 
            8 8 6 . . . 
            8 6 6 . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(potion, assets.tile`myTile11`)
        potion2 = sprites.create(img`
            . . . . . .
            . . . . . .
            . . . . . .
            . . . . . .
            . . . . . .
            . . . . . .
            . . . . . .
            8 8 8 . . .
            . 8 . . . .
            9 8 8 . . .
            8 8 6 . . .
            8 6 6 . . .
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(potion2, assets.tile`myTile11`)
        level = 3
        Render.setViewAngleInDegree(270)
        color.setPalette(
        color.Arcade
        )
        game.showLongText("LEVEL III - stiskni A", DialogLayout.Full)
        color.startFade(color.Black, color.Arcade, 2000)
    }
    if (level == 3 && me.tileKindAt(TileDirection.Left, assets.tile`myTile16`)) {
        color.setPalette(
        color.Black
        )
        tiles.placeOnTile(smiler, tiles.getTileLocation(60, 53))
        tiles.placeOnTile(eye, tiles.getTileLocation(50, 50))
        tiles.placeOnTile(me, tiles.getTileLocation(33, 33))
        if (potion) {
            sprites.destroy(potion)
            potion = null
        }
        if (potion2) {
            sprites.destroy(potion2)
            potion2 = null
        }
        let potionLocs = tiles.getTilesByType(assets.tile`myTile21`)
        while (potionLocs.length > 6) {
            potionLocs.splice(randint(0, potionLocs.length - 1), 1)
        }
        for (let pi = 0; pi < potionLocs.length; pi++) {
            let p = sprites.create(img`
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                8 8 8 . . .
                . 8 . . . .
                9 8 8 . . .
                8 8 6 . . .
                8 6 6 . . .
                `, SpriteKind.Food)
            tiles.placeOnTile(p, potionLocs[pi])
            potions.push(p)
        }
        level = 4
        Render.setViewAngleInDegree(90)
        color.setPalette(
        color.Arcade
        )
        game.showLongText("LEVEL IV - stiskni A", DialogLayout.Full)
        color.startFade(color.Black, color.Arcade, 2000)
    }
    if (level == 4 && me.tileKindAt(TileDirection.Bottom, assets.tile`myTile20`)) {
        info.stopCountdown()
        smiler.follow(me, 50)
        music.stopAllSounds()
        color.setPalette(
        color.Arcade
        )
        color.startFadeFromCurrent(color.Black, 3000)
        pause(3000)
        Render.setViewMode(ViewMode.tilemapView)
        textSprite = textsprite.create("The End.", 0, 1)
        tiles.placeOnTile(textSprite, tiles.getTileLocation(100, 50))
        scene.cameraFollowSprite(textSprite)
        color.startFadeFromCurrent(color.Arcade, 3000)
        pause(3000)
        color.startFadeFromCurrent(color.Black, 3000)
        pause(3000)
        textSprite.setText("Or not?")
        color.startFadeFromCurrent(color.Arcade, 3000)
        pause(3000)
        color.startFadeFromCurrent(color.Black, 3000)
        pause(3000)
        Render.setViewMode(ViewMode.raycastingView)
        tiles.placeOnTile(me, tiles.getTileLocation(1, 65))
        Render.setViewAngleInDegree(0)
        Render.moveWithController(0, 0, 0)
        level = 5
        tiles.placeOnTile(smiler, tiles.getTileLocation(10, 66))
        color.startFadeFromCurrent(color.Arcade, 3000)
        sound = 1
        music.setVolume(255)
        music.play(music.createSoundEffect(WaveShape.Noise, 446, 446, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 446, 446, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
        pause(5000)
        tiles.placeOnTile(smiler, tiles.getTileLocation(10, 65))
    }
    if (teleportSafe()) {
        let myLoc = me.tilemapLocation()
        let sLoc = seeker.tilemapLocation()
        let dist = Math.max(Math.abs(myLoc.column - sLoc.column), Math.abs(myLoc.row - sLoc.row))
        if (dist >= 8 || dist <= 5 || seekerNearGoal()) {
            teleportSeekerSafely()
        }
    }
    if (me.overlapsWith(seeker)) {
        music.setVolume(255)
        Render.moveWithController(0, 0, 0)
        color.RotatePalette.startScreenEffect(1000)
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 5000, 255, 255, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.setVolume(50)
        game.showLongText("GAME OVER", DialogLayout.Full)
        if (level == 1) {
            tiles.placeOnTile(me, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(smiler, tiles.getTileLocation(20, 22))
            Render.setViewAngleInDegree(90)
        } else if (level == 2) {
            tiles.placeOnTile(me, tiles.getTileLocation(15, 41))
            tiles.placeOnTile(smiler, tiles.getTileLocation(5, 52))
            tiles.placeOnTile(eye, tiles.getTileLocation(27, 40))
            Render.setViewAngleInDegree(90)
        } else if (level == 3) {
            tiles.placeOnTile(me, tiles.getTileLocation(33, 30))
            tiles.placeOnTile(smiler, tiles.getTileLocation(48, 17))
            tiles.placeOnTile(eye, tiles.getTileLocation(50, 27))
            info.setScore(0)
            Render.setViewAngleInDegree(270)
        } else if (level == 4) {
            tiles.placeOnTile(me, tiles.getTileLocation(33, 33))
            tiles.placeOnTile(smiler, tiles.getTileLocation(60, 53))
            tiles.placeOnTile(eye, tiles.getTileLocation(50, 50))
            Render.setViewAngleInDegree(90)
        }
        color.RotatePalette.stop()
        color.setPalette(
        color.Arcade
        )
        Render.moveWithController(3, 2, 0)
        teleportSeekerSafely()
    }
    if (level == 4 && ball.tilemapLocation().row == 39) {
        tiles.placeOnTile(ball, tiles.getTileLocation(30 + randint(3, 5) * 2, 35))
        ball.vy = 100
    }
    if (teleportSafe()) {
        let tp4 = assets.tile`myTile4`
        let tp12 = assets.tile`myTile12`
        let tp22 = assets.tile`myTile22`
        let hit4 = me.tileKindAt(TileDirection.Right, tp4) || me.tileKindAt(TileDirection.Left, tp4) ||
            me.tileKindAt(TileDirection.Top, tp4) || me.tileKindAt(TileDirection.Bottom, tp4)
        let hit12 = me.tileKindAt(TileDirection.Right, tp12) || me.tileKindAt(TileDirection.Left, tp12) ||
            me.tileKindAt(TileDirection.Top, tp12) || me.tileKindAt(TileDirection.Bottom, tp12)
        let hit22 = me.tileKindAt(TileDirection.Right, tp22) || me.tileKindAt(TileDirection.Left, tp22) ||
            me.tileKindAt(TileDirection.Top, tp22) || me.tileKindAt(TileDirection.Bottom, tp22)
        if (hit4) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            random = randint(0, col.length - 1)
            tiles.placeOnTile(me, tiles.getTileLocation(col[random], row[random]))
            Render.setViewAngleInDegree(ang[random])
        } else if (hit12) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            random = randint(0, col2.length - 1)
            tiles.placeOnTile(me, tiles.getTileLocation(col2[random], row2[random]))
            Render.setViewAngleInDegree(ang2[random])
        } else if (hit22) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            random = randint(0, col3.length - 1)
            tiles.placeOnTile(me, tiles.getTileLocation(col3[random], row3[random]))
            Render.setViewAngleInDegree(ang3[random])
        }
    }
    if (me.overlapsWith(smiler)) {
        music.setVolume(255)
        Render.moveWithController(0, 0, 0)
        color.RotatePalette.startScreenEffect(1000)
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 5000, 255, 255, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (level == 5) {
            music.stopAllSounds()
            pause(500)
            color.RotatePalette.stop()
            color.setPalette(
            color.Arcade
            )
            game.setDialogTextColor(7)
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c c c c c c . 
                . . . . . . . c b b b b b b c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . . . c b f f f f f c . 
                . . . . . d d d d d d d d d . . 
                . d d d d d d d d d d d d . . . 
                . d d d d d d d d d d . . . . . 
                `)
            game.setGameOverMessage(true, "Jseš venku...")
            game.setGameOverPlayable(true, music.createSong(hex`00aa000408150501001c000f05001202c102c201000405002800000064002800031400060200047e00800188010122900198010122a001a8010122b001b4010122b801bc010122c001c8010122d001d8010122e001e8010122f001f4010122f801fc01012200020802012210021802012220022802012230023402012238023c02012240024802012250025802012260026802012270027402012278027c02012280028402012205001c000f0a006400f4010a00000400000000000000000000000000000000026a000000800003161d228000c000040f161b1ec0000001040f161b1e00014001030f161b40018001030f161b8001a00103111622a001c00102161bc001e001021116e001000202161b000220020211162002400202161b400260020211166002800202161b8002840202111607001c00020a006400f401640000040000000000000000000000000000000003380178007a0001207a007c0001207c007e0001207e008000012080008800012298009a0001209a00a0000120a000a8000122b800ba000120ba00c0000120c000c8000122d800da000120da00dc000120dc00de000120de00e0000120e000e8000122f8000001011d00010801011d08011001011b18011a0101201a011c0101201c011e0101201e012001012020012801012238013a0101203a014001012040014801012258015a0101205a016001012060016801012278017c0101197c0180010118800188010122900198010122a001a8010122b001b4010122b801bc010122c001c8010122d001d8010122e001e8010122f001f4010122f801fc01012200020802012210021802012220022802012230023402012238023c02012240024802012250025802012260026802012270027802012280028402012208001c000e050046006603320000040a002d0000006400140001320002010002380100001800012518004000012440005800012558008000012480008400010f84008800010a88008c0001128c009000010fa000a400010fa400a800010aa800ac000112ac00b000010fb000b4000116c000c400010fc400c800010ac800ca000112ca00cc000111cc00ce00010fce00d0000112d000d4000116e000e400010fe400e800010ae800ec000112ec00f000010f00010401010f04010801010a08010c0101120c011001010f20012401010f24012801010a28012c0101122c013001010f30013401011640014401010f44014601010a46014801010d48014a01010f4a014c01010a4c014e01010f4e015401011660016401010f64016801010a68016c0101126c017001010f70017401011678017c01010d7c018001010c80019001010ac001d001010a00021002010a40025002010a80028402010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800270180018101030001028c018d01030001029001910104030708099801990103000102a401a50103000102ac01ad0103000102b001b1010403070809b801b90103000102c001c10103000102cc01cd0103000102d001d1010403070809d801d90103000102e401e50103000102ec01ed0103000102f001f1010403070809f801f9010300010200020102030001020c020d0203000102100211020403070809180219020300010224022502030001022c022d0203000102300231020403070809380239020300010240024102030001024c024d0203000102500251020403070809580259020300010264026502030001026c026d02030001027002710204030708097802790204000102097a027b0201097c027d0201097e027f020109800281020700010203070809`), false)
            info.setScore(book_level)
            game.gameOver(true)
        } else {
            game.showLongText("GAME OVER", DialogLayout.Full)
        }
        music.setVolume(50)
        info.setScore(0)
        if (level == 1) {
            tiles.placeOnTile(me, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(smiler, tiles.getTileLocation(20, 22))
            Render.setViewAngleInDegree(90)
        } else if (level == 2) {
            tiles.placeOnTile(me, tiles.getTileLocation(15, 41))
            tiles.placeOnTile(smiler, tiles.getTileLocation(5, 52))
            tiles.placeOnTile(eye, tiles.getTileLocation(27, 40))
            Render.setViewAngleInDegree(90)
        } else if (level == 3) {
            tiles.placeOnTile(me, tiles.getTileLocation(33, 30))
            tiles.placeOnTile(smiler, tiles.getTileLocation(48, 17))
            tiles.placeOnTile(eye, tiles.getTileLocation(50, 27))
            Render.setViewAngleInDegree(270)
        } else if (level == 4) {
            tiles.placeOnTile(me, tiles.getTileLocation(33, 33))
            tiles.placeOnTile(smiler, tiles.getTileLocation(60, 53))
            tiles.placeOnTile(eye, tiles.getTileLocation(50, 50))
            Render.setViewAngleInDegree(90)
        }
        color.RotatePalette.stop()
        color.setPalette(
        color.Arcade
        )
        Render.moveWithController(3, 2, 0)
    }
    if (me.overlapsWith(ball)) {
        music.setVolume(255)
        Render.moveWithController(0, 0, 0)
        color.RotatePalette.startScreenEffect(1000)
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 5000, 255, 255, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        game.showLongText("GAME OVER", DialogLayout.Full)
        music.setVolume(50)
        tiles.placeOnTile(me, tiles.getTileLocation(33, 33))
        tiles.placeOnTile(smiler, tiles.getTileLocation(60, 53))
        tiles.placeOnTile(eye, tiles.getTileLocation(50, 50))
        info.setScore(0)
        Render.setViewAngleInDegree(90)
        color.RotatePalette.stop()
        color.setPalette(
        color.Arcade
        )
        Render.moveWithController(3, 2, 0)
    }
    if (level >= 2 && level < 5) {
        if (me.overlapsWith(eye)) {
            music.setVolume(255)
            Render.moveWithController(0, 0, 0)
            color.RotatePalette.startScreenEffect(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 5000, 255, 255, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            game.showLongText("GAME OVER", DialogLayout.Full)
            music.setVolume(50)
            if (level == 2) {
                tiles.placeOnTile(me, tiles.getTileLocation(15, 41))
                tiles.placeOnTile(smiler, tiles.getTileLocation(5, 52))
                tiles.placeOnTile(eye, tiles.getTileLocation(27, 40))
                Render.setViewAngleInDegree(90)
            } else if (level == 3) {
                tiles.placeOnTile(me, tiles.getTileLocation(33, 30))
                tiles.placeOnTile(smiler, tiles.getTileLocation(48, 17))
                tiles.placeOnTile(eye, tiles.getTileLocation(50, 27))
                Render.setViewAngleInDegree(270)
            } else if (level == 4) {
                tiles.placeOnTile(me, tiles.getTileLocation(33, 33))
                tiles.placeOnTile(smiler, tiles.getTileLocation(60, 53))
                tiles.placeOnTile(eye, tiles.getTileLocation(50, 50))
                Render.setViewAngleInDegree(90)
            }
            color.RotatePalette.stop()
            color.setPalette(
            color.Arcade
            )
            Render.moveWithController(3, 2, 0)
        }
    }
    if (tiles.tileAtLocationIsWall(me.tilemapLocation())) {
        if (anticheat.length > 0) {
            tiles.placeOnTile(me, anticheat[anticheat.length - 1])
        }
    }
    if (me.overlapsWith(book)) {
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            eeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeee
            eeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeecee
            eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee
            eedbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdee
            eedbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdee
            cedbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdec
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
            ecdbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdce
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            cedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdec
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            eedbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbdee
            cedbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdec
            eedbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdee
            eedbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdee
            eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee
            eeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeecee
            eeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeee
            `)
        if (book_level == 0) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 8 . 8 . . . . . . 
                . . . . . 8 8 . . 8 . . . . . . 
                . . . . 8 8 . . . 8 . . . . . . 
                . . . 8 8 . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Kód knihy: #1598; Zadejte do web stránky.", DialogLayout.Full)
            book_level = 1
            book.setImage(img`
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 . . 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . e e e . 8 . . e e e . . . 
                . . . e d 1 8 8 8 8 1 d e . . . 
                . . . e d d 1 1 1 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile28`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile29`)
        } else if (book_level == 1) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . 8 8 . . . 8 8 . . . . . 
                . . . . 8 . . . . . 8 8 . . . . 
                . . . 8 . . . . . . . 8 . . . . 
                . . . 8 8 . . . . . 8 8 . . . . 
                . . . . . . . . . . 8 . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . 8 8 . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Bloudím nekonečným fialovým bludištěm, stěny se nepatrně mění, když se nedívám. V každé chodbě hučí tyrkysové bloky—někdy tón klesne hluboko, skoro jako zavrčení. Smiler se znovu a znovu objevuje přede mnou, přeskakuje mezi stěnami, jeho úsměv se nepřirozeně roztahuje. Zatočím za roh a ztuhnu—je tu něco dalšího. Ale zmizí dřív, než ho stačím rozpoznat. Běžím. Tyrkysové hučení přechází ve skřek. Zvuk utichá…", DialogLayout.Full)
            book_level = 2
            book.setImage(img`
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 . . 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . e e e 8 . . 8 e e e . . . 
                . . . e d 1 e 8 8 e 1 d e . . . 
                . . . e d d 1 1 1 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile29`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile30`)
        } else if (book_level == 2) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 8 8 8 8 8 8 8 8 8 . . 
                . . . . 8 8 . . . . . . . 8 . . 
                . . . . . . . . . . . . . 8 . . 
                . . . . . . . . . . . . . 8 . . 
                . . . . . . . . . . . . 8 8 . . 
                . . . . . . . . . . . 8 8 . . . 
                . . . . . . . 8 8 8 8 8 . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 8 8 8 8 8 8 . . . 
                . . . 8 . . . . . . . . 8 . . . 
                . . . 8 8 . . . . . . . 8 . . . 
                . . . . 8 8 8 8 . 8 8 8 8 . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Mám pocit, že jsem tu křižovatku už viděl. Nebo ne? Mé kroky se rozléhají zeleným bludištěm, ze stěn na mě zírají tváře. Smiler se drží na okraji mého zorného pole. A pak ho uvidím poprvé—dokonalé, vznášející se, nemrkající Oko. Pohybuje se rychle, skoro příliš rychle, abych ho sledoval. Tyrkysové bloky lemují cestu a vibrují nízkými, deformovanými tóny. V dálce vidím žlutý blok—odlišný od ostatních. Když se ho dotknu, vzduch se zkroutí. Jsem venku. Ne—jen další level. Dveře přede mnou se vlní jako statický obraz. Projdu jimi a okamžitě se objevím jinde. Teleporty.", DialogLayout.Full)
            book_level = 3
            book.setImage(img`
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . . e e e 8 8 8 8 e e e . . . 
                . . . e d 1 e e 8 e 1 d e . . . 
                . . . e d d 1 1 1 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile30`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile33`)
        } else if (book_level == 3) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . 8 . . . . . . . . . . 
                . . . . . 8 . . 8 . . . . . . . 
                . . . . 8 . . . 8 . . . . . . . 
                . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                . . . 8 8 . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Tvrdě dopadnu na podlahu. Tady je větší tma—žádné zelené cihly, jen černé prázdno proříznuté měnícími se neonovými liniemi, které kreslí tvary, jež neumím pojmenovat. Každé mrknutí je přeskupuje, jako by mě skenovaly. Tyrkysové hučení mě pronásleduje i sem, slabé a nepravidelné. Přede mnou se zjeví Smiler, jeho úsměv pokřivený geometrickými liniemi. A za ním—Oko. Moje kniha i tužka jsou pryč. Přesto se přede mnou ve vzduchu objevují slova—moje—ale nepíšu je já.", DialogLayout.Full)
            book_level = 4
            book.setImage(img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . e e e 8 . . 8 e e e . . . 
                . . . e d 1 e 8 8 e 1 d e . . . 
                . . . e d d 1 1 1 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile31`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile32`)
        } else if (book_level == 4) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 8 . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 . . . . . . . . . . . . 
                . . . 8 8 8 8 8 8 8 8 . . . . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . 8 . . . 
                . . . . . . . . . . . . 8 . . . 
                . . 8 8 . . . . . . . 8 8 . . . 
                . . . 8 8 8 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Neon se rozpouští do růžových stěn. Tady je tepleji. Bezpečněji… aspoň zpočátku. Tváře na zdech jsou menší, ale jejich oči mě sledují. Tyrkysové segmenty tu stále jsou a tiše skřípají v pozadí. Mé kroky teď nejsou slyšet—a právě tehdy ho znovu uvidím—Oko, jak se tiše vznáší nade mnou, nemrkaje. Smiler se plíží mezi rohy, někdy se s Okem překrývá, jako by spolupracovali. Růžové stěny jemně pulzují, jako srdce. Za rohem spatřím něco nového—láhev se třpytivou tekutinou stojící uprostřed chodby.", DialogLayout.Full)
            book_level = 5
            book.setImage(img`
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 . . 8 . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . e e e 8 . . 8 e e e . . . 
                . . . e d 1 8 e e 8 1 d e . . . 
                . . . e d d 1 8 8 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile32`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile33`)
        } else if (book_level == 5) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . . . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . 8 8 . . . . 8 . . . . . 
                . . . . 8 . . . . . . 8 . . . . 
                . . . . 8 . . . . . . 8 . . . . 
                . . . . 8 8 . . . . . 8 . . . . 
                . . . . . 8 8 . . . . 8 . . . . 
                . . . . . . 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Chytím láhev. Tekutina se pohybuje zvláštně, jako by odporovala sklu. Oko se spustí blíž, jeho zornička se rozšiřuje. Smiler se objeví za mnou. Napiju se. Čas se zastaví. Všechno zůstane uprostřed pohybu—Oko s nehybným pohledem, Smilerův úsměv zamrzlý ve vzduchu. Jen tyrkysové bloky stále hučí, děsivě beze změny. Pomalu jdu kolem nich, cítím, jak se klid tlačí do mých uší. Ale čas se vrátí příliš brzy. Oko je najednou hned vedle mě. Rozběhnu se k nejbližšímu teleportu.", DialogLayout.Full)
            book_level = 6
            book.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . . . 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . e e e . . 8 . e e e . . . 
                . . . e d 1 e 8 e e 1 d e . . . 
                . . . e d d 1 8 1 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile33`)
            tiles.placeOnRandomTile(book_not_allowed, assets.tile`myTile34`)
        } else if (book_level == 6) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 . . . . . . 
                . . . 8 8 . . . . 8 8 8 8 8 . . 
                . . . . . . . . . . . 8 8 . . . 
                . . . . . . . . . . 8 8 . . . . 
                . . . . . . . . . . 8 . . . . . 
                . . . . . . . . . 8 8 . . . . . 
                . . . . 8 8 8 8 8 8 8 8 8 8 . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . . 8 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Oslňující bílá mě pohltí celého. Žádné stíny. Žádné zdi—jen nekonečný odraz. A pak je vidím: tváře na bílém skle, jak se stále víc a víc usmívají. Smiler je tu, má mou vlastní tvář a pohybuje se nepřirozenými trhavými pohyby. Za ním se vznáší Oko. Tyrkysové segmenty jsou i tady, vsazené do bílé podlahy, jejich zvuky zkreslené a vzdálené. V dálce se otevírají a zavírají barevné čtverhranné tlamy, chrlící ohnivé koule do chodeb. Vyhnu se jedné—žár mi lízne paži—a vidím, jak se v odrazné stěně přede mnou objevují praskliny.", DialogLayout.Full)
            book_level = 7
            book.setImage(img`
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 . . 8 . . . . . . 
                . . . . . . 8 . . 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . e e e 8 . . 8 e e e . . . 
                . . . e d 1 8 e e 8 1 d e . . . 
                . . . e d d 1 8 8 d d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d d 1 1 1 d d e . . . 
                . . . e d 1 d d d d 1 d e . . . 
                . . . e d d 1 1 d 1 d d e . . . 
                . . . e e e d d d d e e e . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            tiles.placeOnRandomTile(book, assets.tile`myTile34`)
            sprites.destroy(book_not_allowed)
        } else if (book_level == 7) {
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 8 . . 8 . . . . . . 
                . . . . . 8 . . . 8 . . . . . . 
                . . . . . 8 . . . 8 . . . . . . 
                . . . . . 8 . . 8 8 . . . . . . 
                . . . . . 8 8 8 8 . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 8 . . 8 8 . . . . . 
                . . . . 8 8 . . . . 8 . . . . . 
                . . . . 8 . . . . . 8 . . . . . 
                . . . . 8 . . . . . 8 . . . . . 
                . . . . 8 8 . . . 8 8 . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("Prasklina se rozšiřuje. Můj odraz přistoupí blíž a dotkne se mé ruky skrz stěnu připomínající sklo. Okamžitě mě zaplaví chlad. Za mým odrazem se Oko zvětší do nemožných rozměrů a zaplní prázdnotu. Smiler se k němu pomalu otočí, jako by naslouchal. Oba se na mě zadívají. Ústa mého odrazu se pohnou—bez zvuku—jen dvě slova: „Probuď se.“ Stěna exploduje na pixely. Padám. Nebo možná pořád stojím. Tyrkysové hučení se vytrácí do ticha. A pak… nic. Ale pokud čteš tyto řádky—znamená to, že jsem tě našel. Teď jsi tu se mnou.", DialogLayout.Full)
            book_level = 8
            sprites.destroy(book)
        }
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . 1 1 1 . . 
            . . 1 d 1 . . . . . . 1 d 1 . . 
            . . 1 1 1 . . . . . . 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 1 . 
            . . 1 . . . . . . . . . . 1 1 . 
            . . 1 1 . . . . . . . 1 1 1 1 . 
            . . 1 1 2 . . . . . . 1 1 1 . . 
            . . 1 1 2 1 1 . . . . 1 1 2 . . 
            . . . 1 2 1 1 1 1 1 2 1 2 . . . 
            . . . 2 2 1 1 1 1 1 2 1 2 2 . . 
            . . . 2 2 . . . . . 2 . . 2 . . 
            . . . . 2 . . . . 2 2 . . 2 . . 
            `)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.setDialogTextColor(1)
    }
    if (me.overlapsWith(book_not_allowed)) {
        game.splash("Tuto knihu nemůžeš vzít, nemáš předchozí.")
        pause(500)
    }
    let nearInsignia = me.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleInsignia) ||
        me.tileKindAt(TileDirection.Right, sprites.dungeon.collectibleInsignia) ||
        me.tileKindAt(TileDirection.Top, sprites.dungeon.collectibleInsignia) ||
        me.tileKindAt(TileDirection.Bottom, sprites.dungeon.collectibleInsignia)
    if (nearInsignia && !wasNearInsignia) {
        music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Noise, 2655, 2620, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.InBackground)
    }
    wasNearInsignia = nearInsignia
    if (level == 3) {
        if (me.overlapsWith(potion)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(potion, assets.tile`myTile11`)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            potionGraceUntil = game.runtime() + 8000
        }
        if (potion2 && me.overlapsWith(potion2)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(potion2, assets.tile`myTile11`)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            potionGraceUntil = game.runtime() + 8000
        }
    } else if (level == 4) {
        for (let pi = potions.length - 1; pi >= 0; pi--) {
            if (me.overlapsWith(potions[pi])) {
                info.changeScoreBy(1)
                sprites.destroy(potions[pi])
                potions.splice(pi, 1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                potionGraceUntil = game.runtime() + 8000
            }
        }
    }
    if (sound == 0) {
        let myLoc = me.tilemapLocation()
        let smLoc = smiler.tilemapLocation()
        let dCol = Math.abs(smLoc.column - myLoc.column)
        let dRow = Math.abs(smLoc.row - myLoc.row)
        let proxVolume = 255 - Math.map(Math.max(dCol, dRow), 0, 16, 0, 255)
        if (proxVolume != lastVolume) {
            music.setVolume(proxVolume)
            lastVolume = proxVolume
        }
    }
})
