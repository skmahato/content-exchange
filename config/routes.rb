Rails.application.routes.draw do
  default_url_options :host => "localhost:3000"

  namespace :api, defaults: { format: :json } do
    post "/login",             to: "sessions#create"
    post "/signup",            to: "users#create"
    get "/current_user",       to: "users#authenticate_user"

    resources :posts
    resources :topics
    resources :subscriptions
  end
end
