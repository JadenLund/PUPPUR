class Favorite < ApplicationRecord
  belongs_to :client
  belongs_to :favorited, polymorphic: true
end
