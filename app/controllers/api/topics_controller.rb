class Api::TopicsController < Api::ApiController

  def index
    topics = Topic.all

    if topics
      render_success(:ok, topics)
    else
      render_error(:not_found)
    end
  end

  def create
    topic = Topic.new(topic_params)

    if topic.save
      render_success(:created, topic, meta: { message: "Topic created successfully..." })
    else
      render_error(:unprocessable_entity, topic.errors)
    end
  end

  private

  def topic_params
    params.require(:topic).permit(:title)
  end
end
