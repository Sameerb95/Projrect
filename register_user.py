from main import *
import re

class Register:

    def registerUser(self,Name,Email,Password):

            _conn = Main().getConnection()
            cux = _conn.cursor()

            add_user = ("insert into Users values (%s,%s,%s);")

            user = (Name,Email,Password)

            cux.execute(add_user,user)

            _conn.commit()
            cux.close()

            

    def getDetails(self):
        
        Flag = True
        while Flag:

            Name = input("Please input the Name: ")
            Email = input("Please input the email: ")
            Password = input("Please input the Password: ")
            
            if re. match(r"^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-z]{1,3}$", Email):
               
                
                    self.registerUser(Name,Email,Password)
            
            else:
                 print("Please try again with valid Email")
                 continue

            ask = input("Do you wish to Continue Y/N").lower()

            if ask == 'y':
                 continue
            else:
                 break


# if __name__ == '__main__':

#     reg = Register()

#     reg.getDetails() 


                 
            