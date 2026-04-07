const VIDEO_ID = 'pIXKqcBVCsc'; 

const openTrailer = () => {
    const popup = document.getElementById('trailer-popup');
    const container = document.getElementById('video-container');
    const innerContent = document.getElementById('trailer-container');
    
    container.innerHTML = `
        <iframe
            width="560"
            height="315"
            class="w-full h-full" 
            src="https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&enablejsapi=1&rel=0&origin=${window.location.origin}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>`
    // Efecto Fade-in
    popup.classList.remove('opacity-0', 'pointer-events-none');
    popup.classList.add('opacity-100', 'pointer-events-auto');
    innerContent.classList.remove('scale-95');
    innerContent.classList.add('scale-100');
}

const closeTrailer = () => {
    const popup = document.getElementById('trailer-popup');
    const innerContent = document.getElementById('trailer-container');
    
    // Efecto Fade-out
    popup.classList.replace('opacity-100', 'opacity-0');
    popup.classList.replace('pointer-events-auto', 'pointer-events-none');
    innerContent.classList.replace('scale-100', 'scale-95');

    // Limpiamos el video después de que termine la animación (500ms)
    setTimeout(() => {
        document.getElementById('video-container').innerHTML = '';
    }, 500);
}

// EJECUTAR AL CARGAR LA PÁGINA
window.onload = () => {
    setTimeout(openTrailer, 1000); 
};
const toggleTab = (id) => {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        const icon = document.getElementById('icon-' + content.id);
        if (content.id === id) {
            const isOpening = content.classList.contains('max-h-0');
            content.classList.toggle('max-h-0', !isOpening);
            content.classList.toggle('max-h-[1000px]', isOpening);
            if (icon) icon.style.transform = isOpening ? 'rotate(180deg)' : 'rotate(0deg)';
        } else {
            content.classList.add('max-h-0');
            content.classList.remove('max-h-[1000px]');
            const otherIcon = document.getElementById('icon-' + content.id);
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;
    if (scrollY < heroHeight * 1.2) {
        const opacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.8)));
        document.getElementById('hero-parallax-bg').style.transform = `translateY(${scrollY * 0.3}px)`;
        document.getElementById('hero-content').style.transform = `translateY(${scrollY * 0.5}px)`;
        document.getElementById('hero-content').style.opacity = opacity;
        document.getElementById('hero-parallax-bg').style.opacity = opacity;
    }
});

const menuHamburguer = document.querySelector("#menu-hamburguer")
const drawerOverlay = document.querySelector("#drawer-overlay")
const linkMenu = document.querySelectorAll(".link-menu")
const closeMenu = document.querySelector("#close-menu")
const toggleDrawer = () => {
    const nawDrawer = document.querySelector("#nav-drawer")
    if(nawDrawer.classList.contains("-translate-x-full") && drawerOverlay.classList.contains("hidden")){
        nawDrawer.classList.replace("-translate-x-full","translate-none")
        drawerOverlay.classList.replace("opacity-0","opacity-100")
        drawerOverlay.classList.replace("hidden","block")
    }else{
        nawDrawer.classList.replace("translate-none","-translate-x-full")
        drawerOverlay.classList.replace("opacity-100","opacity-0")
        drawerOverlay.classList.replace("block","hidden")
    }
    
}
menuHamburguer.addEventListener("click",toggleDrawer)
drawerOverlay.addEventListener("click",toggleDrawer)
closeMenu.addEventListener("click",toggleDrawer)
linkMenu.forEach((link)=>{
    link.addEventListener("click",toggleDrawer)
})