class WeightsController < ApplicationController
  before_action :set_weight, only: [:edit, :show]
  before_action :move_to_index

  def index
    @weights = Weight.where(user_id: current_user.id).includes(:user).order("created_at DESC")
  end

  def new
    @weight = Weight.new
  end

  def create
    weight = Weight.create(weight_params)
    if weight.save
      redirect_to root_path
    else
      render :new
    end
  end
  
  def destroy
    weight = Weight.find(params[:id])
    weight.destroy
    redirect_to root_path
  end

  def edit

  end

  def update
    weight = Weight.find(params[:id])
    if weight.update(weight_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show

  end

  private

  def weight_params
    params.require(:weight).permit(:weight, :bmi).merge(user_id: current_user.id)
  end

  def set_weight
    @weight = Weight.find(params[:id])
  end

  def move_to_index
    unless user_signed_in?
      redirect_to new_user_session_path
    end
  end

end
