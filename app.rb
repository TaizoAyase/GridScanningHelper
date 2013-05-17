# coding: utf-8

require 'sinatra'
require 'haml'

get '/' do
  haml :top

end

post '/grids' do
  @ver = params[:vertical].to_i
  @hor = params[:horizontal].to_i
  @total = @ver * @hor
  haml :grids
end

def html(view)
  File.read(File.join('views', "#{view.to_s}.html"))
end
