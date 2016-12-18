$(document).ready(function(){
  backgrounds = [
      "jgoerugd_y4-john-towner.jpg",
      "_q5h19c-vwu-fineas-anton.jpg",
      "a3owknpciq8-alexandre-chambon.jpg",
      "dksk8szlrn0-sora-sagano.jpg",
      "fhxp17axoek-arto-marttinen.jpg",
      "lvdnluaci18-guy-bowden.jpg",
      "rf5sv5dv1zc-arto-marttinen.jpg"
  ]
  overlays = [
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cGF0aCBkPSJNLTIgMTBMMTAgLTJaTTEwIDZMNiAxMFpNLTIgMkwyIC0yIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNC41Ij48L3BhdGg+Cjwvc3ZnPg==",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibGlnaHRncmF5IiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPHBhdGggZD0iTTI4IDBMMjggMzRMMCA1MEwwIDg0TDI4IDEwMEw1NiA4NEw1NiA1MEwyOCAzNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJkYXJrZ3JheSIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg=="
  ]

  background = backgrounds[Math.floor(backgrounds.length * Math.random())]
  overlay = overlays[Math.floor(overlays.length * Math.random())]

  $("body").css({
    "background": "url('./assets/img/" + background + "')",
    "background-size": "cover"
  });

  $("#overlay").css("background", "url('" + overlay + "')")
});

$('.slick').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1230,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});