class Post < ApplicationRecord
  belongs_to :user

  has_many :post_topics
  has_many :topics, through: :post_topics
  has_many_attached :images

  validates :context, presence: true
end
