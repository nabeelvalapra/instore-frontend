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
          "src": "https://api.instore.plus/media/store/product/images/max64white.ico",
          "sizes": "64x64",
          "type": "image/x-icon"
          },
          {
          "src": store.style.favicon,
          "sizes": "144x144",
          "type": "image/png"
          },
          {
            "src": "https://api.instore.plus/media/store/product/images/max512white.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ]
    } 
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    return manifestURL
}
