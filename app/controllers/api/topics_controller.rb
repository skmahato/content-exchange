class Api::TopicsController < Api::ApiController

  def index
    topics = Topic.all

    if topics
      render_success(:ok, topics)
    else
      render_error(:not_found)
    end
  end
end
