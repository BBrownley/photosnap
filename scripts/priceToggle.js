const priceToggleHandler = (() => {
  const toggler = document.querySelector(".toggle");
  const toggleCircle = document.querySelector(".toggle .circle");

  const monthlyLabel = document.getElementById("monthly");
  const yearlyLabel = document.getElementById("yearly");

  const basicPriceLabel = document.getElementById("basic-price");
  const proPriceLabel = document.getElementById("pro-price");
  const businessPriceLabel = document.getElementById("business-price");

  const timespanLabels = document.querySelectorAll(".pricing-timespan");

  let currentState = "monthly";

  const prices = {
    monthly: {
      basic: "$19.00",
      pro: "$39.00",
      business: "$99.00"
    },
    yearly: {
      basic: "$190.00",
      pro: "$390.00",
      business: "$990.00"
    }
  };

  const updateLabels = () => {
    Array.from(timespanLabels).forEach(label => {
      if (currentState === "monthly") {
        label.textContent = "month";
      } else {
        label.textContent = "year";
      }
    });

    if (currentState === "monthly") {
      basicPriceLabel.textContent = prices.monthly.basic;
      proPriceLabel.textContent = prices.monthly.pro;
      businessPriceLabel.textContent = prices.monthly.business;
    } else {
      basicPriceLabel.textContent = prices.yearly.basic;
      proPriceLabel.textContent = prices.yearly.pro;
      businessPriceLabel.textContent = prices.yearly.business;
    }
  };

  toggler.addEventListener("click", () => {
    // Toggle between monthly and yearly prices
    toggleCircle.classList.toggle("yearly");

    if (toggleCircle.classList.contains("yearly")) {
      yearlyLabel.classList.add("active");
      monthlyLabel.classList.remove("active");
      currentState = "yearly";
      updateLabels();
    } else {
      monthlyLabel.classList.add("active");
      yearlyLabel.classList.remove("active");
      currentState = "monthly";
      updateLabels();
    }
  });

  updateLabels();
})();