// DOM 요소들
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// 모바일 메뉴 토글
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 스무스 스크롤링
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들
const animateElements = document.querySelectorAll('.about-content, .skill-category, .project-card, .contact-content');
animateElements.forEach(el => {
    observer.observe(el);
});

// 기술 스택 애니메이션
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-up');
});

// 프로젝트 카드 호버 효과
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 연락처 폼 제출
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 폼 데이터 수집
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // 간단한 유효성 검사
    if (!name || !email || !subject || !message) {
        showNotification('모든 필드를 입력해주세요.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('유효한 이메일 주소를 입력해주세요.', 'error');
        return;
    }
    
    // 성공 메시지 표시 (실제로는 서버로 전송)
    showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
    this.reset();
});

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 알림 표시 함수
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // 스타일 적용
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // 애니메이션
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 닫기 버튼 이벤트
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // 자동 제거
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// 타이핑 애니메이션
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 페이지 로드 시 타이핑 애니메이션 시작
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// 스크롤 진행률 표시
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // 진행률 바 생성 또는 업데이트
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #7c3aed);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// 다크 모드 토글 (선택사항)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(toggle);
}

// 페이지 로드 시 다크모드 토글 생성
window.addEventListener('load', createDarkModeToggle);

// 다크모드 스타일
const darkModeStyles = `
    .dark-mode {
        background: #1f2937;
        color: #f9fafb;
    }
    
    .dark-mode .navbar {
        background: rgba(31, 41, 55, 0.95);
    }
    
    .dark-mode .nav-link {
        color: #f9fafb;
    }
    
    .dark-mode .section-title {
        color: #f9fafb;
    }
    
    .dark-mode .skill-category,
    .dark-mode .project-card,
    .dark-mode .contact-form {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-mode .skill-item {
        background: #4b5563;
        color: #f9fafb;
    }
    
    .dark-mode .about {
        background: #374151;
    }
    
    .dark-mode .projects {
        background: #374151;
    }
`;

// 다크모드 스타일 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);

// 로딩 애니메이션
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Ctrl/Cmd + K로 검색 (향후 구현 가능)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // 검색 기능 구현
    }
});

// 터치 제스처 지원 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 왼쪽으로 스와이프
            console.log('Left swipe');
        } else {
            // 오른쪽으로 스와이프
            console.log('Right swipe');
        }
    }
}

// 성능 최적화: 디바운싱
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트 최적화
const optimizedScrollHandler = debounce(updateScrollProgress, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// 콘솔 메시지
console.log(`
🚀 포트폴리오 웹사이트가 로드되었습니다!
📧 연락처: your.email@example.com
🔗 GitHub: https://github.com/yourusername
💼 LinkedIn: https://linkedin.com/in/yourusername
`); 