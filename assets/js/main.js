/* Neuro-IA Lab — interacciones del sitio (sin dependencias externas) */

(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Animación de aparición al hacer scroll ---------- */
  var fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Fondo animado tipo "red neuronal" en el hero ---------- */
  var canvas = document.getElementById("hero-canvas");

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var nodes = [];
    var NODE_COUNT = 46;
    var MAX_DIST = 150;
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
    }

    function createNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
          vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(function (n) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var maxDist = MAX_DIST * devicePixelRatio;

          if (dist < maxDist) {
            ctx.strokeStyle =
              "rgba(75, 223, 206, " + (1 - dist / maxDist) * 0.35 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(function (n) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 157, 255, 0.9)";
        ctx.fill();
      });

      if (!reduceMotion) {
        requestAnimationFrame(step);
      }
    }

    resize();
    createNodes();
    step();

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        createNodes();
        if (reduceMotion) step();
      }, 200);
    });
  }

  /* ---------- Formulario de contacto (mailto, sin backend) ---------- */
  var contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = contactForm.querySelector("#name").value.trim();
      var email = contactForm.querySelector("#email").value.trim();
      var message = contactForm.querySelector("#message").value.trim();
      var successEl = document.getElementById("form-success");

      var subject = encodeURIComponent("Contacto desde neuroialab.github.io — " + name);
      var body = encodeURIComponent(
        message + "\n\n---\nNombre: " + name + "\nEmail: " + email
      );

      window.location.href =
        "mailto:neuroialab@utec.edu.uy?subject=" + subject + "&body=" + body;

      if (successEl) {
        successEl.classList.add("is-visible");
      }
    });
  }
})();
