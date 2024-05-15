---
layout: page
permalink: /research/
title: research
description: 
nav: true
nav_order: 2
sections:
  - type: "journal article"
    text: "Journal articles"
  - type: "conference paper"
    text: "Conference papers"
  - type: "contributed talk"
    text: "Contributed talks"
---
<!-- _pages/publications.md -->
{%- for section in page.sections %}
  <a id="{{section.text}}"></a>
  <p class="bibtitle">{{section.text}}</p>
  {% bibliography -f {{ site.scholar.bibliography }} %}[type={{section.type}}]
{%- endfor %}
  
<!-- <div class="publications">
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
    {% bibliography -f {{ site.scholar.bibliography }} %} -->

</div>
