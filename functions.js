/*----------------------------------Study----------------------------------*/

function createStudyArea1() {
    let area = document.createElement('div');
    area.className += "area ";
    area.className += "area1";

    let areaHeder = document.createElement('div');
    areaHeder.className = "area-header";

    let areaUpperCnt = document.createElement('div');
    areaUpperCnt.className = "area-uppercontent";

    let bear = document.createElement('span');
    bear.className = "bear";

    let bearIcon = document.createElement('img');
    bearIcon.src = "img/ursulet.png";
    bear.append(bearIcon);
    areaUpperCnt.append(bear);

    let spanText = document.createElement('span');
    spanText.textContent = "Domeniul Limbă și Comunicare";
    areaUpperCnt.append(spanText);

    let spanPlus = document.createElement('span');
    spanPlus.className = "plus";

    let plus = document.createElement('i');
    plus.className += "fas ";
    plus.className += "fa-plus";

    let close = document.createElement('i');
    close.className += "fas ";
    close.className += "fa-times";
    spanPlus.append(close);
    spanPlus.append(plus);
    areaUpperCnt.append(spanPlus);
    areaHeder.append(areaUpperCnt);

    let areaDownCnt = document.createElement('div');
    areaDownCnt.className = "area-downcontent";
    areaDownCnt.textContent = " Are ca scop principal dezvoltarea capacităţii de exprimare orală, de înţelegere şi utilizare corectă a semnificaţiilor structurilor verbale orale. Totodată, prin activităţile desfăşurate, ne propunem să dezvoltăm creativitatea şi expresivitatea limbajului " +
        "oral şi să educăm exprimarea corectă din punct de vedere fonetic, lexical şi sintactic a celor mici).";
    areaHeder.append(areaDownCnt);

    area.append(areaHeder);

    return area;
}

function createStudyArea2() {
    let area = document.createElement('div');
    area.className += "area ";
    area.className += "area2";

    let areaHeder = document.createElement('div');
    areaHeder.className = "area-header";

    let areaUpperCnt = document.createElement('div');
    areaUpperCnt.className = "area-uppercontent";

    let bear = document.createElement('span');
    bear.className = "car";

    let bearIcon = document.createElement('img');
    bearIcon.src = "img/masinuta.png";
    bear.append(bearIcon);
    areaUpperCnt.append(bear);

    let spanText = document.createElement('span');
    spanText.textContent = "Domeniul Ştiinţă (cunoaşterea mediului/activităţi matematice)";
    areaUpperCnt.append(spanText);

    let spanPlus = document.createElement('span');
    spanPlus.className = "plus";

    let plus = document.createElement('i');
    plus.className += "fas ";
    plus.className += "fa-plus";

    let close = document.createElement('i');
    close.className += "fas ";
    close.className += "fa-times";
    spanPlus.append(close);
    spanPlus.append(plus);
    areaUpperCnt.append(spanPlus);
    areaHeder.append(areaUpperCnt);

    let areaDownCnt = document.createElement('div');
    areaDownCnt.className = "area-downcontent";
    areaDownCnt.textContent = ` Cunoasterea mediului- În cadrul temelor abordate se transmit noi experienţe şi cunoștinţe despre oameni şi mediu. Cunoaşterea mediului este o categorie de activitate menită să stimuleze curiozitatea privind explicarea şi înţelegerea lumii înconjurătoare
    prin explorarea acestuia. Dezvoltarea capacităţii de observare şi stabilire de relaţii cauzale, spaţiale, temporale, utilizarea unui limbaj adecvat în prezentarea unor fenomene din natură şi mediul înconjurător, dar şi formarea
    şi exersarea unor deprinderi de îngrijire şi ocrotire a mediului înconjurător, în vederea educării unei atitudini pozitive faţă de acesta reprezintă obiective ce se doresc a fi atinse prin activităţile instructiv-educative
    desfăşurate.
    <br> <br> Activitatea matematică îşi propune dezvoltarea operaţiilor intelectuale prematematice, a capacităţii de a înţelege şi utiliza numere, cifre, unităţi de măsură, figuri geometrice, precum şi a capacităţii de rezolvare
    de situaţii problematice, prin achiziţia de strategii adecvate.`;
    areaHeder.append(areaDownCnt);

    area.append(areaHeder);

    return area;
}

function createStudyArea3() {
    let area = document.createElement('div');
    area.className += "area ";
    area.className += "area3";

    let areaHeder = document.createElement('div');
    areaHeder.className = "area-header";

    let areaUpperCnt = document.createElement('div');
    areaUpperCnt.className = "area-uppercontent";

    let bear = document.createElement('span');
    bear.className = "rubic";

    let bearIcon = document.createElement('img');
    bearIcon.src = "img/rubic.png";
    bear.append(bearIcon);
    areaUpperCnt.append(bear);

    let spanText = document.createElement('span');
    spanText.textContent = "Domeniul Psihomotric";
    areaUpperCnt.append(spanText);

    let spanPlus = document.createElement('span');
    spanPlus.className = "plus";

    let plus = document.createElement('i');
    plus.className += "fas ";
    plus.className += "fa-plus";

    let close = document.createElement('i');
    close.className += "fas ";
    close.className += "fa-times";
    spanPlus.append(close);
    spanPlus.append(plus);
    areaUpperCnt.append(spanPlus);
    areaHeder.append(areaUpperCnt);

    let areaDownCnt = document.createElement('div');
    areaDownCnt.className = "area-downcontent";
    areaDownCnt.textContent = `Prin activităţile de Educaţie Fizică, ne dorim formarea şi dezvoltarea deprinderilor motrice de bază, stimularea calităţilor intelectuale, de voinţă şi afective în vederea aplicării independente a deprinderilor însuşite, dar şi cunoaşterea deprinderilor
    igienico-sanitare pentru menţinerea stării de sănătate.`;
    areaHeder.append(areaDownCnt);

    area.append(areaHeder);

    return area;
}

function createStudyArea4() {
    let area = document.createElement('div');
    area.className += "area ";
    area.className += "area4";

    let areaHeder = document.createElement('div');
    areaHeder.className = "area-header";

    let areaUpperCnt = document.createElement('div');
    areaUpperCnt.className = "area-uppercontent";

    let bear = document.createElement('span');
    bear.className = "cubs";

    let bearIcon = document.createElement('img');
    bearIcon.src = "img/icon-accordion-4.png";
    bear.append(bearIcon);
    areaUpperCnt.append(bear);

    let spanText = document.createElement('span');
    spanText.textContent = "Domeniul Om şi Societate (educaţie pentru societate/activităţi practice)";
    areaUpperCnt.append(spanText);

    let spanPlus = document.createElement('span');
    spanPlus.className = "plus";

    let plus = document.createElement('i');
    plus.className += "fas ";
    plus.className += "fa-plus";

    let close = document.createElement('i');
    close.className += "fas ";
    close.className += "fa-times";
    spanPlus.append(close);
    spanPlus.append(plus);
    areaUpperCnt.append(spanPlus);
    areaHeder.append(areaUpperCnt);

    let areaDownCnt = document.createElement('div');
    areaDownCnt.className = "area-downcontent";
    areaDownCnt.textContent = `În cadrul activitatilor de Educaţie pentru Societate se urmăresc aspecte interculturale despre om şi societate, descoperirea cotidianului/datini şi obiceiuri atât din cultura germană cât si cea româna, bazate pe exemple şi aşezarea lor în contextul propriului
    mediu de viaţă; <br> Activitatea Practică are în vedere formarea şi consolidarea unor abilităţi practice specifice nivelului de dezvoltare motrică, îmbogaţirea cunoştinţelor despre materiale şi caracteristicile
    lor, precum şi despre tehnici de lucru necesare prelucrării acestora în scopul realizării unor proiecte creative.`;
    areaHeder.append(areaDownCnt);

    area.append(areaHeder);

    return area;
}

function createStudyArea5() {
    let area = document.createElement('div');
    area.className += "area ";
    area.className += "area5";

    let areaHeder = document.createElement('div');
    areaHeder.className = "area-header";

    let areaUpperCnt = document.createElement('div');
    areaUpperCnt.className = "area-uppercontent";

    let bear = document.createElement('span');
    bear.className = "tambal";

    let bearIcon = document.createElement('img');
    bearIcon.src = "img/tambal.png";
    bear.append(bearIcon);
    areaUpperCnt.append(bear);

    let spanText = document.createElement('span');
    spanText.textContent = "Domeniul Estetic şi Creativ (educaţie muzicală/activităţi artistico-plastice)";
    areaUpperCnt.append(spanText);

    let spanPlus = document.createElement('span');
    spanPlus.className = "plus";

    let plus = document.createElement('i');
    plus.className += "fas ";
    plus.className += "fa-plus";

    let close = document.createElement('i');
    close.className += "fas ";
    close.className += "fa-times";
    spanPlus.append(close);
    spanPlus.append(plus);
    areaUpperCnt.append(spanPlus);
    areaHeder.append(areaUpperCnt);

    let areaDownCnt = document.createElement('div');
    areaDownCnt.className = "area-downcontent";
    areaDownCnt.textContent = ` Activităţi de Educaţie Muzicală prin care urmărim să formăm capacitatea de receptare a lumii sonore şi a muzicii, a capacităţii de exprimare prin muzică, dar şi să facem cunoscute preşcolarilor marile valori ale creaţiei muzicale naţionale şi universale.
    <br> <br> Activități de Educație Plastică care își propun să formeze deprinderi de lucru pentru realizarea unor desene, picturi, modelaje şi să stimuleze expresivitatea şi creativitatea prin limbaj artistic-plastic.`;
    areaHeder.append(areaDownCnt);

    area.append(areaHeder);

    return area;
}


/*----------------------------------Stats--------------------------------*/
function plusNumbers(number) {}


function createStatsBox1() {
    let box = document.createElement('div');
    box.className = "box";

    let calendar = document.createElement('i');
    calendar.className += "fas ";
    calendar.className += "fa-calendar-alt";
    box.append(calendar);

    let span1 = document.createElement('span');
    span1.className = "stats-1span";
    span1.textContent = "9";
    box.append(span1);

    let span2 = document.createElement('span');
    span2.textContent = "Ani De Experiența";
    box.append(span2);

    return box;
}

function createStatsBox2() {
    let box = document.createElement('div');
    box.className = "box";

    let calendar = document.createElement('i');
    calendar.className += "fas ";
    calendar.className += "fa-handshake";
    box.append(calendar);

    let span1 = document.createElement('span');
    span1.className = "stats-1span";
    span1.textContent = "365 +";
    box.append(span1);

    let span2 = document.createElement('span');
    span2.textContent = "Părinți Mulțumiți";
    box.append(span2);

    return box;
}

function createStatsBox3() {
    let box = document.createElement('div');
    box.className = "box";

    let calendar = document.createElement('i');
    calendar.className += "fas ";
    calendar.className += "fa-chalkboard-teacher";
    box.append(calendar);

    let span1 = document.createElement('span');
    span1.className = "stats-1span";
    span1.textContent = "20 +";
    box.append(span1);

    let span2 = document.createElement('span');
    span2.textContent = "Educatori";
    box.append(span2);

    return box;
}