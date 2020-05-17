class Api::UsersController < Api::ApiController
  skip_before_action :login_required, only: [:create]

  def authenticate_user
    render_success(:ok, current_user)
  end

  def create
    user = User.new(user_params)

    if user.save
      render_success(:created, user, meta: { message: I18n.t("devise.registrations.signed_up") })
    else
      render_error(:unprocessable_entity, user.errors)
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
