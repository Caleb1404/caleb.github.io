const kunder=[];
function kjøp(){
    //henting av inputverdier
    const film= document.getElementById("film").value;
    const antall=document.getElementById("antall").value;
    const fornavn=document.getElementById("fornavn").value;
    const etternavn=document.getElementById("etternavn").value;
    const telefonnr=document.getElementById("tlfnr").value;
    const epost=document.getElementById("epost").value;

    const feil_antall=document.getElementById("input-message-1")
    const feil_fornavn=document.getElementById("input-message-2")
    const feil_etternavn=document.getElementById("input-message-3")
    const feil_telefonnr=document.getElementById("input-message-4")
    const feil_epost=document.getElementById("input-message-5")

    //input validering
    if (antall.trim()===""){
        feil_antall.innerHTML="Må skrive noe inn i antall";
    } if (fornavn.trim()===""){
        feil_fornavn.innerHTML='Må skrive noe inn i fornavnet';
    } if (etternavn.trim()===""){
        feil_etternavn.innerHTML="Må skrive noe inn i etternavnet";
    } if (telefonnr.trim()===""){
        feil_telefonnr.innerHTML="Må skrive noe inn i telefonnr";
    } if (epost.trim()===""){
        feil_epost.innerHTML="Må skrive noe inn i epost";
    } else{
        // objekt kunde som skal inn i arrayet
        const kunde = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnr : telefonnr,
            epost : epost
        }

        // lagrer objekt kunde i array
        kunder.push(kunde);


        //tabell for 'Alle billeter'
        let ut = "<table id='billetter'><tr>"+
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+
            "</tr>"


        //setter inn verdiene fra objektet inn til tabellen
        for (let k of kunder) {
            ut += "<tr>";
            ut += "<td>" + k.film + "</td><td>" + k.antall + "</td><td>" + k.fornavn + "</td><td>" + k.etternavn + "</td><td>" + k.telefonnr + "</td><td>" + k.epost + "</td>";
            ut += "</tr>";
        }



        //nullstiller input boxene
        document.getElementById("bestillinger").innerHTML=ut;
        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("tlfnr").value="";
        document.getElementById("epost").value="";

        //nullstiller span/feilmeldingsboksene
        document.getElementById("input-message-1").textContent="";
        document.getElementById("input-message-2").textContent="";
        document.getElementById("input-message-3").textContent="";
        document.getElementById("input-message-4").textContent="";
        document.getElementById("input-message-5").textContent="";
    }
}
function slett(){
    //fjerner alle verdiene fra tabellen
    document.getElementById("billetter").textContent="";

    //fjerner alle elementer fra arrayet
    while (kunder.length>0){
        kunder.pop();
    }
}
