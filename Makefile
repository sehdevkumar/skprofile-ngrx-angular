#
# Makefile for Angular Project
#! Function to read Angular version
define get_angular_version
	$$(. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng version)
endef

#! Function to read the your local ip address
define get_ip
	$(shell hostname -I | cut -d' ' -f1)
endef


#! Variables
NODE_VERSION=18
ANGULAR_VERSION=17
NG_CLI = npx -p @angular/cli@$(ANGULAR_VERSION)
SOURCE_DIR = src
DIST_DIR = dist


# Targets
.PHONY:g-state g-actions g-effects g-feature gs gc run build rmn i -v test lint dc-up dc-down

#! System Commands
ip:
	@echo $(call get_ip)

#* Angular Ngrx Cli Commands
# !Make sure you have installed the ngrx schemetics and add to the angular.json file in "cli" option, otherwise the commonds will not work.
g-state:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng generate store --root --state-path --module
g-actions:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng generate action --group
g-effects:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng generate effect --group
g-feature:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng generate feature

#! Angular cli commands
gs:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng g s

gc:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng g c

run:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng serve --host $(call get_ip) --port 4200

build:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng build

rmn:
	rm -rf $(DIST_DIR)

i:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) npm install --force

v:
	@echo "Angular Version:$(call get_angular_version)"

test:
	@. $(HOME)/.nvm/nvm.sh && nvm use $(NODE_VERSION) && $(NG_CLI) ng test

lint:
	$(shell ./linting.sh)

rm-a-cache:
	@echo "After Remove the angular Cache Run Again the Server"
	$(shell rm -rf .angular/ )

#! Docker Cli Commands
dc-up:
	sudo docker-compose up --remove-orphans

dc-down:
	sudo docker-compose down

dc-remove-all:
	sudo docker system prune -a



#! Default target
.DEFAULT_GOAL := serve
