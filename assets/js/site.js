(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.documentElement.classList.add("motion");

  var header = document.querySelector(".site-header");
  var menuToggle = header && header.querySelector(".menu-toggle");
  var primaryNav = header && header.querySelector(".primary-nav");

  function closeMenu() {
    if (!header || !menuToggle) return;
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }

  if (header && menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      header.classList.toggle("menu-open", !isOpen);
    });

    primaryNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  var whatsapp = document.createElement("a");
  whatsapp.className = "whatsapp-float";
  whatsapp.href = "https://wa.me/5592984600996?text=" + encodeURIComponent("Olá! Gostaria de saber mais sobre as encomendas da Bem Dondoca.");
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  whatsapp.setAttribute("aria-label", "Converse com a Bem Dondoca pelo WhatsApp");
  whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 3.2A12.55 12.55 0 0 0 5.25 22.24L3.6 28.3l6.2-1.62A12.57 12.57 0 1 0 16 3.2Zm0 22.9c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.68.96.98-3.58-.26-.42A10.28 10.28 0 1 1 16 26.1Zm5.64-7.7c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/></svg><span>Converse pelo WhatsApp</span>';
  document.body.appendChild(whatsapp);

  // Trilhos de fotos: setas, pontos e arrastar com o mouse (o toque já rola nativamente)
  var arrow = '<svg aria-hidden="true" width="18" height="12" viewBox="0 0 18 12"><path d="M0 6h16M11 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  Array.prototype.forEach.call(document.querySelectorAll("[data-rail]"), function (rail) {
    var items = rail.children;
    var controls = document.createElement("div");
    controls.className = "rail-controls";
    controls.innerHTML = '<div class="rail-dots"></div>' +
      '<div class="rail-arrows"><button class="rail-btn rail-prev" type="button" aria-label="Ver fotos anteriores">' + arrow + '</button>' +
      '<button class="rail-btn" type="button" aria-label="Ver próximas fotos">' + arrow + '</button></div>';
    rail.insertAdjacentElement("afterend", controls);
    var dotsBox = controls.querySelector(".rail-dots");
    var prev = controls.querySelector(".rail-prev");
    var next = prev.nextElementSibling;
    var dots = Array.prototype.map.call(items, function (item, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "rail-dot";
      dot.setAttribute("aria-label", "Ir para a foto " + (i + 1) + " de " + items.length);
      dot.addEventListener("click", function () { go(i); });
      dotsBox.appendChild(dot);
      return dot;
    });

    function step() { return items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 0); }
    function current() { return Math.round(rail.scrollLeft / step()); }
    function go(i) { rail.scrollTo({ left: Math.max(0, Math.min(i, items.length - 1)) * step(), behavior: reduce ? "auto" : "smooth" }); }
    function update() {
      var scrollable = rail.scrollWidth > rail.clientWidth + 4;
      controls.hidden = !scrollable;
      if (!scrollable) return;
      var max = rail.scrollWidth - rail.clientWidth - 4;
      var active = rail.scrollLeft >= max ? items.length - 1 : current();
      prev.disabled = rail.scrollLeft <= 4;
      next.disabled = rail.scrollLeft >= max;
      dots.forEach(function (dot, i) { dot.setAttribute("aria-current", i === active ? "true" : "false"); });
    }
    prev.addEventListener("click", function () { go(current() - 1); });
    next.addEventListener("click", function () { go(current() + 1); });
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    // Arrastar com o mouse
    var startX = 0, startLeft = 0, dragging = false, moved = false;
    rail.addEventListener("pointerdown", function (event) {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true; moved = false; startX = event.clientX; startLeft = rail.scrollLeft;
    });
    window.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      var dx = event.clientX - startX;
      if (Math.abs(dx) > 5 && !moved) { moved = true; rail.classList.add("is-dragging"); }
      if (moved) rail.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", function () {
      if (!dragging) return;
      dragging = false;
      rail.classList.remove("is-dragging");
      if (moved) go(current());
    });
    rail.addEventListener("click", function (event) { if (moved) { event.preventDefault(); moved = false; } }, true);
    rail.addEventListener("dragstart", function (event) { event.preventDefault(); });
  });

  var form = document.querySelector("[data-encomenda]");
  if (!form) return;

  var ocasiao = form.querySelector("[name=ocasiao]");
  var prefill = new URLSearchParams(window.location.search).get("ocasiao");
  if (prefill && ocasiao && ocasiao.value.trim() === "") ocasiao.value = prefill;

  var messages = {
    nome: "Falta o nome. A resposta precisa chegar à pessoa certa. Escreva nome e sobrenome.",
    ocasiao: "Falta a ocasião. Ela é o assunto da encomenda. Escreva, por exemplo, aniversário ou casamento.",
    mensagem: "Falta a mensagem. Uma linha já serve."
  };

  function value(name) {
    return form.querySelector("[name=" + name + "]").value.trim();
  }

  function showError(name, on) {
    var input = form.querySelector("[name=" + name + "]");
    var note = form.querySelector("[data-error=" + name + "]");
    input.setAttribute("aria-invalid", on ? "true" : "false");
    note.hidden = !on;
  }

  function valid() {
    var names = ["nome", "ocasiao", "mensagem"];
    var ok = true;
    names.forEach(function (name) {
      var missing = value(name) === "";
      showError(name, missing);
      if (missing) ok = false;
    });
    return ok;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fallback = form.querySelector("[data-fallback]");
    fallback.hidden = true;
    if (!valid()) {
      var first = form.querySelector("[aria-invalid=true]");
      if (first) first.focus();
      return;
    }

    var text = "Olá. Meu nome é " + value("nome") + ". A ocasião é " + value("ocasiao") + ".";
    if (value("desejo")) text += " Desejo " + value("desejo") + ".";
    text += " " + value("mensagem");

    var url = "https://wa.me/5592984600996?text=" + encodeURIComponent(text);
    var opened = window.open(url, "_blank", "noopener,noreferrer");
    var link = fallback.querySelector("a");
    link.href = url;
    if (!opened) fallback.hidden = false;
  });

  form.addEventListener("input", function (event) {
    var name = event.target.name;
    if (!messages[name]) return;
    if (event.target.value.trim() !== "") showError(name, false);
  });
})();
