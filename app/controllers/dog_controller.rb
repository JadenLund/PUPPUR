class DogController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    render json: Dog.all
  end

  def show
    render json: Dog.find(params[:id]), serializer: DogWithCommentsSerializer
  end

  def search
    dog = Dog.find(params[:breed])
    render json: dog
  end

  private

  def render_not_found_response
    render json: { error: "Dog not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
