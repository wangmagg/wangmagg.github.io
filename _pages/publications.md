---
layout: page
permalink: /research/
title: research
description: 
nav: true
nav_order: 2
sections:
  - bibquery: "@article"
    type: "journal article"
    text: "Journal articles"
  - bibquery: "@inproceedings"
    type: "conference paper"
    text: "Conference papers"
  - bibquery: "@inproceedings"
    type: "contributed talk"
    text: "Contributed talks"
---
<!-- _pages/publications.md -->

<div class="publications">
    {%- for section in page.sections %}
        <a id="{{section.text}}"></a>
        <h3 class="title">{{section.text}}</h3>
        {% bibliography -f {{ site.scholar.bibliography }} -q {{section.bibquery}}[type={{section.type}}] %}
    {%- endfor %}
</div>
