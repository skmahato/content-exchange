class Api::PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :context, :images

  has_many :topics, through: :post_topics

  def images
    return unless object.images.attachments
    image_urls = object.images.map do |image|
      rails_blob_url(image)
    end

    image_urls
  end
end
