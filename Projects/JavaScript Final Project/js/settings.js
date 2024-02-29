
document.addEventListener('DOMContentLoaded', function () {
    const settingsIcon = document.getElementById('settings-icon');
    const settingsDiv = document.getElementById('settings-div');
    const colorCircles = document.querySelectorAll('.color-circle');
    const whiteCircle = document.getElementById('white-circle');
    const blackCircle = document.getElementById('black-circle');
    const imageSwitch = document.getElementById('imageSwitch');
    const images = document.querySelectorAll('.image');

    

    function saveSettings() {
        const settings = {
            mainColor: document.documentElement.style.getPropertyValue('--main-color'),
            asideBackgroundColor: document.documentElement.style.getPropertyValue('--aside-background-color'),
            sidebarBackground: document.documentElement.style.getPropertyValue('--sidebar-background'),
            selectedColorCircleId: document.querySelector('.color-circle.selected') ? document.querySelector('.color-circle.selected').id : null,
            selectedImgSrc: document.querySelector('.selected-img') ? document.querySelector('.selected-img').src : null,
            switchState: imageSwitch.checked
        };

        localStorage.setItem('settings', JSON.stringify(settings));
    }

    function loadSettings() {
        const savedSettings = localStorage.getItem('settings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);

            document.documentElement.style.setProperty('--main-color', settings.mainColor);
            document.documentElement.style.setProperty('--aside-background-color', settings.asideBackgroundColor);
            document.documentElement.style.setProperty('--sidebar-background', settings.sidebarBackground);
            imageSwitch.checked = settings.switchState;

            colorCircles.forEach(circle => {
                circle.classList.remove('selected');
                circle.style.border = 'none';
            });

            if (settings.selectedColorCircleId) {
                const selectedColorCircle = document.getElementById(settings.selectedColorCircleId);
                if (selectedColorCircle) {
                    selectedColorCircle.classList.add('selected');
                    selectedColorCircle.style.border = '3px solid blue';
                }
            }

            images.forEach(image => {
                image.classList.remove('selected-img');
                image.style.border = 'none'; 
            });

            if (settings.selectedImgSrc) {
                const selectedImg = document.querySelector(`.image[src='${settings.selectedImgSrc}']`);
                if (selectedImg) {
                    selectedImg.classList.add('selected-img');
                    selectedImg.style.border = '3px solid blue'; 
                }
            }
            const savedBackground = settings.sidebarBackground || 'url(\'../images/sidebar-1.jpg\')';
            document.documentElement.style.setProperty('--sidebar-background', savedBackground);
        }
    }

    function toggleSettings() {
        settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') ? 'block' : 'none';
        saveSettings();
    }

    function handleCircleClick() {
        colorCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });
        this.classList.add('selected');
        this.style.border = '3px solid blue';

        document.documentElement.style.setProperty('--main-color', getComputedStyle(this).backgroundColor);
        saveSettings();

        localStorage.setItem('selectedColorCircleId', this.id);
    }

    function handleBackgroundCircleClick() {
        const sidebarCircles = document.querySelectorAll('.sidebar-circles div');

        sidebarCircles.forEach(circle => {
            circle.classList.remove('blue');
            circle.style.border = 'none';
        });

        this.classList.add('selected');
        this.style.border = '3px solid blue';

        let transparency = 0.2;
        let transparencyBlack = 0.6;

        if (this.id === 'white-circle') {
            document.documentElement.style.setProperty('--aside-background-color', `rgba(255, 255, 255, ${transparency})`);
            document.documentElement.style.setProperty('--aside-color', `rgba(255, 255, 255, ${transparency})`);
            document.documentElement.style.setProperty('--sidebar-color', `rgba(0, 0, 0, ${transparency})`);
        } else if (this.id === 'black-circle') {
            document.documentElement.style.setProperty('--aside-background-color', `rgba(0, 0, 0, ${transparencyBlack})`);
            document.documentElement.style.setProperty('--aside-color', `rgba(0, 0, 0, ${transparencyBlack})`);
            document.documentElement.style.setProperty('--sidebar-color', `rgba(255, 255, 255, ${transparencyBlack})`);
        }

        saveSettings();

        localStorage.setItem('selectedBgCircleId', this.id);
    }

    function handleImageSwitchChange() {
        const selectedImg = document.querySelector('.selected-img');

        if (imageSwitch.checked && selectedImg) {
            const backgroundImage = `url('${selectedImg.src}')`;
            document.documentElement.style.setProperty('--sidebar-background', backgroundImage);
        } else {
            document.documentElement.style.setProperty('--sidebar-background', 'none');
        }

        saveSettings();

        localStorage.setItem('selectedImgSrc', imageSwitch.checked ? (selectedImg ? selectedImg.src : null) : null);
    }

    function handleImageClick() {
        images.forEach(image => {
            image.classList.remove('selected-img');
            image.style.border = 'none';
        });

        const backgroundImage = `url('${this.src}')`;
        document.documentElement.style.setProperty('--sidebar-background', imageSwitch.checked ? backgroundImage : 'none');

        this.classList.add('selected-img');
        this.style.border = '3px solid blue'; 

        saveSettings();
    }

    function closeSettingsDiv(event) {
        if (!settingsDiv.contains(event.target) && event.target !== settingsIcon) {
            settingsDiv.style.display = 'none';
            saveSettings();
        }
    }

    function updateSelectedElements() {
        colorCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });

        const selectedColorCircleId = localStorage.getItem('selectedColorCircleId');
        if (selectedColorCircleId) {
            const selectedColorCircle = document.getElementById(selectedColorCircleId);
            if (selectedColorCircle) {
                selectedColorCircle.classList.add('selected');
                selectedColorCircle.style.border = '3px solid blue';
            }
        }

        const selectedBgCircleId = localStorage.getItem('selectedBgCircleId');
        if (selectedBgCircleId) {
            const selectedBgCircle = document.getElementById(selectedBgCircleId);
            if (selectedBgCircle) {
                selectedBgCircle.classList.add('selected');
                selectedBgCircle.style.border = '3px solid blue';
            }
        }

        images.forEach(image => {
            image.classList.remove('selected-img');
            image.style.border = 'none'; 
        });

        const selectedImgSrc = localStorage.getItem('selectedImgSrc');
        if (selectedImgSrc) {
            const selectedImg = document.querySelector(`.image[src='${selectedImgSrc}']`);
            if (selectedImg) {
                selectedImg.classList.add('selected-img');
                selectedImg.style.border = '3px solid blue';
            }
        }
    }

    loadSettings();
    updateSelectedElements();

    settingsIcon.addEventListener('click', toggleSettings);
    colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
    whiteCircle.addEventListener('click', handleBackgroundCircleClick);
    blackCircle.addEventListener('click', handleBackgroundCircleClick);
    imageSwitch.addEventListener('change', handleImageSwitchChange);
    images.forEach(image => image.addEventListener('click', handleImageClick));
    document.addEventListener('click', closeSettingsDiv);
});
