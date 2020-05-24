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
          "src": "https://api.instore.plus/media/store/product/images/max64.ico",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
          },
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
