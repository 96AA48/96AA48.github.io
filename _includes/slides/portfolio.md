I'm currently building this section of the webpage, please come back later to check my portfolio!

{% for project in site.data.portfolio %}
* {{ project.name }}
  {% capture markdown %}{% include portfolio/{{ project.id }}.md %}{% endcapture %}

  {{ markdown | markdownify }}
{% endfor %}
