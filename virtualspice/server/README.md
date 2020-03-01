# VirtualSpice Server

This folder contains the files responsible for backend service.


## TODO

|                |DONE|
|----------------|-------------------------------|
|Write basic Flask API|`True`            |
|Define API routes|`False`              |
|Initialize MongoDB|`False`   |
|Create connections between Server and DB|`False`   |




## Setup the development environment in backend side:
```cmd
conda env create -f environment.yml
conda activate virtualspice
windows: set FLASK_APP=server.py
linux: export FLASK_APP=server.py
flask run
```

