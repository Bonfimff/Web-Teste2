// script.js - shared logic for navigation, language switching and UI helpers
(() => {
    const storageKey = 'preferredLanguage';
    const supportedLangs = ['pt', 'en', 'fr', 'es', 'it', 'zh'];

    const translations = {
        pt: {
            lang_label: 'Português',
            nav_home: 'INÍCIO',
            nav_about: 'SOBRE',
            nav_contact: 'CONTATO',
            nav_help: 'AJUDA',
            profile_login: 'Entrar',
            profile_register: 'Cadastrar',
            btn_book: 'Conhecer Tours',
            hero_title: 'Free Walking Tour',
            city_preposition: 'no',
            city_rio: 'Rio de Janeiro',
            hero_desc_rio: 'Seja bem-vindo à cidade Maravilhosa; o Rio dos amores e da beleza inconfundível te espera de braços abertos.',
            tours_section_title: 'Nossas Experiências',
            tours_free: 'Free Tours',
            tours_other: 'Outros Tours',
            tours_paid: 'Tours Pagos',
            notice_title: 'Informações Importantes',
            notice_line1: 'Para participar de nosso Free Tour é necessário reservar sua vaga.',
            notice_line2: 'Seguimos todas as medidas sanitárias exigidas para este tipo de passeio.',
            notice_line3: 'Por favor estar atentos aos dias disponíveis no formulário de reserva.',
            notice_line4: 'Sua contribuição é a remuneração do guia, seja consciente.',
            award_title: 'Reconhecimento Especial',
            award_text: 'Sabia que fomos premiados como a melhor escolha pelo TripAdvisor em 2021? 🥰',
            btn_proceed: 'Prosseguir',
            footer_sobre_title: 'SOBRE',
            footer_sobre: '<p>A Rio by Foot Free Walking Tour é uma empresa especializada em passeios guiados a pé, oferecendo experiências culturais autênticas no Rio de Janeiro e em outras cidades do Brasil. Com anos de atuação no turismo, a empresa se destaca pela excelência dos seus guias e pela forma envolvente de apresentar a história, a cultura e as curiosidades de cada destino.</p><p>Reconhecida por viajantes do mundo inteiro, a empresa já recebeu o prêmio Tripadvisor Travellers’ Choice Awards, concedido às experiências que estão entre as 10% melhores atrações avaliadas na plataforma Tripadvisor. Esse reconhecimento reforça o compromisso da equipe em oferecer passeios de alta qualidade e experiências memoráveis para visitantes de diferentes partes do mundo.</p>',
            footer_contato_title: 'CONTATO',
            footer_contato: '<p>Entre em contato via WhatsApp, email ou redes sociais nas páginas de destino.</p><p><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a></p>',
            footer_ajuda_title: 'AJUDA',
            footer_ajuda: '<p>Se precisar de ajuda, entre em contato pelos canais abaixo (WhatsApp, email ou Instagram) e nossa equipe responderá o mais rápido possível.</p>',

            index_title: 'Travel the World',
            index_desc: 'Bem-vindo ao projeto de demonstração. Use o menu para explorar as páginas do site.',
            index_sobre_title: 'Sobre',
            index_sobre_text: 'Este site demonstra um layout simples com suporte a múltiplos idiomas e rotas estáticas.',
            index_contato_title: 'Contato',
            index_contato_text: 'Entre em contato via WhatsApp ou redes sociais nas páginas de destino.',
            index_ajuda_title: 'Ajuda',
            index_ajuda_text: 'Se precisar, abra a ferramenta de desenvolvedor do navegador para inspecionar erros de console.',
        },
        en: {
            lang_label: 'English',
            nav_home: 'HOME',
            nav_about: 'ABOUT',
            nav_contact: 'CONTACT',
            nav_help: 'HELP',
            profile_login: 'Login',
            profile_register: 'Register',
            btn_book: 'Get to Know Tours',
            hero_title: 'Free Walking Tour',
            city_preposition: 'in',
            city_rio: 'Rio de Janeiro',
            hero_desc_rio: 'Welcome to the Marvelous City; the Rio of loves and unmistakable beauty awaits you with open arms.',
            tours_section_title: 'Our Experiences',
            tours_free: 'Free Tours',
            tours_other: 'Other Tours',
            tours_paid: 'Paid Tours',
            notice_title: 'Important Information',
            notice_line1: 'To join our Free Tour you must reserve your spot.',
            notice_line2: 'We follow all the sanitary measures required for this type of tour.',
            notice_line3: 'Please pay attention to the available dates in the booking form.',
            notice_line4: 'Your contribution is the guide’s compensation, be mindful.',
            award_title: 'Special Recognition',
            award_text: 'Did you know we were awarded as the best choice by TripAdvisor in 2021? 🥰',
            btn_proceed: 'Proceed',
            footer_sobre_title: 'ABOUT',
            footer_sobre: '<p>Rio by Foot Free Walking Tour is a company specialized in guided walking tours, offering authentic cultural experiences in Rio de Janeiro and other cities in Brazil. With years of experience in tourism, the company stands out for the excellence of its guides and the engaging way it presents the history, culture and curiosities of each destination.</p><p>Recognized by travelers from around the world, the company has received the Tripadvisor Travellers’ Choice Award, given to experiences that are among the top 10% rated on the Tripadvisor platform. This recognition reinforces the team’s commitment to offering high-quality tours and memorable experiences for visitors from different parts of the world.</p>',
            footer_contato_title: 'CONTACT',
            footer_contato: '<p>Contact us via WhatsApp, email or social media on the destination pages.</p><p><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a></p>',
            footer_ajuda_title: 'HELP',
            footer_ajuda: '<p>If you need help, contact us via the channels below (WhatsApp, email or Instagram) and our team will respond as quickly as possible.</p>',

            index_title: 'Travel the World',
            index_desc: 'Welcome to the demo project. Use the menu to explore the site pages.',
            index_sobre_title: 'About',
            index_sobre_text: 'This site demonstrates a simple layout with support for multiple languages and static routes.',
            index_contato_title: 'Contact',
            index_contato_text: 'Contact us via WhatsApp or social media on the destination pages.',
            index_ajuda_title: 'Help',
            index_ajuda_text: 'If needed, open the browser developer tools to inspect console errors.',
        },
        fr: {
            lang_label: 'Français',
            nav_home: 'ACCUEIL',
            nav_about: 'À PROPOS',
            nav_contact: 'CONTACT',
            nav_help: 'AIDE',
            profile_login: 'Connexion',
            profile_register: 'S\u0027inscrire',
            btn_book: 'Découvrir les tours',
            hero_title: 'Visite Guidée Gratuite',
            city_preposition: 'à',
            city_rio: 'Rio de Janeiro',
            hero_desc_rio: 'Bienvenue dans la Ville Merveilleuse ; le Rio des amours et de la beauté inoubliable vous attend à bras ouverts.',
            tours_section_title: 'Nos Expériences',
            tours_free: 'Tours Gratuits',
            tours_other: 'Autres Tours',
            tours_paid: 'Tours Payants',
            notice_title: 'Informations Importantes',
            notice_line1: 'Pour participer à notre Free Tour, vous devez réserver votre place.',
            notice_line2: 'Nous respectons toutes les mesures sanitaires requises pour ce type de visite.',
            notice_line3: 'Veuillez faire attention aux dates disponibles dans le formulaire de réservation.',
            notice_line4: 'Votre contribution est la rémunération du guide, soyez conscient.',
            award_title: 'Reconnaissance Spéciale',
            award_text: 'Saviez-vous que nous avons été récompensés comme le meilleur choix par TripAdvisor en 2021 ? 🥰',
            btn_proceed: 'Continuer',
            footer_sobre_title: 'À PROPOS',
            footer_sobre: '<p>Rio by Foot Free Walking Tour est une entreprise spécialisée dans les visites guidées à pied, offrant des expériences culturelles authentiques à Rio de Janeiro et dans d\'autres villes du Brésil. Avec des années d\'expérience dans le tourisme, l\'entreprise se distingue par l\'excellence de ses guides et par la manière captivante dont elle présente l\'histoire, la culture et les curiosités de chaque destination.</p><p>Reconnu par des voyageurs du monde entier, l\'entreprise a reçu le prix Tripadvisor Travellers’ Choice Awards, décerné aux expériences figurant parmi les 10 % les mieux notées sur la plateforme Tripadvisor. Cette reconnaissance renforce l\'engagement de l\'équipe à offrir des visites de haute qualité et des expériences mémorables aux visiteurs de différentes régions du monde.</p>',
            footer_contato_title: 'CONTACT',
            footer_contato: '<p>WhatsApp: <a href="https://wa.me/5521964458696" target="_blank" rel="noopener">+55 21 96445-8696</a><br>Email : <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a><br>Adresse : Praça Cinelândia, Rio de Janeiro - RJ</p>',
            footer_ajuda_title: 'AIDE',
            footer_ajuda: '<p>Besoin d’aide ? Envoyez-nous un message sur WhatsApp ou consultez la FAQ.</p>',

            index_title: 'Voyagez à Travers le Monde',
            index_desc: 'Bienvenue sur le projet de démonstration. Utilisez le menu pour explorer les pages du site.',
            index_sobre_title: 'À Propos',
            index_sobre_text: 'Ce site démontre une mise en page simple avec prise en charge de plusieurs langues et de routes statiques.',
            index_contato_title: 'Contact',
            index_contato_text: 'Contactez-nous via WhatsApp ou les réseaux sociaux sur les pages de destination.',
            index_ajuda_title: 'Aide',
            index_ajuda_text: 'Si nécessaire, ouvrez les outils de développement du navigateur pour inspecter les erreurs de la console.',
        },
        es: {
            lang_label: 'Español',
            nav_home: 'INICIO',
            nav_about: 'SOBRE',
            nav_contact: 'CONTACTO',
            nav_help: 'AYUDA',
            profile_login: 'Iniciar sesión',
            profile_register: 'Registrarse',
            btn_book: 'Conocer Tours',
            hero_title: 'Tour a Pie Gratis',
            city_preposition: 'en',
            city_rio: 'Río de Janeiro',
            hero_desc_rio: 'Bienvenido a la Ciudad Maravillosa; el Río de los amores y de la belleza inconfundible te espera con los brazos abiertos.',
            tours_section_title: 'Nuestras Experiencias',
            tours_free: 'Tours Gratis',
            tours_other: 'Otros Tours',
            tours_paid: 'Tours Pagos',
            notice_title: 'Información Importante',
            notice_line1: 'Para participar de nuestro Free Tour es necesario reservar tu plaza.',
            notice_line2: 'Seguimos todas las medidas sanitarias exigidas para este tipo de paseo.',
            notice_line3: 'Por favor presta atención a las fechas disponibles en el formulario de reserva.',
            notice_line4: 'Tu contribución es la remuneración del guía, sé consciente.',
            award_title: 'Reconocimiento Especial',
            award_text: '¿Sabías que fuimos premiados como la mejor elección por TripAdvisor en 2021? 🥰',
            btn_proceed: 'Continuar',
            footer_sobre_title: 'SOBRE',
            footer_sobre: '<p>Rio by Foot Free Walking Tour es una empresa especializada en recorridos guiados a pie, que ofrece experiencias culturales auténticas en Río de Janeiro y en otras ciudades de Brasil. Con años de trayectoria en el turismo, la empresa se destaca por la excelencia de sus guías y por la forma envolvente en que presenta la historia, la cultura y las curiosidades de cada destino.</p><p>Reconocida por viajeros de todo el mundo, la empresa ha recibido el premio Tripadvisor Travellers’ Choice Awards, otorgado a las experiencias que se encuentran entre el 10 % de las mejores atracciones valoradas en la plataforma Tripadvisor. Este reconocimiento refuerza el compromiso del equipo de ofrecer recorridos de alta calidad y experiencias memorables para visitantes de diferentes partes del mundo.</p>',
            footer_contato_title: 'CONTACTO',
            footer_contato: '<p>WhatsApp: <a href="https://wa.me/5521964458696" target="_blank" rel="noopener">+55 21 96445-8696</a><br>Email: <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a><br>Dirección: Praça Cinelândia, Río de Janeiro - RJ</p>',
            footer_ajuda_title: 'AYUDA',
            footer_ajuda: '<p>¿Necesitas ayuda? Envíanos un mensaje por WhatsApp o revisa la sección de preguntas frecuentes.</p>',

            index_title: 'Viaja por el Mundo',
            index_desc: 'Bienvenido al proyecto de demostración. Usa el menú para explorar las páginas del sitio.',
            index_sobre_title: 'Sobre',
            index_sobre_text: 'Este sitio demuestra un diseño simple con soporte para múltiples idiomas y rutas estáticas.',
            index_contato_title: 'Contacto',
            index_contato_text: 'Contáctanos por WhatsApp o redes sociales en las páginas de destino.',
            index_ajuda_title: 'Ayuda',
            index_ajuda_text: 'Si lo necesitas, abre las herramientas de desarrollador del navegador para inspeccionar errores de consola.',
        },
        it: {
            lang_label: 'Italiano',
            nav_home: 'INIZIO',
            nav_about: 'SUL',
            nav_contact: 'CONTATTO',
            nav_help: 'AIUTO',
            profile_login: 'Accedi',
            profile_register: 'Registrati',
            btn_book: 'Scopri i Tour',
            hero_title: 'Tour a Piedi Gratuito',
            city_preposition: 'a',
            city_rio: 'Rio de Janeiro',
            hero_desc_rio: 'Benvenuto nella città meravigliosa; il Rio degli amori e della bellezza inconfondibile ti aspetta a braccia aperte.',
            tours_section_title: 'Le Nostre Esperienze',
            tours_free: 'Tour Gratuiti',
            tours_other: 'Altri Tour',
            tours_paid: 'Tour a Pagamento',
            notice_title: 'Informazioni Importanti',
            notice_line1: 'Per partecipare al nostro Free Tour è necessario prenotare il tuo posto.',
            notice_line2: 'Seguiamo tutte le misure sanitarie richieste per questo tipo di tour.',
            notice_line3: 'Fai attenzione alle date disponibili nel modulo di prenotazione.',
            notice_line4: 'Il tuo contributo è la retribuzione della guida, sii consapevole.',
            award_title: 'Riconoscimento Speciale',
            award_text: 'Sapevi che siamo stati premiati come la scelta migliore da TripAdvisor nel 2021? 🥰',
            btn_proceed: 'Procedi',
            footer_sobre_title: 'SUL',
            footer_sobre: '<p>Rio by Foot Free Walking Tour è un\'azienda specializzata in tour guidati a piedi, che offre esperienze culturali autentiche a Rio de Janeiro e in altre città del Brasile. Con anni di esperienza nel turismo, l\'azienda si distingue per l\'eccellenza delle sue guide e per il modo coinvolgente in cui presenta la storia, la cultura e le curiosità di ogni destinazione.</p><p>Riconosciuta dai viaggiatori di tutto il mondo, l\'azienda ha ricevuto il Tripadvisor Travellers’ Choice Awards, assegnato alle esperienze che rientrano nel 10% delle attrazioni più votate sulla piattaforma Tripadvisor. Questo riconoscimento rafforza l\'impegno del team a offrire tour di alta qualità ed esperienze memorabili per i visitatori provenienti da diverse parti del mondo.</p>',
            footer_contato_title: 'CONTATTO',
            footer_contato: '<p>WhatsApp: <a href="https://wa.me/5521964458696" target="_blank" rel="noopener">+55 21 96445-8696</a><br>Email: <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a><br>Indirizzo: Praça Cinelândia, Rio de Janeiro - RJ</p>',
            footer_ajuda_title: 'AIUTO',
            footer_ajuda: '<p>Hai bisogno di aiuto? Inviaci un messaggio su WhatsApp o consulta la sezione FAQ.</p>',

            index_title: 'Viaggia il Mondo',
            index_desc: 'Benvenuto nel progetto dimostrativo. Usa il menu per esplorare le pagine del sito.',
            index_sobre_title: 'Sul',
            index_sobre_text: 'Questo sito dimostra un layout semplice con supporto per più lingue e percorsi statici.',
            index_contato_title: 'Contatto',
            index_contato_text: 'Contattaci tramite WhatsApp o social media nelle pagine di destinazione.',
            index_ajuda_title: 'Aiuto',
            index_ajuda_text: 'Se necessario, apri gli strumenti per sviluppatori del browser per ispezionare errori nella console.',
        },
        zh: {
            lang_label: '中文(普通话)',
            nav_home: '首页',
            nav_about: '关于',
            nav_contact: '联系',
            nav_help: '帮助',
            profile_login: '登录',
            profile_register: '注册',
            btn_book: '查看路线',
            hero_title: '免费徒步游',
            city_preposition: '在',
            city_rio: '里约热内卢',
            hero_desc_rio: '欢迎来到神奇之城；爱情之河与无与伦比的美景正张开双臂等你。',
            tours_section_title: '我们的体验',
            tours_free: '免费游',
            tours_other: '其他游',
            tours_paid: '付费游',
            notice_title: '重要信息',
            notice_line1: '要参加我们的免费徒步游，您必须预订位置。',
            notice_line2: '我们遵守此类游览所需的所有卫生措施。',
            notice_line3: '请注意预订表中的可用日期。',
            notice_line4: '您的贡献是导游的报酬，请理性安排。',
            award_title: '特别认可',
            award_text: '您知道我们在2021年被TripAdvisor评为最佳选择吗？🥰',
            btn_proceed: '继续',
            footer_sobre_title: '关于',
            footer_sobre: '<p>Rio by Foot Free Walking Tour是一家专注于徒步导览的公司，提供里约热内卢及巴西其他城市的真实文化体验。凭借多年旅游业经验，公司因其导游的专业素质以及呈现每个目的地历史、文化和趣闻的沉浸式方式而脱颖而出。</p><p>该公司已获得来自世界各地游客的认可，并荣获Tripadvisor旅行者选择奖（Travellers’ Choice Awards），该奖项颁给在Tripadvisor平台上评分位于前10%的体验。此项荣誉强化了团队提供高质量导览和难忘体验给来自世界各地访客的承诺。</p>',
            footer_contato_title: '联系',
            footer_contato: '<p>WhatsApp: <a href="https://wa.me/5521964458696" target="_blank" rel="noopener">+55 21 96445-8696</a><br>邮箱: <a href="mailto:contato@tourbyfoot.com">contato@tourbyfoot.com</a><br>地址: Praça Cinelândia, 里约热内卢 - RJ</p>',
            footer_ajuda_title: '帮助',
            footer_ajuda: '<p>需要帮助？通过WhatsApp给我们留言或查看常见问题部分。</p>',

            index_title: '环游世界',
            index_desc: '欢迎来到演示项目。使用菜单浏览网站页面。',
            index_sobre_title: '关于',
            index_sobre_text: '该网站演示了一个支持多语言和静态路由的简单布局。',
            index_contato_title: '联系',
            index_contato_text: '通过WhatsApp或社交媒体联系我们。',
            index_ajuda_title: '帮助',
            index_ajuda_text: '如有需要，请打开浏览器开发者工具检查控制台错误。',
        }
    };

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

    const applyTranslations = (lang) => {
        const strings = translations[lang] || translations.pt;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            const value = strings[key];
            if (typeof value === 'string') {
                el.textContent = value;
            }
        });
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

        const className = flagMap[lang] || 'flag-pt';

        const flagSpan = btn.querySelector('span.flag');
        const labelSpan = btn.querySelector('span.lang-label');

        if (flagSpan) {
            flagSpan.className = 'flag ' + className;
        }

        if (labelSpan) {
            // keep label updated via translations separately
        }
    };

    const dispatchLanguageChange = (lang) => {
        applyTranslations(lang);
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
        applyTranslations(current);

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
        const lang = getCurrentLang();
        const strings = translations[lang] || translations.pt;
        const titleEl = document.querySelector('.footer-info-title') || document.querySelector('.rio-footer-card-title');
        const body = document.getElementById('footerInfoBody') || document.getElementById('rioFooterCardBody');

        if (titleEl) {
            const titleKey = `footer_${key}_title`;
            titleEl.textContent = strings[titleKey] || strings.footer_info_title || 'Informações';
        }

        if (!body) return;

        const bodyKey = `footer_${key}`;
        body.innerHTML = strings[bodyKey] || '<p>Selecione uma opção para ver mais informações.</p>';
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
