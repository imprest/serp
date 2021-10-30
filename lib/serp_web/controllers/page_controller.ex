defmodule SerpWeb.PageController do
  use SerpWeb, :controller

  def index(conn, _params) do
    conn =
      conn
      |> assign(:page_title, "Serp Websockets Client PWA")
      |> assign(:manifest, "manifests/websockets.json")

    render(conn, "index.html")
  end
end
