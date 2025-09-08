/**
 * Kristín Bára - Main JavaScript
 * Handles dynamic content, smooth scrolling, and modal functionality
 */

// ===== DATA ARRAYS =====

// Posts data - replace with actual content
const posts = [
    {
      id: 1,
      title: "Hvíldin sem líkaminn þarf",
      date: "2025-08-15",
      excerpt: "Í amstri dagsins gleymum við oft að hlusta á líkamann okkar. Yoga Nidra býður upp á djúpa hvíld sem fer langt út fyrir venjulegan svefn.",
      content: `
        <p>Í amstri dagsins gleymum við oft að hlusta á líkamann okkar. Yoga Nidra býður upp á djúpa hvíld sem fer langt út fyrir venjulegan svefn.</p>
        
        <p>Rannsóknir sýna að 45 mínútur af Yoga Nidra geta jafnast á við 3 tíma af svefni hvað varðar endurnýjun líkamans. Þetta er vegna þess að við förum inn í sérstakt ástand vitundar þar sem líkaminn getur endurheimt sig á djúpum vettvangi.</p>
        
        <p>Í þessu ástandi erum við hvorki alveg vakandi né sofandi, heldur í einhvers konar milliástandi þar sem parasympatíska taugakerfið tekur við og líkaminn getur raunverulega slakað á.</p>
        
        <p>Prófaðu að taka þér 20-45 mínútur í dag til að iðka Yoga Nidra. Líkaminn þinn mun þakka þér það.</p>
      `
    },
    {
      id: 2,
      title: "Kraftur tónheilunar", 
      date: "2025-08-10",
      excerpt: "Hljóðbylgjur hafa einstaka getu til að ná til okkar á djúpum vettvangi. Upplifðu hvernig tónheilun getur breytt orku þinni og vitund.",
      content: `
        <p>Hljóðbylgjur hafa einstaka getu til að ná til okkar á djúpum vettvangi. Tónheilun er ævagömul aðferð sem nýtir kraftinn í hljóði til að koma jafnvægi á líkama, huga og sál.</p>
        
        <p>Þegar við hlustum á tiltekin tón og tíðni, byrjar líkaminn okkar að samstilla sig við þessar bylgjur. Þetta ferli, sem kallast entrainment, getur hjálpað okkur að ná dýpri slökun og jafnvægi.</p>
        
        <p>Í tónheilunartímum mínum nýti ég tibetsk skálar, klukklur og önnur hljóðfæri til að búa til hljóðlandslag sem styður við djúpa hugleiðslu og lækningu.</p>
        
        <p>Komdu og upplifðu þennan kraftmikla heling á næsta tíma.</p>
      `
    },
    {
      id: 3,
      title: "Nærvera í daglegu lífi",
      date: "2025-08-05", 
      excerpt: "Hugleiðsla þarf ekki að vera flókin. Lærðu einfaldar aðferðir til að koma nærveru inn í daglegt líf þitt.",
      content: `
        <p>Hugleiðsla þarf ekki að vera flókin eða tímafrek. Í raun getum við stundað hana hvar og hvenær sem er í daglegu lífi.</p>
        
        <p>Nærvera snýst um að vera til staðar í núinu, án þess að dæma eða reyna að breyta neinu. Þetta getur verið jafn einfalt og að taka þrjár djúpar andatektir áður en þú kemst úr bílnum, eða að borða fyrstu munn af máltíðinni þinni með fullri athygli.</p>
        
        <p>Einn af mínum uppáhalds æfingum er "5-4-3-2-1" tæknin: Taktu eftir 5 hlutum sem þú sérð, 4 hlutum sem þú finnur fyrir, 3 hljóðum sem þú heyrir, 2 ilmum sem þú skynjar, og 1 bragði í munninum.</p>
        
        <p>Þessi einfalda æfing kemur þér strax í núið og getur verið mjög áhrifarík til að róa hugann.</p>
      `
    }
    ,
    {
      id: 4,
      title: "Andardráttur sem skjól",
      date: "2025-08-01",
      excerpt: "Einföld öndunartækni sem róar taugakerfið á nokkrum mínútum.",
      content: `
        <p>Þegar dagurinn verður þungur er andardrátturinn alltaf til staðar. Með meðvitund um innöndun og útöndun getum við skapað skjól í storminum.</p>
        <p>Prófaðu 4-6 öndun: Dragðu andann í 4 teljandi og andaðu út í 6. Endurtaktu í 3–5 mínútur.</p>
      `
    },
    {
      id: 5,
      title: "Mild nærvera gagnvart sjálfum þér",
      date: "2025-07-24",
      excerpt: "Sjálfsumhyggja er grunnurinn að kyrrð. Hér er lítil æfing til að byrja.",
      content: `
        <p>Settu hönd á hjarta og andaðu djúpt. Segðu við sjálfan þig: "Meg ég vera örugg/ur, meg ég vera róleg/ur, meg ég vera í friði."</p>
        <p>Endurtaktu 5 sinnum með rólegum andardrætti og leyfðu líkamanum að mýkjast.</p>
      `
    },
    {
      id: 6,
      title: "Kvöldrútína fyrir betri svefn",
      date: "2025-07-15",
      excerpt: "Lítil kvöldrútína getur bætt svefngæði verulega.",
      content: `
        <p>Slökktu á skjám klukkutíma fyrir svefn. Taktu heitt fótabað eða teygðu létt. Ljúktu kvöldinu með 10 mínútna leiddri slökun.</p>
        <p>Þessar einföldu venjur senda líkamanum skýr skilaboð: Nú er tími til að hvílast.</p>
      `
    }
  ];
  
  // Products removed; sign-ups handled via section buttons
  
  // Social media links - replace with actual URLs
  const social = {
    instagram: "https://instagram.com/kristinbara",
    spotify: "https://open.spotify.com/user/kristinbara", 
    tiktok: "https://tiktok.com/@kristinbara",
    email: "mailto:bryndisardottir@gmail.com",
    facebook: "https://facebook.com/kristinbara"
  };
  
  // ===== UTILITY FUNCTIONS =====
  
  /**
   * Format price in Icelandic Króna
   * @param {number} price - Price in ISK
   * @returns {string} Formatted price string
   */
  function formatPrice(price) {
    return new Intl.NumberFormat("is-IS", { 
      style: "currency", 
      currency: "ISK" 
    }).format(price);
  }
  
  /**
   * Format date in Icelandic format
   * @param {string} dateString - Date in YYYY-MM-DD format
   * @returns {string} Formatted date string
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("is-IS", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    }).format(date);
  }
  
  /**
   * Create SVG icon element
   * @param {string} iconId - ID of the icon in the SVG sprite
   * @returns {SVGElement} SVG icon element
   */
  function createIcon(iconId) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${iconId}`);
    svg.appendChild(use);
    return svg;
  }
  
  // ===== DOM MANIPULATION FUNCTIONS =====
  
  /**
   * Render posts to the posts grid
   */
  function renderPosts() {
    const postsGrid = document.getElementById('posts-grid');
    if (!postsGrid) return;
  
    const mode = postsGrid.getAttribute('data-mode') || 'all';
    const list = mode === 'latest' ? posts.slice(0, 1) : posts;

    postsGrid.innerHTML = list.map(post => `
      <article class="post-card">
        <div class="post-card-content">
          <h3>${post.title}</h3>
          <time class="post-date" datetime="${post.date}">${formatDate(post.date)}</time>
          <p class="post-excerpt">${post.excerpt}</p>
          <a href="#" class="read-more" data-post-id="${post.id}">Lesa meira</a>
        </div>
      </article>
    `).join('');
  
    // Add click listeners for "read more" links
    postsGrid.addEventListener('click', handlePostClick);

    // Mark posts grid visible for staggered reveal
    postsGrid.classList.add('is-visible');
  }
  
  /**
   * Render products to the products grid
   */
  function renderProducts() { /* no-op */ }
  
  /**
   * Render social links
   */
  function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    if (!socialLinksContainer) return;
  
    const socialItems = [
      { key: 'instagram', icon: 'icon-instagram' },
      { key: 'spotify', icon: 'icon-spotify' },
      { key: 'tiktok', icon: 'icon-tiktok' },
      { key: 'email', icon: 'icon-mail' },
      { key: 'facebook', icon: 'icon-facebook' }
    ];
  
    socialLinksContainer.innerHTML = socialItems.map(item => {
      const url = social[item.key];
      const isEmail = item.key === 'email';
      const target = isEmail ? '' : 'target="_blank" rel="noopener noreferrer"';
      
      return `
        <a href="${url}" ${target} class="social-link" aria-label="${item.key}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <use href="#${item.icon}"></use>
          </svg>
        </a>
      `;
    }).join('');
  }
  
  // ===== EVENT HANDLERS =====
  
  /**
   * Handle post "read more" clicks
   * @param {Event} event - Click event
   */
  function handlePostClick(event) {
    if (event.target.classList.contains('read-more')) {
      event.preventDefault();
      const postId = parseInt(event.target.dataset.postId);
      const post = posts.find(p => p.id === postId);
      if (post) {
        showModal(post.title, post.content);
      }
    }
  }
  
  /**
   * Show modal with content
   * @param {string} title - Modal title
   * @param {string} content - Modal content (HTML)
   */
  function showModal(title, content) {
    const modal = document.getElementById('post-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
  
    modalBody.innerHTML = `
      <h3>${title}</h3>
      ${content}
    `;
  
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus management for accessibility
    const closeButton = document.getElementById('modal-close');
    if (closeButton) {
      closeButton.focus();
    }
  }
  
  /**
   * Hide modal
   */
  function hideModal() {
    const modal = document.getElementById('post-modal');
    if (!modal) return;
  
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  
  /**
   * Handle smooth scrolling for anchor links
   * @param {Event} event - Click event
   */
  function handleSmoothScroll(event) {
    const target = event.target.closest('a[href^="#"]');
    if (!target) return;
  
    const href = target.getAttribute('href');
    if (href === '#') return;
  
    event.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;
  
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      targetElement.scrollIntoView();
    } else {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  /**
   * Update current year in footer
   */
  function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  /**
   * Handle header scroll effect
   */
  function handleHeaderScroll() {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    if (!header) return;

    // Add scrolled state after passing the hero section
    let scrolled = false;
    if (hero) {
      const threshold = hero.offsetHeight - header.offsetHeight;
      scrolled = window.scrollY >= threshold;
    } else {
      scrolled = window.scrollY > 24;
    }
    header.classList.toggle('scrolled', scrolled);
  }
  
  // ===== INITIALIZATION =====
  
  /**
   * Initialize the application
   */
  function init() {
    // Scroll reveal animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const allReveal = document.querySelectorAll('[data-reveal], [data-reveal-container]');
      if (allReveal.length) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        allReveal.forEach(el => revealObserver.observe(el));
      }
    }
    // Render dynamic content
    renderPosts();
    renderProducts(); 
    renderSocialLinks();
    updateCurrentYear();
  
    // Event listeners for smooth scrolling
    document.addEventListener('click', handleSmoothScroll);
  
    // Modal event listeners
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', hideModal);
    }
    
    if (modalClose) {
      modalClose.addEventListener('click', hideModal);
    }
  
    // ESC key to close modal
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        hideModal();
      }
    });
  
    // Header scroll effect
    // Header scroll effect disabled since header is non-sticky now
  
    // Side nav visibility after hero
    const sideNav = document.getElementById('side-nav');
    const hero = document.getElementById('hero');
    const sectionLinks = document.querySelectorAll('.side-nav-link');

    if (sideNav && hero) {
      const toggleSideNav = () => {
        const threshold = hero.offsetHeight - 80; // show after leaving hero mostly
        if (window.scrollY > threshold) {
          sideNav.classList.add('visible');
        } else {
          sideNav.classList.remove('visible');
        }
      };
      window.addEventListener('scroll', toggleSideNav);
      toggleSideNav();
    }

    // Scrollspy using IntersectionObserver
    const sections = [
      '#yoga-nidra',
      '#um-kristinu',
      '#yoga-nidra-program',
      '#samtalsmedferd',
      '#timar',
      '#efni',
      '#skraning'
    ].map(sel => document.querySelector(sel)).filter(Boolean);

    if (sections.length && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            document.querySelectorAll('.side-nav-link').forEach(a => {
              a.classList.toggle('active', a.getAttribute('href') === id);
            });
          }
        });
      }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

      sections.forEach(section => observer.observe(section));
    }

    // Smooth scroll for side nav links (respect reduced motion)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.side-nav-link');
      if (!link) return;
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });

    // Signup form handler - opens prefilled email
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const klass = document.getElementById('signup-class').value;
        const subject = encodeURIComponent(`Skráning: ${klass}`);
        const body = encodeURIComponent(`Nafn: ${name}\nNetfang: ${email}\nNámskeið: ${klass}`);
        window.location.href = `mailto:bryndisardottir@gmail.com?subject=${subject}&body=${body}`;
      });
    }

    console.log('Kristín Bára website initialized successfully');
  }
  
  // Mobile menu functionality
  function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('#mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
    
    if (mobileToggle && mobileNav) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
      });
      
      // Close mobile menu when clicking on links
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }
  
  // ===== START APPLICATION =====
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      initMobileMenu();
    });
  } else {
    init();
    initMobileMenu();
  }