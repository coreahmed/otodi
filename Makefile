# variables
ENV := $(shell grep -w 'APP_ENV' .env)

# pls sort alphabetically except 'default'

default: all

all:
	yarn start

lint:
	yarn eslint && yarn stylelint && yarn prettier

package:
	yarn install

webpack: 
	yarn build
