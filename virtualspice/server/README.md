# VirtualSpice Server

This folder contains the files responsible for backend service.

Website for the mongoDB cluster:
https://cloud.mongodb.com/v2/5e65209a210aa11167fd3333#clusters


## TODO

|                |DONE|
|----------------|-------------------------------|
|Write basic Flask API|`True`            |
|Define API routes|`True`              |
|Initialize MongoDB|`True`   |
|Create connections between Server and DB|`True`   |




## Setup the development environment in backend side:
```cmd
conda env create -f environment.yml
conda activate virtualspice
windows: set FLASK_APP=server.py
linux: export FLASK_APP=server.py
flask run
```


### Database module usage

Create a new DBConnection object
```python
my_conn = DBConnection("virtualspiceapp", "spice", "SpiceAdmin","SpiceAdmin123")
my_conn.print_results(my_conn.find_all_items())
```

Inserting one item to the collection
```python
def insert_single_item_to_db(name: str, exp_date: datetime, type: str, location: str = "Unknown"):
    collection.insert_one({
        "name": name,
        "exp_date": exp_date,
        "location": location,
        "type": type,
        "date_of_shopping": datetime.now()
    })

#EXAMPLE:
insert_single_item_to_db("Alma", datetime.now(),"sustainable food")
insert_single_item_to_db("Alma", datetime.now(),"sustainable food")
insert_single_item_to_db("Körte", datetime.now(),"sustainable food")
insert_single_item_to_db("Alma", datetime.now(),"sustainable food")
insert_single_item_to_db("Alma", datetime.now(),"sustainable food")
insert_single_item_to_db("Só", datetime.now(),"spices")
insert_single_item_to_db("Só", datetime.now(),"spices")
insert_single_item_to_db("Kóla", datetime.now(),"drinks")
```

Delete one item from collection
```python
def delete_single_item_from_db(ids):
    collection.delete_one({"_id": ObjectId(ids)})
    
#EXAMPLE:
delete_single_item_from_db("5e6535309ec401fa1db0f963")
```

Delete all items from collection
```python
def delete_all_items_from_db():
    collection.delete_many({})
    
#EXAMPLE:
delete_all_items_from_db()
```
Find all elements from collection
```python
def find_all_items():
    return collection.find()
    
#EXAMPLE:
find_all_items()
```
Find one item by name tag
```python
def find_items_by_name(name: str):
    return collection.find({"name": name})

#EXAMPLE:
print_results(find_items_by_name("Alma"))
```

Print all elements from the collection Obj
```python
def print_results(results):
    for result in results:
        print(result)

#EXAMPLE:
print_results(find_all_items())
```

Get the number of elements in the collection
```python
def get_count_of_all_items():
    return collection.find.count()

#EXAMPLE:
print(get_count_of_all_items())
```

Get the number of elements in the collection by name tag
```python
def get_count_of_items_by_name(name: str):
    return collection.find({"name": name}).count()

#EXAMPLE:
print(get_count_of_items_by_name("Alma"))
```
Get the number of elements in the collection by type tag
```python
def get_count_of_items_by_type(type: str):
    return collection.find({"type": type}).count()

#EXAMPLE:
print(get_count_of_items_by_type("drinks"))
```

