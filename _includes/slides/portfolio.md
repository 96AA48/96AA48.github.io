<div class="portfoliogrid">
{% for project in site.data.portfolio %}
  <div class="{{ project.id }}" style="background-image: url('{{ project.image }}')">
    {% if project.image == null %} {{ project.name }} {% endif %}
  </div>
{% endfor %}
</div>


{% for project in site.data.portfolio %}
<div class="project {{ project.id }}">
  <h3>{{ project.name }}</h3>
  {% if project.image %} <a href="{{ project.link }}" target="_blank"><img src="{{ project.image }}" /></a> {% endif %}
  {% capture markdown %}{% include portfolio/{{ project.id }}.md %}{% endcapture %}

  {{ markdown | markdownify }}
</div>
{% endfor %}
