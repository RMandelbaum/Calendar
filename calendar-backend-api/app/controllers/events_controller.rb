require 'byebug'

class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
   render json: Event.order('id ASC')
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      # byebug
      # @date = Date.parse(event_params[:date], '%d, %m %Y').strftime("%m/%d/%Y")
      # @start_time = Time.parse(event_params[:start_time]).strftime('%H:%M')
      # @end_time =  Time.parse(event_params[:start_time]).strftime('%H:%M')
      # event_params[:date] = @date
      # event.start_time = @start_time
      # event.end_time = @end_time
      # byebug

      render json: event
    else
      render json: { message: event.errors }, status: 400
    end
  end

  def show
    render json: @event
  end

 def update
   if @event.update(event_params)
     render json: @event
   else
     render json: { message: event.errors}, status: 400
   end
 end

 def destroy
   if @event.destroy
     render json: { message: 'Successfully Removed Item' }, status: 204
   else
     render json: { message: 'Unable to Delete'}, status: 400
   end
 end


  private

  def set_event
    @event = Event.find_by(id: params[:id])
  end

  def event_params

    params.require(:event).permit(:description, :date, :start_time, :end_time)
  end

end
