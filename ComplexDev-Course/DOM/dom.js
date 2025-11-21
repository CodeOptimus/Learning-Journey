function handleCostKeydown(event) {
        if (event.key === "Enter") {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const costInput = document.querySelector(".cost-input");
        let cost = Number(costInput.value);

        if (cost < 40) {
          cost = cost + 10;
        }

        document.querySelector(".total-cost").innerHTML = `Total: $${cost}`;
      }

      function subscribe() {
        const btnElement = document.querySelector(".subscribe-btn");

        if (btnElement.innerText === "Subscribe") {
          btnElement.innerHTML = "Subscribed";
          btnElement.classList.add('is-subscribed');
        } else {
          btnElement.innerHTML = "Subscribe";
          btnElement.classList.remove('is-subscribed');
        }
      }