# config/routes.rb
Rails.application.routes.draw do
  root to: "pages#home"
  get "about", to: "pages#about"
  get "work", to: "pages#work"
  get "contact", to: "pages#contact"
end
