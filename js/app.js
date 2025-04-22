const sidebar = document.getElementById('menu-latéral');
        const handle = document.getElementById('taq');

        handle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });