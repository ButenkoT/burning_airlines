Rails.application.routes.draw do
  resources :reservations

  root :to => 'flights#home'

  resources :flights

  resources :airplanes

  resources :users

  
end
