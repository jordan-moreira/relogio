const horas = document.querySelector(".horas").style,
    minutos = document.querySelector(".minutos").style,
    segundos = document.querySelector(".segundos").style;

setInterval(() => {
    const data = new Date;

    segundos.rotate = `${data.getSeconds() * 6}deg`;
    minutos.rotate = `${data.getMinutes() * 6 + data.getSeconds() * 0.1}deg`;
    horas.rotate = `${data.getHours() * 30 + data.getMinutes() * 0.5}deg`;

}, 1);