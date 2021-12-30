let nameRequest = prompt("İsminizi giriniz: ");
function clock()
{
    const DAYS = ["PZR","PZT","SAL","ÇRŞ","PRŞ","CUM","CTS"];
    let userName = document.querySelector('#username');
    userName.innerHTML = `Merhaba ${nameRequest}! Hoşgeldin`;
    let tm = new Date();
    let clock = document.querySelector('#clock');
    clock.innerHTML = `${tm.getHours()}:${tm.getMinutes()}:${tm.getSeconds() > 9 ? tm.getSeconds() : "0"+tm.getSeconds()} ${DAYS[tm.getUTCDay()]} \t tarihinde Javascript Modülü 1.ödevindesiniz.`;
}

setInterval('clock()',1000);