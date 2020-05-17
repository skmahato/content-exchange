class Api::PostsController < Api::ApiController

  def index
    posts = Topic.find(params[:id]).posts

     if posts
      render_success(:created, posts, include: [:topics])
    else
      render_error(:not_found)
    end
  end

  def create
    topics = Topic.where(id: params[:post][:topic_id])
    post = Post.new(post_params)
    binding.pry
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
    params.require(:post).permit(:user_id, :context, images: [])
  end
end
