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
    text: "journal articles"
  - bibquery: "@inproceedings"
    type: "conference paper"
    text: "preprints & conference papers"
  - bibquery: "@inproceedings"
    type: "contributed talk"
    text: "contributed talks"
---
<!-- _pages/publications.md -->
*equal contribution

<div class="publications">
    {%- for section in page.sections %}
        <a id="{{section.text}}"></a>
        <h3 class="title">{{section.text}}</h3>
        {% bibliography -f {{ site.scholar.bibliography }} -q {{section.bibquery}}[type={{section.type}}] %}
    {%- endfor %}
</div>
