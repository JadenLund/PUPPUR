class ClientsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    client = Client.create!(client_params)
    session[:client_id] = client.id
    render json: client, status: :created
  end

  def favorite
    favorite = @current_client.favorite(Dog.find(params[:id]))
    render json: favorite
  end

  def unfavorite
    @current_client.unfavorite(Dog.find(params[:id]))
    render json: @current_client.favorites
  end

  def favorites
    render json: @current_client.all_favorites
  end

  def show
    render json: @current_client
  end

  private

  def client_params
    params.permit(:username, :password)
  end
end
