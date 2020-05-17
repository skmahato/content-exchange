class Post < ApplicationRecord
  has_and_belongs_to_many :topics
  belongs_to :user

  validates :context, presence: true, uniqueness: { case_sensitive: false }
end
