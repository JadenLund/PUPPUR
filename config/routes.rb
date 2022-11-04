Rails.application.routes.draw do
  post "/signup", to: "clients#create"
  get "/me", to: "clients#show" #rename
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/search", to: "dogs#search"

  resources :dog
  resources :comments
  # resources :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
