defmodule SerpWeb.SvelteLive do
  use Phoenix.LiveView

  def render(assigns) do
    ~H"""
    <div id="app" phx-hook="Svelte" phx-update="ignore"></div>
    """
  end

  def mount(_params, _, socket) do
    {:ok, socket}
  end

  def handle_event(f, _, socket) do
    {:noreply, push_event(socket, f, %{data: "John"})}
  end
end
