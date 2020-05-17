class Api::PostsController < Api::ApiController

  def create
    topics = Topic.where(id: params[:post][:topic_id])
    post = Post.new(post_params)

    if post.save
      topics.each { |t| t.posts << post }
      render_success(:created, post, include: [:topics], meta: { message: "Post created successfully..." })
    else
      render_error(:unprocessable_entity, post.errors)
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :context, images: [])
  end
end
