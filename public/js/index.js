const handleOpenSubBar = () => {
  const subBarElm = document.getElementById("subBar");

  subBarElm.classList.toggle("hidden");
};

const handleDropdownChange = (e) => {
  const quantity = document.getElementById("quantity");

  if (!quantity.value || quantity.value === "0") {
    quantity.classList.add("error");
    quantity.focus();
    return;
  } else {
    quantity.classList.remove("error");
  }

  if (e.target.value) {
    window.location = `/${e.target.value}/${quantity.value}/1`;
  } else {
    window.location = `/`;

  }
};

const handleQuantityChange = (e) => {
  const dropdown = document.getElementById("dropdown");

  if (dropdown.value) {
    window.location = `/${dropdown.value}/${e.target.value}/1`;
  }
}

const pagination = (type) => {
  const href = window.location.href.split('/')


  let newPage = Number(href[5])

  const maxPages = Number(href[4]) / 3

  switch (type) {
    case 'prev':
      if (newPage === 1) {
        return
      }

      newPage--
      break;
    case 'next':
      if (newPage >= maxPages) {
        return
      }

      newPage++
      break;

  }


  window.location = `/${href[3]}/${href[4]}/${newPage}`;


}

window.onload = function () {
  document.getElementById("option").addEventListener("click", handleOpenSubBar);

  document.getElementById("quantity").addEventListener("change", handleQuantityChange);

  document
    .getElementById("dropdown")
    .addEventListener("change", handleDropdownChange);

  //CONTROLE DO CLIQUE DENTRO E FORA DA HIDDEN BAR
  document.addEventListener("click", function (event) {
    if (
      document.getElementById("option").contains(event.target) ||
      document.getElementById("quantity").contains(event.target)
    ) {
      return;
    }

    const subBarElm = document.getElementById("subBar");

    const isClickInside = subBarElm.contains(event.target);

    if (!subBarElm.classList.contains("hidden")) {
      if (!isClickInside) {
        subBarElm.classList.toggle("hidden");
      }
    }
  });
};
