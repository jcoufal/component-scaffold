angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("app/views/example.html",
    "<div>" +
    "  <h1>Context Menus</h1>" +
    "" +
    "  <ul class=\"context_menu\">" +
    "    <li><a href=\"#\">Item 1</a></li>" +
    "    <li><a href=\"#\">Item 2</a></li>" +
    "    <li><a href=\"#\">Item 3</a></li>" +
    "    <li><a href=\"#\">Item 4</a></li>" +
    "" +
    "    <li class=\"divider\"></li>" +
    "" +
    "    <li><a href=\"#\"><img src=\"images/icon.png\"/></a></li>" +
    "    <li><a href=\"#\">Text</a></li>" +
    "    <li><a href=\"#\"><img src=\"images/icon.png\"/> Text</a></li>" +
    "" +
    "    <li class=\"divider\"></li>" +
    "" +
    "    <li class=\"context_submenu pull_right\">" +
    "      <a href=\"#\">Submenu right</a>" +
    "      <ul class=\"context_menu\">" +
    "        <li><a href=\"#\">Item 1</a></li>" +
    "        <li><a href=\"#\">Item 2</a></li>" +
    "        <li><a href=\"#\">Item 3</a></li>" +
    "        <li><a href=\"#\">Item 4</a></li>" +
    "      </ul>" +
    "    </li>" +
    "" +
    "    <li class=\"context_submenu pull_left\">" +
    "      <a href=\"#\">Submenu left</a>" +
    "      <ul class=\"context_menu\">" +
    "        <li><a href=\"#\">Item 1</a></li>" +
    "        <li><a href=\"#\">Item 2</a></li>" +
    "        <li><a href=\"#\">Item 3</a></li>" +
    "        <li><a href=\"#\">Item 4</a></li>" +
    "      </ul>" +
    "    </li>" +
    "  </ul>" +
    "</div>" +
    "");
});
