class Api::SubscriptionsController < Api::ApiController

  def index
    subscriptions = current_user.subscriptions

    if subscriptions
      render_success(:ok, subscriptions, include: [:topics])
    else
      render_error(:not_found)
    end
  end

  def create
    subscription = current_user.subscriptions.new(subscription_params)

    if subscription.save
      render_success(:created, subscription, include: [:topics], meta: { message: "Subscription created successfully..." })
    else
      render_error(:unprocessable_entity, subscription.errors)
    end
  end

  def destroy
    subscription = current_user.subscriptions.find_by(topic_id: params[:id])

    if subscription.destroy
      render_success(:ok, subscription, include: [:topics], meta: { message: "Subscription destroyed successfully..." })
    else
      render_error(:unprocessable_entity, subscription.errors)
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:topic_id)
  end
end
