// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 3. Intersection Observer for Fade-in Animations
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger CSS animation
                entry.target.classList.add('visible');
                // Stop observing the element so it doesn't fade out and in again
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 5. 3D Product Grid Carousel Logic
    const productGrid = document.getElementById('productGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (productGrid && prevBtn && nextBtn) {
        let cards = Array.from(productGrid.querySelectorAll('.product-card'));
        let autoScrollInterval;
        let isAnimating = false;

        const updateCards = () => {
            cards.forEach(card => {
                card.classList.remove('active', 'prev', 'next');
            });

            // The middle item in the array is "active"
            // Let's treat cards[0] as active, cards[cards.length - 1] as prev, cards[1] as next
            if (cards.length > 0) cards[0].classList.add('active');

            if (cards.length > 1) {
                cards[1].classList.add('next');
                cards[cards.length - 1].classList.add('prev');
            }
        };

        const moveNext = () => {
            if (isAnimating || cards.length === 0) return;
            isAnimating = true;

            const firstCard = cards.shift(); // Remove first element
            cards.push(firstCard); // Add to end
            updateCards();

            setTimeout(() => { isAnimating = false; }, 600); // 600ms match css transition
        };

        const movePrev = () => {
            if (isAnimating || cards.length === 0) return;
            isAnimating = true;

            const lastCard = cards.pop(); // Remove last element
            cards.unshift(lastCard); // Add to start
            updateCards();

            setTimeout(() => { isAnimating = false; }, 600);
        };

        const startAutoScroll = () => {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(moveNext, 10000); // 10 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        nextBtn.addEventListener('click', () => {
            stopAutoScroll();
            moveNext();
            startAutoScroll();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoScroll();
            movePrev();
            startAutoScroll();
        });

        // Initialize display
        updateCards();

        // Optional: click on prev/next card to move
        productGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                if (card.classList.contains('next')) {
                    stopAutoScroll(); moveNext(); startAutoScroll();
                } else if (card.classList.contains('prev')) {
                    stopAutoScroll(); movePrev(); startAutoScroll();
                }
            }
        });

        // Pause auto scroll when interacting
        productGrid.addEventListener('mouseenter', stopAutoScroll);
        productGrid.addEventListener('mouseleave', startAutoScroll);
        productGrid.addEventListener('touchstart', stopAutoScroll);
        productGrid.addEventListener('touchend', startAutoScroll);

        startAutoScroll();
    }

    // 4. Language Switcher Logic
    const translations = {
        th: {
            "nav-home": "หน้าแรก",
            "nav-about": "เกี่ยวกับเรา",
            "nav-products": "สินค้าของเรา",
            "nav-menu": "เมนูแนะนำ",
            "about-title": "ทำไมต้อง <span class='highlight'>KULA Beef?</span>",
            "about-desc": "เราใส่ใจทุกขั้นตอน ตั้งแต่การคัดเลือกสายพันธุ์โค การเลี้ยงดูด้วยธัญพืชคุณภาพ จนถึงกระบวนการตัดแต่งโดยผู้เชี่ยวชาญ (Butcher) เพื่อให้ได้เนื้อที่มีลายไขมันแทรก (Marbling) ที่สวยงาม รสชาติเข้มข้น และปลอดภัยที่สุด",
            "about-feature-1": "ฟาร์มมาตรฐาน ปลอดสารเร่งเนื้อแดง",
            "about-feature-2": "บ่ม (Aging) อย่างพิถีพิถันเพื่อความนุ่ม",
            "about-feature-3": "จัดส่งสะอาด ปลอดภัย ควบคุมอุณหภูมิทั่วประเทศ",
            "prod-title": "ผลิตภัณฑ์ของเรา",
            "prod-1": "เนื้อสไลด์ใบพาย ไทยวากิว (200g)",
            "prod-2": "เนื้อสเต็ก",
            "prod-3": "เนื้อครึ่งแดด (200g)",
            "prod-4": "เนื้อสไลด์ วากิว (100g)",
            "btn-order": "สั่งซื้อ",
            "menu-title": "สร้างสรรค์เมนูสุดพิเศษ",
            "menu-desc": "ยกระดับมื้ออาหารของคุณด้วยเนื้อคุณภาพจากเรา ไม่ว่าจะเป็นสเต็กเนื้อนุ่มละมุน ซุปเนื้อตุ๋นยาจีนรสกลมกล่อม หรือชาบูเนื้อสไลด์แสนอร่อย ทำมื้อธรรมดาให้กลายเป็นมื้อพิเศษได้ง่ายๆ ที่บ้านคุณ",
            "menu-btn": "เลือกเนื้อไปทำเมนูโปรด",
            "footer-brand1": "KULA BEEF - เนื้อพรีเมี่ยม",
            "footer-brand2": "มุ่งมั่นส่งมอบประสบการณ์การทานเนื้อวัวที่ดีที่สุดให้คุณในทุกๆ คำ",
            "footer-link-title": "ลิงก์ด่วน",
            "footer-contact-title": "ติดต่อเรา",
            "alert-cart": "🎉 เพิ่ม \"{product}\" ลงในตะกร้าสินค้าเรียบร้อยแล้ว!\n(นี่เป็นเพียงการทดลองสำหรับ Static Website)"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-products": "Our Products",
            "nav-menu": "Recommended Menus",
            "about-title": "Why <span class='highlight'>KULA Beef?</span>",
            "about-desc": "We care about every step, from selecting cattle breeds, grain-fed nurturing, to expert butchering, ensuring the most beautiful marbling, intense flavor, and best safety.",
            "about-feature-1": "Standard Farm, No Growth Promoters",
            "about-feature-2": "Meticulously Aged for Tenderness",
            "about-feature-3": "Clean & Safe Nationwide Temperature-Controlled Delivery",
            "prod-title": "Our Products",
            "prod-1": "Thai Wagyu Oyster Blade Sliced (200g)",
            "prod-2": "Beef Steak",
            "prod-3": "Sun-dried Beef (200g)",
            "prod-4": "Wagyu Sliced Beef (100g)",
            "btn-order": "Order Now",
            "menu-title": "Create Special Menus",
            "menu-desc": "Elevate your meal with our premium beef. Whether it's a tender steak, flavorful Chinese herbal beef soup, or delicious shabu-shabu slices. Turn ordinary meals into special ones at your home.",
            "menu-btn": "Select Beef for Your Recipe",
            "footer-brand1": "KULA BEEF - Premium Beef",
            "footer-brand2": "Committed to delivering the best beef experience in every bite.",
            "footer-link-title": "Quick Links",
            "footer-contact-title": "Contact Us",
            "alert-cart": "🎉 \"{product}\" has been added to your cart!\n(This is just a demo for the Static Website)"
        },
        cn: {
            "nav-home": "首页",
            "nav-about": "关于我们",
            "nav-products": "我们的产品",
            "nav-menu": "推荐菜单",
            "about-title": "为什么选择 <span class='highlight'>KULA Beef?</span>",
            "about-desc": "我们注重每一个细节，从挑选牛种、谷物饲养到专业屠宰，确保呈现最美丽的大理石纹、浓郁的风味和最高的安全性。",
            "about-feature-1": "标准农场，无瘦肉精",
            "about-feature-2": "精心熟成，肉质鲜嫩",
            "about-feature-3": "全国温控冷链安全配送",
            "prod-title": "我们的产品",
            "prod-1": "泰国和牛板腱肉片 (200g)",
            "prod-2": "牛排",
            "prod-3": "半干牛肉 (200g)",
            "prod-4": "和牛切片 (100g)",
            "btn-order": "立即购买",
            "menu-title": "打造特色菜单",
            "menu-desc": "用我们的优质牛肉提升您的用餐体验。无论是鲜嫩的牛排、浓郁的中式清炖牛肉汤，还是美味的寿喜烧肉片。在家里轻松将普通的一餐变成特别的一餐。",
            "menu-btn": "挑选您喜欢的食谱牛肉",
            "footer-brand1": "KULA BEEF - 高品质牛肉",
            "footer-brand2": "致力于让您在每一口中体验到最好的牛肉。",
            "footer-link-title": "快速链接",
            "footer-contact-title": "联系我们",
            "alert-cart": "🎉 \"{product}\" 已添加到您的购物车！\n(这只是静态网站的面版展示)"
        },
        ar: {
            "nav-home": "الرئيسية",
            "nav-about": "من نحن",
            "nav-products": "منتجاتنا",
            "nav-menu": "القائمة الموصى بها",
            "about-title": "لماذا <span class='highlight'>KULA Beef؟</span>",
            "about-desc": "نحن نهتم بكل خطوة، بدءاً من اختيار سلالات الماشية، والتربية بالحبوب، وحتى التقطيع على يد خبراء لضمان أفضل دهون متخللة، ونكهة غنية، وأقصى درجات الأمان.",
            "about-feature-1": "مزرعة نموذجية، خالية من الهرمونات",
            "about-feature-2": "معتق بعناية ليكون أكثر طراوة",
            "about-feature-3": "توصيل نظيف وآمن مع تحكم بدرجة الحرارة",
            "prod-title": "منتجاتنا",
            "prod-1": "شرائح لحم واغيو التايلاندي (200 غ)",
            "prod-2": "شريحة لحم (ستيك)",
            "prod-3": "لحم بقري مجفف بالشمس (200 غ)",
            "prod-4": "شرائح لحم واغيو (100 غ)",
            "btn-order": "اطلب الآن",
            "menu-title": "ابتكر قوائم طعام مميزة",
            "menu-desc": "ارتقِ بوجبتك مع لحومنا عالية الجودة. سواء كان ستيك طري، شوربة لحم بالأعشاب الصينية، أو شرائح شابو شابو لذيذة. حوّل وجباتك العادية إلى وجبات مميزة في منزلك.",
            "menu-btn": "اختر اللحم لوصفتك المفضلة",
            "footer-brand1": "KULA BEEF - لحم بقري فاخر",
            "footer-brand2": "ملتزمون بتقديم أفضل تجربة لحم بقري في كل قضمة.",
            "footer-link-title": "روابط سريعة",
            "footer-contact-title": "اتصل بنا",
            "alert-cart": "🎉 تمت إضافة \"{product}\" إلى عربة التسوق الخاصة بك!\n(هذا مجرد عرض تجريبي للموقع الثابت)"
        }
    };

    let currentLang = 'th';
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');
            currentLang = lang;
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update document lang attribute
        const htmlTag = document.querySelector('html');
        if (lang === 'en') {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
        } else if (lang === 'cn') {
            htmlTag.setAttribute('lang', 'zh-Hans');
            htmlTag.setAttribute('dir', 'ltr');
        } else if (lang === 'ar') {
            htmlTag.setAttribute('lang', 'ar');
            htmlTag.setAttribute('dir', 'rtl');
        } else {
            htmlTag.setAttribute('lang', 'th');
            htmlTag.setAttribute('dir', 'ltr');
        }
    }

    // Attach current translation dictionary to window for alert cart
    window.siteTranslations = translations;
    window.getCurrentLang = () => currentLang;

});

/**
 * 5. Simple notification function for 'Add to Cart'
 * In a real application, this would interact with a cart array/object and update the UI.
 */
function addToCart(productKey) {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'th';
    const dict = window.siteTranslations ? window.siteTranslations[lang] : null;
    let alertMsg = `🎉 เพิ่ม "${productKey}" ลงในตะกร้าสินค้าเรียบร้อยแล้ว!\n(นี่เป็นเพียงการทดลองสำหรับ Static Website)`;

    // Resolve Product Name
    let productName = productKey;
    if (dict) {
        // Search for the product name in dict
        if (productKey === 'เนื้อสไลด์ใบพาย ไทยวากิว') productName = dict['prod-1'].split(' (')[0];
        if (productKey === 'เนื้อสเต็ก') productName = dict['prod-2'];
        if (productKey === 'เนื้อครึ่งแดด') productName = dict['prod-3'].split(' (')[0];
        if (productKey === 'เนื้อสไลด์ วากิว') productName = dict['prod-4'].split(' (')[0];

        if (dict['alert-cart']) {
            alertMsg = dict['alert-cart'].replace('{product}', productName);
        }
    }

    alert(alertMsg);
}
