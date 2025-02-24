class UsersController < ApplicationController

  def edit
    @user = User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      bypass_sign_in(current_user) 
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to new_user_session_path
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :password, :height, :mark, :memo, :image)
  end

end
