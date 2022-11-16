class Client < ApplicationRecord
  has_many :comments
  has_many :dogs, through: :comments

  has_many :favorites
  has_many :favorite_dogs,
           through: :favorites,
           source: :favorited,
           source_type: "Dog"

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
