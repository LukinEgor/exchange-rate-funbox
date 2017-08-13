Rails.application.routes.draw do
  root to: "exchange_rate#index"
  get "/admin", to: "exchange_rate#index"

  mount ActionCable.server => '/cable'
end
