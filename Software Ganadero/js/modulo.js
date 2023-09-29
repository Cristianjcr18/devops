let listElements = document.querySelectorAll('.list_button--click');

let openedList = null;

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

        if (openedList === listElement) {
            return;
        }

        if (openedList !== null) {
            openedList.classList.remove('arrow');
            let openedMenu = openedList.nextElementSibling;
            openedMenu.style.height = '0px';
        }

        openedList = listElement;
    });

    listElement.addEventListener('clickoutside', (event) => {
        if (!listElement.contains(event.target)) {
            listElement.classList.remove('arrow');
            let menu = listElement.nextElementSibling;
            menu.style.height = '0px';
        }
    });
});
/*let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    });

    listElement.addEventListener('clickoutside', (event) => {
        let target = event.target;
        let list = target.closest('.list');
        if (list !== listElement) {
            listElement.classList.remove('arrow');
            let menu = listElement.nextElementSibling;
            menu.style.height = '0px';
        }
    });
}); */
/************************************************************************************* */
/*let listElements = document.querySelectorAll('.list_button--click');

let openedList = null;

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

        if (openedList !== null) {
            openedList.classList.remove('arrow');
            let openedMenu = openedList.nextElementSibling;
            openedMenu.style.height = '0px';
        }

        openedList = listElement;
    });

    listElement.addEventListener('clickoutside', (event) => {
        if (!listElement.contains(event.target)) {
            listElement.classList.remove('arrow');
            let menu = listElement.nextElementSibling;
            menu.style.height = '0px';
        }
    });
});*/
/***************************************************************************************** */

