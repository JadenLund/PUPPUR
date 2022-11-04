class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
  #skips the authorization action in the application_controller for the :create action only

  def create
    client = Client.find_by(username: params[:username])
    if client&.authenticate(params[:password]) #dont blow up whole website if you cant find the user
      session[:client_id] = client.id
      render json: client
    else
      render json: {
               error: ["Invalid username or password "]
             },
             status: :unauthorized
      #if the password doesnt work throw an error
    end
  end

  def destroy
    session.delete :client_id #deletes the user
    head :no_content #come back with nothing
  end
end
