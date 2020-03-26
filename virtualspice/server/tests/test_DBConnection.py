import pytest
import DBConnection
from datetime import datetime

test_conn = DBConnection.DBConnection("test_virtualspiceapp", "spice", "SpiceAdmin","SpiceAdmin123")
test_conn.print_results(test_conn.find_all_items())


def check_if_database_is_not_empty():
    test_all_items = test_conn.get_count_of_all_items()
    return test_all_items > 0

def test_insert_single_element_status_code():
    test_conn.insert_single_item_to_db("Alma", datetime.now(),"sustainable food")

def test_insert_single_element_is_exist():
    test_food = test_conn.find_items_by_name("Alma")
    assert test_food is not None

def test_check_if_only_one_element_exist_in_db():
    test_number_of_elements = test_conn.get_count_of_all_items()
    assert test_number_of_elements == 1

def test_insert_single_element_is_exist():
    test_food = test_conn.find_items_by_name("Alma")
    assert test_food is not None

def test_if_database_not_empty():
    assert check_if_database_is_not_empty() == True
    
def test_remove_all_elements_from_db():
    test_conn.delete_all_items_from_db()
    test_number_of_elements = test_conn.get_count_of_all_items()
    assert test_number_of_elements == 0

def test_if_database_is_empty():
    assert check_if_database_is_not_empty() == False


#TODO: Add more tests