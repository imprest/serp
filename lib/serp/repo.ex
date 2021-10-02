defmodule Serp.Repo do
  use Ecto.Repo,
    otp_app: :serp,
    adapter: Ecto.Adapters.Postgres
end
