from main import *

class Login:
    
    _Session = {
        'name' :"",
        'email':"",
    }


    def userCheck(self,cursor,email,password):

        cursor.execute("SELECT Count(*) FROM Users where Email = %s and Password = %s",(email,password))

        count = cursor.fetchone()

        print(count[0])

        if count[0] == 0:
            return False

        return True

        

    def loginUser(self,email,password):
        conn = Main().getConnection()
        flag = False

        if conn and conn.is_connected():

            with conn.cursor() as cursor:

                if self.userCheck(cursor,email,password): 

                    cursor.execute("SELECT * FROM Users where Email = %s and Password = %s",(email,password))

                    rows = cursor.fetchone()

                    self._Session['name'] = rows[0]
                    self._Session['email'] = rows[1] 
                    flag = True

            conn.close()       

        return flag        



# if __name__ == '__main__':

#     log = Login()
#     Email = input("Enter email: ")
#     Pass = input("Enter Password: ")
#     log.getUser(Email,Pass)