class DogSerializer < ActiveModel::Serializer
  attributes :id, :breed, :icon, :image, :size, :group, :coat_length
end
