Rails.application.routes.draw do
  resources :reservations

  root :to => 'flights#index'

  resources :flights

  resources :airplanes

  resources :users

  
end
