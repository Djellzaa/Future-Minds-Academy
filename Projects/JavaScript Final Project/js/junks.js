 //funksionon me hap edhe me mbylle ikonen
// document.addEventListener('DOMContentLoaded', function () {
//     const settingsIcon = document.getElementById('settings-icon');
//     const settingsDiv = document.getElementById('settings-div');

//     settingsIcon.addEventListener('click', function () {
//         settingsDiv.style.display = (settingsDiv.style.display === 'block') ? 'none' : 'block';
//     });

//     document.addEventListener('click', function (event) {
//         const isClickInsideSettings = settingsDiv.contains(event.target) || event.target === settingsIcon;
//         if (!isClickInsideSettings && settingsDiv.style.display === 'block') {
//             settingsDiv.style.display = 'none';
//         }
//     });

//     const saveChangesBtn = document.getElementById('saveChanges');

//     saveChangesBtn.addEventListener('click', function () {
//         const sidebarColor = document.getElementById('sidebarColor').value;
//         const backgroundImage = document.getElementById('backgroundImage').value;
//         const asideImage = document.getElementById('asideImage').value;

//         const settings = {
//             sidebarColor,
//             backgroundImage,
//             asideImage
//         };
//         localStorage.setItem('settings', JSON.stringify(settings));

//         settingsDiv.style.display = 'none';
//     });

// });

// function updateMainColor(color) {
//     document.documentElement.style.setProperty('--main-color', color);
//     saveSettings();
//  }

//  function updateAsideBackgroundColor(color) {
//     document.documentElement.style.setProperty('--sidebar-background', color);
//     saveSettings();
//  }
 

//  function handleImageSwitchChange() {
//     const isImageEnabled = document.getElementById('imageSwitch').checked;
//     const asideImageInput = document.getElementById('asideImage');
 
//     if (isImageEnabled) {
//        asideImageInput.removeAttribute('disabled');
//     } else {
//        asideImageInput.setAttribute('disabled', true);
//     }
 
//     saveSettings();
//  }
 
//  function updateAsideImage(imageUrl) {
//     document.documentElement.style.setProperty('--sidebar-background', `url('${imageUrl}')`);
//     saveSettings();
//  }
 
//  function saveSettings() {
//     const settings = {
//        mainColor: getComputedStyle(document.documentElement).getPropertyValue('--main-color'),
//        asideBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--sidebar-background'),
//        isImageEnabled: document.getElementById('imageSwitch').checked,
//        asideImage: document.getElementById('asideImage').value
//     };
 
//     localStorage.setItem('userSettings', JSON.stringify(settings));
//  }

//funksionon me ndrru imazhin

// document.addEventListener('DOMContentLoaded', function () {
//     const settingsIcon = document.getElementById('settings-icon');
//     const settingsDiv = document.getElementById('settings-div');
//     const sidebarColorCircles = document.querySelectorAll('.color-circle');
//     const sidebarBackgroundColorDiv = document.querySelector('.aside-background');
//     const sidebarImageSwitch = document.getElementById('imageSwitch');
//     const sidebarImages = document.querySelectorAll('.image-container img');

//     loadSettings();

//     settingsIcon.addEventListener('click', function () {
//         toggleSettingsDiv();
//     });

//     document.addEventListener('click', function (event) {
//         const isClickInsideSettings = settingsDiv.contains(event.target) || event.target === settingsIcon;
//         if (!isClickInsideSettings && settingsDiv.style.display === 'block') {
//             settingsDiv.style.display = 'none';
//         }
//     });

//     sidebarColorCircles.forEach(circle => {
//         circle.addEventListener('click', function () {
//             updateMainColor(circle.style.backgroundColor);
//         });
//     });

//     sidebarBackgroundColorDiv.addEventListener('click', function (event) {
//         if (event.target.classList.contains('white-circle')) {
//             updateAsideBackgroundColor('white');
//         } else if (event.target.classList.contains('black-circle')) {
//             updateAsideBackgroundColor('black');
//         }
//     });

//     sidebarImageSwitch.addEventListener('change', function () {
//         handleImageSwitchChange();
//     });

//     sidebarImages.forEach(image => {
//         image.addEventListener('click', function () {
//             updateAsideImage(image.src);
//         });
//     });
// });

// function toggleSettingsDiv() {
//     const settingsDiv = document.getElementById('settings-div');
//     settingsDiv.style.display = (settingsDiv.style.display === 'block') ? 'none' : 'block';
// }

// function updateMainColor(color) {
//     document.documentElement.style.setProperty('--main-color', color);
//     saveSettings();
// }

// function updateAsideBackgroundColor(color) {
//     document.documentElement.style.setProperty('--aside-background-color', color);
//     saveSettings();
// }

// function handleImageSwitchChange() {
//     const isImageEnabled = document.getElementById('imageSwitch').checked;
//     const sidebarImages = document.querySelectorAll('.image-container img');

//     if (isImageEnabled) {
//         sidebarImages.forEach(image => image.removeAttribute('disabled'));
//     } else {
//         sidebarImages.forEach(image => image.setAttribute('disabled', true));
//     }

//     saveSettings();
// }

// function updateAsideImage(imageUrl) {
//     document.documentElement.style.setProperty('--sidebar-background', `url('${imageUrl}')`);
//     saveSettings();
// }

// function saveSettings() {
//     const settings = {
//         mainColor: getComputedStyle(document.documentElement).getPropertyValue('--main-color'),
//         asideBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--aside-background-color'),
//         isImageEnabled: document.getElementById('imageSwitch').checked,
//         asideImage: document.querySelector('.image-container img:not([disabled])')?.src || ''
//     };

//     localStorage.setItem('userSettings', JSON.stringify(settings));
// }

// function loadSettings() {
//     const savedSettings = localStorage.getItem('userSettings');
//     if (savedSettings) {
//         const settings = JSON.parse(savedSettings);
//         updateMainColor(settings.mainColor);
//         updateAsideBackgroundColor(settings.asideBackgroundColor);

//         // Check if image switch is enabled
//         if (settings.isImageEnabled) {
//             // Update aside image only if it's not empty
//             if (settings.asideImage.trim() !== '') {
//                 updateAsideImage(settings.asideImage);
//             }
            
//             document.getElementById('imageSwitch').checked = true;
//             document.querySelectorAll('.image-container img').forEach(image => image.removeAttribute('disabled'));
//         } else {
//             document.getElementById('imageSwitch').checked = false;
//             document.querySelectorAll('.image-container img').forEach(image => image.setAttribute('disabled', true));
//         }
//     }
// }

//sidebar 
// document.addEventListener('DOMContentLoaded', function () {
//     const expandIcons = document.querySelectorAll('.expand-more');

//     expandIcons.forEach(icon => {
//        icon.addEventListener('click', function (event) {
//           event.stopPropagation();
//           const parentItem = this.parentElement;
//           const subItems = parentItem.querySelector('.side-dropdown');

//           if (subItems) {
//              const isExpanded = parentItem.classList.contains('active');
//              parentItem.classList.toggle('active');

//              if (isExpanded) {
//                 subItems.style.opacity = 0;
//                 subItems.style.visibility = 'hidden';
//                 parentItem.style.marginBottom = 0;
//              } else {
//                 subItems.style.opacity = 1;
//                 subItems.style.visibility = 'visible';
//                 parentItem.style.marginBottom = subItems.scrollHeight + 'px';
//              }

//              this.classList.toggle('rotate');
//           }
//        });
//     });

//     document.addEventListener('click', function (event) {
//        const dropdowns = document.querySelectorAll('.side-dropdown');

//        dropdowns.forEach(dropdown => {
//           const parentItem = dropdown.parentElement;
//           if (!dropdown.contains(event.target) && !parentItem.contains(event.target)) {
//              dropdown.style.opacity = 0;
//              dropdown.style.visibility = 'hidden';
//              parentItem.classList.remove('active');
//              parentItem.style.marginBottom = 0;
//              const icon = parentItem.querySelector('.expand-more');
//              if (icon) {
//                 icon.classList.remove('rotate');
//              }
//           }
//        });
//     });
//  });

//funksionon po jo mire 
// document.addEventListener('DOMContentLoaded', function () {
//     const settingsIcon = document.getElementById('settings-icon');
//     const settingsDiv = document.getElementById('settings-div');
//     const colorCircles = document.querySelectorAll('.color-circle');
//     const whiteCircle = document.getElementById('white-circle');
//     const blackCircle = document.getElementById('black-circle');
//     const imageSwitch = document.getElementById('imageSwitch');
//     const images = document.querySelectorAll('.image');

//     function toggleSettings() {
//         settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') ? 'block' : 'none';
//     }

//     function handleCircleClick() {
//         colorCircles.forEach(circle => circle.classList.remove('selected'));
//         this.classList.add('selected');
//         document.documentElement.style.setProperty('--main-color', getComputedStyle(this).backgroundColor);
//     }

//     function handleBackgroundCircleClick() {
//         document.documentElement.style.setProperty('--sidebar-background', getComputedStyle(this).backgroundColor);
//         document.documentElement.style.setProperty('--aside-background-color', getComputedStyle(this).backgroundColor);
//     }

//     function handleImageSwitchChange() {
//         const backgroundImage = imageSwitch.checked ? 'url(\'../images/sidebar-1.jpg\')' : 'none';
//         document.documentElement.style.setProperty('--sidebar-background', backgroundImage);
//     }

//     function handleImageClick() {
//         document.documentElement.style.setProperty('--sidebar-background', `url('${this.src}')`);
//     }

//     // Set the switch to be on by default
//     imageSwitch.checked = true;
//     // Initialize background image
//     handleImageSwitchChange();

//     settingsIcon.addEventListener('click', toggleSettings);
//     colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
//     whiteCircle.addEventListener('click', handleBackgroundCircleClick);
//     blackCircle.addEventListener('click', handleBackgroundCircleClick);

//     imageSwitch.addEventListener('change', handleImageSwitchChange);

//     images.forEach(image => image.addEventListener('click', handleImageClick));
// });

//funksionon vec asidebacground dicka prb edhe settings me u mbyll vec ne ikone


// document.addEventListener('DOMContentLoaded', function () {
//     const settingsIcon = document.getElementById('settings-icon');
//     const settingsDiv = document.getElementById('settings-div');
//     const colorCircles = document.querySelectorAll('.color-circle');
//     const whiteCircle = document.getElementById('white-circle');
//     const blackCircle = document.getElementById('black-circle');
//     const imageSwitch = document.getElementById('imageSwitch');
//     const images = document.querySelectorAll('.image');

//     function toggleSettings() {
//         settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') ? 'block' : 'none';
//     }

//     function handleCircleClick() {
//         colorCircles.forEach(circle => circle.classList.remove('selected'));
//         this.classList.add('selected');
//         document.documentElement.style.setProperty('--main-color', getComputedStyle(this).backgroundColor);
//     }

//     function handleBackgroundCircleClick() {
//         document.documentElement.style.setProperty('--sidebar-background', getComputedStyle(this).backgroundColor);
//         document.documentElement.style.setProperty('--aside-background-color', getComputedStyle(this).backgroundColor);
//     }

//     function handleImageSwitchChange() {
//         const backgroundImage = imageSwitch.checked ? 'url(\'../images/sidebar-1.jpg\')' : 'none';
//         document.documentElement.style.setProperty('--sidebar-background', backgroundImage);
//     }

//     function handleImageClick() {
//         if (imageSwitch.checked) {
//             document.documentElement.style.setProperty('--sidebar-background', `url('${this.src}')`);
//         }
//     }
//     imageSwitch.checked = true;
 
//     handleImageSwitchChange();

//     settingsIcon.addEventListener('click', toggleSettings);
//     colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
//     whiteCircle.addEventListener('click', handleBackgroundCircleClick);
//     blackCircle.addEventListener('click', handleBackgroundCircleClick);

//     imageSwitch.addEventListener('change', handleImageSwitchChange);

//     images.forEach(image => image.addEventListener('click', handleImageClick));
// });



//...sidebari
// document.addEventListener('DOMContentLoaded', function () {
//     const asideItems = document.querySelectorAll('.aside-item');

//     asideItems.forEach(item => {
//         item.addEventListener('click', function (event) {
//             const dropdown = item.querySelector('.side-dropdown');
//             if (dropdown) {
//                 toggleDropdown(item, dropdown);
//             }
//             event.stopPropagation();
//         });
//     });

//     window.addEventListener('click', function () {
//         closeDropdowns();
//     });

//     function toggleDropdown(item, dropdown) {
//         const isOpen = item.classList.contains('active');

//         closeDropdowns();

//         if (!isOpen) {
//             item.classList.add('active');
//             let dropdownHeight = dropdown.offsetHeight;
//             item.style.marginBottom = dropdownHeight + 'px';
//         } else {
//             item.classList.remove('active');
//             item.style.marginBottom = '0';
//         }
//     }

//     function closeDropdowns() {
//         asideItems.forEach(item => {
//             if (item.classList.contains('active')) {
//                 item.classList.remove('active');
//                 item.style.marginBottom = '0';
//             }
//         });
//     }
// });
