
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
            selectedImgSrc: document.querySelector('.selected-img') ? document.querySelector('.selected-img').src : null
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
            imageSwitch.checked = settings.sidebarBackground !== 'none';
    
            colorCircles.forEach(circle => {
                circle.classList.remove('selected');
                circle.style.border = 'none';
            });
    
            if (settings.selectedColorCircleId) {
                const selectedColorCircle = document.getElementById(settings.selectedColorCircleId);
                if (selectedColorCircle) {
                    selectedColorCircle.classList.add('selected');
                    selectedColorCircle.style.border = '2px solid blue';
                }
            }
    
            images.forEach(image => {
                image.classList.remove('selected-img');
            });
    
            if (settings.selectedImgSrc) {
                const selectedImg = document.querySelector(`.image[src='${settings.selectedImgSrc}']`);
                if (selectedImg) {
                    selectedImg.classList.add('selected-img');
                }
            }
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
        this.style.border = '2px solid blue';

        document.documentElement.style.setProperty('--main-color', getComputedStyle(this).backgroundColor);
        saveSettings();
    }

    function handleBackgroundCircleClick() {
        const sidebarCircles = document.querySelectorAll('.sidebar-circles div');
    
        sidebarCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });
    
        this.classList.add('selected');
        this.style.border = '2px solid blue';
    
        let transparency = 0.3;
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
    }

    function handleImageClick() {
        images.forEach(image => {
            image.classList.remove('selected-img');
        });
        this.classList.add('selected-img');

        if (imageSwitch.checked) {
            document.documentElement.style.setProperty('--sidebar-background', `url('${this.src}')`);
            saveSettings();
        }
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

        if (document.querySelector('.color-circle.selected')) {
            const selectedColorCircle = document.querySelector('.color-circle.selected');
            selectedColorCircle.classList.add('selected');
            selectedColorCircle.style.border = '2px solid blue';
        }

        whiteCircle.classList.remove('selected');
        whiteCircle.style.border = 'none';

        blackCircle.classList.remove('selected');
        blackCircle.style.border = 'none';

        const selectedBgCircle = document.querySelector('.color-circle.selected');
        if (selectedBgCircle) {
            selectedBgCircle.classList.add('selected');
            selectedBgCircle.style.border = '2px solid blue';
        }

        images.forEach(image => {
            image.classList.remove('selected-img');
        });

        const selectedImg = document.querySelector('.selected-img');
        if (selectedImg) {
            selectedImg.classList.add('selected-img');
        }
    }

    loadSettings();

    settingsIcon.addEventListener('click', toggleSettings);
    colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
    whiteCircle.addEventListener('click', handleBackgroundCircleClick);
    blackCircle.addEventListener('click', handleBackgroundCircleClick);
    imageSwitch.addEventListener('change', handleImageSwitchChange);
    images.forEach(image => image.addEventListener('click', handleImageClick));
    document.addEventListener('click', closeSettingsDiv);

    updateSelectedElements();
});

