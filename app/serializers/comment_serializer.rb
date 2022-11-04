class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :likes, :client_id, :dog_id
end
