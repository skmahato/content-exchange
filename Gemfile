source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

gem "active_model_serializers"
gem "devise"
gem "jwt"
gem 'rails', '~> 6.0.3'
gem 'mysql2', '>= 0.4.4'
gem 'puma', '~> 4.3'
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'rack-cors'

group :development, :test do
  gem "pry-rails", "~> 0.3.9"
end

group :development do
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
