class UsersController < ApplicationController

  def show
    @user = User.find(1)
    render json: @user
  end


end
