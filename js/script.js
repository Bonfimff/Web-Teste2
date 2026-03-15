// script.js - shared logic for navigation, language switching and UI helpers
(() => {
    const storageKey = 'preferredLanguage';
    const supportedLangs = ['pt', 'en', 'fr', 'es', 'it', 'zh'];

    const getSavedLang = () => {
        try {
            return localStorage.getItem(storageKey) || null;
        } catch (e) {
            return null;
        }
    };

    const setSavedLang = (lang) => {
        try {
            localStorage.setItem(storageKey, lang);
        } catch (_e) {
            // ignore
        }
    };

    const normalizeLang = (lang) => {
        if (!lang) return 'pt';
        const short = lang.split('-')[0].toLowerCase();
        return supportedLangs.includes(short) ? short : 'pt';
    };

    const getCurrentLang = () => {
        const saved = normalizeLang(getSavedLang());
        const htmlLang = normalizeLang(document.documentElement.lang);
        const navLang = normalizeLang(navigator.language);
        return saved || htmlLang || navLang || 'pt';
    };

    const setDocumentLang = (lang) => {
        document.documentElement.lang = `${lang}-${lang.toUpperCase()}`;
    };

    const updateLangSelectorButton = (lang) => {
        const btn = document.querySelector('#langBtn');
        if (!btn) return;

        const flagMap = {
            pt: 'flag-pt',
            en: 'flag-en',
            fr: 'flag-fr',
            es: 'flag-es',
            it: 'flag-it',
            zh: 'flag-zh'
        };

        const labelMap = {
            pt: 'Português',
            en: 'English',
            fr: 'Français',
            es: 'Español',
            it: 'Italiano',
            zh: '中文(普通话)'
        };

        const className = flagMap[lang] || 'flag-pt';
        const label = labelMap[lang] || labelMap.pt;

        const flagSpan = btn.querySelector('span.flag');
        const labelSpan = btn.querySelector('span.lang-label');

        if (flagSpan) {
            flagSpan.className = 'flag ' + className;
        }

        if (labelSpan) {
            labelSpan.textContent = label;
        } else if (flagSpan) {
            flagSpan.insertAdjacentHTML('afterend', `<span class="lang-label">${label}</span>`);
        }
    };

    const dispatchLanguageChange = (lang) => {
        const ev = new CustomEvent('app:language-changed', { detail: { lang } });
        document.dispatchEvent(ev);
    };

    const selectLanguage = (lang) => {
        const normalized = normalizeLang(lang);
        setSavedLang(normalized);
        setDocumentLang(normalized);
        updateLangSelectorButton(normalized);
        dispatchLanguageChange(normalized);
    };

    const initLanguageSelector = () => {
        const wrapper = document.querySelector('#langSelector');
        if (!wrapper) return;

        const btn = wrapper.querySelector('#langBtn');
        const list = wrapper.querySelector('#langList');
        if (!btn || !list) return;

        const current = getCurrentLang();
        setDocumentLang(current);
        updateLangSelectorButton(current);

        wrapper.addEventListener('click', (event) => {
            const target = event.target.closest('li[data-lang]');
            if (target) {
                const lang = target.getAttribute('data-lang');
                selectLanguage(lang);
                wrapper.classList.remove('open');
                return;
            }

            wrapper.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            if (!wrapper.contains(event.target)) {
                wrapper.classList.remove('open');
            }
        });
    };

    const initHamburgerMenu = () => {
        const burger = document.querySelector('#hamburger');
        const navLeft = document.querySelector('.nav-left nav');
        const navRight = document.querySelector('#navRight');
        if (!burger) return;

        const toggle = () => {
            const open = burger.classList.toggle('open');
            if (navLeft) navLeft.classList.toggle('open', open);
            if (navRight) navRight.classList.toggle('open', open);
        };

        burger.addEventListener('click', toggle);
    };

    const initSmoothAnchorScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                if (anchor.hasAttribute('data-footer-action')) {
                    // Footer action links are handled elsewhere
                    return;
                }

                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    window.getCurrentLanguage = getCurrentLang;

    const footerInfo = {
        sobre: '<p>A Rio by Foot Free Walking Tour é uma empresa especializada em passeios guiados a pé, oferecendo experiências culturais autênticas no Rio de Janeiro e em outras cidades do Brasil. Com anos de atuação no turismo, a empresa se destaca pela excelência dos seus guias e pela forma envolvente de apresentar a história, a cultura e as curiosidades de cada destino.</p><p>Reconhecida por viajantes do mundo inteiro, a empresa já recebeu o prêmio Tripadvisor Travellers’ Choice Awards, concedido às experiências que estão entre as 10% melhores atrações avaliadas na plataforma Tripadvisor. Esse reconhecimento reforça o compromisso da equipe em oferecer passeios de alta qualidade e experiências memoráveis para visitantes de diferentes partes do mundo.</p>',
        contato: '<p>Entre em contato via WhatsApp, email ou redes sociais nas páginas de destino.</p><p><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a></p>',
        ajuda: '<p>Se precisar de ajuda, entre em contato pelos canais abaixo (WhatsApp, email ou Instagram) e nossa equipe responderá o mais rápido possível.</p>'
    };

    const updateFooterInfo = (key) => {
        const titleEl = document.querySelector('.footer-info-title') || document.querySelector('.rio-footer-card-title');
        const body = document.getElementById('footerInfoBody') || document.getElementById('rioFooterCardBody');
        if (titleEl) {
            const labelMap = {
                sobre: 'SOBRE',
                contato: 'CONTATO',
                ajuda: 'AJUDA'
            };
            titleEl.textContent = labelMap[key] || 'Informações';
        }
        if (!body) return;
        body.innerHTML = footerInfo[key] || '<p>Selecione uma opção para ver mais informações.</p>';
    };

    const initFooterInfo = () => {
        document.querySelectorAll('[data-footer-action]').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const action = link.getAttribute('data-footer-action');
                updateFooterInfo(action);

                const card = document.getElementById('footerInfoCard') || document.getElementById('rioFooterCard');
                if (card) {
                    card.classList.remove('hidden');
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        // Ensure page starts at the top and focus is set to header for accessibility
        window.scrollTo({ top: 0, behavior: 'instant' });
        const header = document.querySelector('header');
        if (header) {
            header.setAttribute('tabindex', '-1');
            header.focus();
        }

        initLanguageSelector();
        initHamburgerMenu();
        initSmoothAnchorScroll();
        initFooterInfo();

        // Trigger initial language event so pages can format text on load
        dispatchLanguageChange(getCurrentLang());
    });
})();
