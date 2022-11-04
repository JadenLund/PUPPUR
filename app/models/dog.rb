class Dog < ApplicationRecord
  has_many :comments
  has_many :clients, through: :comments
end
