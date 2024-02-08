let sidebarControl = document.getElementById('sidebar-control');
let sidebar = document.getElementById('sidebar');

sidebarControl.addEventListener('click', () => {
   sidebar.classList.toggle('collapsed');
});

let expandIcons = document.querySelectorAll('.expand-more');

expandIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
        let parentItem = icon.closest('.aside-item');
        let dropdown = parentItem.querySelector('.side-dropdown ul');

        if (dropdown) {
          
         let isOpen = parentItem.classList.contains('active');

            document.querySelectorAll('.aside-item').forEach(function(item) {
                item.classList.remove('active');
                item.style.marginBottom = '0';
            });

            if (!isOpen) {
                parentItem.classList.add('active');
                icon.classList.add('rotate');
                let dropdownHeight = dropdown.offsetHeight;
                parentItem.style.marginBottom = dropdownHeight + 'px';
            } else {
                icon.classList.remove('rotate');
            }
        }
    });
});
