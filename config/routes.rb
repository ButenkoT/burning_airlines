Rails.application.routes.draw do
  root :to => 'flights#index'

  resources :flights

  resources :airplanes

  resources :users

  
end
