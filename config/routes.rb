Rails.application.routes.draw do
  devise_for :users
  root to: 'weights#index'
  resources :weights
  resources :users
end
