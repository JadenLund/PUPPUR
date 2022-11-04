class Comment < ApplicationRecord
  belongs_to :dog
  belongs_to :client

  validates :name, presence: true
  validates :summary, presence: true
end
