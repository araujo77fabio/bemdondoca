(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".shot-link"));
  if (!links.length || typeof HTMLDialogElement !== "function") return;

  var ICON_CLOSE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  var ICON_PREV = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 4l-8 8 8 8"/></svg>';
  var ICON_NEXT = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 4l8 8-8 8"/></svg>';

  function navButton(kind, icon) {
    var label = kind === "prev" ? "Foto anterior" : "Próxima foto";
    return '<button class="lightbox-button lightbox-' + kind + '" type="button" data-step="' + (kind === "prev" ? -1 : 1) + '" aria-label="' + label + '">' + icon + "</button>";
  }

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Foto ampliada");
  dialog.innerHTML =
    '<div class="lightbox-bar"><p class="lightbox-count" aria-live="polite"></p>' +
    '<button class="lightbox-button lightbox-close" type="button">' + ICON_CLOSE + "<span>Fechar</span></button></div>" +
    '<div class="lightbox-stage">' + navButton("prev", ICON_PREV) +
    '<figure class="lightbox-figure"><img alt="" decoding="async"><figcaption></figcaption></figure>' +
    navButton("next", ICON_NEXT) + "</div>" +
    '<div class="lightbox-nav-mobile">' + navButton("prev", ICON_PREV) + navButton("next", ICON_NEXT) + "</div>";
  document.body.appendChild(dialog);

  var image = dialog.querySelector(".lightbox-figure img");
  var caption = dialog.querySelector(".lightbox-figure figcaption");
  var count = dialog.querySelector(".lightbox-count");
  var closeButton = dialog.querySelector(".lightbox-close");
  var current = 0;
  var opener = null;

  function show(index) {
    current = (index + links.length) % links.length;
    var link = links[current];
    var thumb = link.querySelector("img");
    var figcaption = link.parentNode.querySelector("figcaption");
    image.src = link.href;
    image.alt = thumb ? thumb.alt : "";
    image.width = Number(link.getAttribute("data-full-width")) || 0;
    image.height = Number(link.getAttribute("data-full-height")) || 0;
    caption.textContent = figcaption ? figcaption.textContent : "";
    count.textContent = "Foto " + (current + 1) + " de " + links.length;
  }

  links.forEach(function (link, index) {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      show(index);
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", function () { dialog.close(); });

  dialog.addEventListener("click", function (event) {
    var step = event.target.closest("[data-step]");
    if (step) {
      show(current + Number(step.getAttribute("data-step")));
      return;
    }
    // Clique fora da foto e dos controles fecha
    if (event.target === dialog || event.target.classList.contains("lightbox-stage") || event.target.classList.contains("lightbox-figure")) dialog.close();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
  });

  dialog.addEventListener("close", function () {
    image.removeAttribute("src");
    if (opener) opener.focus();
  });
})();
