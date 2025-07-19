# 포트폴리오 웹사이트

모던하고 반응형인 개인 포트폴리오 웹사이트입니다. HTML, CSS, JavaScript를 사용하여 제작되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **모던 UI/UX**: 깔끔하고 직관적인 사용자 인터페이스
- **스무스 애니메이션**: 부드러운 스크롤 및 호버 효과
- **다크 모드**: 사용자 선호도에 따른 테마 전환
- **모바일 친화적**: 햄버거 메뉴 및 터치 제스처 지원
- **연락처 폼**: 유효성 검사가 포함된 연락처 양식
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그

## 📁 파일 구조

```
portpolio/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: 모듈화된 기능
- **Font Awesome**: 아이콘 라이브러리
- **Google Fonts**: Inter 폰트

## 🎨 디자인 특징

- **그라디언트 배경**: 시각적으로 매력적인 색상 조합
- **카드 기반 레이아웃**: 정보의 명확한 구분
- **호버 효과**: 인터랙티브한 사용자 경험
- **타이포그래피**: 가독성 높은 폰트 선택
- **색상 팔레트**: 일관된 브랜딩

## 📱 반응형 브레이크포인트

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🚀 시작하기

1. 프로젝트를 클론하거나 다운로드합니다.
2. `index.html` 파일을 웹 브라우저에서 엽니다.
3. 또는 로컬 서버를 실행합니다:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## ⚙️ 커스터마이징

### 개인 정보 수정
`index.html` 파일에서 다음 정보를 수정하세요:

- 이름 및 직함
- 소개 텍스트
- 연락처 정보
- 소셜 미디어 링크
- 프로젝트 정보

### 색상 테마 변경
`styles.css` 파일에서 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #fbbf24;
    --text-color: #1f2937;
    --bg-color: #f8fafc;
}
```

### 프로젝트 추가
`index.html`의 프로젝트 섹션에 새로운 프로젝트 카드를 추가하세요:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>프로젝트 제목</h3>
        <p>프로젝트 설명</p>
        <div class="project-tech">
            <span>기술1</span>
            <span>기술2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

## 🎯 주요 섹션

1. **홈 (Hero)**: 첫인상과 주요 메시지
2. **소개 (About)**: 개인 소개 및 통계
3. **기술 스택 (Skills)**: 보유 기술 및 도구
4. **프로젝트 (Projects)**: 주요 프로젝트 포트폴리오
5. **연락처 (Contact)**: 연락처 정보 및 폼

## 🔧 JavaScript 기능

- **네비게이션**: 스무스 스크롤링 및 모바일 메뉴
- **애니메이션**: 스크롤 기반 요소 등장 효과
- **폼 검증**: 연락처 폼 유효성 검사
- **다크 모드**: 테마 전환 기능
- **진행률 바**: 스크롤 진행률 표시
- **알림 시스템**: 사용자 피드백

## 📈 성능 최적화

- **이미지 최적화**: WebP 형식 사용 권장
- **CSS 최적화**: 미디어 쿼리 및 효율적인 선택자
- **JavaScript 최적화**: 이벤트 디바운싱 및 지연 로딩
- **폰트 최적화**: Google Fonts 최적화된 로딩

## 🌐 배포

### GitHub Pages
1. GitHub 저장소에 코드를 푸시합니다.
2. Settings > Pages에서 배포 설정을 구성합니다.
3. `main` 브랜치에서 배포를 활성화합니다.

### Netlify
1. Netlify 계정에 로그인합니다.
2. "New site from Git"을 선택합니다.
3. GitHub 저장소를 연결합니다.
4. 배포 설정을 구성합니다.

### Vercel
1. Vercel 계정에 로그인합니다.
2. "New Project"를 클릭합니다.
3. GitHub 저장소를 import합니다.
4. 배포 설정을 확인하고 배포합니다.

## 🔒 보안 고려사항

- **HTTPS 사용**: 프로덕션 환경에서 HTTPS 필수
- **폼 보안**: CSRF 토큰 및 입력 검증
- **외부 링크**: `rel="noopener noreferrer"` 속성 사용

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다.
2. 새로운 기능 브랜치를 생성합니다.
3. 변경사항을 커밋합니다.
4. 브랜치에 푸시합니다.
5. Pull Request를 생성합니다.

## 📞 지원

질문이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**만든이**: [당신의 이름]  
**연락처**: your.email@example.com  
**GitHub**: https://github.com/yourusername 