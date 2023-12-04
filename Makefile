# Makefile for Angular Project
# Function to read Angular version
define get_angular_version
	$(shell jq -r '.dependencies["@angular/core"] | match("([0-9]+\\.[0-9]+)") .captures[0].string' $(PACKAGE_JSON) | tr -d '[:space:]')
endef

# Variables
NODE_VERSION=18
ANGULAR_VERSION=17
NG_CLI = npx -p @angular/cli@$(ANGULAR_VERSION)
SOURCE_DIR = src
DIST_DIR = dist
PACKAGE_JSON = package.json

# What is jq: it is json parse

# Targets
.PHONY: run build clean install read-version test lint docker-compose-up docker-compose-down


g-s:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng g s

g-c:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng g c

run:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng serve --host 172.16.120.62 --port 4800

build:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng build

clean:
	rm -rf $(DIST_DIR)

install:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) npm install --force

read-version:
	@echo "Reading Angular version from $(PACKAGE_JSON)"
	@echo "Angular Version:$(call get_angular_version)"

test:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng test

lint:
	$(shell ./linting.sh)

docker-compose-up:
	sudo docker-compose up -d

docker-compose-down:
	sudo docker-compose down

# Default target
.DEFAULT_GOAL := serve
