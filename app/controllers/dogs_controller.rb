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

  # def showSize
  #   render json: Dog.find(params[:size])
  # end

  # def showGroup
  #   render json: Dog.find(params[:group])
  # end

  # def showCoatLength
  #   render json: Dog.find(params[:coat_length])
  # end
end
