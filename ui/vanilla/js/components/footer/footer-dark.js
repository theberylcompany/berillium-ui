const FooterDarkThreeColumn = () => {
    const footer = document.createElement('footer');
    const columns = () => {
        for(let index = 0; index < 3; index++){
            // Create the columns
            const col = document.createElement('section');
            // Create the menus
            const menu = document.createElement('ul');
            menu.setAttribute('id', `footer-menu-${index}`);

            // Add menu to columns
            colContainer.appendChild(menu);
        }
    }
}


   const FooterDark =  ()=> { return  `
    <footer class="flex row around center gap-3 bg-black-800">
        <section class="col items:center">
            <ul class="text:white list:none">
                <li>Link</li>
            </ul>
        </section>
        <section class="col items:center">
            <ul class="text:white list:none">
                <li>Link</li>
            </ul>
        </section>
        <section class="col items:center">
            <ul class="text:white list:none">
                <li>Link</li>
            </ul>
        </section>
    </footer>
    `;
}

exports.FooterDark = FooterDark;