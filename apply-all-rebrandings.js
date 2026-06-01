const fs = require('fs');
const path = require('path');

const baseDir = '/Users/nisalnimsara/GitHub/the-kota-';

function getHtmlFiles(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                files = files.concat(getHtmlFiles(fullPath));
            }
        } else if (file.endsWith('.html')) {
            files.push(fullPath);
        }
    });
    return files;
}

const htmlFiles = getHtmlFiles(baseDir);

const youtubePath = `<path fill="currentColor" d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`;
const facebookPath = `<path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`;
const redditPath = `<path fill="currentColor" d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.33 3.79.85c.08.85.79 1.51 1.65 1.51 1.1 0 1.99-.89 1.99-1.99s-.89-2-1.99-2c-.88 0-1.61.58-1.86 1.38l-4.22-.95c-.2-.04-.4.07-.47.27L10.3 8.01C7.81 8.07 5.56 8.71 3.9 9.72 3.33 8.94 2.42 8.46 1.45 8.46c-1.65 0-3 1.35-3 3 0 1.13.63 2.11 1.56 2.62-.06.3-.1.61-.1.92 0 4.14 4.7 7.5 10.5 7.5s10.5-3.36 10.5-7.5c0-.31-.04-.62-.1-.92.93-.51 1.56-1.49 1.56-2.62zM5.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`;

htmlFiles.forEach(filePath => {
    const relativePath = path.relative(baseDir, filePath);
    
    // Determine depth and prefix
    const depth = relativePath.split(path.sep).length - 1;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    
    const inlineScript = `
<script>
(function() {
    const preloaderStart = Date.now();
    const styles = {
        '--token-97f7c01c-d33b-43e8-b4ec-1f1d7bb2db56': '#EA0813',
        '--token-c9420d': '#C20710',
        '--token-8a2d09': '#85050B'
    };
    function applyStyles() {
        for (const [prop, val] of Object.entries(styles)) {
            document.documentElement.style.setProperty(prop, val);
        }
        const badge = document.getElementById('__framer-badge-container');
        if (badge) badge.style.setProperty('display', 'none', 'important');
        
        // Inject custom CSS to make social icons normally white, and red on hover
        let styleEl = document.getElementById('kota-social-styles');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'kota-social-styles';
            styleEl.innerHTML = \`
                [data-framer-name="Social Icons"] a svg,
                [data-framer-name="Social Icons"] a svg *,
                .framer-1s5m8nf a svg,
                .framer-1s5m8nf a svg * {
                    fill: #ffffff !important;
                    color: #ffffff !important;
                    transition: fill 0.2s ease-in-out, color 0.2s ease-in-out !important;
                }
                [data-framer-name="Social Icons"] a:hover svg,
                [data-framer-name="Social Icons"] a:hover svg *,
                .framer-1s5m8nf a:hover svg,
                .framer-1s5m8nf a:hover svg * {
                    fill: #EA0813 !important;
                    color: #EA0813 !important;
                }
                /* Ensure Icon buttons render their SVG arrow reliably and centered */
                [data-framer-name="Icon"],
                .framer-1nsshvn,
                .framer-1wdch0p,
                .framer-daxxmo {
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    width: 40px !important;
                    height: 40px !important;
                    padding: 0 !important;
                    overflow: visible !important;
                    box-sizing: border-box !important;
                }
                [data-framer-name="Icon"] .svgContainer,
                .framer-1wdch0p .svgContainer,
                .framer-daxxmo .svgContainer {
                    width: 18px !important;
                    height: 18px !important;
                    display: block !important;
                    margin: 0 auto !important;
                }
                [data-framer-name="Icon"] .svgContainer svg,
                .framer-1wdch0p .svgContainer svg,
                .framer-daxxmo .svgContainer svg {
                    width: 18px !important;
                    height: 18px !important;
                    display: block !important;
                }
                /* Hide duplicate SVG children inside Icon containers (Framer often injects two variants) */
                [data-framer-name="Icon"] > [data-framer-component-type="SVG"] + [data-framer-component-type="SVG"] {
                    display: none !important;
                }
                /* Remove the thin 'More Info' bar under the counters */
                [data-framer-name="More Info"],
                [data-framer-name="Customers"],
                [data-framer-name="Global"] {
                    display: none !important;
                }
                /* Make Counter tiles more creative */
                [data-framer-name="Counter One"],
                [data-framer-name="Counter Two"] {
                    background: linear-gradient(180deg, rgba(234,8,19,0.06), rgba(0,0,0,0.35)) !important;
                    border-radius: 18px !important;
                    box-shadow: inset 0 1px 20px rgba(255,255,255,0.02), 0 10px 30px rgba(0,0,0,0.6) !important;
                    padding: 24px !important;
                    border: 1px solid rgba(255,255,255,0.03) !important;
                    backdrop-filter: blur(6px) !important;
                }
                [data-framer-name="Counter One"] .framer-text,
                [data-framer-name="Counter Two"] .framer-text {
                    color: #fff !important;
                }
            \`;
            document.head.appendChild(styleEl);
        }
        setupCounterAnimations();

        // Ensure 'YouTube Subscribers' label is visible and simplified to 'Subscribers'
        try {
            document.querySelectorAll('[data-framer-component-type="RichTextContainer"]').forEach(el => {
                if (el.innerText && /YouTube Subscribers/i.test(el.innerText)) {
                    el.style.removeProperty('display');
                    el.innerText = el.innerText.replace(/YouTube Subscribers/gi, 'Subscribers');
                }
            });
        } catch (e) {
            // ignore
        }

        // Swap sections: Experience Section before Counter Section (so it comes right after Hero Section)
        const counterSec = document.querySelector('[data-framer-name="Counter Section"]');
        const expSec = document.querySelector('[data-framer-name="Experience Section"]');
        if (counterSec && expSec && counterSec.parentElement) {
            if (counterSec.previousElementSibling !== expSec) {
                counterSec.parentElement.insertBefore(expSec, counterSec);
            }
        }

        // Apply custom scroll-reveal typography
        setupCustomScrollReveal();
    }

    function setupCustomScrollReveal() {
        const checkGsapInterval = setInterval(() => {
            if (window.gsap && window.ScrollTrigger) {
                clearInterval(checkGsapInterval);
                initGsapAnimation();
            }
        }, 100);

        function initGsapAnimation() {
            gsap.registerPlugin(ScrollTrigger);
            
            const desktopContainer = document.querySelector('.framer-1x4bpdp-container');
            const mobileContainer = document.querySelector('.framer-p0ih05-container');
            
            if (mobileContainer) {
                // Hide mobile container to prevent duplication
                mobileContainer.style.setProperty('display', 'none', 'important');
            }

            if (!desktopContainer) return;
            
            const container = desktopContainer;
            if (container.getAttribute('data-rebuilt') === 'true') return;
            container.setAttribute('data-rebuilt', 'true');
            
            // Force container styles for a compact but massive typography section
            container.style.setProperty('overflow', 'visible', 'important');
            container.style.setProperty('width', '100%', 'important');
            container.style.setProperty('height', 'auto', 'important');
            container.style.setProperty('padding', '2vh 0', 'important');
            container.style.setProperty('display', 'flex', 'important');
            container.style.setProperty('align-items', 'center', 'important');
            container.style.setProperty('justify-content', 'center', 'important');
            
            // Clear existing content
            container.innerHTML = '';
            
            const wrapper = document.createElement('div');
            wrapper.className = 'kota-reveal-wrapper';
            wrapper.style.cssText = 'width: 100%; max-width: 1100px; display: flex; flex-wrap: wrap; justify-content: center; align-items: baseline; gap: 0.2em 0.4em; text-transform: uppercase; font-family: "Rajdhani", sans-serif; padding: 0 5vw; text-align: center;';

            // Define the typography poster blocks to flow inline
            const textBlocks = [
                { text: "Yooow,", color: "transparent", stroke: "2px #EA0813", size: "clamp(50px, 12vw, 150px)", weight: "900", italic: true },
                { text: "what's up people", color: "#ffffff", stroke: "none", size: "clamp(30px, 6vw, 70px)", weight: "700", italic: false },
                { text: "this is your", color: "#888888", stroke: "none", size: "clamp(24px, 4vw, 50px)", weight: "500", italic: true },
                { text: "boy kota", color: "#EA0813", stroke: "none", size: "clamp(60px, 14vw, 180px)", weight: "900", italic: false },
                { text: "and how are you", color: "#ffffff", stroke: "none", size: "clamp(20px, 4vw, 45px)", weight: "600", italic: false, letterSpacing: "2px" },
                { text: "guys doing!", color: "#ffffff", stroke: "none", size: "clamp(30px, 7vw, 80px)", weight: "900", italic: true }
            ];

            textBlocks.forEach((block, idx) => {
                // Split block into individual words to allow flowing wrap and individual animation
                const words = block.text.split(' ');
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.className = 'kota-gsap-word';
                    span.textContent = word;
                    span.style.display = 'inline-block';
                    span.style.fontSize = block.size;
                    span.style.fontWeight = block.weight;
                    span.style.color = block.color;
                    span.style.lineHeight = '0.9';
                    span.style.fontStyle = block.italic ? 'italic' : 'normal';
                    
                    if (block.stroke !== 'none') {
                        span.style.webkitTextStroke = block.stroke;
                    }
                    if (block.letterSpacing) {
                        span.style.letterSpacing = block.letterSpacing;
                    }
                    
                    // Initial animation state
                    span.style.opacity = '0';
                    span.style.transformOrigin = '50% 100%';

                    wrapper.appendChild(span);
                });
            });
            
            container.appendChild(wrapper);

            // Apply modern creative GSAP animation
            const elements = wrapper.querySelectorAll('.kota-gsap-word');
            
            // Create a timeline scrubbed to scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                    end: "center 40%",
                    scrub: 1.5
                }
            });
            
            tl.fromTo(elements, 
                {
                    opacity: 0,
                    y: 100,
                    z: -100,
                    rotateX: 60,
                    rotateY: (index) => (index % 2 === 0 ? 20 : -20),
                    skewX: (index) => (index % 2 === 0 ? 10 : -10),
                    scale: 0.3,
                    filter: "blur(15px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotateX: 0,
                    rotateY: 0,
                    skewX: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 2,
                    stagger: 0.5, // Significant stagger so they load one-by-one
                    ease: "elastic.out(1.2, 0.5)"
                }
            );
        }
    }

    applyStyles();
    
    const prefix = '${prefix}';

    const repls = [
        { from: /John Jayden/gi, to: 'The Kota' },
        { from: /Jayden Jones/gi, to: 'The Kota' },
        { from: /@Jayden\\.design/gi, to: '@thekota' },
        { from: /\\bJayden\\b/g, to: 'The Kota' },
        { from: /\\bjayden\\b/g, to: 'the kota' },
        { from: /web developer/gi, to: 'Sri Lankan YouTube Creator' },
        { from: /Web-designer/g, to: 'YouTube' },
        { from: /\\bDeveloper\\b/g, to: 'Creator' },
        { from: /Product Designer/gi, to: 'YouTube Video Creator' },
        { from: /UI\\/UX Designer/gi, to: 'Content Creator' },
        { from: /Intern UI Designer/gi, to: 'Sri Lankan YouTuber' },
        { from: /San\\x20Francisco,\\x20CA/gi, to: 'Colombo,' },
        { from: /\\bUSA\\b/g, to: 'Sri Lanka' },
        { from: /\\b3\\x20projects\\b/g, to: 'Promotions' },
        { from: /\\bBuy\\x20Now\\b/g, to: 'Subscribe Now' },
        { from: /\\bView\\x20My\\x20Work\\b/g, to: 'Kota Extra' }
    ];

    const socialIcons = {
        youtube: {
            href: 'https://www.youtube.com/@TheKota',
            path: '${youtubePath}'
        },
        facebook: {
            href: 'https://www.facebook.com/TheKotaReturns',
            path: '${facebookPath}'
        },
        reddit: {
            href: 'https://www.reddit.com/r/TKASYLUM',
            path: '${redditPath}'
        }
    };

    let counterOneStarted = false;
    let counterTwoStarted = false;

    function isInsideAnimatingContainer(node) {
        let parent = node.parentElement;
        while (parent) {
            if (parent.getAttribute('data-animating') === 'true') {
                return true;
            }
            parent = parent.parentElement;
        }
        return false;
    }

    function processCounterNode(node) {
        if (!node) return;
        if (isInsideAnimatingContainer(node)) return;

        let current = node;
        let counterType = null;
        let isNumber = false;
        
        while (current) {
            if (current.nodeType === 1) {
                const name = current.getAttribute('data-framer-name');
                if (name === 'Number Counter') {
                    isNumber = true;
                }
                if (name === 'Counter One') {
                    counterType = 'one';
                    break;
                }
                if (name === 'Counter Two') {
                    counterType = 'two';
                    break;
                }
            }
            current = current.parentElement;
        }
        
        if (!counterType) return;
        
        if (isNumber) {
            const targetValue = counterType === 'one' ? '650K+' : '80M+';
            if (node.nodeType === 3) {
                if (node.nodeValue !== targetValue) {
                    node.nodeValue = targetValue;
                }
            } else if (node.nodeType === 1) {
                if (node.tagName === 'P') {
                    if (node.textContent !== targetValue) {
                        node.textContent = targetValue;
                    }
                } else {
                    const ps = node.querySelectorAll('p');
                    ps.forEach(p => {
                        if (p.textContent !== targetValue) {
                            p.textContent = targetValue;
                        }
                    });
                }
            }
        } else {
            const targetLabel = counterType === 'one' ? 'YouTube Subscribers' : 'Total Channel Views';
            if (node.nodeType === 3) {
                const trimmed = node.nodeValue.trim();
                if (trimmed && trimmed !== targetLabel && (trimmed.includes('Net Worth') || trimmed.includes('Success Rate') || trimmed.includes('Subscribers') || trimmed.includes('Views'))) {
                    node.nodeValue = targetLabel;
                }
            } else if (node.nodeType === 1) {
                if (node.tagName === 'P') {
                    if (node.textContent !== targetLabel) {
                        node.textContent = targetLabel;
                    }
                } else {
                    const ps = node.querySelectorAll('p');
                    ps.forEach(p => {
                        if (p.textContent !== targetLabel) {
                            p.textContent = targetLabel;
                        }
                    });
                }
            }
        }
    }

    function processNavigationLink(node) {
        if (!node || node.tagName !== 'A') return;
        const href = node.getAttribute('href') || '';
        const name = node.getAttribute('data-framer-name') || '';
        if (href.includes('work.html') || name.toLowerCase() === 'works') {
            node.setAttribute('href', prefix + 'index.html#work');
        } else if (href.includes('service.html') || name.toLowerCase() === 'services') {
            node.setAttribute('href', prefix + 'index.html#service');
        } else if (href.includes('about.html') || name.toLowerCase() === 'about') {
            node.setAttribute('href', prefix + 'index.html#about');
        }
    }

    function processFavicon(node) {
        if (!node || node.tagName !== 'LINK') return;
        const rel = node.getAttribute('rel') || '';
        if (rel.includes('icon')) {
            const href = node.getAttribute('href') || '';
            if (href.includes('BUqmbxZDP4XMeSAW74XXkInAt4.png') || href.includes('framerusercontent.com')) {
                node.setAttribute('href', prefix + 'Assets/Hero.png');
            }
        }
    }

    function animateCounter(container, targetValue, suffix) {
        const numPs = container.querySelectorAll('[data-framer-name="Number Counter"] p');
        if (numPs.length === 0) return;
        
        container.setAttribute('data-animating', 'true');
        
        let startTimestamp = null;
        const duration = 2000;
        
        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeProgress * targetValue);
            
            numPs.forEach(p => {
                p.textContent = currentValue + suffix;
            });
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                numPs.forEach(p => {
                    p.textContent = targetValue + suffix;
                });
                container.setAttribute('data-animating', 'false');
            }
        }
        window.requestAnimationFrame(step);
    }

    function setupCounterAnimations() {
        const c1 = document.querySelector('[data-framer-name="Counter One"]');
        const c2 = document.querySelector('[data-framer-name="Counter Two"]');
        
        if (c1 && c2 && window.IntersectionObserver) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!counterOneStarted) {
                            counterOneStarted = true;
                            animateCounter(c1, 650, 'K+');
                        }
                        if (!counterTwoStarted) {
                            counterTwoStarted = true;
                            animateCounter(c2, 80, 'M+');
                        }
                        io.disconnect();
                    }
                });
            }, { threshold: 0.1 });
            io.observe(c1);
        }
    }

    function replaceText(node) {
        if (!node) return;
        processCounterNode(node);
        processNavigationLink(node);
        processFavicon(node);
        if (isInsideAnimatingContainer(node)) return;

        if (node.nodeType === 3) {
            let val = node.nodeValue;
            let changed = false;
            for (const r of repls) {
                if (r.from.test(val)) {
                    val = val.replace(r.from, r.to);
                    changed = true;
                }
            }
            if (changed) node.nodeValue = val;
        } else if (node.nodeType === 1) {
            if (node.getAttribute('data-framer-name') === 'Logo') {
                const img = node.querySelector('img');
                if (!img) {
                    node.innerHTML = \`<div class="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit"><img src="\` + prefix + \`Assets/Kota Text.png" alt="Logo" style="display: block; width: 100%; height: 100%; object-position: center; object-fit: contain;" /></div>\`;
                } else if (img.getAttribute('src') !== prefix + 'Assets/Kota Text.png') {
                    img.setAttribute('src', prefix + 'Assets/Kota Text.png');
                }
                return;
            }

            if (node.getAttribute('data-styles-preset') === 'tOUh8Virz') {
                const text = node.textContent || '';
                if (text.includes("Hi, I'm") || text.includes("Jayden") || text.includes("Kota")) {
                    node.innerHTML = 'Hi, I\\'m <span style="--framer-text-color: var(--token-e184c06d-82a7-4ddc-bfb5-020c88d91f80, rgb(255, 255, 255));" class="framer-text">The Kota</span>,';
                } else {
                    node.innerHTML = 'Working as a <span style="--framer-text-color: var(--token-e184c06d-82a7-4ddc-bfb5-020c88d91f80, rgb(255, 255, 255));" class="framer-text">Content Creator</span> on <span style="--framer-text-color: var(--token-e184c06d-82a7-4ddc-bfb5-020c88d91f80, rgb(255, 255, 255));" class="framer-text">YouTube</span>';
                }
                return;
            }
            
            if (node.className && typeof node.className === 'string') {
                if (node.className.includes('framer-4xdbrd-container') || node.className.includes('framer-h664oy-container')) {
                    node.style.setProperty('display', 'none', 'important');
                    return;
                }
            }
            
            if (node.tagName === 'A') {
                const href = node.getAttribute('href') || '';
                const name = node.getAttribute('data-framer-name') || '';
                if (href.includes('lemonsqueezy.com') || href.includes('youtube.com/@TheKota?sub_confirmation=1')) {
                    node.setAttribute('href', 'https://www.youtube.com/@TheKota');
                } else if (name === 'Work') {
                    node.setAttribute('href', 'https://www.youtube.com/@kotaextra');
                    node.setAttribute('target', '_blank');
                    node.setAttribute('rel', 'noopener');
                } else {
                    let matchedSocial = null;
                    if (href.includes('dribbble.com') || href.includes('TheKotaReturns') || href.includes('pinterest.com')) {
                        matchedSocial = 'facebook';
                    } else if (href.includes('instagram.com') || href.includes('TKASYLUM')) {
                        matchedSocial = 'reddit';
                    } else if (href.includes('x.com') || href.includes('youtube.com')) {
                        matchedSocial = 'youtube';
                    }
                    
                    if (matchedSocial) {
                        node.setAttribute('href', socialIcons[matchedSocial].href);
                        const svg = node.querySelector('svg');
                        if (svg) {
                            svg.innerHTML = socialIcons[matchedSocial].path;
                        }
                    }
                }
            }
            
            ['alt', 'title', 'placeholder'].forEach(attr => {
                if (node.hasAttribute(attr)) {
                    let val = node.getAttribute(attr);
                    let changed = false;
                    for (const r of repls) {
                        if (r.from.test(val)) {
                            val = val.replace(r.from, r.to);
                            changed = true;
                        }
                    }
                    if (changed) node.setAttribute(attr, val);
                }
            });
            if (node.tagName === 'IMG') {
                const src = node.getAttribute('src') || '';
                const srcset = node.getAttribute('srcset') || '';
                if (src.includes('Sw1RXit' + 'xqpkOiWs8LmcITuaU') || src.includes('W0Flr9u5hJlV' + 'myjWEYDshQ2sPY') ||
                    srcset.includes('Sw1RXit' + 'xqpkOiWs8LmcITuaU') || srcset.includes('W0Flr9u5hJlV' + 'myjWEYDshQ2sPY')) {
                    node.setAttribute('src', prefix + 'Assets/Hero.png');
                    node.removeAttribute('srcset');
                } else if (src.includes('rjytgkPUT' + 'bFjrXmIX6Muq6ybMLY') || srcset.includes('rjytgkPUT' + 'bFjrXmIX6Muq6ybMLY')) {
                    node.setAttribute('src', prefix + 'Assets/Kota Text.png');
                    node.removeAttribute('srcset');
                }
            }
            for (let child = node.firstChild; child; child = child.nextSibling) {
                replaceText(child);
            }
        }
    }

    // Preloader state tracking
    let preloaderHidden = false;
    let fadeOutScheduled = false;
    function triggerFadeOut() {
        if (fadeOutScheduled || preloaderHidden) return;
        fadeOutScheduled = true;
        const elapsed = Date.now() - preloaderStart;
        const delay = Math.max(0, 4000 - elapsed);
        setTimeout(() => {
            const loader = document.getElementById('kota-preloader');
            if (loader) {
                loader.classList.add('fade-out');
                preloaderHidden = true;
            }
        }, delay);
    }
    // Absolute fail-safe fallback (6 seconds from script execution)
    setTimeout(triggerFadeOut, 6000);

    const observer = new MutationObserver((mutations) => {
        observer.disconnect();
        applyStyles();
        
        for (const mut of mutations) {
            if (mut.type === 'childList') {
                for (const node of mut.addedNodes) {
                    replaceText(node);
                }
            } else if (mut.type === 'attributes') {
                const node = mut.target;
                
                if (node.getAttribute('data-framer-name') === 'Logo') {
                    const img = node.querySelector('img');
                    if (!img) {
                        node.innerHTML = \`<div class="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit"><img src="\` + prefix + \`Assets/Kota Text.png" alt="Logo" style="display: block; width: 100%; height: 100%; object-position: center; object-fit: contain;" /></div>\`;
                    } else if (img.getAttribute('src') !== prefix + 'Assets/Kota Text.png') {
                        img.setAttribute('src', prefix + 'Assets/Kota Text.png');
                    }
                }

                processCounterNode(node);
                processNavigationLink(node);
                processFavicon(node);

                if (node.className && typeof node.className === 'string') {
                    if (node.className.includes('framer-4xdbrd-container') || node.className.includes('framer-h664oy-container')) {
                        node.style.setProperty('display', 'none', 'important');
                    }
                }
                
                if (node.tagName === 'A' && mut.attributeName === 'href') {
                    const href = node.getAttribute('href') || '';
                    const name = node.getAttribute('data-framer-name') || '';
                    if (href.includes('lemonsqueezy.com') || href.includes('youtube.com/@TheKota?sub_confirmation=1')) {
                        node.setAttribute('href', 'https://www.youtube.com/@TheKota');
                    } else if (name === 'Work') {
                        node.setAttribute('href', 'https://www.youtube.com/@kotaextra');
                        node.setAttribute('target', '_blank');
                        node.setAttribute('rel', 'noopener');
                    } else {
                        let matchedSocial = null;
                        if (href.includes('dribbble.com') || href.includes('TheKotaReturns') || href.includes('pinterest.com')) {
                            matchedSocial = 'facebook';
                        } else if (href.includes('instagram.com') || href.includes('TKASYLUM')) {
                            matchedSocial = 'reddit';
                        } else if (href.includes('x.com') || href.includes('youtube.com')) {
                            matchedSocial = 'youtube';
                        }
                        
                        if (matchedSocial) {
                            node.setAttribute('href', socialIcons[matchedSocial].href);
                            const svg = node.querySelector('svg');
                            if (svg) {
                                svg.innerHTML = socialIcons[matchedSocial].path;
                            }
                        }
                    }
                }
                
                if (node.tagName === 'IMG' && (mut.attributeName === 'src' || mut.attributeName === 'srcset')) {
                    const src = node.getAttribute('src') || '';
                    const srcset = node.getAttribute('srcset') || '';
                    if (src.includes('Sw1RXit' + 'xqpkOiWs8LmcITuaU') || src.includes('W0Flr9u5hJlV' + 'myjWEYDshQ2sPY') ||
                        srcset.includes('Sw1RXit' + 'xqpkOiWs8LmcITuaU') || srcset.includes('W0Flr9u5hJlV' + 'myjWEYDshQ2sPY')) {
                        node.setAttribute('src', prefix + 'Assets/Hero.png');
                        node.removeAttribute('srcset');
                    } else if (src.includes('rjytgkPUT' + 'bFjrXmIX6Muq6ybMLY') || srcset.includes('rjytgkPUT' + 'bFjrXmIX6Muq6ybMLY')) {
                        node.setAttribute('src', prefix + 'Assets/Kota Text.png');
                        node.removeAttribute('srcset');
                    }
                }
            } else if (mut.type === 'characterData') {
                processCounterNode(mut.target);
                
                let val = mut.target.nodeValue;
                let changed = false;
                for (const r of repls) {
                    if (r.from.test(val)) {
                        val = val.replace(r.from, r.to);
                        changed = true;
                    }
                }
                if (changed) {
                    mut.target.nodeValue = val;
                }
            }
        }
        
        // IDLE - Preloader handled on load event
        
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'srcset', 'alt', 'href', 'class', 'rel'],
            characterData: true
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'srcset', 'alt', 'href', 'class', 'rel'],
        characterData: true
    });

    document.addEventListener('DOMContentLoaded', () => {
        applyStyles();
        replaceText(document.body);
        // Fade out 1.2s after DOM is parsed to cover hydration changes
        setTimeout(triggerFadeOut, 1200);
    });
    window.addEventListener('load', () => {
        applyStyles();
        replaceText(document.body);
        // Trigger immediately once fully loaded
        triggerFadeOut();
    });
    
    // Global Smooth Scroll Interceptor
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) {
            const href = a.getAttribute('href') || '';
            if (href.includes('#')) {
                const parts = href.split('#');
                const page = parts[0];
                const hash = parts[1];
                const isCurrentPage = page === '' || page === 'index.html' || window.location.pathname.endsWith('/' + page) || (page === 'index.html' && window.location.pathname === '/');
                if (isCurrentPage) {
                    const target = document.getElementById(hash);
                    if (target) {
                        e.preventDefault();
                        if (window._lenis && typeof window._lenis.scrollTo === 'function') {
                            window._lenis.scrollTo(target, { offset: 0 });
                            try { history.pushState(null, '', '#' + hash); } catch (e) { window.location.hash = '#' + hash; }
                        } else {
                            target.scrollIntoView({ behavior: 'auto' });
                            try { history.pushState(null, '', '#' + hash); } catch (e) { window.location.hash = '#' + hash; }
                        }
                    }
                }
            }
        }
    });
})();
</script>
`.trim();

    const preloaderCss = `
#kota-preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    opacity: 1;
    visibility: visible;
}
#kota-preloader.fade-out {
    opacity: 0;
    visibility: hidden;
}
#kota-preloader .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
#kota-preloader .loader-video {
    width: 160px;
    height: auto;
}
#kota-preloader .loader-bar {
    width: 160px;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}
#kota-preloader .loader-bar-fill {
    width: 100%;
    height: 100%;
    background: #EA0813;
    position: absolute;
    left: -100%;
    animation: loading-progress 1.5s infinite ease-in-out;
}
@keyframes loading-progress {
    0% { left: -100%; }
    50% { left: 0%; }
    100% { left: 100%; }
}
`.trim();

    const preloaderHtml = `
<div id="kota-preloader">
    <div class="loader-content">
        <video class="loader-video" src="${prefix}Assets/loading.mp4" autoplay loop muted playsinline></video>
        <div class="loader-bar"><div class="loader-bar-fill"></div></div>
    </div>
</div>
`.trim();

    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Normalize newlines to Unix
    content = content.replace(/\r\n/g, '\n');
    
    // 1. Insert/Replace inline script tag
    const scriptStartIdx = content.indexOf('<script>\n(function() {');
    if (scriptStartIdx !== -1) {
        const scriptEndIdx = content.indexOf('</script>', scriptStartIdx);
        if (scriptEndIdx !== -1) {
            const fullScript = content.substring(scriptStartIdx, scriptEndIdx + '</script>'.length);
            content = content.replace(fullScript, inlineScript);
        }
    } else {
        // Insert right after the <head> tag
        const headIdx = content.indexOf('<head>');
        if (headIdx !== -1) {
            content = content.substring(0, headIdx + 6) + '\n' + inlineScript + content.substring(headIdx + 6);
        }
    }

    // 2. Insert or Replace CSS Preloader inside <head>
    const preloaderCssRegex = /<style>\s*#kota-preloader[\s\S]*?<\/style>/i;
    if (content.match(preloaderCssRegex)) {
        content = content.replace(preloaderCssRegex, `<style>\n${preloaderCss}\n</style>`);
    } else {
        const headIdx = content.indexOf('<head>');
        if (headIdx !== -1) {
            content = content.substring(0, headIdx + 6) + `\n<style>\n${preloaderCss}\n</style>` + content.substring(headIdx + 6);
        }
    }

    // 3. Insert or Replace HTML Preloader right after <body> starts
    const preloaderHtmlRegex = /<div id="kota-preloader">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;
    if (content.match(preloaderHtmlRegex)) {
        content = content.replace(preloaderHtmlRegex, preloaderHtml);
    } else {
        content = content.replace(/(<body[^>]*?>)/i, `$1\n${preloaderHtml}`);
    }

    // 3.5. Inject GSAP CDN scripts before </body> if not present
    if (!content.includes('gsap.min.js')) {
        content = content.replace(/<\/body>/i, `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>\n</body>`);
    }
    
    // 4. Perform static HTML updates (excluding counter values/labels to prevent hydration animation mismatches)
    
    // A. Location Replacements (using a robust whitespace/newline resilient regex for <p> blocks)
    const locationParaRegex = /(<p\s+[^>]*?class="framer-text\s+framer-styles-preset-1c4xv0t"[^>]*?>)\s*San\s+Francisco,\s+CA\s*<br\s+class="framer-text"\s*\/>\s*USA\s*(<\/p>)/gi;
    content = content.replace(locationParaRegex, '$1Colombo,<br class="framer-text" />Sri Lanka$2');
    
    // Fallback static replacements for loose location strings
    content = content.replace(/San\s+Francisco,\s+CA\s*<br\s+class="framer-text"\s*\/>\s*USA/gi, 'Colombo,<br class="framer-text" />Sri Lanka');
    content = content.replace(/San\s+Francisco,\s+CA\s*<br\s+class="framer-text"\s*\/>/gi, 'Colombo,<br class="framer-text" />Sri Lanka');
    content = content.replace(/San\s+Francisco,\s+CA/gi, 'Colombo,');

    // B. Available for 3 projects -> Promotions
    content = content.replace(/>\s*3\s+projects\s*</gi, '>Promotions<');

    // C. Buttons
    content = content.replace(/>\s*Buy\s+Now\s*</gi, '>Subscribe Now<');
    content = content.replace(/href="https:\/\/ridhwanco\.lemonsqueezy\.com\/buy\/7d6fede4-e97c-4bb6-93bf-5d182947c2bc"/g, 'href="https://www.youtube.com/@TheKota"');
    content = content.replace(/href="https:\/\/www\.youtube\.com\/@TheKota\?sub_confirmation=1"/g, 'href="https://www.youtube.com/@TheKota"');
    content = content.replace(/>\s*View\s+My\s+Work\s*</gi, '>Kota Extra<');
    content = content.replace(/data-framer-name="Work"\s+href="work\.html"/g, 'data-framer-name="Work" href="https://www.youtube.com/@kotaextra" target="_blank" rel="noopener"');

    // D. Favicon Source Replacement
    content = content.replace(/https:\/\/framerusercontent\.com\/images\/BUqmbxZDP4XMeSAW74XXkInAt4\.png/g, prefix + 'Assets/Hero.png');

    // E. Static Swaps for Assets
    content = content.replace(/Sw1RXitxqpkOiWs8LmcITuaU/g, prefix + 'Assets/Hero.png');
    content = content.replace(/W0Flr9u5hJlVmyjWEYDshQ2sPY/g, prefix + 'Assets/Hero.png');
    content = content.replace(/rjytgkPUTbFjrXmIX6Muq6ybMLY/g, prefix + 'Assets/Kota Text.png');

    // F. Static Header Logo Replacement
    const logoRegex = /(<a\s+[^>]*?data-framer-name="Logo"[^>]*?>)([\s\S]*?)(<\/a>)/g;
    content = content.replace(logoRegex, (match, openTag, innerHtml, closeTag) => {
        const replacementInner = `<div class="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit"><img src="${prefix}Assets/Kota Text.png" alt="Logo" style="display: block; width: 100%; height: 100%; object-position: center; object-fit: contain;" /></div>`;
        return openTag + replacementInner + closeTag;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully rebranded ${relativePath}`);
    } else {
        console.log(`No changes made to ${relativePath}`);
    }
});
