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
        this.setupCursorControls();
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

        // Начинаем с середины (второй набор игр)
        this.currentIndex = 0;
        const initialOffset = this.games.length;
        const slideWidth = this.slides[0].offsetWidth + 32;
        this.carouselTrack.style.transform = `translateX(-${initialOffset * slideWidth}px)`;
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

    setupCursorControls() {
        const cursorButtons = document.querySelectorAll('.cursor-btn');
        cursorButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                cursorButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.body.classList.remove('crosshair-cursor', 'sword-cursor', 'glove-cursor');
                const cursorType = btn.getAttribute('data-cursor');
                if (cursorType !== 'default') {
                    document.body.classList.add(`${cursorType}-cursor`);
                }
            });
        });
    }

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
        
        const slideWidth = this.slides[0].offsetWidth + 32;
        // Смещение с учетом клонов (начинаем со второго набора игр)
        const offset = this.games.length + this.currentIndex;
        const translateX = -offset * slideWidth;
        
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
            // Показывать статистическое изображение вместо видео из-за возможных ошибок загрузки
            this.gameVideoContainer.innerHTML = `
                <div class="video-placeholder">
                    <img src="${this.games[this.currentIndex].image}" alt="${this.games[this.currentIndex].title} trailer" class="video-thumb">
                    <p>Трейлер "${this.games[this.currentIndex].title}" будет доступен при просмотре онлайн.</p>
                    <a href="${videoUrl.replace('embed/', 'watch?v=')}" target="_blank" class="video-link">Посмотреть на YouTube</a>
                </div>
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

    // Navigation scroll highlighting
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check

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
            }
            card.style.height = '';
            card.classList.remove('expanded');
        } else {
            // Expand - показать полный контент
            const fullContent = card.querySelector('.news-full-content, .review-full-content');
            if (fullContent) {
                fullContent.classList.add('visible');
            }
            card.style.height = 'auto';
            card.classList.add('expanded');
        }
    }
});
