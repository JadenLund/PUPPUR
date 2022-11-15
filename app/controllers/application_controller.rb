class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize #authorizes that a user is logged in
    @current_client = Client.find_by(id: session[:client_id])
    #finding the user, if you have a session, you are currently logged in
    #then saves that user to the @current_client

    unless @current_client
      render json: {
               errors: ["Not Authorized, please login"]
             },
             status: :unauthorized
    end
    #If not, then this error pops up
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages
           },
           status: :unprocessable_entity
  end
end
