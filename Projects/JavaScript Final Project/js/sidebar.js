
let sidebarControl = document.getElementById('sidebar-control');
let sidebar = document.getElementById('sidebar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    

    if (sidebar.classList.contains('collapsed')) {
        sidebarControl.innerHTML = 'menu';
    } else {
        sidebarControl.innerHTML = 'more_vert';
    }
   
});

let dropDown = document.querySelectorAll('.aside-item, .author-info');

dropDown.forEach(function (element) {
    element.addEventListener('click', function () {
        let parentItem = element.closest('.aside-item');
        if (!parentItem) {
            parentItem = element;
        }
        let dropdown = parentItem.querySelector('.side-dropdown ul');

        if (dropdown) {
            let isOpen = parentItem.classList.contains('active');
            document.querySelectorAll('.aside-item, .author-info').forEach(function (item) {
                item.classList.remove('active');
                item.style.marginBottom = '0';
            });

            if (!isOpen) {
                parentItem.classList.add('active');
                let dropdownHeight = dropdown.offsetHeight;
                parentItem.style.marginBottom = dropdownHeight + 'px';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let asideItems = document.querySelectorAll('.aside-item, .author-info');

    asideItems.forEach(function (item) {
        let hasDropdown = item.querySelector('.side-dropdown');
        let expandMoreIcon = item.querySelector('.material-icons.expand-more');

        if (!hasDropdown && expandMoreIcon) {
            expandMoreIcon.style.display = 'none';
        }
    });
});

