export const getManifestURL = store => {
    let manifest = {
        "short_name": store.name,
        "name": store.name,
        "description": "Store Description",
        "start_url": ".",
        "background_color": "#000000",
        "theme_color": "#0f4a73",
        "icons": [{
          "src": "whatever.png",
          "sizes": "256x256",
          "type": "image/png"
        }]
    } 
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    return manifestURL
}