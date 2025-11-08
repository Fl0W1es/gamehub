class GameCarousel {
    constructor() {
        this.carouselTrack = document.querySelector('.carousel-track');
        this.carouselDots = document.querySelector('.carousel-dots');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.gameDetails = document.querySelector('.game-details');
        this.gameTitle = document.querySelector('.selected-game-title');
        this.gameDescription = document.querySelector('.selected-game-description');
        this.gameVideoContainer = document.querySelector('.game-video-container');
        
        this.slides = [];
        this.currentIndex = 0;
        this.slidesToShow = 3;
        this.isAnimating = false;
        this.animationDuration = 800;
        
        this.games = [
            {
                id: 1,
                title: "Cyberpunk 2077",
                description: "Открытый мир будущего с невероятными технологиями",
                detailedDescription: "Cyberpunk 2077 — это приключенческая ролевая игра с открытым миром, действие которой происходит в Найт-Сити, мегаполисе будущего, где власть, роскошь и модификации тела правят бал. Вы играете за V, наёмника в поисках уникального имплантата, который является ключом к бессмертию. Исследуйте огромный город, полный корпораций, хакеров и наёмников. Выберите свой путь в жизни клана, решите судьбу лидера банды или просто насладитесь эстетикой неоновых огней.",
                genre: "RPG, Экшен",
                developer: "CD Projekt Red",
                releaseDate: "10 декабря 2020",
                rating: "9.0/10",
                features: [
                    "Огромный открытый мир Найт-Сити",
                    "Глубокая система кастомизации персонажа",
                    "Множество веток сюжета и концовок",
                    "Киберимпланты и модификации тела",
                    "Эпические битвы и перестрелки",
                    "Кооперативные миссии"
                ],
                platforms: "PC, PlayStation, Xbox",
                image: "images/game1.jpg",
                gallery: ["images/game1.jpg", "images/game1.jpg"], // Добавить настоящие если есть
                video: "https://www.youtube.com/embed/8X2kIfS6fb8",
                systemRequirements: "Минимум: AMD Ryzen 3 1200, 8GB RAM, GTX 780"
            },
            {
                id: 2,
                title: "The Witcher 3: Wild Hunt",
                description: "Эпическое фэнтези-приключение в мире чудовищ",
                detailedDescription: "The Witcher 3: Wild Hunt — это история о профессиональном охотнике на чудовищ Геральте из Ривии, который ищет свою пропавшую возлюбленную Йеннифер и приёмную дочь Цири. Путешествие проведёт вас через войны, дикие земли и мифические миры.",
                genre: "RPG, Фэнтези",
                developer: "CD Projekt Red",
                releaseDate: "19 мая 2015",
                rating: "9.8/10",
                features: [
                    "Живой открытый мир с динамической погодой",
                    "Система принятия решений с последствиями",
                    "Более 100 часов игрового времени",
                    "Эпические битвы с монстрами"
                ],
                platforms: "PC, PlayStation, Xbox, Nintendo Switch",
                image: "images/game2.jpg",
                video: "https://www.youtube.com/embed/c0i88t0Kacs"
            },
            {
                id: 3,
                title: "Elden Ring",
                description: "Сложная RPG с огромным открытым миром",
                detailedDescription: "Elden Ring — это фэнтезийная action-RPG с открытым миром, созданная FromSoftware в сотрудничестве с Джорджем Мартином. Поднимитесь, погасший, и будьте ведомы благодатью, чтобы обрести силу Кольца Элден и стать Владыкой Элден в Промежутке.",
                genre: "Action RPG, Souls-like",
                developer: "FromSoftware",
                releaseDate: "25 февраля 2022",
                rating: "9.5/10",
                features: [
                    "Огромный бесшовный открытый мир",
                    "Сложная боевая система",
                    "Кооперативный и PvP мультиплеер",
                    "Создание уникальных билдов персонажа"
                ],
                platforms: "PC, PlayStation, Xbox",
                image: "images/game3.jpg",
                video: "https://www.youtube.com/embed/AKXiKBnzpBQ"
            },
            {
                id: 4,
                title: "Overwatch 2",
                description: "Командный шутер с уникальными героями",
                detailedDescription: "Overwatch 2 — это бесплатный командный шутер от первого лица, в котором эпические битвы происходят по всему миру. Выберите одного из более чем 30 уникальных героев и сражайтесь в командах из пяти игроков.",
                genre: "Шутер, Командная игра",
                developer: "Blizzard Entertainment",
                releaseDate: "4 октября 2022",
                rating: "8.5/10",
                features: [
                    "Более 35 уникальных героев",
                    "Динамичные командные бои 5 на 5",
                    "Регулярные обновления и новые герои",
                    "Соревновательный рейтинговый режим"
                ],
                platforms: "PC, PlayStation, Xbox, Nintendo Switch",
                image: "images/game4.jpg",
                video: "https://www.youtube.com/embed/GKXS_YA9s7E"
            },
            {
                id: 5,
                title: "God of War: Ragnarok",
                description: "Эпическое путешествие по скандинавской мифологии",
                detailedDescription: "Присоединяйтесь к Кратосу и Атрею в путешествии по девяти мирам скандинавской мифологии, столкнувшись с могущественными богами и монстрами, пока они готовятся к предстоящему Рагнарёку — концу света.",
                genre: "Action-Adventure",
                developer: "Santa Monica Studio",
                releaseDate: "9 ноября 2022",
                rating: "9.7/10",
                features: [
                    "Захватывающий сюжет в скандинавской мифологии",
                    "Улучшенная боевая система",
                    "Исследование девяти миров",
                    "Развитие отношений отца и сына"
                ],
                platforms: "PlayStation 4, PlayStation 5",
                image: "images/game5.jpg",
                video: "https://www.youtube.com/embed/EE-4GvjKcfs"
            },
            {
                id: 6,
                title: "Hogwarts Legacy",
                description: "Магическое приключение в мире Гарри Поттера",
                detailedDescription: "Hogwarts Legacy — это ролевая игра с открытым миром, действие которой происходит в мире, впервые представленном в книгах о Гарри Поттере. Отправляйтесь в приключение и находите фантастических зверей, создавайте зелья и изучайте заклинания.",
                genre: "RPG, Приключения",
                developer: "Avalanche Software",
                releaseDate: "10 февраля 2023",
                rating: "8.8/10",
                features: [
                    "Открытый мир Хогвартса и окрестностей",
                    "Изучение магии и заклинаний",
                    "Создание уникального персонажа-волшебника",
                    "Исследование тайн магического мира"
                ],
                platforms: "PC, PlayStation, Xbox, Nintendo Switch",
                image: "images/game6.jpg",
                video: "https://www.youtube.com/embed/1O6Qstncpnc"
            }
        ];

        this.init();
    }

    init() {
        this.createSlides();
        this.createDots();
        this.setupEventListeners();
        this.updateCarousel();
        this.createProgressBar();
        this.autoPlay();
    }

    createSlides() {
        this.carouselTrack.innerHTML = '';
        this.slides = [];

        // Создаём клоны для бесконечной прокрутки
        const clonedGames = [...this.games, ...this.games, ...this.games];
        
        clonedGames.forEach((game, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.setAttribute('data-game-id', game.id);
            slide.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="game-image">
                <div class="game-info">
                    <h4 class="game-title">${game.title}</h4>
                    <p class="game-description">${game.description}</p>
                </div>
            `;
            
            slide.addEventListener('click', () => {
                if (!this.isAnimating) {
                    const realIndex = game.id - 1;
                    this.currentIndex = realIndex;
                    this.updateCarousel();
                }
            });
            
            this.carouselTrack.appendChild(slide);
            this.slides.push(slide);
        });

        // Начинаем с первой игры
        this.currentIndex = 0;
        if (window.innerWidth > 480) {
            // Desktop: start with clones in middle
            const initialOffset = this.games.length;
            const slideWidth = this.slides[0].offsetWidth + 32;
            this.carouselTrack.style.transform = `translateX(-${initialOffset * slideWidth}px)`;
        } else {
            // Mobile: start at beginning
            this.carouselTrack.style.transform = 'translateX(0)';
        }
        this.carouselTrack.style.transition = 'none';
    }

    createDots() {
        this.carouselDots.innerHTML = '';
        
        for (let i = 0; i < this.games.length; i++) {
            const dot = document.createElement('button');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.currentIndex = i;
                    this.updateCarousel();
                }
            });
            this.carouselDots.appendChild(dot);
        }
    }

    createProgressBar() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'carousel-progress';
        progressContainer.innerHTML = '<div class="progress-bar"></div>';
        this.carouselDots.parentNode.insertBefore(progressContainer, this.carouselDots.nextSibling);
        this.progressBar = progressContainer.querySelector('.progress-bar');
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            if (!this.isAnimating) {
                this.prevSlide();
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        });

        let startX = 0;
        this.carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carouselTrack.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });

        document.addEventListener('keydown', (e) => {
            if (!this.isAnimating) {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            }
        });

        window.addEventListener('resize', () => {
            this.updateSlidesToShow();
            this.updateCarousel();
        });
    }

    // Cursor controls removed as per requirements

    updateSlidesToShow() {
        if (window.innerWidth < 768) {
            this.slidesToShow = 1;
        } else if (window.innerWidth < 1024) {
            this.slidesToShow = 2;
        } else {
            this.slidesToShow = 3;
        }
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.games.length;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.games.length) % this.games.length;
        this.updateCarousel();
    }

    handleSwipe(startX, endX) {
        if (!this.isAnimating) {
            const diff = startX - endX;
            const swipeThreshold = 50;
            if (Math.abs(diff) > swipeThreshold) {
                diff > 0 ? this.nextSlide() : this.prevSlide();
            }
        }
    }

    updateCarousel() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.updateSlidesToShow();

        let translateX;

        const carousel = document.querySelector('.carousel');
        const slideWidth = this.slides[0].offsetWidth + (window.innerWidth > 480 ? 32 : 0);
        if (window.innerWidth > 480) {
            // Desktop layout with clones
            const offset = this.games.length + this.currentIndex;
            translateX = -offset * slideWidth;
        } else {
            // Mobile full-width slides
            translateX = -this.currentIndex * carousel.offsetWidth;
        }

        this.carouselTrack.style.transition = `transform ${this.animationDuration}ms ease-in-out`;
        this.carouselTrack.style.transform = `translateX(${translateX}px)`;

        this.updateActiveStates();

        setTimeout(() => {
            this.showGameDetails();
            this.isAnimating = false;
        }, this.animationDuration);
    }

    updateActiveStates() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });

        this.slides.forEach((slide, index) => {
            const gameId = parseInt(slide.getAttribute('data-game-id'));
            const isActive = gameId === (this.currentIndex + 1);
            slide.classList.toggle('active', isActive);
            
            if (isActive) {
                slide.classList.add('neon-pulse');
            } else {
                slide.classList.remove('neon-pulse');
            }
        });
    }

    showGameDetails() {
        const currentGame = this.games[this.currentIndex];
        
        this.gameTitle.style.opacity = '0';
        this.gameDescription.style.opacity = '0';
        
        setTimeout(() => {
            // Формируем подробное описание с характеристиками
            const detailsHTML = `
                <div class="game-meta">
                    <div class="meta-item">
                        <span class="meta-label">Жанр:</span>
                        <span class="meta-value">${currentGame.genre}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Разработчик:</span>
                        <span class="meta-value">${currentGame.developer}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Дата выхода:</span>
                        <span class="meta-value">${currentGame.releaseDate}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Рейтинг:</span>
                        <span class="meta-value rating">${currentGame.rating}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Платформы:</span>
                        <span class="meta-value">${currentGame.platforms}</span>
                    </div>
                </div>
                <p class="game-desc-text">${currentGame.detailedDescription}</p>
                <div class="game-features">
                    <h4 class="features-title">Ключевые особенности:</h4>
                    <ul class="features-list">
                        ${currentGame.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            this.gameTitle.textContent = currentGame.title;
            this.gameDescription.innerHTML = detailsHTML;
            
            this.gameTitle.style.transition = 'opacity 0.5s ease';
            this.gameDescription.style.transition = 'opacity 0.5s ease';
            this.gameTitle.style.opacity = '1';
            this.gameDescription.style.opacity = '1';
        }, 200);

        this.updateVideo(currentGame.video);
    }

    updateVideo(videoUrl) {
        this.gameVideoContainer.style.opacity = '0';

        setTimeout(() => {
            // Вставлять YouTube iframe плеер
            this.gameVideoContainer.innerHTML = `
                <iframe width="560" height="315" src="${videoUrl}" title="${this.games[this.currentIndex].title} Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;

            this.gameVideoContainer.style.transition = 'opacity 0.5s ease';
            this.gameVideoContainer.style.opacity = '1';
        }, 300);
    }

    autoPlay() {
        let progress = 0;
        const progressInterval = 100;
        const totalTime = 10000; // Увеличено время на просмотр с 5 до 10 секунд

        setInterval(() => {
            if (!this.isAnimating) {
                progress += (progressInterval / totalTime) * 100;
                if (this.progressBar) {
                    this.progressBar.style.width = `${progress}%`;
                }

                if (progress >= 100) {
                    progress = 0;
                    this.nextSlide();
                }
            }
        }, progressInterval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GameCarousel();
    
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'all 0.8s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 300);

    const joystick = document.querySelector('.joystick');
    if (joystick) {
        joystick.addEventListener('mouseenter', () => {
            joystick.style.transform = 'rotate(15deg)';
        });
        
        joystick.addEventListener('mouseleave', () => {
            joystick.style.transform = 'rotate(0deg)';
        });
    }

    // Navigation active states - improved
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section[id]');
    const currentPath = window.location.pathname;

    function updateActiveNav() {
        // Reset all active states
        navLinks.forEach(link => link.classList.remove('active'));

        // Check current page and set active link
        if (currentPath.includes('news.html')) {
            // On news page
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'news.html') {
                    link.classList.add('active');
                }
            });
        } else if (currentPath.includes('reviews.html')) {
            // On reviews page
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'reviews.html') {
                    link.classList.add('active');
                }
            });
        } else {
            // On index page - always highlight "Главная"
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'index.html' || link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
        }
    }

    // Force initial check
    updateActiveNav();

    setTimeout(() => {
        updateActiveNav();
    }, 100);

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);

    // Also update on hash changes
    window.addEventListener('hashchange', updateActiveNav);

    // Mobile optimization - disable cursor controls on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        document.querySelector('.cursor-controls')?.remove();
    }

    // Enhanced carousel for touch devices
    let touchStartX = 0;
    let touchStartY = 0;
    let isScrolling = false;

    function carouselTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isScrolling = false;
    }

    function carouselTouchMove(e) {
        if (!touchStartX || !touchStartY) return;

        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        const deltaX = Math.abs(touchEndX - touchStartX);
        const deltaY = Math.abs(touchEndY - touchStartY);

        if (deltaY > deltaX && deltaY > 10) {
            isScrolling = true;
        }
    }

    function carouselTouchEnd(e) {
        if (isScrolling) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe left - next slide
                if (!gameCarousel.isAnimating) {
                    gameCarousel.nextSlide();
                }
            } else {
                // Swipe right - prev slide
                if (!gameCarousel.isAnimating) {
                    gameCarousel.prevSlide();
                }
            }
        }

        touchStartX = 0;
        touchStartY = 0;
    }

    // Add touch events to carousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', carouselTouchStart, { passive: true });
        carousel.addEventListener('touchmove', carouselTouchMove, { passive: true });
        carousel.addEventListener('touchend', carouselTouchEnd, { passive: true });
    }

    // Mobile carousel acceleration
    if (window.innerWidth < 768) {
        // Reduce transition duration on mobile for faster feel
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
            carouselTrack.style.transition = 'transform 400ms ease-out';
        }
    }

    // Expandable news and review cards - click on entire card
    const newsCards = document.querySelectorAll('.news-card');
    const reviewCards = document.querySelectorAll('.review-card');

    newsCards.forEach(card => {
        card.addEventListener('click', (e) => {
            expandCard(card);
        });
    });

    reviewCards.forEach(card => {
        card.addEventListener('click', (e) => {
            expandCard(card);
        });
    });

    function expandCard(card) {
        if (card.classList.contains('expanded')) {
            // Collapse - спрятать полный контент
            const fullContent = card.querySelector('.news-full-content, .review-full-content');
            if (fullContent) {
                fullContent.classList.remove('visible');
                // fullContent.style.display = 'none';
            }
            card.style.height = '';
            card.classList.remove('expanded');
        } else {
            // Expand - показать полный контент
            const fullContent = card.querySelector('.news-full-content, .review-full-content');
            if (fullContent) {
                fullContent.classList.add('visible');
                // fullContent.style.display = 'block';
            }
            card.style.height = 'auto';
            card.classList.add('expanded');
        }
    }
});
