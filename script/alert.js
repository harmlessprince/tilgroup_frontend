/* eslint-disable */
export const hideAlert = () => {
  const el = document.querySelector(".notification");
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type = "success", message, time = 7) => {
  hideAlert();
  const markup = `<div class="notification" id="notification">
            <div class="notification__box">
                <img src="static/images/x 3closesmall.svg" alt="close notification icon" class="notification__close">
                <div class="check-icon">
                    <img src="static/images/Group 1000003628success.svg" alt="sucess icon" class="w-full h-full">
                </div>
                <div class="notification__content">
                    <p class="notification__header">You have sucessfully Place your Order</p>
                    <p class="notification__text">You have completly fill the form and your order has been placed
                        sucessfully</p>
                </div>
            </div>
        </div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, time * 1000);
};
