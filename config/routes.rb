Rails.application.routes.draw do

  get 'sessions/new'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'application#index'

  get '/curso/:class/:grade' => 'application#introduction', as: :courses
  get '/curso/:class/:grade/:lesson' => 'application#lessons', as: :lessons
  get '/curso/:class/:grade/:lesson/*path' => 'application#lessons', as: :activities

  # Api routes
  scope :api do
    # User progress
    post '/click_here_progress' => 'user_progress#click_here_progress'
    patch '/update_progress' => 'user_progress#update', as: :update_progress

    # Resources
    get '/get_lesson_pdf' => 'resource_api#get_lesson_pdf'
  end

  concern :downloadable do
    get 'download'
    post 'upload'
  end

  resources :documents, concerns: :downloadable

  # =========================================
  # Administrative routes
  # =========================================
  # get 'usuarios/nuevo' => 'users#new', as: :new_user
  # get 'usuarios' => 'users#show', as: :users
  # get 'usuarios/:role' => 'users#show', as: :users_role
  # post 'usuarios' => 'users#create', as: :create_user
  # patch 'usuarios' => 'users#edit', as: :edit_user

  #****************************
  # => User routes
  #****************************
  get 'usuarios/:role/:grade' => 'users#show_list', as: :users_grade
  get 'usuarios/:role/:grade/:course' => 'users#show_list', as: :users_course
  get 'usuarios/update_courses' => 'users#update_courses', as: :update_courses
  post 'usuarios/course_registration' => 'users#course_registration', as: :course_registration
  resources :usuarios, controller: :users, as: 'users', path_names: { new: 'nuevo', edit: 'editar' }

  #****************************
  # => Login - Logout
  #****************************
  get 'login' => 'sessions#new', as: :login
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy', as: :logout

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
