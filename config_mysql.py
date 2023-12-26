import mysql.connector

class Config:

    __uri = "localhost"
    __username = "root"
    __password = "Sameer@1995"
    __database = "ProjectDatabase"

    def _connection():
        
        conn = mysql.connector.connect(
            host = Config.__uri,
            username = Config.__username,
            password = Config.__password,
            database = Config.__database
        )

        return conn