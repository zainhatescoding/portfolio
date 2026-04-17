Rails.application.routes.draw do
  root 'portfolio#index'
  get 'discover', to: 'portfolio#discover'
end
