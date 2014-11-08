Rails.application.routes.draw do
  resources :reservations

  root :to => 'flights#index'

  get '/planes' => 'airplanes#planes'

  resources :flights

  resources :airplanes

  resources :users

  
end
