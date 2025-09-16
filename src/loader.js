export function pageLoader(loader, app) {
    if (app && loader) {
        setTimeout(() => {
            loader.style.display = "none";
            app.style.display = "block";
        }, 100)
    }
}