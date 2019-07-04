class TextAnimation {

    constructor (movies, index) {
        this.$container = document.querySelector('.container');
        this.$titleText = document.querySelector('.title__text');
        this.$plotText = document.querySelector('.plot__text');
        this.$prevBtn = document.querySelector('.prev');
        this.$nextBtn = document.querySelector('.next');

        this.movies = movies;

        this.$container.style.display = 'block';
        
        this.animate = this.animate.bind(this);
        this.changeMovie = this.changeMovie.bind(this);

        this.$prevBtn.addEventListener('click', this.changeMovie);
        this.$nextBtn.addEventListener('click', this.changeMovie);

        this.init(movies, index);
    }

    init (movies, index) {
        const activeMovieIndex = parseInt(index);

        this.$plotText.style.display = 'none';
        this.animationPercentage = 85;
        this.$plotText.style.transform = `rotateX(50deg) translateY(${this.animationPercentage}%)`;

        this.$titleText.style.opacity = 0;
        this.$titleText.style.transform = 'translateY(10)';
        this.$titleText.style.display = 'none';

        this.$nextBtn.style.opacity = 0;
        this.$nextBtn.style.transform = 'translateY(10px)';
        this.$prevBtn.style.opacity = 0;
        this.$prevBtn.style.transform = 'translateY(10px)';

        setTimeout(_ => {
            this.$prevBtn.style.display = 'none';
            this.$prevBtn.style.display = 'none';

            if (activeMovieIndex === 0) {

                this.$nextBtn.innerHTML = movies[activeMovieIndex + 1].title;
                this.$nextBtn.dataset.index = activeMovieIndex + 1;
                this.$prevBtn.style.display = 'none';

            } else if (activeMovieIndex === movies.length - 1) {

                this.$prevBtn.innerHTML = movies[activeMovieIndex - 1].title;
                this.$prevBtn.dataset.index = activeMovieIndex - 1;
                this.$nextBtn.style.display = 'none';

            } else {

                this.$nextBtn.innerHTML = movies[activeMovieIndex + 1].title;
                this.$nextBtn.dataset.index = activeMovieIndex + 1;

                this.$prevBtn.innerHTML = movies[activeMovieIndex - 1].title;
                this.$prevBtn.dataset.index = activeMovieIndex - 1;

            }
        }, 500);

        setTimeout(() => {
            this.$titleText.innerHTML = movies[activeMovieIndex].title;
            this.$plotText.innerHTML = movies[activeMovieIndex].opening_crawl;
            this.$titleText.style.display = 'block';

            this.$plotText.style.display = 'block';

            setTimeout(_ => {
                this.$titleText.style.opacity = 1;
                this.$titleText.style.transform = 'translateY(0)';
            }, 100);
    
    
            this.animationInterval = setInterval(this.animate, 100);
        }, 100);
    }

    animate () {
        if (this.animationPercentage === -110) {
            clearInterval(this.animationInterval);

            this.$prevBtn.style.display = 'block';
            this.$nextBtn.style.display = 'block';

            setTimeout(_ => {
                this.$nextBtn.style.opacity = 1;
                this.$nextBtn.style.transform = 'translateY(0)';
                this.$prevBtn.style.opacity = 1;
                this.$prevBtn.style.transform = 'translateY(0)';
            }, 100);
            return;
        }
        requestAnimationFrame(_ => {
            this.$plotText.style.transform = `rotateX(50deg) translateY(${this.animationPercentage}%)`;
            this.animationPercentage = this.animationPercentage - 0.5;
        });
    }

    changeMovie (event) {
        const index = event.target.dataset.index;
        clearInterval(this.animationInterval);
        this.init(this.movies, index);
    }

}

export default TextAnimation;