
document.addEventListener('DOMContentLoaded', function () {
    const settingsIcon = document.getElementById('settings-icon');
    const settingsDiv = document.getElementById('settings-div');
    const colorCircles = document.querySelectorAll('.color-circle');
    const whiteCircle = document.getElementById('white-circle');
    const blackCircle = document.getElementById('black-circle');
    const imageSwitch = document.getElementById('imageSwitch');
    const images = document.querySelectorAll('.image');

    function toggleSettings() {
        settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') ? 'block' : 'none';
    }

    function handleCircleClick() {
        colorCircles.forEach(circle => circle.classList.remove('selected'));
        this.classList.add('selected');
        document.documentElement.style.setProperty('--main-color', getComputedStyle(this).backgroundColor);
    }

    function handleBackgroundCircleClick() {
        document.documentElement.style.setProperty('--sidebar-background', getComputedStyle(this).backgroundColor);
        document.documentElement.style.setProperty('--aside-background-color', getComputedStyle(this).backgroundColor);
    }

    function handleImageSwitchChange() {
        const backgroundImage = imageSwitch.checked ? 'url(\'../images/sidebar-1.jpg\')' : 'none';
        document.documentElement.style.setProperty('--sidebar-background', backgroundImage);
    }

    function handleImageClick() {
        if (imageSwitch.checked) {
            document.documentElement.style.setProperty('--sidebar-background', `url('${this.src}')`);
        }
    }
    imageSwitch.checked = true;
 
    handleImageSwitchChange();

    settingsIcon.addEventListener('click', toggleSettings);
    colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
    whiteCircle.addEventListener('click', handleBackgroundCircleClick);
    blackCircle.addEventListener('click', handleBackgroundCircleClick);

    imageSwitch.addEventListener('change', handleImageSwitchChange);

    images.forEach(image => image.addEventListener('click', handleImageClick));
});
