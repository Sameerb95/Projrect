import mysql.connector
from config_mysql import Config as Con;

class Main:

    _conn = object
    
    def __init__(self):
        try:
            con = Con._connection()
            print(con)
        except:
            print(Exception)
        
        Main._conn = con

    def getConnection(self):

        return Main._conn
    

 

    