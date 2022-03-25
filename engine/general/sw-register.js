if ('serviceWorker' in navigator) 
{
  navigator.serviceWorker.register('sw.js?Version=' + Version, { scope: document.location.pathname.substring(0, document.location.pathname.lastIndexOf('/') + 1)})
                         .then(registration => 
     { 
        registration.addEventListener("updatefound",
            () => {
                const newWorker = registration.installing;
                newWorker.addEventListener("statechange", () => {
                      console.log(
                        "App: Nouvel état :",
                        newWorker.state
                      );
                });
            }
        );
        console.log('Service Worker Registered'); 
     });
}
/*
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
  alert("before")
});
*/