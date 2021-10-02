defmodule SerpWeb.PageController do
  use SerpWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
