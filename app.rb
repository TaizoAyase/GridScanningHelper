# coding: utf-8

require 'sinatra'
require 'haml'

get '/' do
  haml :top
end

post '/grids' do
  # get vertical/horizontal grid size
  @ver = params[:vertical].to_i
  @hor = params[:horizontal].to_i

  # zero is replaced by 1
  @ver = 1 if @ver == 0
  @hor = 1 if @hor == 0

  @total = @ver * @hor

  haml :grids
end
