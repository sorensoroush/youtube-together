class User < ApplicationRecord
  has_secure_password
  belongs_to :room
  has_many :comments
end
