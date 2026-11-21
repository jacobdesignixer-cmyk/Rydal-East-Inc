/**
 * Rydal East Inc. — Interactive Web Application
 * Design: Module & Sense Modular Hero + Editorial Real Estate Aesthetics
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Header Scroll Effect & Mobile Navigation
     ========================================================================== */
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     2. Residences & Floor Plans Data and Switcher
     ========================================================================== */
  const floorPlans = {
    'one-bed': {
      title: '1-Bedroom Suite',
      badge: 'Starter Residence / Downsizing Favorite',
      feeEstimate: 'Est. Fee: ~$925 – $980 / mo (All-Inclusive)',
      heading: '1-Bedroom / 1 Bath Residence',
      summary: 'A streamlined open-concept layout designed for easy, low-maintenance living. Features a full galley kitchen with breakfast bar, expansive living room opening to a private terrace, oversized bedroom with generous closets, and dedicated floor storage locker.',
      specs: {
        area: '700 – 800 Sq. Ft.',
        baths: '1 Full Bath',
        outdoor: 'Private Covered Balcony / Patio',
        climate: 'Radiant Heat & Central A/C Included',
        storage: 'In-Unit Closets + Dedicated Floor Locker',
        laundry: 'Steps Away on Every Floor'
      },
      highlights: [
        'Efficient open living and dining concept with sliding glass doors',
        'Galley kitchen with pass-through breakfast bar to living space',
        'Generous bedroom accommodating king-size bed plus dressers',
        'Quiet interior orientation with sound-dampening carpeting'
      ],
      ctaText: 'Inquire About Available 1-Bed Units',
      thumbnails: [
        { src: 'assets/images/living_room_wide.jpg', title: 'Wide Living Room' },
        { src: 'assets/images/balcony_overlook.jpg', title: 'Private Balcony' },
        { src: 'assets/images/kitchen_galley.jpg', title: 'Galley Kitchen' },
        { src: 'assets/images/second_bedroom.jpg', title: 'Bedroom Suite' },
        { src: 'assets/images/half_bath.jpg', title: 'Bath & Storage' }
      ]
    },
    'two-bed': {
      title: '2-Bedroom Residence',
      badge: 'Most Popular Floor Plan',
      feeEstimate: 'Est. Fee: ~$1,085 – $1,150 / mo (All-Inclusive)',
      heading: '2-Bedroom / 1.5–2 Bath Residence',
      summary: 'The signature Rydal East layout offers seamless flow from the spacious living and formal dining room to a private covered outdoor balcony. Includes an expansive primary suite with walk-in dressing area and private ensuite half- or full-bath.',
      specs: {
        area: '900 – 950 Sq. Ft.',
        baths: '1.5 or 2 Baths',
        outdoor: 'Private Covered Balcony / Patio',
        climate: 'Radiant Heat & Central A/C Included',
        storage: 'In-Unit Closets + Dedicated Floor Locker',
        laundry: 'Steps Away on Every Floor'
      },
      highlights: [
        'Galley kitchen with pass-through breakfast bar & modern cabinetry',
        'Wall-to-wall acoustic carpeting per community standards',
        'Floor-to-ceiling sliding glass doors opening to tree-canopied views',
        'Dedicated dressing room with Hollywood vanity lighting in primary suite'
      ],
      ctaText: 'Inquire About Available 2-Bed Units',
      thumbnails: [
        { src: 'assets/images/living_room_sunny.jpg', title: 'Sunlit Living Room' },
        { src: 'assets/images/balcony_dining.jpg', title: 'Private Balcony' },
        { src: 'assets/images/kitchen_modern.jpg', title: 'Modern Galley Kitchen' },
        { src: 'assets/images/primary_bedroom.jpg', title: 'Primary Bedroom Suite' },
        { src: 'assets/images/ensuite_vanity.jpg', title: 'Ensuite Dressing Station' }
      ]
    },
    'three-bed': {
      title: '3-Bedroom Executive',
      badge: 'Rare Corner Layout',
      feeEstimate: 'Est. Fee: ~$1,390 – $1,451 / mo (All-Inclusive)',
      heading: '3-Bedroom / 2 Bath Executive Corner Residence',
      summary: 'The largest residence footprint at Rydal East. Features double-exposure windows, an expansive living and entertainment space, oversized dining area, primary bedroom suite with ensuite bath and dressing room, plus two secondary bedrooms ideal for guests or dedicated home offices.',
      specs: {
        area: '~1,200 Sq. Ft.',
        baths: '2 Full Baths',
        outdoor: 'Expansive Corner Balcony / Patio',
        climate: 'Radiant Heat & Central A/C Included',
        storage: 'Multiple Walk-in Closets + Floor Storage',
        laundry: 'Steps Away on Every Floor'
      },
      highlights: [
        'Substantial 1,200 sq. ft. corner layout with dual exposure natural light',
        'Three flexible bedrooms perfect for home offices and visiting family',
        'Full primary suite with walk-in dressing room and ensuite bathroom',
        'Large sliding glass door to covered balcony with expansive treetop vistas'
      ],
      ctaText: 'Inquire About Available 3-Bed Units',
      thumbnails: [
        { src: 'assets/images/living_dining_flow.jpg', title: 'Living & Dining Flow' },
        { src: 'assets/images/balcony_overlook.jpg', title: 'Corner Balcony Overlook' },
        { src: 'assets/images/kitchen_modern.jpg', title: 'Updated Kitchen' },
        { src: 'assets/images/primary_suite_closet.jpg', title: 'Primary Suite' },
        { src: 'assets/images/dressing_room.jpg', title: 'Walk-in Dressing Room' }
      ]
    }
  };

  const tabButtons = document.querySelectorAll('.tab-button');
  const mainPlanImg = document.getElementById('mainPlanImg');
  const planThumbnails = document.getElementById('planThumbnails');
  const planBadge = document.getElementById('planBadge');
  const planFee = document.getElementById('planFee');
  const planHeading = document.getElementById('planHeading');
  const planSummary = document.getElementById('planSummary');
  const specArea = document.getElementById('specArea');
  const specBaths = document.getElementById('specBaths');
  const planHighlights = document.getElementById('planHighlights');
  const inquireUnitBtn = document.getElementById('inquireUnitBtn');

  function renderPlan(planKey) {
    const data = floorPlans[planKey];
    if (!data) return;

    if (planBadge) planBadge.textContent = data.badge;
    if (planFee) planFee.textContent = data.feeEstimate;
    if (planHeading) planHeading.textContent = data.heading;
    if (planSummary) planSummary.textContent = data.summary;
    if (specArea) specArea.textContent = data.specs.area;
    if (specBaths) specBaths.textContent = data.specs.baths;
    if (inquireUnitBtn) {
      const textSpan = inquireUnitBtn.querySelector('.pill-main-text');
      if (textSpan) textSpan.textContent = data.ctaText;
    }

    if (planHighlights) {
      planHighlights.innerHTML = '';
      data.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        planHighlights.appendChild(li);
      });
    }

    if (mainPlanImg) {
      mainPlanImg.src = data.thumbnails[0].src;
      mainPlanImg.alt = data.heading;
    }

    if (planThumbnails) {
      planThumbnails.innerHTML = '';
      data.thumbnails.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute('data-src', t.src);
        btn.setAttribute('title', t.title);
        btn.innerHTML = `<img src="${t.src}" alt="${t.title} thumbnail">`;

        btn.addEventListener('click', () => {
          planThumbnails.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          mainPlanImg.src = t.src;
        });

        planThumbnails.appendChild(btn);
      });
    }
  }

  function setActiveTab(planKey) {
    tabButtons.forEach(b => {
      const matches = b.getAttribute('data-plan') === planKey;
      b.classList.toggle('active', matches);
      b.setAttribute('aria-selected', matches ? 'true' : 'false');
    });
    renderPlan(planKey);
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');
      setActiveTab(plan);
    });
  });

  // Link Property Cards in Dark Showcase to Floor Plan Switcher
  const propertyCards = document.querySelectorAll('.property-preview-card');
  propertyCards.forEach(card => {
    card.addEventListener('click', () => {
      const plan = card.getAttribute('data-plan');
      if (plan) {
        setActiveTab(plan);
        const target = document.getElementById('residences');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================================================
     3. Interactive Fee Comparison Calculator
     ========================================================================== */
  const segmentBtns = document.querySelectorAll('.segment-btn');
  const electricSlider = document.getElementById('electricSlider');
  const electricVal = document.getElementById('electricVal');
  const taxesSlider = document.getElementById('taxesSlider');
  const taxesVal = document.getElementById('taxesVal');

  const traditionalTotalEl = document.getElementById('traditionalTotal');
  const tradTaxDisplay = document.getElementById('tradTaxDisplay');
  const tradElectricDisplay = document.getElementById('tradElectricDisplay');
  const coopTotalEl = document.getElementById('coopTotal');
  const savingsCallout = document.getElementById('savingsCallout');

  let currentCoopFee = 1120; // default for 2-bed

  function updateCalculator() {
    const electric = parseInt(electricSlider.value, 10);
    const taxes = parseInt(taxesSlider.value, 10);
    const heatWater = 140;
    const sewerTrash = 90;
    const cable = 95;
    const hoaFee = 325;
    const poolParking = 150;

    if (electricVal) electricVal.textContent = `$${electric}`;
    if (taxesVal) taxesVal.textContent = `$${taxes}`;
    if (tradTaxDisplay) tradTaxDisplay.textContent = `$${taxes}`;
    if (tradElectricDisplay) tradElectricDisplay.textContent = `$${electric}`;

    const traditionalTotal = electric + taxes + heatWater + sewerTrash + cable + hoaFee + poolParking;
    if (traditionalTotalEl) traditionalTotalEl.innerHTML = `$${traditionalTotal.toLocaleString()}<span> / mo</span>`;
    if (coopTotalEl) coopTotalEl.innerHTML = `$${currentCoopFee.toLocaleString()}<span> / mo</span>`;

    const monthlyDiff = traditionalTotal - currentCoopFee;
    const annualDiff = monthlyDiff * 12;

    if (savingsCallout) {
      if (monthlyDiff > 0) {
        savingsCallout.innerHTML = `You save approximately <strong>$${monthlyDiff.toLocaleString()}/mo</strong> ($${annualDiff.toLocaleString()}/year) plus complete financial peace of mind.`;
      } else {
        savingsCallout.innerHTML = `You enjoy all-inclusive living with one predictable fee, covering utilities, maintenance, and taxes without surprise assessments.`;
      }
    }
  }

  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      segmentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCoopFee = parseInt(btn.getAttribute('data-fee'), 10);
      updateCalculator();
    });
  });

  if (electricSlider && taxesSlider) {
    electricSlider.addEventListener('input', updateCalculator);
    taxesSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  /* ==========================================================================
     4. Neighborhood Filter
     ========================================================================== */
  const locFilterBtns = document.querySelectorAll('.loc-filter-btn');
  const locCards = document.querySelectorAll('.loc-card');

  locFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      locFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      locCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     5. Buyer FAQ Accordion
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const body = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');

      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        body.classList.remove('active');
        icon.innerHTML = '&plus;';
      } else {
        header.setAttribute('aria-expanded', 'true');
        body.classList.add('active');
        icon.innerHTML = '&minus;';
      }
    });
  });

  /* ==========================================================================
     6. Full Photo Gallery Lightbox Modal
     ========================================================================== */
  const galleryImages = [
    { src: 'assets/images/exterior_entrance.jpg', title: 'Building Exterior & Entrance Canopy', caption: 'Rydal East Inc. signature entrance at 1570 The Fairway featuring double-brick architecture and lush gardens.' },
    { src: 'assets/images/atrium_lounge.jpg', title: 'Panoramic Glass Atrium Lounge', caption: 'Sun-drenched resident atrium lounge with floor-to-ceiling glass looking out across Jenkintown treetops.' },
    { src: 'assets/images/social_salon.jpg', title: 'Community Reception Salon', caption: 'Plush resident social room with coffered ceilings, designed for holiday events, book clubs, and meetings.' },
    { src: 'assets/images/balcony_dining.jpg', title: 'Private Covered Balcony', caption: 'Private covered balcony with outdoor dining set and leafy tree canopy views.' },
    { src: 'assets/images/balcony_overlook.jpg', title: 'Saltwater Pool Overlook', caption: 'Balcony perspective overlooking the community saltwater pool, sundecks, and mature grounds.' },
    { src: 'assets/images/living_room_sunny.jpg', title: 'Bright Living Space', caption: 'Living room flooded with natural light through wall-to-wall glass sliding doors.' },
    { src: 'assets/images/living_room_wide.jpg', title: 'Expansive Living Room', caption: 'Generous living room with mandated sound-dampening acoustic carpeting for peaceful living.' },
    { src: 'assets/images/living_room_terrace.jpg', title: 'Terrace Access from Living Area', caption: 'Direct outdoor transition through sliding glass door to covered balcony patio.' },
    { src: 'assets/images/living_dining_flow.jpg', title: 'Open Living & Formal Dining Flow', caption: 'Seamless open flow between living and dining areas with galley kitchen pass-through.' },
    { src: 'assets/images/dining_room.jpg', title: 'Formal Dining Area', caption: 'Dedicated dining space with hardwood flooring accents and convenient kitchen access.' },
    { src: 'assets/images/kitchen_modern.jpg', title: 'Updated Galley Kitchen', caption: 'Modern galley kitchen with stainless steel double refrigerator, updated cabinetry, and breakfast bar.' },
    { src: 'assets/images/kitchen_galley.jpg', title: 'Kitchen & Breakfast Bar Pass-Through', caption: 'Galley kitchen sink and pass-through breakfast counter overlooking the living room.' },
    { src: 'assets/images/primary_bedroom.jpg', title: 'Primary Bedroom Suite', caption: 'Spacious primary bedroom accommodating king-size furnishings with direct walk-in dressing area.' },
    { src: 'assets/images/primary_suite_closet.jpg', title: 'Primary Suite & Walk-in Closet', caption: 'View of the primary bedroom showing expansive proportions and closet access.' },
    { src: 'assets/images/dressing_room.jpg', title: 'Walk-in Dressing Closet', caption: 'Ensuite dressing room with custom shelving, hanging space, and vanity station.' },
    { src: 'assets/images/ensuite_vanity.jpg', title: 'Ensuite Vanity Station & Shower', caption: 'Hollywood-style vanity dressing table with lighting and private glass-enclosed shower.' },
    { src: 'assets/images/second_bedroom.jpg', title: 'Second Bedroom / Home Office', caption: 'Generous secondary bedroom configured as a quiet work-from-home office and library.' },
    { src: 'assets/images/elevator_lobby.jpg', title: 'Elevator Lobby & Wide Corridors', caption: 'Modern stainless steel elevator lobby and exceptionally wide, quiet carpeted residential hallways.' },
    { src: 'assets/images/half_bath.jpg', title: 'Guest Half-Bath & Linen Closets', caption: 'Guest powder room with hallway storage and updated fixtures.' }
  ];

  let currentGalleryIndex = 0;
  const galleryModal = document.getElementById('galleryModal');
  const closeGalleryModal = document.getElementById('closeGalleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryCaption = document.getElementById('galleryCaption');
  const galleryCounter = document.getElementById('galleryCounter');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const galleryStrip = document.getElementById('galleryStrip');
  const openGalleryBtn = document.getElementById('openGalleryBtn');

  if (galleryStrip) {
    galleryImages.forEach((img, idx) => {
      const btn = document.createElement('div');
      btn.className = `gallery-modal-thumb ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `<img src="${img.src}" alt="${img.title}">`;
      btn.addEventListener('click', () => {
        showGalleryPhoto(idx);
      });
      galleryStrip.appendChild(btn);
    });
  }

  function showGalleryPhoto(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    currentGalleryIndex = index;

    const item = galleryImages[index];
    galleryModalImg.src = item.src;
    galleryModalImg.alt = item.title;
    galleryTitle.textContent = item.title;
    galleryCaption.textContent = item.caption;
    galleryCounter.textContent = `Photo ${index + 1} of ${galleryImages.length}`;

    const thumbs = galleryStrip.querySelectorAll('.gallery-modal-thumb');
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      if (i === index) {
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  if (openGalleryBtn) {
    openGalleryBtn.addEventListener('click', () => {
      galleryModal.classList.add('open');
      galleryModal.setAttribute('aria-hidden', 'false');
      showGalleryPhoto(0);
    });
  }

  if (closeGalleryModal) {
    closeGalleryModal.addEventListener('click', () => {
      galleryModal.classList.remove('open');
      galleryModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', () => {
      showGalleryPhoto(currentGalleryIndex - 1);
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => {
      showGalleryPhoto(currentGalleryIndex + 1);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!galleryModal || !galleryModal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') showGalleryPhoto(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') showGalleryPhoto(currentGalleryIndex + 1);
    if (e.key === 'Escape') {
      galleryModal.classList.remove('open');
      galleryModal.setAttribute('aria-hidden', 'true');
    }
  });

  /* ==========================================================================
     7. Schedule Tour / Inquire Modal & Form Submission
     ========================================================================== */
  const tourModal = document.getElementById('tourModal');
  const closeTourModal = document.getElementById('closeTourModal');
  const openTourModalBtn = document.getElementById('openTourModalBtn');
  const mobileTourModalBtn = document.getElementById('mobileTourModalBtn');
  const futureTourBtn = document.getElementById('futureTourBtn');
  const tourForm = document.getElementById('tourForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  const resetFormBtn = document.getElementById('resetFormBtn');

  function openTour(prefUnit) {
    if (!tourModal) return;
    tourModal.classList.add('open');
    tourModal.setAttribute('aria-hidden', 'false');
    if (prefUnit) {
      const select = document.getElementById('tourUnitInterest');
      if (select) select.value = prefUnit;
    }
  }

  function closeTour() {
    if (!tourModal) return;
    tourModal.classList.remove('open');
    tourModal.setAttribute('aria-hidden', 'true');
  }

  if (openTourModalBtn) openTourModalBtn.addEventListener('click', () => openTour());
  if (mobileTourModalBtn) mobileTourModalBtn.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    openTour();
  });
  if (futureTourBtn) futureTourBtn.addEventListener('click', () => openTour());
  if (inquireUnitBtn) inquireUnitBtn.addEventListener('click', () => openTour('2-bed'));
  if (closeTourModal) closeTourModal.addEventListener('click', closeTour);

  [galleryModal, tourModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }
  });

  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      tourForm.style.display = 'none';
      formSuccessMessage.classList.add('open');
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      closeTour();
      setTimeout(() => {
        tourForm.reset();
        tourForm.style.display = 'flex';
        formSuccessMessage.classList.remove('open');
      }, 400);
    });
  }

});
