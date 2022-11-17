class Dog < ApplicationRecord
  acts_as_favoritable

  has_many :comments
  has_many :clients, through: :comments
end
