class Api::PostsController < Api::ApiController

  def index
    posts = Post.all

    if posts
      render_success(:ok, posts, include: [:topics])
    else
      render_error(:not_found)
    end
  end

  def create
    topics = Topic.where(id: params[:post][:topic_id])
    post = current_user.posts.new(post_params)
    post.images.attach(params[:post][:images])

    if post.save
      topics.each { |t| t.posts << post }
      render_success(:created, post, include: [:topics], meta: { message: "Post created successfully..." })
    else
      render_error(:unprocessable_entity, post.errors)
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :context, :topic_id, images: [])
  end
end
