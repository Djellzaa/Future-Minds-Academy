
let defaultTitle = document.title;
let faviconElement = document.querySelector('link[rel="icon"]');
let defaultFavIcon = faviconElement.href;
let notificationsInterval;
let isInDefaultState = true;
let bellIconLink = getBellIconLink();

function startNotification(message) {
    if (notificationsInterval)
        endNotification();
    notificationsInterval = setInterval(() => {
        if (isInDefaultState) {
            resetToDefaults();
        } else {
            resetToNotification(message);
        }
        isInDefaultState = !isInDefaultState;
    }, 1000);
}

function endNotification() {
    clearInterval(notificationsInterval);
    resetToDefaults();
}

function resetToDefaults() {
    document.title = defaultTitle;
    faviconElement.href = defaultFavIcon;
}

function resetToNotification(message) {
    document.title = message;
    faviconElement.href = bellIconLink;
}

function getBellIconLink() {
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const context = canvas.getContext('2d');
    context.font = '32px sans-serif';
    context.fillText('🔔', 0, 30);

    return canvas.toDataURL('image/png');
}
