class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response

  def index
    render json: Comment.all
  end

  def show
    render json: Comment.find(params[:id])
  end

  def create
    comment = Comment.create(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.update(comment_params)
    render json: comment
  end

  def delete
    comment.destroy
    head :no_content
  end

  def increment_likes
    comment = Comment.find_by(id: params[:id])
    comment.update(likes: comment.likes + 1)
    render json: comment, status: :ok
  end

  private

  def comment_params
    params.permit(:name, :summary, :client_id, :dog_id)
  end

  def render_not_found_response
    render json: { error: "Activity not found" }, status: :not_found
  end
end
