class UsersController < ApplicationController

#User is hard coded - eventually make it dynamic for multiple users
  def show
    @user = User.find(1)
    render json: @user
  end


end
