class Client < ApplicationRecord
  has_many :comments
  has_many :dogs, through: :comments

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
