class DogController < ApplicationController
  def index
    render json: Dog.all
  end

  def show
    render json: Dog.find(params[:id])
  end

  def search
    dog = Dog.find(params[:breed])
    render json: dog
    puts { dog }
  end
end
