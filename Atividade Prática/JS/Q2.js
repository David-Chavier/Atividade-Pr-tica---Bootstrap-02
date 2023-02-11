const accordion = document.getElementById("accordionList");
      let data = [
        { cod: 0, name: "banana", detail: "azul" },
        { cod: 1, name: "banana2", detail: "azul2" },
        { cod: 2, name: "banana3", detail: "azul3" },
      ];

      function renderAccordion() {
        accordion.innerHTML = "";
        let contador = 0;

        data.map((item) => {
          console.log(contador++);
          const accordionItem = document.createElement("div");
          accordionItem.setAttribute("class", "accordion-item");

          const h2 = document.createElement("h2");
          h2.setAttribute("class", "accordion-header");
          h2.setAttribute("id", `heading${item.cod}`);
          accordionItem.appendChild(h2);

          const button = document.createElement("button");
          button.setAttribute("class", "accordion-button");
          button.setAttribute("type", "button");
          button.setAttribute("data-bs-toggle", "collapse");
          button.setAttribute("data-bs-target", `#collapse${item.cod}`);
          button.setAttribute("aria-expanded", `false`);
          button.setAttribute("aria-controls", `collapse${item.cod}`);
          button.innerHTML = item.name;
          h2.appendChild(button);

          const collapse = document.createElement("div");
          collapse.setAttribute("id", `collapse${item.cod}`);
          collapse.setAttribute("class", `accordion-collapse collapse show`);
          collapse.setAttribute("aria-labelledby", `heading${item.cod}`);
          collapse.setAttribute("data-bs-parent", `#accordionList`);
          accordionItem.appendChild(collapse);

          const accordionBody = document.createElement("div");
          accordionBody.setAttribute("class", `accordion-body`);
          collapse.appendChild(accordionBody);

          const strong = document.createElement("strong");
          strong.innerHTML = item.detail;
          accordionBody.appendChild(strong);

          accordion.appendChild(accordionItem);
        });
      }

      renderAccordion();