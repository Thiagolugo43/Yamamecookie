
const redes = [
    {
        nombre: "TikTok",
        usuario: "Tik tok de Tia Cookie",
        url: "https://www.tiktok.com/@yamamecookie?lang=es",
        icono: "🎵"
    },
    {
        nombre: "YouTube",
        usuario: "Canal de Tía Cookie",
        url: "https://www.youtube.com/channel/UCDYRmKN6_mGM38K_QvkzksQ",
        icono: "▶️"
    },
    {
        nombre: "Instagram",
        usuario: "Insta de Tia Cookie",
        url: "https://www.instagram.com/yamamecookie/",
        icono: "📸"
    },
    {
        nombre: "Twitch",
        usuario: "Twitch de Tía Cookie",
        url: "https://www.twitch.tv/yamamecookie",
        icono: "💜"
    },
    {   nombre: "Discord",
        usuario: "Discord de Tia Cookie",
        url: "https://discord.com/invite/RTasvP3Cn",
        icono: "💜"
    },
    
    
    

];

const lista = document.getElementById("lista-redes");

redes.forEach(red => {

    const enlace = document.createElement("a");

    enlace.classList.add("boton-red");

    enlace.href = red.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    enlace.innerHTML = `
        <span class="red-icono">${red.icono}</span>
        <span>
            <strong>${red.nombre}</strong>
            <small>${red.usuario}</small>
        </span>
        <span class="flecha">➜</span>
    `;

    lista.appendChild(enlace);

});
