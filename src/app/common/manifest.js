export const getManifestURL = store => {
    let manifest = {
        "short_name": store.name,
        "name": store.name,
        "start_url": window.location.href,
        "display": "standalone",
        "background_color": "#000000",
        "theme_color": store.style.themeColor,
        "icons": [
          {
          "src": store.style.favicon,
          "sizes": "144x144",
          "type": "image/png"
          }
        ]
    } 
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    return manifestURL
}
