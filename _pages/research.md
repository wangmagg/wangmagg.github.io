---
layout: page
permalink: /research/
title: research
description: research 
# years: [1967, 1956, 1950, 1935, 1905]
nav: true
nav_order: 1
---
<!-- _pages/research.md -->
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<!-- <div class="publications"> -->
{% bibliography %}
=======
<div class="research">
<h2 class="Journal & Conference Papers">{Journal & Conference Papers}</h2>
  {% bibliography -f papers -q @*[keywords={J}]* %}
<h2 class="Contributed Talks">{Contributed Talks}</h2>
  {% bibliography -f papers -q @*[keywords={T}]* %}
>>>>>>> e807df4 (change spacing in "about", fix formatting in "research")

<!-- <h2 class="Journal & Conference Papers">{{ "Journal & Conference Papers" }}</h2>
  {% bibliography -f papers -q @*[keywords={{ J }}]* %}

<h2 class="Contributed Talks">{{ "Contributed Talks" }}</h2>
  {% bibliography -f papers -q @*[keywords={{ T }}]* %}

</div>  -->
=======
<div class="research">

<h2 class="Journal & Conference Papers">{{ "Journal & Conference Papers}" }</h2>
  {% bibliography -f papers -q @*[keywords={{ "J" }}]* %}
=======
<div class="publications">

<h2 class="Journal & Conference Papers">{{ "Journal & Conference Papers" }}</h2>
  {% bibliography -f papers -q @*[keywords={{ J }}]* %}
>>>>>>> 423ed95 (fix cv and research formatting)

<h2 class="Contributed Talks">{{ "Contributed Talks" }}</h2>
  {% bibliography -f papers -q @*[keywords={{ T }}]* %}

</div> 
>>>>>>> 5a69e5d (research formatting)
