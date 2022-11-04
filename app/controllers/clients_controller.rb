class ClientsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    client = Client.create(client_params)
    session[:client_id] = client.id
    render json: client, status: :created
  end

  def show
    render json: @current_client
  end

  private

  def client_params
    params.permit(:username, :password)
  end
end
