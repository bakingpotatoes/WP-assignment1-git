function pageScrollTo(dest) {
    if (document.readyState === "complete") {
        document.querySelector('body').scrollBy(0,dest);
    }
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

pageScrollTo(500);