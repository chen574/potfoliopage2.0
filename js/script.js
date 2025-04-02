const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if(navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        },1100);
    }
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = 'translateX(calc(${index * -100}% - ${index * 2}rem))';

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4){
        index ++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1){
        index --;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

// 获取元素
const aboutBoxes = document.querySelectorAll('.aboutme-box');
const aboutDetails = document.querySelectorAll('.about-detail');
const backBtns = document.querySelectorAll('.back-btn');
const barsBoxes = document.querySelectorAll('.bars-box');
const header = document.querySelector('header');
const homeSection = document.querySelector('.home');
const aboutmeSection = document.querySelector('.aboutme'); // 新增：About Me 部分

// 点击 About Me 卡片
aboutBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // 1. 隐藏当前内容（播放滑出动画）
        header.classList.remove('active');
        homeSection.classList.remove('active');
        aboutmeSection.classList.remove('active'); // 隐藏 About Me 部分
        
        // 2. 显示全局 bars-box 动画
        const globalBarsBox = document.querySelector('.bars-box:not(.about-detail .bars-box)');
        globalBarsBox.classList.remove('active');
        
        setTimeout(() => {
            globalBarsBox.classList.add('active');
        }, 10);

        // 3. 延迟后显示详情页（播放滑入动画）
        setTimeout(() => {
            aboutDetails[index].classList.add('active');
        }, 500);
    });
});

// 点击返回按钮
backBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 1. 隐藏详情页
        aboutDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // 2. 显示全局 bars-box 动画
        const globalBarsBox = document.querySelector('.bars-box:not(.about-detail .bars-box)');
        globalBarsBox.classList.remove('active');
        
        setTimeout(() => {
            globalBarsBox.classList.add('active');
        }, 10);

        // 3. 延迟后显示 About Me 部分（不是首页！）
        setTimeout(() => {
            header.classList.add('active');
            aboutmeSection.classList.add('active'); // 显示 About Me 部分
        }, 500);
    });
});
