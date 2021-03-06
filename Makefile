help-default help:
	@echo "======================================================================"
	@echo " OPÇÕES DO MAKEFILE"
	@echo "======================================================================"
	@echo "    	 open_vscode: Executa o dump no banco de dados"
	@echo " iniciar_servicos: Executa o restore no banco de dados"
	@echo "  deploy: Executa o restore em um container do docker chamado mysql-server"
	@echo ""

open_vscode:
	#!/bin/bash 
	sudo code . --user-data-dir

start:
	sudo concurrently "cd painel && sudo yarn dev" "cd api && sudo yarn dev" "cd stilotechstore-com-br && sudo yarn dev"

deploy:
	cd painel && ./deploy.sh
	cd stilotechstore-com-br && ./deploy.sh
	cd api && ./deploy.sh