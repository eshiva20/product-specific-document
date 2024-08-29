document.addEventListener("DOMContentLoaded", function () {
  // Data for divisions

  const ProductsData = [
    {
      name: "Healthbiotech",
      logoUrl: "./assets/healthbiotech.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },

        { ProductName: "Bacitracin" },
        { ProductName: "Beclometasone" },
        { ProductName: "Benazepril" },
        { ProductName: "Betamethasone" },

        { ProductName: "Cefalexin" },
        { ProductName: "Cetirizine" },
        { ProductName: "Ciprofloxacin" },
        { ProductName: "Clarithromycin" },

        { ProductName: "Dapagliflozin" },
        { ProductName: "Dexamethasone" },
        { ProductName: "Diclofenac" },
        { ProductName: "Doxycycline" },

        { ProductName: "Erythromycin" },
        { ProductName: "Esomeprazole" },
        { ProductName: "Etanercept" },

        { ProductName: "Famotidine" },
        { ProductName: "Felodipine" },
        { ProductName: "Fluconazole" },
        { ProductName: "Fluoxetine" },

        { ProductName: "Gabapentin" },
        { ProductName: "Glimepiride" },
        { ProductName: "Glyburide" },

        { ProductName: "Haloperidol" },
        { ProductName: "Hydrochlorothiazide" },
        { ProductName: "Hydrocortisone" },

        { ProductName: "Ibuprofen" },
        { ProductName: "Imatinib" },
        { ProductName: "Indomethacin" },
        { ProductName: "Ipratropium" },

        { ProductName: "Januvia" },
        { ProductName: "Jantoven" },
        { ProductName: "Jentadueto" },

        { ProductName: "Ketoconazole" },
        { ProductName: "Ketorolac" },
        { ProductName: "Ketoprofen" },

        { ProductName: "Lansoprazole" },
        { ProductName: "Latanoprost" },
        { ProductName: "Levofloxacin" },
        { ProductName: "Levothyroxine" },

        { ProductName: "Metformin" },
        { ProductName: "Methotrexate" },
        { ProductName: "Metoprolol" },
        { ProductName: "Montelukast" },

        { ProductName: "Naproxen" },
        { ProductName: "Neomycin" },
        { ProductName: "Nifedipine" },
        { ProductName: "Nitrofurantoin" },

        { ProductName: "Omeprazole" },
        { ProductName: "Ondansetron" },
        { ProductName: "Oseltamivir" },

        { ProductName: "Pantoprazole" },
        { ProductName: "Paroxetine" },
        { ProductName: "Penicillin" },
        { ProductName: "Prednisone" },

        { ProductName: "Quetiapine" },
        { ProductName: "Quinapril" },
        { ProductName: "Quinidine" },

        { ProductName: "Ranitidine" },
        { ProductName: "Rifampin" },
        { ProductName: "Risperidone" },
        { ProductName: "Rosuvastatin" },

        { ProductName: "Salmeterol" },
        { ProductName: "Sertraline" },
        { ProductName: "Simvastatin" },
        { ProductName: "Spironolactone" },

        { ProductName: "Tamsulosin" },
        { ProductName: "Terbinafine" },
        { ProductName: "Tetracycline" },
        { ProductName: "Tramadol" },

        { ProductName: "Umeclidinium" },
        { ProductName: "Ursodiol" },

        { ProductName: "Valacyclovir" },
        { ProductName: "Valsartan" },
        { ProductName: "Vancomycin" },

        { ProductName: "Warfarin" },
        { ProductName: "Wegovy" },

        { ProductName: "Xarelto" },
        { ProductName: "Xeljanz" },
        { ProductName: "Xylometazoline" },

        { ProductName: "Yasmin" },
        { ProductName: "Yervoy" },

        { ProductName: "Zanamivir" },
        { ProductName: "Zolpidem" },
        { ProductName: "Zonisamide" },
        { ProductName: "Zydelig" },
      ],
    },
    {
      name: "Rescuerslifesciences",
      logoUrl: "./assets/Rescuerslifesciences.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },
        { ProductName: "Allopurinol" },
        { ProductName: "Alogliptin" },
        { ProductName: "Bupropion XL" },
        { ProductName: "Clonazepam" },
        { ProductName: "Cyclobenzaprine" },
      ],
    },
    {
      name: "Hosemedica",
      logoUrl: "./assets/Hosemedica.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },
        { ProductName: "Allopurinol" },
        { ProductName: "Alogliptin" },
        { ProductName: "Bupropion XL" },
        { ProductName: "Clonazepam" },
        { ProductName: "Cyclobenzaprine" },
      ],
    },
    {
      name: "AmritRemedies",
      logoUrl: "./assets/AmritRemedies.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },
        { ProductName: "Allopurinol" },
        { ProductName: "Alogliptin" },
        { ProductName: "Bupropion XL" },
        { ProductName: "Clonazepam" },
        { ProductName: "Cyclobenzaprine" },
      ],
    },
    {
      name: "CoralPharma",
      logoUrl: "./assets/CoralPharma.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },
        { ProductName: "Allopurinol" },
        { ProductName: "Alogliptin" },
        { ProductName: "Bupropion XL" },
        { ProductName: "Clonazepam" },
        { ProductName: "Cyclobenzaprine" },
      ],
    },
    {
      name: "HumanPharmacia",
      logoUrl: "./assets/HumanPharmacia.png",
      products: [
        { ProductName: "Aciclovir" },
        { ProductName: "Acrivastine" },
        { ProductName: "Adalimumab" },
        { ProductName: "Alendronic acid" },
        { ProductName: "Allopurinol" },
        { ProductName: "Alogliptin" },
        { ProductName: "Bupropion XL" },
        { ProductName: "Clonazepam" },
        { ProductName: "Cyclobenzaprine" },
      ],
    },
  ];

  const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const selectedProducts = new Set();

  // Get the allDivisions container
  const allDivisions = document.querySelector(".allDivisions");

  // Handle product click event
  const handleProductClick = (e, productId) => {
    e.stopPropagation();
    const radio = e.currentTarget.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
    selectedProducts.clear();
    selectedProducts.add(productId);
  };

  // Handle scroll to specific letter
  const handleScrollTo = (letter, photosDiv) => {
    const target = photosDiv.querySelector(`[data-letter="${letter}"]`);
    if (target) {
      photosDiv.scrollTo({
        top: target.offsetTop - photosDiv.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Attach event listeners for scrolling
  const addScrollListeners = (photosDiv) => {
    const letters = photosDiv
      .closest(".productsDiv")
      .querySelectorAll(".filter .letter");
    letters.forEach((letter) => {
      letter.addEventListener("click", function (e) {
        e.stopPropagation();
        handleScrollTo(letter.textContent, photosDiv);
      });
    });
  };

  // Map over the data and create the singleDivision elements
  ProductsData.forEach((item, divisionIndex) => {
    const singleProduct = document.createElement("div");
    singleProduct.classList.add("singleDivision");

    const coverDiv = document.createElement("div");
    coverDiv.classList.add("cover");

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = item.logoUrl;
    img.alt = item.name;
    coverDiv.appendChild(img);

    const companyNameSpan = document.createElement("span");
    companyNameSpan.classList.add("companyName");
    companyNameSpan.textContent = item.name;
    coverDiv.appendChild(companyNameSpan);

    const arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fa-solid", "fa-angle-down", "arrowIcon");
    coverDiv.appendChild(arrowIcon);

    singleProduct.appendChild(coverDiv);

    const productsImagesDiv = document.createElement("div");
    productsImagesDiv.classList.add("productsDocumentsDiv");
    productsImagesDiv.style.display = "none";

    const photosDiv = document.createElement("div");
    photosDiv.classList.add("photos");

    const productsByLetter = item.products.reduce(
      (acc, product, productIndex) => {
        const firstLetter = product.ProductName[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        const productId = `${divisionIndex}-${productIndex}`;
        acc[firstLetter].push({ ...product, id: productId });
        return acc;
      },
      {}
    );

    Object.keys(productsByLetter).forEach((letter) => {
      const letterDiv = document.createElement("div");
      letterDiv.setAttribute("data-letter", letter);

      const alphabetLine = document.createElement("div");
      alphabetLine.classList.add("alphabetLine");
      alphabetLine.innerHTML = `<hr /><p>${letter}</p><hr />`;

      const productsImgDiv = document.createElement("div");
      productsImgDiv.classList.add("productsImgDiv");

      productsByLetter[letter].forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("singleProduct");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "product";
        radioInput.id = `${product.id}`;
        radioInput.value = `${product.id}`;

        const productNameSpan = document.createElement("span");
        productNameSpan.textContent = product.ProductName;

        productDiv.appendChild(radioInput);
        productDiv.appendChild(productNameSpan);

        productDiv.addEventListener("click", (e) =>
          handleProductClick(e, product.id)
        );

        productsImgDiv.appendChild(productDiv);
      });

      letterDiv.appendChild(alphabetLine);
      letterDiv.appendChild(productsImgDiv);
      photosDiv.appendChild(letterDiv);
    });

    const filterDiv = document.createElement("div");
    filterDiv.classList.add("filter");

    Alphabet.split("").forEach((letter) => {
      const letterP = document.createElement("p");
      letterP.classList.add("letter");
      letterP.textContent = letter;
      filterDiv.appendChild(letterP);
    });

    const productsDiv = document.createElement("div");
    productsDiv.classList.add("productsDiv");
    productsDiv.appendChild(photosDiv);
    productsDiv.appendChild(filterDiv);

    const cardImages = document.createElement("div");
    cardImages.classList.add("cardImages");
    cardImages.innerHTML = `
          <div class="inputDiv">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search Product" />
          </div>
        `;
    cardImages.appendChild(productsDiv);

    productsImagesDiv.appendChild(cardImages);

    productsImagesDiv.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    singleProduct.appendChild(productsImagesDiv);

    singleProduct.addEventListener("click", function () {
      const isVisible = productsImagesDiv.style.display === "block";

      const allProductsImagesDivs =
        document.querySelectorAll(".productsImagesDiv");
      const allArrowIcons = document.querySelectorAll(".arrowIcon");
      allProductsImagesDivs.forEach((div) => {
        div.style.display = "none";
      });
      allArrowIcons.forEach((icon) => {
        icon.classList.remove("rotate");
      });

      if (!isVisible) {
        productsImagesDiv.style.display = "block";
        arrowIcon.classList.add("rotate");
        addScrollListeners(photosDiv);
      } else {
        productsImagesDiv.style.display = "none";
        arrowIcon.classList.remove("rotate");
      }
    });

    allDivisions.appendChild(singleProduct);
  });
});
