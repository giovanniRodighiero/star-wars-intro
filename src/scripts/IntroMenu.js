import TextAnimation from './TextAnimation';

class IntroMenu {

    constructor () {
        this.$menu = document.querySelector('.menu');
        this.$menuTitle = document.querySelector('.menu__title');
        this.$menuList = document.querySelector('.menu__list');

        this.movies = [];

        this.onMountMenu = this.onMountMenu.bind(this);
        this.onListItemClick = this.onListItemClick.bind(this);
        this.buildListItems = this.buildListItems.bind(this);
        this.fetchContents = this.fetchContents.bind(this);

        this.fetchContents();
    }

    fetchContents () {
        fetch('https://swapi.co/api/films')
            .then(response => response.json())
            .then(data => {
                this.movies = data.results;
                this.buildListItems();
            });
    }

    buildListItems () {
        this.$menuTitle.style.opacity = 1;
        this.$menuTitle.style.transform = 'translateY(0)';

        setTimeout( _ => {
            this.movies.forEach((movie, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('menu__list-item');
                listItem.classList.add('fade-in');
                listItem.innerHTML = movie.title;
                listItem.dataset.index = index;
                listItem.addEventListener('click', this.onListItemClick);
                this.$menuList.appendChild(listItem);
    
                setTimeout(() => {
                    listItem.style.opacity = 1;
                    listItem.style.transform = 'translateY(0)';
                }, 250 * (index + 1));
            });
        }, 200);
    }

    onMountMenu (index) {
        this.$menu.style.opacity = 0;
        setTimeout(() => {
            this.$menu.style.display = 'none';
            new TextAnimation(this.movies, index);
        }, 200);
    }

    onListItemClick (event) {
        this.onMountMenu(event.target.dataset.index);
    }

};

export default IntroMenu;